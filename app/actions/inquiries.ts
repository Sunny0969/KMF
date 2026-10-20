"use server";

import { createSupabaseServerClient } from "@/lib/supabase";
import { saveLocalInquiry } from "@/lib/local-storage";

const SOURCES = [
  "home",
  "contact-us",
  "sell-a-franchise",
  "profitable-business",
  "buyer-resources",
] as const;

export type InquirySource = (typeof SOURCES)[number];

export type InquiryInput = {
  source: InquirySource;
  fullName: string;
  email: string;
  phone?: string;
  details?: Record<string, string | boolean>;
};

export type InquiryResult = { ok: true } | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const fullName = input.fullName?.trim() ?? "";
  const email = input.email?.trim().toLowerCase() ?? "";
  const phone = input.phone?.trim() || null;

  if (!SOURCES.includes(input.source)) {
    return { ok: false, error: "This form could not be submitted." };
  }
  if (fullName.length < 2 || fullName.length > 200) {
    return { ok: false, error: "Please enter your full name." };
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 320) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (phone && phone.length > 40) {
    return { ok: false, error: "Please enter a valid phone number." };
  }

  const details: Record<string, string | boolean> = {};
  for (const [key, value] of Object.entries(input.details ?? {})) {
    if (key === "honeypot" || key === "fullName" || key === "email" || key === "phone") {
      continue;
    }
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed) details[key] = trimmed.slice(0, 2000);
    } else if (typeof value === "boolean") {
      details[key] = value;
    }
  }

  let savedToRemote = false;
  const supabase = createSupabaseServerClient();
  if (supabase) {
    try {
      const { error } = await supabase.from("inquiries").insert({
        source: input.source,
        full_name: fullName,
        email,
        phone,
        details,
      });

      if (!error) {
        savedToRemote = true;
      } else {
        console.warn("Supabase inquiry insert skipped/failed, using local storage:", error.message || error.code);
      }
    } catch (e: any) {
      console.warn("Supabase inquiry network error, using local storage:", e?.message);
    }
  }

  // Always persist locally if remote database is not reachable or tables don't exist yet
  try {
    await saveLocalInquiry({
      id: crypto.randomUUID(),
      created_at: new Date().toISOString(),
      source: input.source,
      full_name: fullName,
      email,
      phone,
      details,
    });
  } catch (localError: any) {
    if (!savedToRemote) {
      console.error("Local inquiry save failed:", localError?.message);
      return {
        ok: false,
        error: "We could not save your inquiry. Please try again in a moment.",
      };
    }
  }

  return { ok: true };
}
