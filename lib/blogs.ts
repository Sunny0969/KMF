import sanitizeHtml from "sanitize-html";
import { isAdminSession } from "@/lib/admin-session";
import {
  isBlogCategory,
  slugifyTitle,
  type BlogCategory,
  type BlogFaq,
  type BlogRecord,
} from "@/lib/blog";
import {
  deleteLocalBlog,
  getLocalBlogs,
  saveLocalBlog,
} from "@/lib/local-storage";
import { createSupabaseAdminClient, createSupabaseServerClient } from "@/lib/supabase";

const BLOG_COLUMNS =
  "id, created_at, updated_at, slug, title, meta_title, meta_description, category, content_html, faqs, cover_image_url, published";

export type BlogInput = {
  id?: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  category: BlogCategory;
  contentHtml: string;
  faqs: BlogFaq[];
  coverImageUrl: string;
  published: boolean;
};

export function sanitizeBlogHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      "img",
      "h2",
      "h3",
      "h4",
      "span",
      "u",
      "s",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto", "data"],
    allowedSchemesByTag: { img: ["https", "http", "data"] },
    transformTags: {
      a: (tagName, attribs) => {
        const next = { ...attribs };
        const href = next.href ?? "";
        if (/^https?:\/\//i.test(href) && !href.includes("kmfbusinessadvisors.com")) {
          next.rel = "noopener noreferrer nofollow";
          next.target = "_blank";
        }
        return { tagName, attribs: next };
      },
    },
  });
}

function mapFaqs(raw: unknown): BlogFaq[] {
  if (!Array.isArray(raw)) return [];
  return raw.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const question = String(("question" in item ? item.question : "") ?? "").trim();
    const answer = String(("answer" in item ? item.answer : "") ?? "").trim();
    if (!question || !answer) return [];
    return [{ question, answer }];
  });
}

function mapBlog(row: Record<string, unknown>): BlogRecord | null {
  if (!row || typeof row !== "object") return null;
  const category = String(row.category ?? "");
  if (!isBlogCategory(category)) return null;

  return {
    id: String(row.id),
    created_at: String(row.created_at),
    updated_at: String(row.updated_at),
    slug: String(row.slug),
    title: String(row.title),
    meta_title: String(row.meta_title ?? ""),
    meta_description: String(row.meta_description ?? ""),
    category,
    content_html: sanitizeBlogHtml(String(row.content_html ?? "")),
    faqs: mapFaqs(row.faqs),
    cover_image_url: row.cover_image_url ? String(row.cover_image_url) : null,
    published: Boolean(row.published),
  };
}

export async function listPublishedBlogs(category?: BlogCategory): Promise<BlogRecord[]> {
  const localBlogs = (await getLocalBlogs()).filter(
    (b) => b.published && (!category || b.category === category),
  );

  const supabase = createSupabaseServerClient();
  if (!supabase) return localBlogs;

  try {
    let query = supabase
      .from("blogs")
      .select(BLOG_COLUMNS)
      .eq("published", true)
      .order("created_at", { ascending: false });

    if (category) query = query.eq("category", category);

    const { data, error } = await query;
    if (error || !data || data.length === 0) return localBlogs;

    const remote = data.flatMap((row) => {
      const blog = mapBlog(row);
      return blog ? [blog] : [];
    });
    return remote.length > 0 ? remote : localBlogs;
  } catch {
    return localBlogs;
  }
}

export async function getPublishedBlog(slug: string): Promise<BlogRecord | null> {
  const localMatch = (await getLocalBlogs()).find((b) => b.slug === slug && b.published) ?? null;

  const supabase = createSupabaseServerClient();
  if (!supabase) return localMatch;

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(BLOG_COLUMNS)
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle();

    if (error || !data) return localMatch;
    return mapBlog(data) ?? localMatch;
  } catch {
    return localMatch;
  }
}

export async function listAdminBlogs(): Promise<BlogRecord[]> {
  if (!(await isAdminSession())) return [];
  const localBlogs = await getLocalBlogs();

  const supabase = createSupabaseAdminClient();
  if (!supabase) return localBlogs;

  try {
    const { data, error } = await supabase
      .from("blogs")
      .select(BLOG_COLUMNS)
      .order("updated_at", { ascending: false });

    if (error || !data || data.length === 0) return localBlogs;

    const remote = data.flatMap((row) => {
      const blog = mapBlog(row);
      return blog ? [blog] : [];
    });

    // Merge remote with local
    const seen = new Set<string>();
    const merged: BlogRecord[] = [];
    for (const item of [...remote, ...localBlogs]) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        merged.push(item);
      }
    }
    return merged;
  } catch {
    return localBlogs;
  }
}

