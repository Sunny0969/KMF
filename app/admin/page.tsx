import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminLogin from "@/components/admin/AdminLogin";
import { isAdminSession } from "@/lib/admin-session";
import { listInquiries } from "@/lib/list-inquiries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Inquiries | KMF Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const signedIn = await isAdminSession();
  if (!signedIn) return <AdminLogin />;

  const { inquiries, error } = await listInquiries();
  return <AdminDashboard inquiries={inquiries} error={error} />;
}
