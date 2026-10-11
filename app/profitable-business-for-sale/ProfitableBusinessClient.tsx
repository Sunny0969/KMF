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

function IconMapPin({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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

function IconChevronRight({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function IconMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconX({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function IconLock({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
}

function IconShieldCheck({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function IconCheckCircle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function IconTrendingUp({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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

function IconBuilding({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function IconScale({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  );
}

function IconZap({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function IconFileText({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

export default function ProfitableBusinessClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [sellDropdownOpen, setSellDropdownOpen] = useState(false);
  const [franchiseDropdownOpen, setFranchiseDropdownOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showTechLogic, setShowTechLogic] = useState(false);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    timeframe: "",
    realEstate: "",
    location: "",
    yearsOperating: "",
    annualRevenue: "",
    netProfit: "",
    ownerComp: "",
    expectedPrice: "",
    employees: "",
    ownerHours: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What is the difference between SDE and EBITDA?",
      a: "Seller's Discretionary Earnings (SDE) is commonly applied to owner-operated small businesses (typically under $1M-$2M in cash flow) and reflects the total financial benefit to a single full-time owner-operator, adding back salary, discretionary perks, and non-operational expenses. EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is typically used for larger lower-middle-market companies with an independent management structure in place, where an owner salary is already factored into ongoing operating expenses.",
    },
    {
      q: "Does KMF provide a certified business appraisal for litigation or tax purposes?",
      a: "KMF Business Advisors provides a Broker's Opinion of Value (BOV) and Most Probable Selling Price (MPSP) analysis designed specifically for business sale planning and transaction positioning. While rigorous and based on empirical market data and recasting methodology, it is not a USPAP-certified appraisal used for divorce proceedings, estate taxation, or formal litigation. For certified appraisal requirements, we can refer certified appraisal specialists.",
    },
    {
      q: "Which factors can significantly increase my business value before listing?",
      a: "Key value drivers include clean, CPA-reviewed books, low customer concentration (no single account exceeding 15%), documented standard operating procedures (SOPs), an independent capable management team, long-term favorable commercial leases, transferable vendor relationships, and consistent year-over-year revenue and margin stability.",
    },
    {
      q: "Can KMF value my business from a profit-and-loss statement alone?",
      a: "A P&L statement offers an initial high-level glance, but an accurate broker opinion of value also requires 3 years of filed corporate federal tax returns, current balance sheets, depreciation schedules, debt schedules, owner compensation and discretionary add-back details, and facility lease terms.",
    },
  ];

  const valuationDrivers = [
    {
      num: "01",
      title: "Normalized Earnings (SDE / EBITDA)",
      desc: "The true, verifiable cash flow available to a new owner after recasting non-recurring, discretionary, and non-operational expenses.",
    },
    {
      num: "02",
      title: "Historical Revenue Trends & Margins",
      desc: "Consistent 3-to-5-year trajectories demonstrating pricing power, predictable gross margins, and resilience across economic cycles.",
    },
    {
      num: "03",
      title: "Customer & Client Concentration",
      desc: "Low customer concentration mitigates transition risk. Businesses where no single client makes up over 10-15% command higher multiples.",
    },
    {
      num: "04",
      title: "Operational Independence from Owner",
      desc: "Businesses that operate smoothly without daily owner involvement are far more attractive and easily financeable by third-party buyers.",
    },
    {
      num: "05",
      title: "Management Depth & Key Staff",
      desc: "Trained, retained managers and cross-trained technical staff ensure seamless continuity post-acquisition.",
    },
    {
      num: "06",
      title: "Commercial Lease & Facility Terms",
      desc: "Assignable, long-term commercial leases with predictable renewals and reasonable rent-to-revenue ratios prevent deal friction.",
    },
    {
      num: "07",
      title: "Accounting Quality & Clean Financials",
      desc: "Documented financials, CPA reviews, and reconciled accounts minimize lender scrutiny and accelerate due diligence.",
    },
    {
      num: "08",
      title: "Florida Market Demand & Demographic Growth",
      desc: "Businesses capitalizing on Florida's ongoing corporate migration, population inflow, and commercial expansion trade at premium multiples.",
    },
    {
      num: "09",
      title: "SBA & Third-Party Bank Financeability",
      desc: "Cash flow satisfying SBA 7(a) debt-service coverage ratios (minimum 1.25x-1.5x) unlocks a substantially larger buyer pool with lower equity down payments.",
    },
    {
      num: "10",
      title: "Deal Structure & Seller Financing Flexibility",
      desc: "Sellers open to structured seller notes, earn-outs, or comprehensive transition training periods achieve higher overall gross valuations.",
    },
  ];

  const industries = [
    {
      title: "Home Services & HVAC",
      desc: "High recurring maintenance revenue, route density, and essential service demand across South and Central Florida.",
    },
    {
      title: "Healthcare & Medical Practices",
      desc: "Strong cash flow dynamics, high barriers to entry, demographic tailwinds, and private equity roll-up interest.",
    },
    {
      title: "Manufacturing & Industrial",
      desc: "Proprietary tooling, B2B contracts, localized supply chain advantages, and robust tangible asset bases.",
    },
    {
      title: "Automotive Services & Collision",
      desc: "Consistent fleet contracts, DRP relationships with insurers, and specialized equipment value.",
    },
    {
      title: "Restaurants & Hospitality",
      desc: "Prime Florida tourism and local foot-traffic locations, established liquor licenses, and proven turnkey systems.",
    },
    {
      title: "Commercial Building Services",
      desc: "Janitorial, commercial landscaping, security, and facility management with sticky annual maintenance contracts.",
    },
    {
      title: "Education & Childcare",
      desc: "Accredited private schools and child development centers with state licensing and waitlist enrollments.",
    },
    {
      title: "Health, Fitness & Wellness",
      desc: "Membership-driven wellness clinics, physical therapy centers, and boutique fitness with predictable MRR.",
    },
    {
      title: "B2B Professional Services",
      desc: "Staffing, digital marketing, IT managed services (MSP), and engineering firms with high client retention.",
    },
    {
      title: "Commercial Real Estate & Facilities",
      desc: "Transactions bundling specialized operating facilities, industrial outdoor storage (IOS), or commercial real estate.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#c59b27] selection:text-white">
      {/* 1. TOP HEADER / ANNOUNCEMENT BAR */}
      <div className="bg-[#0B1C2D] text-gray-300 text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <IconPhone className="w-3.5 h-3.5 text-[#c59b27]" />
              <a
                href="tel:5612201994"
                className="hover:text-white transition-colors"
              >
                (561) 220-1994
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <IconMail className="w-3.5 h-3.5 text-[#c59b27]" />
              <a
                href="mailto:info@kmfbusinessadvisors.com"
                className="hover:text-white transition-colors"
              >
                info@kmfbusinessadvisors.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span className="flex items-center gap-1">
              <IconMapPin className="w-3.5 h-3.5 text-[#c59b27]" />
              Serving All 67 Florida Counties
            </span>
            <span className="hidden md:inline">• Confidential Business Brokerage</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/08/cropped-logo-1.png"
              alt="KMF Business Advisors"
              width={190}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-700">
            <Link
              href="/"
              className="hover:text-[#c59b27] transition-colors"
            >
              Home
            </Link>

            {/* Buy a Business Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setBuyDropdownOpen(true)}
              onMouseLeave={() => setBuyDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors focus:outline-none"
                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
              >
                Buy a Business
                <IconChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#c59b27] transition-transform group-hover:rotate-180" />
              </button>

              {buyDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/businesses-for-sale"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Businesses for Sale in Florida
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Buyer Registration & Criteria
                  </Link>
                </div>
              )}
            </div>

            {/* Sell a Business Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setSellDropdownOpen(true)}
              onMouseLeave={() => setSellDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[#c59b27] font-semibold transition-colors focus:outline-none"
                onClick={() => setSellDropdownOpen(!sellDropdownOpen)}
              >
                Sell a Business
                <IconChevronDown className="w-4 h-4 text-[#c59b27] group-hover:rotate-180 transition-transform" />
              </button>

              {sellDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/sell-your-business"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Sell Your Business
                  </Link>
                  <Link
                    href="/profitable-business-for-sale"
                    className="block px-4 py-2.5 text-sm bg-gray-50 text-[#c59b27] font-semibold"
                  >
                    Profitable Businesses & Valuation
                  </Link>
                </div>
              )}
            </div>

            {/* Franchise Services Dropdown */}
            <div
              className="relative group py-2"
              onMouseEnter={() => setFranchiseDropdownOpen(true)}
              onMouseLeave={() => setFranchiseDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors focus:outline-none"
                onClick={() => setFranchiseDropdownOpen(!franchiseDropdownOpen)}
              >
                Franchise Services
                <IconChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#c59b27] transition-transform group-hover:rotate-180" />
              </button>

              {franchiseDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    href="/sell-a-franchise"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Sell a Franchise in Florida
                  </Link>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Buy a Franchise
                  </a>
                  <Link
                    href="/franchise-your-business-florida"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] transition-colors"
                  >
                    Franchise Your Business Florida
                  </Link>
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative group py-2">
              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#c59b27] transition-colors cursor-pointer"
              >
                <span>About</span>
                <svg
                  className="w-3.5 h-3.5 fill-current opacity-70 group-hover:rotate-180 transition-transform"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block w-52 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                <Link
                  href="/about-kmf"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                >
                  KMF Business Advisors
                </Link>
                <Link
                  href="/our-team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                >
                  Our Team
                </Link>
              </div>
            </div>
            <Link
              href="/contact-us"
              className="hover:text-[#c59b27] transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#valuation-form"
              className="bg-[#c59b27] hover:bg-[#b0881f] text-white font-semibold px-5 py-2.5 rounded-md text-sm shadow-md hover:shadow-lg transition-all duration-200"
            >
              Free Valuation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <IconX className="w-6 h-6" />
            ) : (
              <IconMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-xl">
            <Link
              href="/"
              className="block text-base font-medium text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Buy a Business
              </span>
              <Link
                href="/businesses-for-sale"
                className="block text-sm text-gray-700 py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Businesses for Sale in Florida
              </Link>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Sell a Business
              </span>
              <Link
                href="/sell-your-business"
                className="block text-sm text-gray-700 py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell Your Business
              </Link>
              <Link
                href="/profitable-business-for-sale"
                className="block text-sm text-[#c59b27] font-semibold py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profitable Businesses & Valuation
              </Link>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Franchise Services
              </span>
              <Link
                href="/sell-a-franchise"
                className="block text-sm text-gray-700 py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sell a Franchise in Florida
              </Link>
            </div>
            <div className="border-t border-gray-100 pt-3 space-y-2">
              <Link
                href="/about-kmf"
                className="block text-sm text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                KMF Business Advisors
              </Link>
              <Link
                href="/our-team"
                className="block text-sm text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                href="/contact-us"
                className="block text-sm text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
            <div className="pt-4">
              <a
                href="#valuation-form"
                className="block w-full text-center bg-[#c59b27] text-white py-3 rounded-md font-semibold text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Valuation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (DARK BACKGROUND #0B1C2D) */}
      <section className="relative bg-[#0B1C2D] text-white pt-20 pb-24 overflow-hidden border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#f5d77f] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-6">
              ✦ PROFITABLE BUSINESSES FOR SALE & VALUATION IN FLORIDA
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
              Find Profitable Businesses For Sale or{" "}
              <span className="text-[#c59b27]">Discover What Yours Is Worth</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
              Whether you are searching for established, profitable businesses for sale in Florida or preparing your own company for market, KMF Business Advisors provides confidential valuation guidance, buyer-matching insight, and transactional experience to help you make informed decisions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#valuation-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base"
              >
                Request a Confidential Value Review
                <IconArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white border border-gray-600 hover:border-gray-400 font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-base"
              >
                Schedule a Seller Consultation
              </Link>
            </div>

            {/* Micro-trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <IconLock className="w-3.5 h-3.5 text-[#c59b27]" />
                Confidential inquiry
              </span>
              <span className="flex items-center gap-1.5">
                <IconZap className="w-3.5 h-3.5 text-[#c59b27]" />
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <IconShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
                Information reviewed privately
              </span>
            </div>
          </div>

          {/* 4 Trust Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#c59b27]/15 flex items-center justify-center text-[#c59b27] mb-4">
                <IconLock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                Confidential Owner Consultation
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Private discussions focused on financial performance, timing, transferability, and your personal exit objectives.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#c59b27]/15 flex items-center justify-center text-[#c59b27] mb-4">
                <IconTrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                Florida-Focused Market Analysis
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Practical insight on buyer expectations across South Florida, Tampa Bay, Orlando, and statewide economic hubs.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#c59b27]/15 flex items-center justify-center text-[#c59b27] mb-4">
                <IconBuilding className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                Lease & Asset Considerations
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Guidance on real estate, commercial lease assignments, equipment valuations, and debt service qualification.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-[#c59b27]/15 flex items-center justify-center text-[#c59b27] mb-4">
                <IconScale className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-white text-base mb-2">
                Clear Valuation Assumptions
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Transparent methodology based on financial recasting, cash flow normalization, and verified regional sales comps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE SUMMARY CALLOUT BOX */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#c59b27] p-8 rounded-r-xl shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1C2D] mb-3 flex items-center gap-2">
              <IconFileText className="w-5 h-5 text-[#c59b27]" />
              Executive Summary: Business Valuation in Florida
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              Determining the fair market value of a Florida business requires more than applying a generic multiple. A defensible valuation considers seller's discretionary earnings (SDE) or EBITDA, historical revenue trends, customer concentration, lease terms, transferability of operations, and lender financeability (including SBA requirements). KMF Business Advisors works with business owners across Florida to establish realistic value ranges before entering the market.
            </p>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS VALUATION INTAKE FORM */}
      <section id="valuation-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              CONFIDENTIAL INTAKE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-4">
              Business Valuation Request
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the confidential valuation intake below. Our team reviews all submissions privately to deliver a defensible, data-backed assessment.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B1C2D] mb-2">
                  Thank You for Your Submission
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto mb-6">
                  Your confidential business information has been securely received by KMF Business Advisors. Our senior broker will review your metrics and reach out directly within 1-2 business days.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#0B1C2D] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#142638] transition-colors"
                >
                  Submit Another Valuation Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Business Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Acme Services LLC"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(561) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Industry */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Industry / Business Sector <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="">Select industry category...</option>
                      <option value="HVAC / Plumbing / Electrical">HVAC / Plumbing / Electrical</option>
                      <option value="Home & Facility Services">Home & Facility Services</option>
                      <option value="Healthcare & Medical">Healthcare & Medical Practices</option>
                      <option value="Manufacturing & Industrial">Manufacturing & Industrial</option>
                      <option value="Automotive & Repair">Automotive & Repair</option>
                      <option value="Restaurant / Food & Beverage">Restaurant / Food & Beverage</option>
                      <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                      <option value="B2B & Professional Services">B2B & Professional Services</option>
                      <option value="Logistics & Distribution">Logistics & Distribution</option>
                      <option value="Other">Other Industry</option>
                    </select>
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Desired Sale Timeframe
                    </label>
                    <select
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="">Select timeframe...</option>
                      <option value="Immediately (0 - 3 months)">Immediately (0 - 3 months)</option>
                      <option value="Within 6 months">Within 6 months</option>
                      <option value="6 - 12 months">6 - 12 months</option>
                      <option value="1 - 2 years">1 - 2 years</option>
                      <option value="Just curious / Planning ahead">Just curious / Planning ahead</option>
                    </select>
                  </div>

                  {/* Real Estate */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Facility & Real Estate Status
                    </label>
                    <select
                      name="realEstate"
                      value={formData.realEstate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="">Select status...</option>
                      <option value="Leased commercial space">Leased commercial space</option>
                      <option value="Real estate owned & included in sale">Real estate owned & included in sale</option>
                      <option value="Real estate owned, available for separate lease">Real estate owned, available for separate lease</option>
                      <option value="Home-based / Remote">Home-based / Remote</option>
                    </select>
                  </div>

                  {/* Florida Location */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Location in Florida (City / County) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g. Palm Beach County / Boca Raton"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Years Operating */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Years in Business
                    </label>
                    <input
                      type="text"
                      name="yearsOperating"
                      value={formData.yearsOperating}
                      onChange={handleInputChange}
                      placeholder="e.g. 12 years"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Annual Revenue */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Most Recent Annual Revenue ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="annualRevenue"
                      required
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      placeholder="e.g. $1,850,000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Net Profit / SDE */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Approximate Net Cash Flow / SDE ($) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="netProfit"
                      required
                      value={formData.netProfit}
                      onChange={handleInputChange}
                      placeholder="e.g. $420,000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Owner Salary / Compensation */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Owner Compensation / Salary ($)
                    </label>
                    <input
                      type="text"
                      name="ownerComp"
                      value={formData.ownerComp}
                      onChange={handleInputChange}
                      placeholder="e.g. $150,000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Expected Selling Price */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Expected Selling Price ($ if known)
                    </label>
                    <input
                      type="text"
                      name="expectedPrice"
                      value={formData.expectedPrice}
                      onChange={handleInputChange}
                      placeholder="e.g. $1,500,000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Employees & Owner Hours */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Full-Time Employees & Owner Hours/Week
                    </label>
                    <input
                      type="text"
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      placeholder="e.g. 8 employees, 35 hrs/wk"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                    Additional Notes, Assets, or Transition Priorities
                  </label>
                  <textarea
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Provide any context regarding equipment value, key customer base, lease expiration, or growth opportunities..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Request My Confidential Business Valuation
                    <IconArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                    <IconShieldCheck className="w-4 h-4 text-green-600" />
                    Strict confidentiality guaranteed. We never disclose your identity without permission.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. REALISTIC VALUATION APPROACH SECTION */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
                ✦ REALISTIC VALUATION APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-6">
                A Strong Exit Begins With a Realistic View of Value
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  Pricing a business too high often leads to months on the market, buyer fatigue, and eventual discounting that damages momentum. Conversely, underpricing leaves substantial owner equity on the table after decades of hard work.
                </p>
                <p>
                  At KMF Business Advisors, our broker valuations are grounded in current Florida transactional realities, lender debt-service requirements, and demonstrable recasting methodology. We help owners understand not just what the business could sell for, but who the most probable buyer profile will be and how the deal will be financed.
                </p>
                <p>
                  By taking a candid, professional look at your numbers before initiating marketing, you establish a solid negotiating position from the first buyer inquiry to closing.
                </p>
              </div>
            </div>

            {/* Right Card: What Buyers & Lenders Audit */}
            <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-4 flex items-center gap-2">
                <IconShieldCheck className="w-5 h-5 text-[#c59b27]" />
                What Buyers & Lenders Audit
              </h3>
              <p className="text-xs text-gray-500 mb-6 uppercase tracking-wider font-semibold">
                Core due-diligence checkpoints
              </p>
              <ul className="space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    <strong>3-5 Years of Tax Returns & P&L:</strong> Verifying revenue consistency and margin sustainability.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    <strong>Owner Add-Backs & Normalization:</strong> Separating genuine operational earnings from personal or one-time items.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    <strong>Customer Concentration:</strong> Ensuring no single account represents an unhedged operational risk.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    <strong>Facility & Lease Assignment:</strong> Verifying viable long-term occupancy or real estate conveyance terms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <IconCheckCircle className="w-5 h-5 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>
                    <strong>Management Independence:</strong> Confirming operations continue effectively post-closing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHAT INFLUENCES BUSINESS VALUE? (10 NUMBERED DRIVERS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ✦ VALUATION DRIVERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-4">
              What Influences Business Value?
            </h2>
            <p className="text-gray-600">
              Multiple factors determine whether your company trades at the lower or higher end of historical Florida industry multiples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valuationDrivers.map((driver) => (
              <div
                key={driver.num}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#c59b27] hover:shadow-md transition-all flex items-start gap-4"
              >
                <span className="text-2xl font-black text-[#c59b27]/80 shrink-0 font-mono">
                  {driver.num}
                </span>
                <div>
                  <h3 className="font-bold text-[#0B1C2D] text-base mb-1.5">
                    {driver.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {driver.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. HOW KMF REVIEWS THE OPPORTUNITY (4 VALUATION APPROACHES) */}
      <section className="py-20 bg-[#0B1C2D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#f5d77f] uppercase tracking-wider bg-[#c59b27]/20 border border-[#c59b27]/40 px-3 py-1 rounded-full">
              ✦ VALUATION METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              How KMF Reviews The Opportunity
            </h2>
            <p className="text-gray-300">
              Our broker opinion of value incorporates four disciplined analytical pillars to determine the Most Probable Selling Price (MPSP).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/60 transition-colors">
              <span className="text-xs font-mono font-bold text-[#c59b27] block mb-2">
                APPROACH 01
              </span>
              <h3 className="font-bold text-white text-lg mb-3">
                Income Approach
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Recasting financial statements to isolate discretionary earnings (SDE or EBITDA), applying calibrated industry capitalization rates and cash flow multiples.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/60 transition-colors">
              <span className="text-xs font-mono font-bold text-[#c59b27] block mb-2">
                APPROACH 02
              </span>
              <h3 className="font-bold text-white text-lg mb-3">
                Market Approach
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Benchmarking against closed comparable sales across Florida and regional databases, verifying what qualified buyers actually paid for similar assets.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/60 transition-colors">
              <span className="text-xs font-mono font-bold text-[#c59b27] block mb-2">
                APPROACH 03
              </span>
              <h3 className="font-bold text-white text-lg mb-3">
                Tangible Asset Floor
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Assessing fair market value of furniture, fixtures, specialized equipment (FF&E), inventory, and working capital to ensure a solid asset floor.
              </p>
            </div>

            <div className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/60 transition-colors">
              <span className="text-xs font-mono font-bold text-[#c59b27] block mb-2">
                APPROACH 04
              </span>
              <h3 className="font-bold text-white text-lg mb-3">
                Transaction Reality Check
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Testing deal financeability against SBA 7(a) debt-service coverage ratios (minimum 1.25x), required down payments, and realistic working capital.
              </p>
            </div>
          </div>

          {/* Important Distinction & Scope Disclaimer Box */}
          <div className="bg-[#0f2233] border border-gray-700/80 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-lg font-bold text-[#f5d77f] mb-3 flex items-center gap-2">
              <IconShieldCheck className="w-5 h-5 text-[#c59b27]" />
              Important Distinction & Scope: Broker Opinion of Value vs. Certified Appraisal
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              KMF Business Advisors provides a Broker's Opinion of Value (BOV) and Most Probable Selling Price (MPSP) analysis created specifically for transactional guidance and market positioning. This analysis is not a USPAP-certified appraisal performed for legal disputes, tax filings, or court testimony. We focus on real-world transaction viability, current buyer behavior, and lender underwritability.
            </p>
          </div>
        </div>
      </section>

      {/* 9. HIGH-VALUE FLORIDA INDUSTRIES */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ✦ SECTORS IN DEMAND
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-4">
              High-Value Florida Industries in Active Buyer Demand
            </h2>
            <p className="text-gray-600">
              We represent and advise business owners across diverse thriving commercial sectors throughout the state of Florida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#c59b27] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#c59b27]/10 flex items-center justify-center text-[#c59b27] mb-4">
                    <IconBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1C2D] text-lg mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {ind.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#c59b27]">
                  <span>Active Buyer Pool</span>
                  <IconChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TWO-STAGE DOCUMENT REVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ✦ CONFIDENTIAL PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-4">
              Two-Stage Confidential Document Review
            </h2>
            <p className="text-gray-600">
              We protect your privacy by gathering information in two controlled phases, ensuring sensitive proprietary records remain secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Stage 1 */}
            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 shadow-sm relative">
              <span className="text-xs font-mono font-bold text-white bg-[#0B1C2D] px-3 py-1 rounded-md mb-4 inline-block">
                STAGE 01
              </span>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">
                Initial Intake & Discovery
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                High-level operational overview to determine baseline viability and preliminary valuation expectations.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Annual revenue and gross margin estimates
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Approximate owner compensation & net profit
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Industry segment, Florida location, and staff count
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Facility status (leased vs owned commercial real estate)
                </li>
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="border border-[#c59b27]/30 rounded-2xl p-8 bg-white shadow-md relative">
              <span className="text-xs font-mono font-bold text-white bg-[#c59b27] px-3 py-1 rounded-md mb-4 inline-block">
                STAGE 02
              </span>
              <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">
                Secure Document Verification
              </h3>
              <p className="text-sm text-gray-600 mb-6">
                Conducted under reciprocal non-disclosure to produce detailed financial recasting and final MPSP pricing range.
              </p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  3 years filed federal corporate tax returns
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Year-to-date Profit & Loss and Balance Sheet
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Itemized owner add-back and discretionary expense schedule
                </li>
                <li className="flex items-center gap-2.5">
                  <IconCheckCircle className="w-4 h-4 text-[#c59b27]" />
                  Commercial lease copy & key equipment / FF&E listing
                </li>
              </ul>
            </div>
          </div>

          {/* Security Guarantee Bar */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <IconLock className="w-4 h-4 text-[#c59b27]" />
              <span>
                <strong>Confidentiality First:</strong> We do not contact employees, suppliers, or customers.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <IconShieldCheck className="w-4 h-4 text-[#c59b27]" />
              <span>All documents securely transmitted and stored.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. MULTI-STEP VALUATION FRAMEWORK TABLE */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              STRUCTURED WORKFLOW
            </span>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mt-3 mb-4">
              Valuation Qualification Framework
            </h2>
            <p className="text-gray-600 text-sm">
              Our step-by-step diagnostic process ensures comprehensive evaluation of every operational facet.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#0B1C2D] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4">Stage</th>
                    <th scope="col" className="px-6 py-4">Stage Title</th>
                    <th scope="col" className="px-6 py-4">Key Diagnostic Inquiries</th>
                    <th scope="col" className="px-6 py-4">Analytical Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">01</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Contact & Role</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Owner identity, email, phone, location</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Confidential direct communication</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">02</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Industry & Model</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Sector classification, Florida county, years operating</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Industry multiple benchmarking</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">03</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Revenue & Trends</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Last 3 years gross receipts, trend direction</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Revenue stability verification</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">04</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Cash Flow (SDE)</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Owner salary, personal perks, one-time expenses</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Recasting to true net benefit</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">05</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Facility & Leases</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Lease term, renewal options, real estate owned</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Occupancy and asset transfer risk</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">06</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Operations & Staff</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Full-time staff, management depth, owner hours</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Transferability & buyer readiness</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono font-semibold text-[#c59b27]">07</td>
                    <td className="px-6 py-4 font-semibold text-gray-900">Exit Timing</td>
                    <td className="px-6 py-4 text-xs text-gray-600">Target sale timeframe, seller transition period</td>
                    <td className="px-6 py-4 text-xs text-gray-500">Go-to-market roadmap design</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Collapsible details for Technical Qualification Logic */}
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button
                type="button"
                onClick={() => setShowTechLogic(!showTechLogic)}
                className="text-xs font-semibold text-gray-700 hover:text-[#c59b27] flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span>⚙️ View Technical Form Qualification Logic</span>
                <IconChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showTechLogic ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showTechLogic && (
                <div className="mt-3 text-xs text-gray-600 space-y-2 bg-white p-4 rounded border border-gray-200 font-mono">
                  <p>• Tier 1 ($1M+ SDE): Evaluated for Private Equity, Corporate Strategic Acquirers, and Family Offices.</p>
                  <p>• Tier 2 ($250k - $1M SDE): Pre-screened for SBA 7(a) acquisition financing with 10-20% equity injection.</p>
                  <p>• Tier 3 (&lt;$250k SDE): Evaluated for individual owner-operators and strategic bolt-on regional buyers.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT HAPPENS AFTER SUBMISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ✦ THE NEXT STEPS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1C2D] mt-3 mb-4">
              What Happens After You Request a Valuation?
            </h2>
            <p className="text-gray-600">
              A clear, transparent 6-step roadmap from initial review to your final valuation presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Private Review & Verification",
                desc: "A designated KMF advisor reviews your submitted metrics against Florida industry benchmarks.",
              },
              {
                step: "02",
                title: "Introductory Owner Call",
                desc: "A brief, 15-minute phone call to clarify add-backs, operational nuances, and your target timing.",
              },
              {
                step: "03",
                title: "Recasting & Financial Analysis",
                desc: "We calculate normalized SDE or EBITDA by recasting discretionary and one-time owner expenses.",
              },
              {
                step: "04",
                title: "Market Comparable Benchmarking",
                desc: "We analyze verified closed transactions of similar Florida businesses in your specific sector.",
              },
              {
                step: "05",
                title: "Valuation Summary Presentation",
                desc: "We present a defensible Most Probable Selling Price (MPSP) range and explain key value drivers.",
              },
              {
                step: "06",
                title: "Strategic Exit Roadmap",
                desc: "You decide whether to prepare for immediate listing, optimize value, or hold for future timing.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 relative hover:shadow-md transition-shadow"
              >
                <span className="text-3xl font-black text-[#c59b27]/40 block mb-2 font-mono">
                  {st.step}
                </span>
                <h3 className="font-bold text-[#0B1C2D] text-lg mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA SECTION (DARK BACKGROUND #0B1C2D) */}
      <section className="py-20 bg-[#0B1C2D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#f5d77f] uppercase tracking-wider bg-[#c59b27]/20 border border-[#c59b27]/40 px-3 py-1 rounded-full">
                CONFIDENTIAL VALUE REVIEW
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
                Know Your Position Before You Enter the Market
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you plan to exit within the next 90 days or are planning ahead for the next 2-3 years, an accurate business valuation gives you clarity, leverage, and peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                <a
                  href="#valuation-form"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors text-base"
                >
                  Request My Confidential Value Review
                  <IconArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/15612201994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-colors text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* Call Us Strip */}
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <IconPhone className="w-4 h-4 text-[#c59b27]" />
                <span>Call Us Any Time:</span>
                <a
                  href="tel:5612201994"
                  className="font-bold text-white hover:text-[#c59b27] transition-colors"
                >
                  (561) 220-1994
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-800">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Business valuation and financial analysis review"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl font-bold text-[#0B1C2D] mt-3 mb-4">
              Questions About Business Valuation
            </h2>
            <p className="text-gray-600">
              Clear answers to common questions regarding business appraisal, earnings recasting, and selling.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full px-6 py-5 text-left font-bold text-[#0B1C2D] text-base sm:text-lg flex justify-between items-center hover:text-[#c59b27] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <IconChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFaq === i ? "rotate-180 text-[#c59b27]" : ""
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FOOTER */}
      <footer className="bg-[#0B1C2D] text-gray-400 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: About */}
            <div>
              <Image
                src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/08/cropped-logo-1.png"
                alt="KMF Business Advisors"
                width={180}
                height={48}
                className="h-10 w-auto object-contain mb-4 brightness-200 contrast-200"
              />
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                KMF Business Advisors is a premier Florida business brokerage firm providing confidential M&A and business intermediary services across all 67 Florida counties.
              </p>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Palm Beach • Broward • Miami-Dade</p>
                <p>Tampa Bay • Orlando • Statewide</p>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/businesses-for-sale"
                    className="hover:text-white transition-colors"
                  >
                    Businesses for Sale in Florida
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell-your-business"
                    className="hover:text-white transition-colors"
                  >
                    Sell Your Business
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profitable-business-for-sale"
                    className="text-[#c59b27] font-semibold"
                  >
                    Profitable Businesses & Valuation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="hover:text-white transition-colors"
                  >
                    About KMF Advisors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Brokerage Services
              </h3>
              <ul className="space-y-2 text-xs">
                <li>Confidential Business Sales</li>
                <li>Broker Opinion of Value (BOV)</li>
                <li>Buyer Representation & Matching</li>
                <li>SBA Loan Pre-Qualification Support</li>
                <li>Commercial Lease Assignment Guidance</li>
                <li>Mergers & Acquisitions Advisory</li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                Contact Office
              </h3>
              <div className="space-y-3 text-xs">
                <p className="flex items-start gap-2">
                  <IconMapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>Florida, United States</span>
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <a
                    href="tel:5612201994"
                    className="hover:text-white transition-colors"
                  >
                    (561) 220-1994
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <IconMail className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <a
                    href="mailto:info@kmfbusinessadvisors.com"
                    className="hover:text-white transition-colors"
                  >
                    info@kmfbusinessadvisors.com
                  </a>
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/15612201994"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25D366] text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-[#20ba5a] transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} KMF Business Advisors. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/15612201994"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
