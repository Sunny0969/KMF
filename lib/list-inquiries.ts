import { createSupabaseAdminClient } from "@/lib/supabase";
import { getLocalInquiries } from "@/lib/local-storage";
import type { InquiryRecord } from "@/lib/inquiry";

export type InquiryListResult = {
  inquiries: InquiryRecord[];
  error: string | null;
};

export async function listInquiries(): Promise<InquiryListResult> {
  const localList = await getLocalInquiries();

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return {
      inquiries: localList,
      error: null,
    };
  }

  try {
    const { data, error } = await supabase
      .from("inquiries")
      .select("id, created_at, source, full_name, email, phone, details")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.warn("Supabase inquiries query skipped/failed, using local storage:", error.message || error.code);
      return {
        inquiries: localList,
        error: null,
      };
    }

    const remoteList: InquiryRecord[] = (data ?? []).map((row) => ({
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
    }));

    // Merge remote and local (avoiding duplicates)
    const seen = new Set<string>();
    const merged: InquiryRecord[] = [];
    for (const item of [...remoteList, ...localList]) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        merged.push(item);
      }
    }
    merged.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

    return {
      inquiries: merged,
      error: null,
    };
  } catch (err: any) {
    console.warn("Supabase network error, returning local inquiries:", err?.message);
    return {
      inquiries: localList,
      error: null,
    };
  }
}
