"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logoutAdmin } from "@/app/admin/actions";

export default function AdminShell({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const inquiriesActive = pathname === "/admin";
  const blogsActive = pathname.startsWith("/admin/blogs");

  return (
    <div className="min-h-screen bg-[#f3f5f7] text-slate-800">
      <header className="bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#e4c36a]">KMF Admin</p>
            <h1 className="text-xl sm:text-2xl font-black">{title}</h1>
            <nav className="mt-3 flex items-center gap-2 text-sm">
              <Link
                href="/admin"
                className={`px-3 py-1.5 rounded-lg font-semibold ${inquiriesActive ? "bg-white text-[#0b1c2d]" : "border border-white/20 hover:bg-white/10"}`}
              >
                Inquiries
              </Link>
              <Link
                href="/admin/blogs"
                className={`px-3 py-1.5 rounded-lg font-semibold ${blogsActive ? "bg-white text-[#0b1c2d]" : "border border-white/20 hover:bg-white/10"}`}
              >
                Blogs
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {actions}
            <form action={logoutAdmin}>
              <button type="submit" className="px-3 py-2 rounded-lg bg-[#c59b27] text-sm font-bold text-white hover:bg-[#b0881f]">
                Log out
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">{children}</main>
    </div>
  );
}
