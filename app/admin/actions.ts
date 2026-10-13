"use server";

import { redirect } from "next/navigation";
import { clearAdminSession, passwordMatches, setAdminSession } from "@/lib/admin-session";

export type LoginState = { error: string } | null;

export async function loginAdmin(_prev: LoginState, formData: FormData): Promise<LoginState> {
  if (!process.env.ADMIN_PASSWORD) {
    return { error: "Admin password is not configured." };
  }

  const password = String(formData.get("password") ?? "");
  if (!passwordMatches(password)) {
    return { error: "Incorrect password." };
  }

  await setAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin");
}
