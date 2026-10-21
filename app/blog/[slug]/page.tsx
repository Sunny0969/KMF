import { notFound, redirect } from "next/navigation";
import { getPublishedBlog } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export default async function BlogArticleRedirectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) notFound();

  if (blog.category === "seller") {
    redirect(`/florida-business-seller-resources/${slug}`);
  }
  redirect(`/florida-business-buyer-resources/${slug}`);
}
