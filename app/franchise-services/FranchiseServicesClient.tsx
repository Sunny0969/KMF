'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FranchiseServicesClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default as in WP HTML

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">


      {/* MAIN CONTENT / SOFT STYLE SECTIONS */}
      <main className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* SECTION 1: SOFT GRID (Buy/Sell, Development, Franchise Your Business) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
                FRANCHISE ADVISORY SOLUTIONS
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Scale, Expand, or Acquire <span className="text-amber-600">Franchise Networks</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Comprehensive advisory services designed to guide emerging concepts and established brands through every stage of franchise growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-stone-50/80 rounded-2xl p-8 border border-emerald-50 hover:border-emerald-200 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🌟</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Buy / Sell a Franchise
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Navigate multi-unit acquisitions or secure profitable exits with complete confidentiality, franchisor transfer coordination, and valuation precision.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <Link
                    href="/sell-a-franchise"
                    className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Sell Franchise <span>→</span>
                  </Link>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Search Listings ↗
                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-stone-50/80 rounded-2xl p-8 border border-blue-50 hover:border-blue-200 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">📈</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Franchise Development
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Build robust operational frameworks, FDD systems, and scalable training protocols to support multi-location growth and regional territory expansion.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/franchise-your-business-florida"
                    className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Explore Development <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-stone-50/80 rounded-2xl p-8 border border-amber-50 hover:border-amber-200 transition-all duration-300 flex flex-col justify-between hover:shadow-lg group">
                <div>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">🏛️</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    Franchise Your Business
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    Transform your successful local business model into a multi-location national brand with turnkey advisory, FDD legal coordination, and franchisee lead gen.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/60">
                  <Link
                    href="/franchise-your-business-florida"
                    className="text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1"
                  >
                    Franchise Blueprint <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 2: SOFT CREAM CTA BANNER */}
          <div className="bg-[#fffdf5] rounded-3xl p-8 sm:p-12 border border-amber-200/70 shadow-sm">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div className="max-w-2xl space-y-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-600">
                  CONFIDENTIAL CONSULTATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Ready to Franchise Your Business or Expand Your Portfolio?
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Connect with our senior franchise specialists in Florida to review your territory strategy and legal requirements under strict NDA.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-md transition-all hover:scale-105"
                >
                  Book Franchise Strategy Call →
                </Link>
              </div>
            </div>
          </div>

          {/* SECTION 3: CORE PILLARS & ROADMAP */}
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white border border-slate-800">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400">
                HOW WE SUPPORT YOU
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Comprehensive Support Across Every Stage of Franchising
              </h3>
              <p className="text-sm sm:text-base text-slate-300">
                Whether divesting a single franchise unit or launching a 50-location rollout, KMF brings transactional rigor and unmatched industry connections.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center mb-4">
                  01
                </div>
                <h4 className="font-bold text-base text-white mb-2">Franchise Valuation</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Accurate EBITDA recast and seller discretionary earnings (SDE) calculations considering royalties and franchise fees.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center mb-4">
                  02
                </div>
                <h4 className="font-bold text-base text-white mb-2">Franchisor Approvals</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Navigating Right of First Refusal (ROFR), transfer paperwork, mandatory buyer discovery days, and franchisor training.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center mb-4">
                  03
                </div>
                <h4 className="font-bold text-base text-white mb-2">FDD Architecture</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Structuring Item 19 financial performance representations, territory exclusivity, and fee models with franchise attorneys.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 font-bold text-lg flex items-center justify-center mb-4">
                  04
                </div>
                <h4 className="font-bold text-base text-white mb-2">Multi-Unit Scalability</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Packaging regional area developer agreements and securing qualified multi-unit operators across Florida.
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-100 shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
                COMMON INQUIRIES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center text-slate-900 font-bold text-base hover:text-amber-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-amber-500 font-extrabold text-xl ml-4">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-900 border border-amber-500/40 flex items-center justify-center font-bold text-amber-500 text-xl tracking-wider">
                  KMF
                </div>
                <span className="font-extrabold text-white text-lg tracking-tight">
                  KMF BUSINESS ADVISORS
                </span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise. Licensed Florida Real Estate & Business Brokers.
              </p>
              <div className="pt-2 text-sm text-slate-300 space-y-1">
                <p>📍 10242 NW 47th St, STE 39, Sunrise FL 33351</p>
                <p>📞 954-864-9161</p>
                <p>✉️ swadhwani@kmfbusinessadvisors.com</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Our Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/franchise-services" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-kmf" className="hover:text-amber-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-amber-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-amber-400 transition-colors">
                    Commercial Real Estate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Franchise & M&A</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sell-a-franchise" className="hover:text-amber-400 transition-colors">
                    Sell a Franchise in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/franchise-your-business-florida" className="hover:text-amber-400 transition-colors">
                    Franchise Your Business Florida
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Buy a Franchise ↗
                  </a>
                </li>
                <li>
                  <Link href="/profitable-business-for-sale" className="hover:text-amber-400 transition-colors">
                    Profitable Business for Sale
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Info</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sell-your-business" className="hover:text-amber-400 transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-amber-400 transition-colors">
                    Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="hover:text-amber-400 transition-colors">
                    Florida Business Brokerage FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="hover:text-amber-400 transition-colors">
                    Our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>Copyright © {new Date().getFullYear()} KMF Business Advisors. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
              <Link href="/accessibility-statement" className="hover:text-slate-400 transition-colors">Accessibility</Link>
              <Link href="/disclaimers" className="hover:text-slate-400 transition-colors">Disclaimers</Link>
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
