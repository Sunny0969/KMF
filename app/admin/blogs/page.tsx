import type { Metadata } from "next";
import Link from "next/link";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminShell from "@/components/admin/AdminShell";
import { isAdminSession } from "@/lib/admin-session";
import { CATEGORY_LABELS } from "@/lib/blog";
import { listAdminBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blogs | KMF Admin",
  robots: { index: false, follow: false },
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "short",
  day: "numeric",
  year: "numeric",
});

export default async function AdminBlogsPage() {
  if (!(await isAdminSession())) return <AdminLogin />;
  const blogs = await listAdminBlogs();

  return (
    <AdminShell
      title="Blogs"
      actions={
        <Link href="/admin/blogs/new" className="px-3 py-2 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/10">
          New blog
        </Link>
      }
    >
      {blogs.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-8">
          <p className="text-slate-600">No blogs yet. Write the first seller or buyer article.</p>
          <Link href="/admin/blogs/new" className="inline-block mt-4 px-4 py-2 rounded-lg bg-[#c59b27] text-white text-sm font-bold">
            New blog
          </Link>
        </div>
      ) : (
        <ul className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100">
          {blogs.map((blog) => {
            const resourcePath =
              blog.category === "seller"
                ? "/florida-business-seller-resources"
                : "/florida-business-buyer-resources";
            const liveUrl = `${resourcePath}/${blog.slug}`;

            return (
              <li key={blog.id} className="flex items-center justify-between hover:bg-slate-50 transition-colors">
                <Link href={`/admin/blogs/${blog.id}`} className="flex-1 flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4 min-w-0">
                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-[#0b1c2d] truncate">{blog.title}</p>
                    <p className="text-sm text-slate-500 truncate">{liveUrl}</p>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[#8a6d12] bg-amber-100 px-2.5 py-1 rounded w-fit">
                    {CATEGORY_LABELS[blog.category]}
                  </span>
                  <span className={`text-xs font-bold uppercase ${blog.published ? "text-emerald-700" : "text-slate-400"}`}>
                    {blog.published ? "Published" : "Draft"}
                  </span>
                  <span className="text-xs text-slate-400 shrink-0">{dateFormat.format(new Date(blog.updated_at))}</span>
                </Link>
                {blog.published ? (
                  <div className="pr-5 shrink-0">
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-xs font-bold text-[#c59b27] hover:bg-amber-50 rounded-lg border border-amber-200 transition-colors inline-flex items-center gap-1"
                      title="View live article on website"
                    >
                      <span>View</span>
                      <span>↗</span>
                    </a>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
    </AdminShell>
  );
}
