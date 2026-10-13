export const BLOG_CATEGORIES = ["seller", "buyer"] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogRecord = {
  id: string;
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  category: BlogCategory;
  content_html: string;
  faqs: BlogFaq[];
  cover_image_url: string | null;
  published: boolean;
};

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  seller: "Seller",
  buyer: "Buyer",
};

export function isBlogCategory(value: string): value is BlogCategory {
  return value === "seller" || value === "buyer";
}

export function slugifyTitle(value: string) {
  const slug = value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || "blog";
}

export function excerptFromHtml(html: string, length = 160) {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}…`;
}
