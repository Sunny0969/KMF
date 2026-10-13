import sanitizeHtml from "sanitize-html";
import { isAdminSession } from "@/lib/admin-session";
import {
  isBlogCategory,
  slugifyTitle,
  type BlogCategory,
  type BlogFaq,
  type BlogRecord,
} from "@/lib/blog";
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
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: { img: ["https"] },
    transformTags: {
      a: (tagName, attribs) => {
        const href = attribs.href || "";
        const external = /^https?:\/\//i.test(href);
        return {
          tagName,
          attribs: {
            href,
            ...(external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
          },
        };
      },
    },
  });
}

function mapFaqs(value: unknown): BlogFaq[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];
    const question = "question" in item ? String(item.question ?? "").trim() : "";
    const answer = "answer" in item ? String(item.answer ?? "").trim() : "";
    if (!question || !answer) return [];
    return [{ question, answer }];
  });
}

function mapBlog(row: Record<string, unknown>): BlogRecord | null {
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

export async function listPublishedBlogs(category?: BlogCategory) {
  const supabase = createSupabaseServerClient();
  if (!supabase) return [];

  let query = supabase
    .from("blogs")
    .select(BLOG_COLUMNS)
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (category) query = query.eq("category", category);

  const { data, error } = await query;
  if (error || !data) return [];
  return data.flatMap((row) => {
    const blog = mapBlog(row);
    return blog ? [blog] : [];
  });
}

export async function getPublishedBlog(slug: string) {
  const supabase = createSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blogs")
    .select(BLOG_COLUMNS)
    .eq("slug", slug)
    .eq("published", true)
    .maybeSingle();

  if (error || !data) return null;
  return mapBlog(data);
}

export async function listAdminBlogs() {
  if (!(await isAdminSession())) return [];
  const supabase = createSupabaseAdminClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blogs")
    .select(BLOG_COLUMNS)
    .order("updated_at", { ascending: false });

  if (error || !data) return [];
  return data.flatMap((row) => {
    const blog = mapBlog(row);
    return blog ? [blog] : [];
  });
}

export async function getAdminBlog(id: string) {
  if (!(await isAdminSession())) return null;
  const supabase = createSupabaseAdminClient();
  if (!supabase) return null;

  const { data, error } = await supabase.from("blogs").select(BLOG_COLUMNS).eq("id", id).maybeSingle();
  if (error || !data) return null;
  return mapBlog(data);
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

async function uniqueSlug(supabase: NonNullable<ReturnType<typeof createSupabaseAdminClient>>, slug: string, id?: string) {
  const base = slugifyTitle(slug);
  let candidate = base;
  for (let attempt = 2; attempt < 50; attempt += 1) {
    const { data } = await supabase.from("blogs").select("id").eq("slug", candidate).maybeSingle();
    if (!data || data.id === id) return candidate;
    candidate = `${base.slice(0, 74)}-${attempt}`;
  }
  return `${base.slice(0, 70)}-${Date.now().toString(36)}`;
}

export async function saveBlogRecord(input: BlogInput) {
  if (!(await isAdminSession())) return { ok: false as const, error: "You need to sign in again." };

  const supabase = createSupabaseAdminClient();
  if (!supabase) return { ok: false as const, error: "Database is not configured." };

  const title = input.title.trim();
  const metaTitle = input.metaTitle.trim().slice(0, 160);
  const metaDescription = input.metaDescription.trim().slice(0, 320);
  if (title.length < 2 || title.length > 200) {
    return { ok: false as const, error: "The H1 title needs to be between 2 and 200 characters." };
  }
  if (!isBlogCategory(input.category)) {
    return { ok: false as const, error: "Choose seller or buyer." };
  }

  const slug = await uniqueSlug(supabase, input.slug || title, input.id);
  const payload = {
    title,
    meta_title: metaTitle,
    meta_description: metaDescription,
    slug,
    category: input.category,
    content_html: sanitizeBlogHtml(input.contentHtml),
    faqs: cleanFaqs(input.faqs),
    cover_image_url: input.coverImageUrl.trim() || null,
    published: input.published,
    updated_at: new Date().toISOString(),
  };

  if (input.id) {
    const { error } = await supabase.from("blogs").update(payload).eq("id", input.id);
    if (error) {
      console.error("blog update failed", error.code);
      return { ok: false as const, error: "The blog could not be saved." };
    }
    return { ok: true as const, id: input.id };
  }

  const { data, error } = await supabase.from("blogs").insert(payload).select("id").single();
  if (error || !data) {
    console.error("blog insert failed", error?.code);
    return { ok: false as const, error: "The blog could not be saved. Confirm the blogs table exists." };
  }
  return { ok: true as const, id: String(data.id) };
}

export async function deleteBlogRecord(id: string) {
  if (!(await isAdminSession())) return { ok: false as const, error: "You need to sign in again." };
  const supabase = createSupabaseAdminClient();
  if (!supabase) return { ok: false as const, error: "Database is not configured." };

  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) return { ok: false as const, error: "The blog could not be deleted." };
  return { ok: true as const };
}
