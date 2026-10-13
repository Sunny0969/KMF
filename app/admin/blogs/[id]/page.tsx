import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminShell from "@/components/admin/AdminShell";
import BlogEditor from "@/components/admin/BlogEditor";
import { isAdminSession } from "@/lib/admin-session";
import { getAdminBlog } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Edit blog | KMF Admin",
  robots: { index: false, follow: false },
};

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminSession())) return <AdminLogin />;
  const { id } = await params;
  const blog = await getAdminBlog(id);
  if (!blog) notFound();

  return (
    <AdminShell title="Edit blog">
      <BlogEditor blog={blog} />
    </AdminShell>
  );
}
