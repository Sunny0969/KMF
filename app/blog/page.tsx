import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LABELS, excerptFromHtml, isBlogCategory, type BlogCategory } from "@/lib/blog";
import { listPublishedBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Florida Business Buyer & Seller Insights | KMF",
  description:
    "Practical articles from KMF Business Advisors for Florida business sellers and buyers, including valuation, confidential sales, and acquisitions.",
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: rawCategory } = await searchParams;
  const category = rawCategory && isBlogCategory(rawCategory) ? rawCategory : undefined;
  const blogs = await listPublishedBlogs(category);

  return (
    <div className="bg-white text-slate-800">
      <section className="bg-[#0b1c2d] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#e4c36a]">KMF Insights</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-black max-w-3xl">Articles for Florida sellers and buyers</h1>
          <p className="mt-4 max-w-2xl text-slate-300">
            Confidential sale preparation, valuation, and acquisition guidance from KMF Business Advisors.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Filter href="/blog" active={!category} label="All" />
            <Filter href="/blog?category=seller" active={category === "seller"} label="Seller" />
            <Filter href="/blog?category=buyer" active={category === "buyer"} label="Buyer" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        {blogs.length === 0 ? (
          <p className="text-slate-500">No published articles in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <article key={blog.id} className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                {blog.cover_image_url ? (
                  <img src={blog.cover_image_url} alt="" className="w-full h-52 object-cover" />
                ) : (
                  <div className="h-24 bg-[#0b1c2d]" />
                )}
                <div className="p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-[#8a6d12]">
                    {CATEGORY_LABELS[blog.category as BlogCategory]} · {dateFormat.format(new Date(blog.created_at))}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-[#0b1c2d]">
                    <Link href={`/blog/${blog.slug}`} className="hover:text-[#c59b27]">
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{excerptFromHtml(blog.content_html)}</p>
                  <Link href={`/blog/${blog.slug}`} className="inline-block mt-4 text-sm font-bold text-[#c59b27]">
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Filter({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-full text-sm font-bold ${active ? "bg-[#c59b27] text-white" : "bg-white/10 text-white hover:bg-white/20"}`}
    >
      {label}
    </Link>
  );
}
