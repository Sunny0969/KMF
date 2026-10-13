"use client";

import { useState } from "react";
import type { BlogFaq } from "@/lib/blog";

export default function BlogFaqs({ faqs }: { faqs: BlogFaq[] }) {
  const [open, setOpen] = useState(0);
  if (faqs.length === 0) return null;

  return (
    <section className="mt-14">
      <h2 className="text-2xl font-black text-[#0b1c2d]">Frequently asked questions</h2>
      <div className="mt-5 divide-y divide-slate-200 border-y border-slate-200">
        {faqs.map((faq, index) => {
          const expanded = open === index;
          return (
            <div key={`${faq.question}-${index}`}>
              <button
                type="button"
                onClick={() => setOpen(expanded ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 py-4 text-left"
              >
                <span className="font-bold text-[#0b1c2d]">{faq.question}</span>
                <span className="text-[#c59b27] text-xl">{expanded ? "−" : "+"}</span>
              </button>
              {expanded ? <p className="pb-4 text-slate-600 leading-relaxed">{faq.answer}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
