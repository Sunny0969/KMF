import type { Metadata } from "next";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminShell from "@/components/admin/AdminShell";
import BlogEditor from "@/components/admin/BlogEditor";
import { isAdminSession } from "@/lib/admin-session";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "New blog | KMF Admin",
  robots: { index: false, follow: false },
};

export default async function NewBlogPage() {
  if (!(await isAdminSession())) return <AdminLogin />;

  return (
    <AdminShell title="New blog">
      <BlogEditor />
    </AdminShell>
  );
}
