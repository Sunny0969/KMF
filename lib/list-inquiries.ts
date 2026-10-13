import { createSupabaseAdminClient } from "@/lib/supabase";
import type { InquiryRecord } from "@/lib/inquiry";

export type InquiryListResult = {
  inquiries: InquiryRecord[];
  error: string | null;
};

export async function listInquiries(): Promise<InquiryListResult> {
  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return {
      inquiries: [],
      error:
        "Add SUPABASE_SERVICE_ROLE_KEY to .env.local. The public anon key can save forms, but only the service role key can read them in this panel.",
    };
  }

  const { data, error } = await supabase
    .from("inquiries")
    .select("id, created_at, source, full_name, email, phone, details")
    .order("created_at", { ascending: false })
    .limit(500);

  if (error) {
    console.error("inquiry list failed", error.code);
    return {
      inquiries: [],
      error: "Inquiries could not be loaded. Confirm the inquiries table exists in Supabase.",
    };
  }

  return {
    inquiries: (data ?? []).map((row) => ({
      id: String(row.id),
      created_at: String(row.created_at),
      source: String(row.source),
      full_name: String(row.full_name),
      email: String(row.email),
      phone: row.phone ? String(row.phone) : null,
      details:
        row.details && typeof row.details === "object" && !Array.isArray(row.details)
          ? (row.details as Record<string, string | boolean>)
          : {},
    })),
    error: null,
  };
}