export async function getAdminBlog(id: string): Promise<BlogRecord | null> {
  if (!(await isAdminSession())) return null;
  const localMatch = (await getLocalBlogs()).find((b) => b.id === id) ?? null;

  const supabase = createSupabaseAdminClient();
  if (!supabase) return localMatch;

  try {
    const { data, error } = await supabase.from("blogs").select(BLOG_COLUMNS).eq("id", id).maybeSingle();
    if (error || !data) return localMatch;
    return mapBlog(data) ?? localMatch;
  } catch {
    return localMatch;
  }
}

function cleanFaqs(faqs: BlogFaq[]) {
  return faqs
    .map((faq) => ({
      question: faq.question.trim().slice(0, 300),
      answer: faq.answer.trim().slice(0, 2000),
    }))
    .filter((faq) => faq.question && faq.answer)
    .slice(0, 20);
}

async function uniqueSlug(
  supabase: NonNullable<ReturnType<typeof createSupabaseAdminClient>> | null,
  slug: string,
  id?: string,
) {
  const base = slugifyTitle(slug);
  const localBlogs = await getLocalBlogs();

  let candidate = base;
  for (let attempt = 2; attempt < 50; attempt += 1) {
    let exists = localBlogs.some((b) => b.slug === candidate && b.id !== id);
    if (!exists && supabase) {
      try {
        const { data } = await supabase.from("blogs").select("id").eq("slug", candidate).maybeSingle();
        if (data && data.id !== id) exists = true;
      } catch {
        // Ignore supabase error
      }
    }
    if (!exists) return candidate;
    candidate = `${base.slice(0, 74)}-${attempt}`;
  }
  return `${base.slice(0, 70)}-${Date.now().toString(36)}`;
}

export async function saveBlogRecord(input: BlogInput) {
  if (!(await isAdminSession())) return { ok: false as const, error: "You need to sign in again." };

  const title = input.title.trim();
  const metaTitle = input.metaTitle.trim().slice(0, 160);
  const metaDescription = input.metaDescription.trim().slice(0, 320);
  if (title.length < 2 || title.length > 200) {
    return { ok: false as const, error: "The H1 title needs to be between 2 and 200 characters." };
  }
  if (!isBlogCategory(input.category)) {
    return { ok: false as const, error: "Choose seller or buyer." };
  }

  const supabase = createSupabaseAdminClient();
  const slug = await uniqueSlug(supabase, input.slug || title, input.id);
  const blogId = input.id || crypto.randomUUID();
  const now = new Date().toISOString();

  const blogRecord: BlogRecord = {
    id: blogId,
    created_at: now,
    updated_at: now,
    title,
    meta_title: metaTitle,
    meta_description: metaDescription,
    slug,
    category: input.category,
    content_html: sanitizeBlogHtml(input.contentHtml),
    faqs: cleanFaqs(input.faqs),
    cover_image_url: input.coverImageUrl.trim() || null,
    published: input.published,
  };

  // Always save locally so data is never lost
  await saveLocalBlog(blogRecord);

  // Attempt to save to Supabase if configured
  if (supabase) {
    try {
      const payload = {
        title: blogRecord.title,
        meta_title: blogRecord.meta_title,
        meta_description: blogRecord.meta_description,
        slug: blogRecord.slug,
        category: blogRecord.category,
        content_html: blogRecord.content_html,
        faqs: blogRecord.faqs,
        cover_image_url: blogRecord.cover_image_url,
        published: blogRecord.published,
        updated_at: blogRecord.updated_at,
      };

      if (input.id) {
        await supabase.from("blogs").update(payload).eq("id", input.id);
      } else {
        await supabase.from("blogs").insert({ ...payload, id: blogId });
      }
    } catch (e: any) {
      console.warn("Supabase blog sync skipped/failed:", e?.message);
    }
  }

  return { ok: true as const, id: blogId };
}

export async function deleteBlogRecord(id: string) {
  if (!(await isAdminSession())) return { ok: false as const, error: "You need to sign in again." };

  await deleteLocalBlog(id);

  const supabase = createSupabaseAdminClient();
  if (supabase) {
    try {
      await supabase.from("blogs").delete().eq("id", id);
    } catch {
      // Non-fatal
    }
  }

  return { ok: true as const };
}
