'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CaseStudiesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default matching WP 'active'

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Are the results in a case study guaranteed for another client?',
      a: 'No. Every business has different earnings, risks, buyers, financing and deal terms. A case study illustrates one transaction and should not be treated as a promise of price, timing or financing.',
    },
    {
      q: 'How does KMF protect confidentiality in case studies?',
      a: 'A case study may omit or generalize names, exact locations and identifying facts. KMF should publish transaction details only with appropriate authorization and after verifying every figure and outcome.',
    },
    {
      q: 'What information makes a case study useful?',
      a: 'A useful case study explains the verified starting position, valuation basis, transaction challenge, deal structure, timeline and outcome without overstating KMF\'s role or disclosing protected information.',
    },
    {
      q: 'Can I request references from prior clients?',
      a: 'References or testimonials may be available only with the client\'s permission. KMF should never disclose a former client\'s identity or transaction information without authorization.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. HERO SECTION WITH PROVEN METRICS & CASE STUDY CARDS */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              REAL RESULTS & PROVEN SUCCESS
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Florida Business Deals Closed{' '}
              <span className="text-amber-400">With Confidence</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Explore how our confidential advisory helped buyers and sellers maximize value, secure SBA funding, and close transactions smoothly.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            
            {/* Card 1: Lavender / Elegant Purple-Slate Accent */}
            <div className="rounded-2xl p-8 sm:p-10 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-bold tracking-wide uppercase mb-5 border border-purple-500/30">
                  HVAC & Service Business
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  $3.2M Florida Service Company Sale
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Helped the founder transition into retirement by structuring an all-cash deal with a strategic regional buyer within 90 days.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-xl bg-slate-900/80 border border-slate-700/60 mb-8">
                  <div>
                    <span className="block text-xs text-slate-400">Valuation</span>
                    <strong className="text-base sm:text-lg font-bold text-amber-400">3.8x EBITDA</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Timeline</span>
                    <strong className="text-base sm:text-lg font-bold text-amber-400">90 Days</strong>
                  </div>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Schedule Free Consultation</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Card 2: Mint / Emerald-Slate Accent */}
            <div className="rounded-2xl p-8 sm:p-10 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-wide uppercase mb-5 border border-emerald-500/30">
                  Multi-Unit Franchise
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  Multi-Location QSR Franchise Acquisition
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Guided a first-time franchise buyer through FDD review, 80% SBA financing approval, and multi-unit lease negotiations.
                </p>
                <div className="grid grid-cols-2 gap-4 py-4 px-5 rounded-xl bg-slate-900/80 border border-slate-700/60 mb-8">
                  <div>
                    <span className="block text-xs text-slate-400">Funding</span>
                    <strong className="text-base sm:text-lg font-bold text-amber-400">80% SBA Approved</strong>
                  </div>
                  <div>
                    <span className="block text-xs text-slate-400">Units</span>
                    <strong className="text-base sm:text-lg font-bold text-amber-400">3 Locations</strong>
                  </div>
                </div>
              </div>

              <Link
                href="/sell-a-franchise"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-sm sm:text-base border border-slate-600 transition-all duration-200 hover:scale-[1.02]"
              >
                <span>Inquire About Franchise Sales</span>
                <span>&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STRATEGY SESSION BANNER CTA */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-[#0b1c2d] to-slate-900 text-white shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Want Similar Results for Your Business?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Schedule a confidential valuation and strategic roadmap review with our licensed Florida business advisors.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto text-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <span>Schedule Deal Strategy Session</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Clear & Transparent Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Common questions regarding our past transactions and client representations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-colors"
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
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
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
