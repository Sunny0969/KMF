"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Clean inline SVG icon helpers
function IconPhone({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function IconMail({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function IconArrowRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

function IconCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "How do I know whether my business is ready to franchise?",
    a: "A suitable candidate generally has documented profitability, a repeatable operating model, clear brand positioning, trainable systems, reliable unit economics and management capacity to support franchisees.",
  },
  {
    q: "What documents are required to offer franchises?",
    a: "A franchisor generally needs a compliant Franchise Disclosure Document and franchise agreement, together with financial and operational information. Requirements vary by jurisdiction, so qualified franchise counsel must guide legal preparation and registration.",
  },
  {
    q: "How long does franchise development take?",
    a: "Timing depends on financial readiness, legal drafting, audited statements, operations manuals, training systems, brand protection and management decisions. Selling a franchise should not begin until the required legal and operational foundation is complete.",
  },
  {
    q: "Does KMF guarantee that franchise units will be sold?",
    a: "No. Franchise sales depend on the concept, investment level, unit economics, leadership, territory, legal compliance and buyer demand. KMF may support strategy and qualified-candidate outreach without guaranteeing placements.",
  },
];

export default function FranchiseYourBusinessClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#c59b27] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0b1c2d] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:9548649161"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              <IconPhone className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>954-864-9161</span>
            </a>
            <a
              href="mailto:swadhwani@kmfbusinessadvisors.com"
              className="flex items-center gap-1.5 text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              <IconMail className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>swadhwani@kmfbusinessadvisors.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <a
              href="https://kmfbusinessadvisor.com/frequently-asked-questions/"
              className="hover:text-white transition-colors"
            >
              FAQs
            </a>
            <span>|</span>
            <a
              href="https://kmfbusinessadvisor.com/contact-us/"
              className="hover:text-white transition-colors"
            >
              Support
            </a>
            <a
              href="https://kmfbusinessadvisor.com/contact-us/"
              className="inline-flex items-center gap-1 bg-[#c59b27] hover:bg-[#b0881f] text-slate-900 text-xs font-semibold px-3 py-1 rounded transition-colors"
            >
              <span>Get Started</span>
              <IconArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png"
              alt="KMF Business Advisors"
              width={190}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm text-gray-700">
            <Link href="/" className="hover:text-[#c59b27] transition-colors">
              Business Broker Florida
            </Link>

            {/* Buy a Business Dropdown */}
            <div className="relative group py-2">
              <Link
                href="https://kmfbusinessadvisor.com/buy-a-business/"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors"
              >
                <span>Buy a Business</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <a
                    href="https://kmfbusinessadvisor.com/wp-content/uploads/2026/09/KMF_Buyer_Broker_Representation_Agreement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Buyer Broker Representation
                  </a>
                  <Link
                    href="/businesses-for-sale"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Businesses for Sale in Florida
                  </Link>
                  <a
                    href="https://bizmls.com/cgi-bin/a-enterbuyer.asp?folder=bbf-1267003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Buyer Registration
                  </a>
                </div>
              </div>
            </div>

            {/* Sell a Business Dropdown */}
            <div className="relative group py-2">
              <Link
                href="https://kmfbusinessadvisor.com/sell-a-business/"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors"
              >
                <span>Sell a Business</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <Link
                    href="/sell-your-business"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Sell Your Business
                  </Link>
                  <Link
                    href="/profitable-business-for-sale"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Profitable Business for Sale
                  </Link>
                </div>
              </div>
            </div>

            {/* Franchise Services Dropdown (ACTIVE) */}
            <div className="relative group py-2">
              <Link
                href="https://kmfbusinessadvisor.com/franchise-services/"
                className="flex items-center gap-1 text-[#c59b27] font-semibold transition-colors"
              >
                <span>Franchise Services</span>
                <IconChevronDown className="w-3.5 h-3.5 text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <Link
                    href="/sell-a-franchise"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Sell a Franchise in Florida
                  </Link>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Buy a Franchise
                  </a>
                  <Link
                    href="/franchise-your-business-florida"
                    className="block px-4 py-2.5 text-sm font-semibold text-[#c59b27] bg-amber-50/50 rounded-lg transition-colors"
                  >
                    Franchise Your Business Florida
                  </Link>
                </div>
              </div>
            </div>

            {/* Real Estate Dropdown */}
            <div className="relative group py-2">
              <Link
                href="https://kmfbusinessadvisor.com/real-estate/"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors"
              >
                <span>Real Estate</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-60">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <a
                    href="https://kmfsellsflorida.com/property-search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Florida Property Search
                  </a>
                  <a
                    href="https://beachesmls.buildersupdate.com/search/searchbu.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    New Construction Homes
                  </a>
                  <a
                    href="https://beachesmls.buildersupdate.com/search/SearchCustomBuilder.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Custom Home builder
                  </a>
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative group py-2">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors cursor-pointer"
              >
                <span>About</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-56">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <Link
                    href="/about-kmf"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    KMF Business Advisors
                  </Link>
                  <Link
                    href="/our-team"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group py-2">
              <Link
                href="https://kmfbusinessadvisor.com/resources/"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors"
              >
                <span>Resources</span>
                <IconChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#c59b27] transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-2 space-y-1">
                  <a
                    href="https://kmfbusinessadvisor.com/case-studies/"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Case Studies
                  </a>
                  <a
                    href="https://kmfbusinessadvisor.com/florida-business-seller-resources/"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Florida Business Seller Resources
                  </a>
                  <a
                    href="https://kmfbusinessadvisor.com/florida-business-buyer-resources/"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Florida Business Buyer Resources
                  </a>
                  <a
                    href="https://kmfbusinessadvisor.com/business-broker-faq/"
                    className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c59b27] hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    Business Broker FAQ
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://kmfbusinessadvisor.com/contact-us/"
              className="hover:text-[#c59b27] transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-4 space-y-3 text-sm">
            <Link href="/" className="block py-1 font-medium text-gray-800">
              Business Broker Florida
            </Link>
            <Link href="/businesses-for-sale" className="block py-1 font-medium text-gray-800">
              Businesses for Sale in Florida
            </Link>
            <Link href="/sell-your-business" className="block py-1 font-medium text-gray-800">
              Sell Your Business
            </Link>
            <Link href="/profitable-business-for-sale" className="block py-1 font-medium text-gray-800">
              Profitable Business for Sale
            </Link>
            <Link href="/sell-a-franchise" className="block py-1 font-medium text-gray-800">
              Sell a Franchise in Florida
            </Link>
            <Link href="/franchise-your-business-florida" className="block py-1 font-semibold text-[#c59b27]">
              Franchise Your Business Florida
            </Link>
            <Link href="/about-kmf" className="block py-1 font-medium text-gray-800">
              KMF Business Advisors
            </Link>
            <Link href="/our-team" className="block py-1 font-medium text-gray-800">
              Our Team
            </Link>
            <a href="https://kmfbusinessadvisor.com/contact-us/" className="block py-1 font-medium text-gray-800">
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (BLACKISH THEME - EXACT MATCH) */}
      <section className="bg-[#0b1c2d] text-white py-14 lg:py-20 relative overflow-hidden border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT COLUMN: PHOTO COLLAGE GRID (kmf-grid-visual) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-12 gap-3 sm:gap-4 p-2 bg-slate-900/60 rounded-2xl border border-slate-700/50 shadow-2xl backdrop-blur-sm">
                
                {/* Top Left Tall Image (col-span-5 row-span-2) */}
                <div className="col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop"
                    alt="Franchise Team Consultation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Top Right Large Main Image (col-span-7) */}
                <div className="col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                    alt="Florida Commercial Architecture"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Left Wide Image (col-span-5) */}
                <div className="col-span-5 relative aspect-[5/3] rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                    alt="Executive Handshake"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Middle Square Image (col-span-3) */}
                <div className="col-span-3 relative aspect-square rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
                    alt="Business Growth Strategy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Right Interior Image (col-span-4) */}
                <div className="col-span-4 relative aspect-square rounded-xl overflow-hidden shadow-md group">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                    alt="Modern Corporate Office"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: CONTENT & CALL TO ACTIONS (kmf-hero-content-v3) */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>SCALE YOUR BUSINESS ACROSS FLORIDA</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                Transform Your Business Into a <br className="hidden sm:inline" />
                <span className="text-[#c59b27]">Thriving Franchise System</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                Turn your proven operational model into a nationwide brand. We help Florida business owners navigate legal FDD requirements, structure franchise models, and market to pre-qualified buyers.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://bizmls.com/cgi-bin/a-bus2ff.asp?display_allcats=go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c59b27] hover:bg-[#b0871e] text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Get Free Assessment</span>
                  <span>&rarr;</span>
                </a>
                <a
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-slate-800 text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-600 transition-colors"
                >
                  <span>Schedule Advisory Call</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY TAKEAWAYS (fkw-key-takeaways-short) */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#c59b27] p-6 rounded-r-xl shadow-sm flex items-start gap-4">
            <span className="text-2xl shrink-0">💡</span>
            <div>
              <h3 className="text-base font-bold text-[#0b1c2d] mb-1">Key Takeaways</h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                <strong>KMF Business Advisors</strong> offers end-to-end franchise consulting in Florida—helping business owners prepare legal FDDs, streamline operational manuals, and scale rapidly through capital-efficient franchisee growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FRANCHISING VS. ORGANIC GROWTH: A COMPARISON */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1c2d] tracking-tight">
              Franchising vs. Organic Growth: A Comparison
            </h2>
          </div>

          <div className="overflow-x-auto rounded-xl shadow-md border border-slate-200">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead className="bg-[#0b1c2d] text-white">
                <tr>
                  <th className="py-4 px-6 text-base font-bold">Feature / Aspect</th>
                  <th className="py-4 px-6 text-base font-bold">Traditional Organic Growth</th>
                  <th className="py-4 px-6 text-base font-bold">Franchising Your Business</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0b1c2d]">Capital Requirement</td>
                  <td className="py-4 px-6 text-slate-600">High (Owner funds all locations)</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">Low (Franchisees fund expansion)</td>
                </tr>
                <tr className="bg-slate-50/70 hover:bg-slate-100/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0b1c2d]">Expansion Speed</td>
                  <td className="py-4 px-6 text-slate-600">Slow &amp; Gradual</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">Rapid Multi-Unit Growth</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0b1c2d]">Management Effort</td>
                  <td className="py-4 px-6 text-slate-600">High (Direct daily oversight)</td>
                  <td className="py-4 px-6 text-slate-700">Strategic (Franchisees manage operations)</td>
                </tr>
                <tr className="bg-slate-50/70 hover:bg-slate-100/70 transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0b1c2d]">Brand Equity</td>
                  <td className="py-4 px-6 text-slate-600">Limited to local market</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">Regional &amp; National Presence</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. SECTION 2: FRANCHISABILITY CHECKLIST (kmf-checklist-wrapper-lightbg) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-widest block">
              FRANCHISABILITY ASSESSMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d]">
              Is Your Business <span className="text-[#c59b27]">Ready to Franchise?</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Before expanding across Florida, evaluate whether your core business model has the foundation required for a successful, scalable franchise system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-[#0b1c2d] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#c59b27] font-black text-2xl flex items-center justify-center mb-6">
                  $
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proven Profitability</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Strong, documented financial history showing repeatable success across multiple locations and stable profit margins.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-[#c59b27]">
                <span className="text-emerald-400">✓</span>
                <span>Financial Audit Ready</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0b1c2d] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#c59b27] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Standardized Systems</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Clear Operating Procedures (SOPs) that allow new owners and management teams to run daily business operations seamlessly.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-[#c59b27]">
                <span className="text-emerald-400">✓</span>
                <span>Operations Playbook Ready</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0b1c2d] text-white rounded-2xl p-8 shadow-xl flex flex-col justify-between border border-slate-800 hover:border-amber-500/40 transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-[#c59b27] flex items-center justify-center mb-6">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Unique Brand Value</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Distinctive products, services, or market position that stands out competitively in the Florida commercial market.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs font-bold text-[#c59b27]">
                <span className="text-emerald-400">✓</span>
                <span>Competitive Advantage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 3: END-TO-END FRANCHISING PROCESS (BENTO PASTEL GRID) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-widest block">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d]">
              Our End-to-End <span className="text-[#c59b27]">Franchising Process</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              A structured 4-step roadmap to seamlessly transition your business from a single operational unit into a scalable franchise network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Step 1: Feasibility Analysis (Soft Light Blue) */}
            <div className="bg-sky-50/70 border border-sky-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-sky-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  STEP 01
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Feasibility <span className="text-sky-700">Analysis</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Comprehensive market audit, unit economics assessment, and strategic growth mapping to validate your brand&apos;s scaling potential.
                </p>
              </div>
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  alt="Feasibility Analysis"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 2: Legal & FDD Prep (Soft Light Amber) */}
            <div className="bg-amber-50/70 border border-amber-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  STEP 02
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Legal &amp; <span className="text-amber-700">FDD Prep</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Structuring your Franchise Disclosure Document (FDD), franchise agreements, state registration, and legal compliance setups.
                </p>
              </div>
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
                  alt="Legal and FDD Preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 3: Operations Manuals (Soft Light Mint) */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  STEP 03
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Operations <span className="text-emerald-700">Manuals</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Creating comprehensive staff training modules, daily operational playbooks, and standardized quality control guidelines.
                </p>
              </div>
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop"
                  alt="Operational Manuals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Step 4: Franchisee Acquisition (Soft Light Purple) */}
            <div className="bg-purple-50/70 border border-purple-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-lg uppercase tracking-wider">
                  STEP 04
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Franchisee <span className="text-purple-700">Acquisition</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Targeted marketing campaigns to bring pre-vetted buyers, negotiating franchise terms, and closing expansion deals.
                </p>
              </div>
              <div className="mt-6 relative h-48 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                  alt="Franchisee Acquisition"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. SECTION 4: WHY CHOOSE US (kmf-valueprops-wrapper) */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Col: Image with Floating Badge */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop"
                  alt="KMF Business Advisory Team"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-[#0b1c2d] text-white px-5 py-3.5 rounded-xl shadow-xl border border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c59b27] flex items-center justify-center text-slate-950 font-black">
                    ★
                  </div>
                  <div>
                    <strong className="block text-sm font-bold text-white">#1 Advisor</strong>
                    <span className="text-xs text-slate-300">Florida Market Experts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Features Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#c59b27] uppercase tracking-widest block">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d] leading-tight">
                Why Franchise With <br />
                <span className="text-[#c59b27]">KMF Business Advisor?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Leverage our deep Florida commercial brokerage expertise to scale your business with confidence and total security.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#c59b27] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1c2d]">Deep Florida Market Intelligence</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Regional insights and data-driven analysis to price, structure, and position franchise fees correctly in local markets.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#c59b27] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1c2d]">Pre-Screened Buyer Network</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Direct access to pre-qualified investors and high-net-worth buyers actively searching for franchise opportunities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#c59b27] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1c2d]">Full Legal &amp; Operational Compliance</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">End-to-end advisory ensuring your FDD and state regulatory documentation face zero legal roadblocks during expansion.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-[#c59b27] flex items-center justify-center shrink-0 mt-0.5">
                    <IconCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1c2d]">Confidentiality Guaranteed</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">Rigorous NDA protocols that protect your core business operations while discreetly marketing the franchise opportunity.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. COMBINED SECTIONS 5 & 6 (GROWTH METRICS + FINAL CTA) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* SECTION 5: GROWTH METRICS */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold text-[#c59b27] uppercase tracking-widest block">
                SCALING POTENTIAL
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0b1c2d]">
                Estimate Your <span className="text-[#c59b27]">Franchise Expansion Growth</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                See how franchising turns your single-location success into recurring revenue streams across Florida.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
                <div className="text-3xl mb-2">🚀</div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">$30K - $50K</span>
                <span className="text-xs text-slate-500 mt-1 block">Avg. Initial Franchise Fee / Unit</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
                <div className="text-3xl mb-2">📈</div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">4% - 7%</span>
                <span className="text-xs text-slate-500 mt-1 block">Ongoing Monthly Royalty Fee</span>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center border border-slate-200 shadow-sm">
                <div className="text-3xl mb-2">⏱️</div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">60 - 90 Days</span>
                <span className="text-xs text-slate-500 mt-1 block">Average Time to Launch FDD</span>
              </div>
            </div>

            {/* Action Banner */}
            <div className="bg-[#0b1c2d] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Ready to Calculate Your Exact Franchise Valuation?</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Schedule a confidential valuation call with our Florida business advisory team.</p>
              </div>
              <a
                href="https://kmfbusinessadvisor.com/contact-us/"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#c59b27] hover:bg-[#b0871e] text-slate-950 font-bold text-sm rounded-xl shrink-0 transition-colors"
              >
                <span>Get Free Valuation →</span>
              </a>
            </div>
          </div>

          {/* SECTION 6: FINAL CTA (kmf-cta-container-box) */}
          <div className="bg-[#0b1c2d] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>CONFIDENTIAL &amp; DIRECT ADVISORY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  Ready to Turn Your Local Success Into a <span className="text-[#c59b27]">Regional Powerhouse?</span>
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Book a confidential, no-obligation franchising consultation with our lead Florida business advisors today. We&apos;ll map out your exact FDD and expansion strategy.
                </p>

                <div className="pt-2">
                  <a
                    href="https://kmfbusinessadvisor.com/contact-us/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#c59b27] hover:bg-[#b0871e] text-slate-950 font-bold text-sm sm:text-base rounded-xl shadow-lg transition-transform hover:scale-105"
                  >
                    <span>Schedule Your Consultation Now →</span>
                  </a>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span>🔒</span> 100% Confidential NDA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span>⚡</span> No-Obligation Assessment
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-full min-h-[380px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"
                  alt="Florida Business Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. STEPS TO TURN YOUR BUSINESS INTO A FRANCHISE (fkw-section) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Steps to Turn Your Business into a Franchise
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto my-4 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Franchising your existing business requires a structured approach to ensure legal compliance, operational scalability, and brand consistency. At KMF Business Advisors, we guide business owners through each critical milestone:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">📜</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Franchise Disclosure Document (FDD) Preparation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Developing a comprehensive FDD is essential to comply with federal and state regulations, outlining financial requirements, obligations, and system standards.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">📘</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Operations Manual Creation</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Documenting your step-by-step business processes ensures that franchisees can replicate your business model successfully without constant supervision.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">🚀</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Brand &amp; Marketing Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Building a unified marketing strategy helps new franchise locations attract local customers rapidly while maintaining national brand integrity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. KEY BENEFITS OF FRANCHISING YOUR BUSINESS IN FLORIDA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Key Benefits of Franchising Your Business in Florida
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto my-4 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Transforming your business into a franchise model in Florida offers immense growth opportunities while minimizing financial risk:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-emerald-600 font-black text-lg">✓</span>
              <div className="text-sm sm:text-base text-slate-700">
                <strong className="text-[#0b1c2d]">Rapid Market Expansion:</strong> Scale your brand across multiple cities without taking on heavy debt or equity partners.
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-emerald-600 font-black text-lg">✓</span>
              <div className="text-sm sm:text-base text-slate-700">
                <strong className="text-[#0b1c2d]">Lower Capital Expenditure:</strong> Franchisees invest their own capital to open and operate new locations, driving brand expansion at a fraction of the cost.
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-emerald-600 font-black text-lg">✓</span>
              <div className="text-sm sm:text-base text-slate-700">
                <strong className="text-[#0b1c2d]">Brand Dominance &amp; Buyer Power:</strong> Expanding your operational footprint increases brand visibility, market share, and purchasing power across Florida.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. IS YOUR BUSINESS READY TO FRANCHISE? */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Is Your Business Ready to Franchise?
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto my-4 rounded-full" />
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Not every business is suited for franchising. Before taking the leap, evaluate whether your enterprise meets these key readiness criteria:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#c59b27] border-x border-b border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">💰</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Proven &amp; Profit-Driven Model</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Your business should have a solid track record of strong profitability, market demand, and verifiable financial results.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#c59b27] border-x border-b border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">⚙️</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Scalable Operational Systems</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Operations must be structured, easy to teach, and easy to replicate across different locations by non-owner managers.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-t-4 border-[#c59b27] border-x border-b border-slate-200 shadow-sm space-y-4">
              <div className="text-3xl">📊</div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Strong Margin Potential</h3>
              <p className="text-sm text-slate-600 leading-relaxed">The unit economics must generate sufficient revenue for both the franchisee and your ongoing royalty fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FAQ SECTION (kmf-faq-section) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[#c59b27] font-bold text-xs uppercase tracking-widest">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C2D]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#c59b27] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className="text-xl font-bold text-[#c59b27] w-6 h-6 flex items-center justify-center shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200 bg-white">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-[#0b1c2d] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png"
                  alt="KMF Business Advisors"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#c59b27] hover:text-slate-900 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link href="/sell-a-franchise" className="hover:text-[#c59b27] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-kmf" className="hover:text-[#c59b27] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="https://kmfbusinessadvisor.com/contact-us/" className="hover:text-[#c59b27] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Info</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link href="/sell-your-business" className="hover:text-[#c59b27] transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-[#c59b27] transition-colors">
                    Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <a href="https://kmfbusinessadvisor.com/frequently-asked-questions/" className="hover:text-[#c59b27] transition-colors">
                    Florida Business Brokerage FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c59b27] mt-0.5">📍</span>
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <IconPhone className="w-4 h-4 text-[#c59b27]" />
                  <a href="tel:9548649161" className="hover:text-[#c59b27] transition-colors">
                    954-864-9161
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <IconMail className="w-4 h-4 text-[#c59b27]" />
                  <a href="mailto:swadhwani@kmfbusinessadvisors.com" className="hover:text-[#c59b27] transition-colors">
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-xs text-slate-400">
            <p>
              Copyright © 2026 KMF Business Advisors. All rights reserved. |{" "}
              <a href="https://kmfbusinessadvisor.com/privacy-policy/" className="underline hover:text-white">Privacy Policy</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/terms-and-conditions/" className="underline hover:text-white">Terms and Conditions</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/accessibility-statement/" className="underline hover:text-white">Accessibility</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/disclaimers/" className="underline hover:text-white">Disclaimers</a>
            </p>
          </div>
        </div>
      </footer>

      {/* 15. FLOATING WHATSAPP CHAT WIDGET */}
      <a
        href="https://api.whatsapp.com/send?phone=19548649161&text=Welcome%20to%20KMF%20Business%20Advisors!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-white text-slate-700 px-3.5 py-2 rounded-full shadow-2xl border border-slate-200 hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-2.072-.511-1.636-.679-2.697-2.338-2.778-2.447-.08-.109-.661-.879-.661-1.677 0-.797.416-1.189.564-1.35.148-.162.324-.202.432-.202.108 0 .216.002.311.007.1.005.234-.038.366.279.135.324.46 1.12.5 1.202.04.081.067.176.013.283-.053.108-.08.175-.16.27-.08.094-.168.21-.24.282-.08.08-.163.167-.07.327.094.16.417.688.895 1.114.615.548 1.133.718 1.294.798.161.081.256.068.351-.041.095-.108.405-.472.513-.634.108-.162.216-.135.365-.081.148.054.945.446 1.107.527.162.081.27.121.31.189.04.067.04.391-.104.796z" />
          </svg>
        </div>
        <span className="text-xs font-semibold pr-1">Contact Broker</span>
      </a>
    </div>
  );
}
