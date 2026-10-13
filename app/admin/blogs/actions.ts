"use server";

import { redirect } from "next/navigation";
import { isBlogCategory, type BlogFaq } from "@/lib/blog";
import { deleteBlogRecord, saveBlogRecord } from "@/lib/blogs";

export type BlogSaveState = { error: string } | { saved: true } | null;

export async function saveBlog(_prev: BlogSaveState, formData: FormData): Promise<BlogSaveState> {
  const category = String(formData.get("category") ?? "");
  if (!isBlogCategory(category)) return { error: "Choose seller or buyer." };

  let faqs: BlogFaq[] = [];
  try {
    const parsed = JSON.parse(String(formData.get("faqs") ?? "[]"));
    if (Array.isArray(parsed)) {
      faqs = parsed.flatMap((item) => {
        if (!item || typeof item !== "object") return [];
        return [
          {
            question: String(("question" in item ? item.question : "") ?? ""),
            answer: String(("answer" in item ? item.answer : "") ?? ""),
          },
        ];
      });
    }
  } catch {
    return { error: "The FAQ list could not be read." };
  }

  const id = String(formData.get("id") ?? "").trim();
  const result = await saveBlogRecord({
    id: id || undefined,
    title: String(formData.get("title") ?? ""),
    metaTitle: String(formData.get("metaTitle") ?? ""),
    metaDescription: String(formData.get("metaDescription") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    category,
    contentHtml: String(formData.get("contentHtml") ?? ""),
    faqs,
    coverImageUrl: String(formData.get("coverImageUrl") ?? ""),
    published: formData.get("published") === "on",
  });

  if (!result.ok) return { error: result.error };
  if (!id) redirect(`/admin/blogs/${result.id}`);
  return { saved: true };
}

export async function deleteBlog(formData: FormData) {
  const id = String(formData.get("id") ?? "");
  const result = await deleteBlogRecord(id);
  if (!result.ok) return;
  redirect("/admin/blogs");
}
