"use server";

import { createSupabaseServerClient } from "@/lib/supabase";

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

  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return {
      ok: false,
      error: "The inquiry form is not connected to the database yet.",
    };
  }

  const { error } = await supabase.from("inquiries").insert({
    source: input.source,
    full_name: fullName,
    email,
    phone,
    details,
  });

  if (error) {
    console.error("inquiry insert failed", error.code);
    return {
      ok: false,
      error: "We could not save your inquiry. Please try again in a moment.",
    };
  }

  return { ok: true };
}
