import Link from "next/link";
import type { BlogRecord } from "@/lib/blog";
import { excerptFromHtml } from "@/lib/blog";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default function ResourceBlogsSection({
  blogs,
  category,
}: {
  blogs: BlogRecord[];
  category: "buyer" | "seller";
}) {
  if (!blogs || blogs.length === 0) return null;

  const basePath =
    category === "seller"
      ? "/florida-business-seller-resources"
      : "/florida-business-buyer-resources";

  const badgeText =
    category === "seller" ? "Seller Knowledge & Insights" : "Buyer Knowledge & Insights";
  const headingText =
    category === "seller" ? "Articles & Guides for Business Sellers" : "Articles & Guides for Business Buyers";
  const subText =
    category === "seller"
      ? "Expert guidance on business valuation, confidential listing strategies, and maximizing exit value."
      : "In-depth insights on business acquisition, SBA financing, and due diligence in Florida.";

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#c59b27]">
            {badgeText}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {headingText}
          </h2>
          <p className="text-slate-600 text-base max-w-2xl mx-auto">{subText}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <Link href={`${basePath}/${blog.slug}`} className="block relative overflow-hidden">
                {blog.cover_image_url ? (
                  <img
                    src={blog.cover_image_url}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-44 bg-gradient-to-br from-[#0b1c2d] to-[#163554] flex items-center justify-center p-6">
                    <span className="text-amber-400 font-bold text-xs uppercase tracking-widest border border-amber-400/30 px-3 py-1 rounded">
                      {category === "seller" ? "Seller Guide" : "Buyer Guide"}
                    </span>
                  </div>
                )}
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2.5">
                    <span className="text-[#c59b27] font-bold uppercase tracking-wider">
                      {category === "seller" ? "Seller" : "Buyer"}
                    </span>
                    <span>•</span>
                    <time dateTime={blog.created_at}>{dateFormat.format(new Date(blog.created_at))}</time>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#c59b27] transition-colors leading-snug">
                    <Link href={`${basePath}/${blog.slug}`}>{blog.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {excerptFromHtml(blog.content_html, 140)}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`${basePath}/${blog.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c59b27] group-hover:text-[#b0881f] transition-colors"
                  >
                    <span>Read Article</span>
                    <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
