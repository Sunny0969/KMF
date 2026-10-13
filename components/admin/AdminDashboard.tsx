"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import {
  INQUIRY_SOURCES,
  detailLabel,
  formatDetailValue,
  sourceLabel,
  type InquiryRecord,
  type InquirySource,
} from "@/lib/inquiry";

const dateFormat = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

function formatWhen(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return dateFormat.format(date);
}

function matchesQuery(inquiry: InquiryRecord, query: string) {
  const haystack = [
    inquiry.full_name,
    inquiry.email,
    inquiry.phone ?? "",
    sourceLabel(inquiry.source),
    ...Object.entries(inquiry.details).map(([key, value]) => `${detailLabel(key)} ${formatDetailValue(value)}`),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export default function AdminDashboard({
  inquiries,
  error,
}: {
  inquiries: InquiryRecord[];
  error: string | null;
}) {
  const router = useRouter();
  const [isRefreshing, startRefresh] = useTransition();
  const [query, setQuery] = useState("");
  const [source, setSource] = useState<InquirySource | "all">("all");
  const [selectedId, setSelectedId] = useState<string | null>(inquiries[0]?.id ?? null);

  const counts = useMemo(() => {
    const bySource = Object.fromEntries(INQUIRY_SOURCES.map((item) => [item, 0])) as Record<InquirySource, number>;
    for (const inquiry of inquiries) {
      if (inquiry.source in bySource) bySource[inquiry.source as InquirySource] += 1;
    }
    return bySource;
  }, [inquiries]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return inquiries.filter((inquiry) => {
      if (source !== "all" && inquiry.source !== source) return false;
      if (!normalized) return true;
      return matchesQuery(inquiry, normalized);
    });
  }, [inquiries, query, source]);

  const selected = filtered.find((inquiry) => inquiry.id === selectedId) ?? filtered[0] ?? null;

  return (
    <AdminShell
      title="Website inquiries"
      actions={
        <button
          type="button"
          onClick={() => startRefresh(() => router.refresh())}
          className="px-3 py-2 rounded-lg border border-white/20 text-sm font-semibold hover:bg-white/10"
        >
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      }
    >
      <div className="space-y-5">
        {error ? (
          <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">{error}</div>
        ) : null}

        <section className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          <Stat label="All forms" value={inquiries.length} active={source === "all"} onClick={() => setSource("all")} />
          {INQUIRY_SOURCES.map((item) => (
            <Stat
              key={item}
              label={sourceLabel(item)}
              value={counts[item]}
              active={source === item}
              onClick={() => setSource(item)}
            />
          ))}
        </section>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, email, phone, or form details"
            className="w-full sm:max-w-md px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27]"
          />
          <p className="text-sm text-slate-500">{filtered.length} shown</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] gap-4 items-start">
          <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
            {filtered.length === 0 ? (
              <p className="p-8 text-sm text-slate-500">
                {inquiries.length === 0
                  ? "No inquiries yet. New form submissions will appear here."
                  : "No inquiries match this search."}
              </p>
            ) : (
              <ul className="divide-y divide-slate-100">
                {filtered.map((inquiry) => {
                  const active = selected?.id === inquiry.id;
                  return (
                    <li key={inquiry.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedId(inquiry.id)}
                        className={`w-full text-left px-4 py-4 hover:bg-slate-50 ${active ? "bg-amber-50" : ""}`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="font-bold text-[#0b1c2d] truncate">{inquiry.full_name}</p>
                            <p className="text-sm text-slate-600 truncate">{inquiry.email}</p>
                          </div>
                          <span className="shrink-0 text-[11px] font-bold uppercase tracking-wide text-[#8a6d12] bg-amber-100 px-2 py-1 rounded">
                            {sourceLabel(inquiry.source)}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">
                          {formatWhen(inquiry.created_at)}
                          {inquiry.phone ? ` · ${inquiry.phone}` : ""}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <aside className="bg-white border border-slate-200 rounded-2xl p-5 xl:sticky xl:top-4">
            {selected ? <InquiryDetail inquiry={selected} /> : <p className="text-sm text-slate-500">Select an inquiry.</p>}
          </aside>
        </div>
      </div>
    </AdminShell>
  );
}

function Stat({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-3 text-left ${
        active ? "bg-[#0b1c2d] text-white border-[#0b1c2d]" : "bg-white text-slate-800 border-slate-200 hover:border-[#c59b27]"
      }`}
    >
      <p className={`text-[11px] font-bold uppercase tracking-wide ${active ? "text-[#e4c36a]" : "text-slate-500"}`}>
        {label}
      </p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </button>
  );
}

function InquiryDetail({ inquiry }: { inquiry: InquiryRecord }) {
  const entries = Object.entries(inquiry.details);

  return (
    <div className="space-y-5">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-wide text-[#c59b27]">{sourceLabel(inquiry.source)}</p>
        <h2 className="mt-1 text-2xl font-black text-[#0b1c2d]">{inquiry.full_name}</h2>
        <p className="mt-1 text-sm text-slate-500">{formatWhen(inquiry.created_at)} ET</p>
      </div>

      <dl className="space-y-3 text-sm">
        <DetailRow label="Email" value={inquiry.email} href={`mailto:${inquiry.email}`} />
        <DetailRow label="Phone" value={inquiry.phone || "Not provided"} href={inquiry.phone ? `tel:${inquiry.phone}` : undefined} />
        {entries.map(([key, value]) => (
          <DetailRow key={key} label={detailLabel(key)} value={formatDetailValue(value)} />
        ))}
      </dl>
    </div>
  );
}

function DetailRow({ label, value, href }: { label: string; value: string; href?: string }) {
  return (
    <div>
      <dt className="text-[11px] font-bold uppercase tracking-wide text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-slate-800 whitespace-pre-wrap break-words">
        {href ? (
          <a href={href} className="text-[#0b1c2d] underline decoration-[#c59b27] underline-offset-2">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
