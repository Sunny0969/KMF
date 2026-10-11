'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FranchiseServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default as in WP HTML

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'What franchise services does KMF provide?',
      a: 'KMF assists with franchise resales, franchise acquisition searches, franchise-readiness reviews and development coordination. Legal franchise documents must be prepared and reviewed by qualified franchise counsel.',
    },
    {
      q: 'Can KMF help with a single-unit and a multi-unit transaction?',
      a: 'Yes. The process can address a single location, multiple operating units or a territory, subject to the franchise agreement, franchisor approval, leases, financial performance and transfer requirements.',
    },
    {
      q: 'Does the franchisor have to approve a franchise resale?',
      a: 'Usually. Franchise agreements commonly give the franchisor approval rights and may impose transfer fees, training, renovation, financial and experience requirements. The controlling agreement must be reviewed for the specific transaction.',
    },
    {
      q: 'Is franchise consulting the same as legal advice?',
      a: 'No. KMF can coordinate the business and transaction process, but franchise counsel should advise on the Franchise Disclosure Document, franchise agreement, registrations and legal compliance.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans text-slate-800 antialiased selection:bg-[#c59b27] selection:text-white">
      
      {/* MAIN CONTAINER */}
      <main className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* SECTION 1: SOFT GRID (Buy/Sell, Development, Franchise Your Business) */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-14 border border-slate-100 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-[1.5px] uppercase text-[#c59b27]">
                FRANCHISE ADVISORY SOLUTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
                Scale, Expand, or Acquire <span className="text-[#c59b27]">Franchise Networks</span>
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Comprehensive advisory services designed to guide emerging concepts and established brands through every stage of franchise growth.
              </p>
            </div>

            {/* 3 Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-[#fafaf9] rounded-xl p-7 border border-[#f0fdf4] hover:border-emerald-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🌟</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    Buy / Sell a Franchise
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Navigate multi-unit acquisitions or secure profitable exits with complete confidentiality.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-200/50 flex items-center justify-between text-xs font-semibold">
                  <Link href="/sell-a-franchise" className="text-[#c59b27] hover:underline">
                    Sell a Franchise →
                  </Link>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-slate-700"
                  >
                    Buy a Franchise ↗
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#fafaf9] rounded-xl p-7 border border-[#eff6ff] hover:border-blue-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    Franchise Development
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Build robust operational frameworks, FDD systems, and scalable training protocols.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-200/50 text-xs font-semibold">
                  <Link href="/franchise-your-business-florida" className="text-[#c59b27] hover:underline">
                    Development Process →
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fafaf9] rounded-xl p-7 border border-[#fffbeb] hover:border-amber-200 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-4">🏛️</div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-2">
                    Franchise Your Business
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Transform your successful local business model into a multi-location national brand.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-slate-200/50 text-xs font-semibold">
                  <Link href="/franchise-your-business-florida" className="text-[#c59b27] hover:underline">
                    Franchise Model →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SOFT CREAM CTA BANNER */}
          <div className="bg-[#fffdf5] rounded-2xl p-8 sm:p-10 lg:p-12 border border-[#fef3c7] shadow-sm">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27]">
                  CONFIDENTIAL CONSULTATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] leading-tight">
                  Ready to Franchise Your Business or Expand Your Portfolio?
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Connect with our senior franchise specialists in Florida to review your territory strategy and legal requirements under strict NDA.
                </p>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                <Link
                  href="/contact-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold text-sm sm:text-base shadow-sm transition-all hover:shadow-md whitespace-nowrap"
                >
                  Book Franchise Strategy Call →
                </Link>
              </div>
            </div>
          </div>

          {/* SECTION 3: FREQUENTLY ASKED QUESTIONS */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-slate-100 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3.5">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4.5 text-left flex justify-between items-center text-[#0f172a] font-bold text-sm sm:text-base hover:text-[#c59b27] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#c59b27] font-extrabold text-xl ml-4 shrink-0">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3.5 bg-slate-50/50">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER (MATCHING EXACT WORDPRESS THEME) */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-[#c59b27]/40 flex items-center justify-center font-bold text-[#c59b27] text-xl tracking-wider">
                  KMF
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  KMF BUSINESS ADVISORS
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-red-500 hover:text-red-400 font-semibold"
                >
                  <span>▶</span> YouTube Channel
                </a>
              </div>
            </div>

            {/* Col 2: OUR SERVICES */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                OUR SERVICES
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/franchise-services" className="text-[#c59b27] font-semibold hover:underline">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-kmf" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: INFO */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                INFO
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sell-your-business" className="hover:text-white transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-white transition-colors">
                    Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="hover:text-white transition-colors">
                    Florida Business Brokerage FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: CONTACT INFO */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                CONTACT INFO
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <span className="text-[#c59b27] shrink-0">📍</span>
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] shrink-0">📞</span>
                  <a href="tel:9548649161" className="hover:text-white transition-colors">
                    954-864-9161
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] shrink-0">✉️</span>
                  <a href="mailto:swadhwani@kmfbusinessadvisors.com" className="hover:text-white transition-colors truncate">
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center sm:text-left">
            <p>Copyright © 2026 KMF Business Advisors. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
        aria-label="Contact Broker on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
