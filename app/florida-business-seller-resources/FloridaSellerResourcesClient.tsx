'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { BlogRecord } from '@/lib/blog';
import ResourceBlogsSection from '@/components/blog/ResourceBlogsSection';

export default function FloridaSellerResourcesClient({
  blogs = [],
}: {
  blogs?: BlogRecord[];
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item active by default

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'When should I begin preparing my business for sale?',
      a: 'Ideally, preparation begins before the desired sale date. Time allows the owner to improve records, reduce dependence, address leases and licenses, document procedures and stabilize earnings.',
    },
    {
      q: 'Which financial records will buyers request?',
      a: 'Buyers commonly request three years of tax returns and profit-and-loss statements, current year-to-date results, balance sheets, bank support and documentation for proposed add-backs. Requirements vary by transaction.',
    },
    {
      q: 'What should I avoid doing before a sale?',
      a: 'Avoid unusual personal expenses, undocumented cash activity, abrupt staffing changes, neglected equipment, short lease terms and premature disclosure to employees or customers. Discuss material decisions with advisers before going to market.',
    },
    {
      q: 'How can I reduce owner dependence?',
      a: 'Document daily procedures, delegate customer and vendor relationships, develop management depth, cross-train employees and establish reporting controls. Buyers pay close attention to whether earnings can transfer without the seller\'s daily involvement.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. SELLER RESOURCES TOOLKIT SECTION */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              SELLER EXCELLENCE
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Prepare Your Business For{' '}
              <span className="text-amber-400">Maximum Exit Value</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Everything you need to evaluate, structure, and market your Florida business while maintaining 100% confidentiality.
            </p>
          </div>

          {/* 3 Toolkit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Valuation Framework */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 font-black text-xl flex items-center justify-center mb-6">
                  01
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Business Valuation Framework
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Understand how SDE multiples, EBITDA calculations, and tangible assets shape the real market value of your business.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Financial audit guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> SDE & EBITDA adjustments
                </li>
              </ul>
            </div>

            {/* Card 2: Confidentiality Protocols */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-black text-xl flex items-center justify-center mb-6">
                  02
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Confidentiality Protocols
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Protect your brand reputation, employees, and trade secrets with rigorous pre-screening and binding NDAs.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Blind profile marketing
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Buyer pre-qualification
                </li>
              </ul>
            </div>

            {/* Card 3: Exit Readiness Roadmap */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-black text-xl flex items-center justify-center mb-6">
                  03
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Exit Readiness Roadmap
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  A step-by-step checklist to clean up balance sheets, operations, and leases before going to market.
                </p>
              </div>
              <ul className="space-y-2.5 pt-4 border-t border-slate-700/60 text-xs sm:text-sm text-slate-300 font-medium">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> 12-Month preparation steps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">✓</span> Legal & tax checklists
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONFIDENTIAL VALUATION CTA BANNER */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-[#0b1c2d] to-slate-900 text-white shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                CONFIDENTIAL & NO OBLIGATION
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Wondering What Your Florida Business Is Worth?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Get a precise, private valuation assessment and exit strategy roadmap from our senior advisors.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <span>Get Confidential Valuation</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. SELLER ARTICLES & GUIDES */}
      <ResourceBlogsSection blogs={blogs} category="seller" />

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Seller Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Essential questions Florida business owners have when contemplating an exit.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center text-slate-900 font-bold text-base hover:text-amber-600 transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span className="text-amber-500 font-extrabold text-2xl shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Logo & Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png"
                  alt="business broker in florida"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-red-500 hover:border-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Our Services */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/franchise-services" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Info */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sell-your-business" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/business-broker-faq" className="hover:text-amber-400 transition-colors flex items-center gap-2">
                    <span className="text-amber-500">⊙</span> Florida Business Brokerage FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Contact Info</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-0.5">📍</span>
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-amber-500">📞</span>
                  <a href="tel:9548649161" className="hover:text-amber-400 transition-colors">
                    954-864-9161
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-amber-500 mt-0.5">✉️</span>
                  <a href="mailto:swadhwani@kmfbusinessadvisors.com" className="hover:text-amber-400 transition-colors break-all">
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>Copyright © 2026 KMF Business Advisors. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors underline">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-slate-400 transition-colors underline">Terms and Conditions</Link>
              <Link href="/accessibility-statement" className="hover:text-slate-400 transition-colors underline">Accessibility</Link>
              <Link href="/disclaimers" className="hover:text-slate-400 transition-colors underline">Disclaimers</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP CTA */}
      <a
        href="https://wa.me/19548649161"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
