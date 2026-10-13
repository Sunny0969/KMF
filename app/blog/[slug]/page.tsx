import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogFaqs from "@/components/blog/BlogFaqs";
import { CATEGORY_LABELS } from "@/lib/blog";
import { getPublishedBlog } from "@/lib/blogs";

export const dynamic = "force-dynamic";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) return { title: "Article not found" };

  const title = blog.meta_title || blog.title;
  const description = blog.meta_description || blog.title;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: blog.cover_image_url ? [blog.cover_image_url] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) notFound();

  return (
    <article className="bg-white text-slate-800">
      <header className="bg-[#0b1c2d] text-white py-16">
        <div className="max-w-3xl mx-auto px-4">
          <Link href={`/blog?category=${blog.category}`} className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4c36a]">
            {CATEGORY_LABELS[blog.category]} insights
          </Link>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">{blog.title}</h1>
          <p className="mt-4 text-slate-300">{dateFormat.format(new Date(blog.created_at))}</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {blog.cover_image_url ? (
          <img src={blog.cover_image_url} alt="" className="w-full rounded-2xl mb-10 max-h-[460px] object-cover" />
        ) : null}
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content_html }} />
        <BlogFaqs faqs={blog.faqs} />
      </div>
    </article>
  );
}
