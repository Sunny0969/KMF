import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import BlogFaqs from "@/components/blog/BlogFaqs";
import { getPublishedBlog } from "@/lib/blogs";

export const dynamic = "force-dynamic";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) return { title: "Article Not Found | KMF" };

  const title = blog.meta_title || `${blog.title} | Florida Buyer Resources`;
  const description = blog.meta_description || blog.title;
  const canonicalUrl = `https://kmfbusinessadvisor.com/florida-business-buyer-resources/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: blog.cover_image_url ? [blog.cover_image_url] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: blog.cover_image_url ? [blog.cover_image_url] : undefined,
    },
  };
}

export default async function BuyerResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getPublishedBlog(slug);
  if (!blog) notFound();

  // If a seller blog is requested under buyer resources, redirect to seller resources
  if (blog.category === "seller") {
    redirect(`/florida-business-seller-resources/${slug}`);
  }

  return (
    <div className="bg-white text-slate-800">
      <header className="bg-[#0b1c2d] text-white py-14 sm:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link
            href="/florida-business-buyer-resources"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e4c36a] hover:text-white transition-colors mb-6"
          >
            <span>&larr;</span>
            <span>All Buyer Resources & Guides</span>
          </Link>
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold tracking-wider rounded font-mono uppercase">
              Buyer Guide
            </span>
            <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight text-white">
              {blog.title}
            </h1>
            <p className="text-sm text-slate-400 pt-2">
              Published on {dateFormat.format(new Date(blog.created_at))} • KMF Business Advisors
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {blog.cover_image_url ? (
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <img
              src={blog.cover_image_url}
              alt={blog.title}
              className="w-full max-h-[480px] object-cover"
            />
          </div>
        ) : null}

        <article className="blog-content leading-relaxed text-slate-800">
          <div dangerouslySetInnerHTML={{ __html: blog.content_html }} />
        </article>

        {blog.faqs && blog.faqs.length > 0 ? (
          <div className="mt-14 pt-10 border-t border-slate-200">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Frequently Asked Questions</h2>
            <BlogFaqs faqs={blog.faqs} />
          </div>
        ) : null}

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#0b1c2d] text-white text-center space-y-4 shadow-xl">
          <span className="text-xs font-bold tracking-widest text-[#e4c36a] uppercase">
            Ready to Take the Next Step?
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Register as a Verified Buyer for Exclusive Deal Flow
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Gain priority access to confidential Florida business listings and acquisition opportunities before they hit public marketplaces.
          </p>
          <div className="pt-3">
            <Link
              href="/florida-business-buyer-resources#buyer-registration"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base transition-all hover:scale-105 shadow-md"
            >
              <span>Access Buyer Registration</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
