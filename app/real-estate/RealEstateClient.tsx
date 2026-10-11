'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RealEstateClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [leasingTab, setLeasingTab] = useState<'landlords' | 'tenants'>('landlords');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'Can KMF handle both the business sale and the real estate transaction simultaneously?',
      a: 'Yes. Many business sales involve underlying commercial real estate (freehold property or specialized facilities). As licensed Florida business brokers and real estate professionals, KMF handles integrated transactions where both the operational business and real property are marketed and closed in synergy, maximizing value and reducing complications.',
    },
    {
      q: 'How do you determine the market value of commercial real estate in Florida?',
      a: 'We evaluate several core factors: comparable sales (comps) in your immediate submarket, cap rates, current income and net operating income (NOI), tenant lease terms, property condition, zoning, and future development potential. We combine proprietary MLS data, Costar/LoopNet analytics, and local market insight to provide realistic, defensible valuations.',
    },
    {
      q: 'Does KMF represent both landlords and tenants in leasing agreements?',
      a: 'Yes. For landlords, we craft strategic marketing campaigns to attract qualified, credit-worthy tenants at optimal rental rates while minimizing vacancy periods. For tenants, we provide tenant representation—identifying ideal locations, analyzing foot traffic and demographics, and negotiating lease terms, tenant improvements (TI allowances), and escalation clauses.',
    },
    {
      q: 'What should a buyer or investor verify during commercial real estate due diligence?',
      a: 'Crucial steps include Phase I Environmental site assessments, structural and engineering inspections, zoning compliance and ADA adherence, review of all existing lease agreements and rent rolls, historical operating expenses, property tax reassessments, and municipal lien searches. KMF guides buyers through every step of this diligence process.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">


      {/* HERO SECTION */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Commercial Real Estate Florida
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Commercial Real Estate Florida Sales & Leasing.{' '}
                <span className="text-amber-400">Buy, Sell, or Lease with Confidence</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                KMF Business Advisors helps Florida property owners, investors, and business owners navigate commercial real estate sales and leasing from listing to closing. With combined expertise in business brokerage and commercial property transactions, we protect your value and optimize terms.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-[1.02]"
                >
                  Get a Free Property Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="https://bizmls.com/cgi-bin/a-bus2ff.asp?display_allcats=go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base border border-slate-700 transition-colors"
                >
                  Search Commercial Listings ↗
                </a>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Licensed FL Brokers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Landlord & Tenant Rep</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Office, Retail, Industrial</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                  <span>Statewide FL Coverage</span>
                </div>
              </div>
            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Florida Commercial Real Estate Architecture"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Florida Commercial Advisory</p>
                      <h4 className="text-base font-bold">Sales, Acquisitions & Leasing</h4>
                    </div>
                    <span className="px-3 py-1 rounded bg-amber-500/20 text-amber-300 font-semibold text-xs border border-amber-500/40">
                      20+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES OVERVIEW */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Full-Spectrum Commercial Representation
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Real Estate Services Tailored to Your Investment Goals
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Whether you are divesting an income-producing asset, searching for your next corporate headquarters, or negotiating complex lease terms, KMF delivers strategic execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Sales */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Commercial Property Sales & Acquisitions</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  We represent buyers, sellers, and investors across commercial property transactions throughout South Florida and statewide. From single-tenant net lease (NNN) properties to multi-tenant office and industrial assets, we evaluate cap rates, manage confidential marketing, qualify accredited buyers, and facilitate thorough due diligence.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Property Valuation & Financial Underwriting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Targeted Off-Market & MLS Marketing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> 1031 Exchange Acquisition Guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Business + Real Estate Package Structuring
                  </li>
                </ul>
              </div>
              <a
                href="#sales-process"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-bold text-sm tracking-wide"
              >
                Explore Sales Process <span className="ml-1.5">↓</span>
              </a>
            </div>

            {/* Service 2: Leasing */}
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Commercial Leasing & Advisory</h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Our commercial leasing advisors represent landlords seeking stable, high-credit tenants as well as tenants seeking prime commercial space with favorable lease conditions. We analyze local market rates, draft letters of intent (LOIs), negotiate tenant improvement allowances, and protect your commercial leasehold interests.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-8 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Landlord Leasing Representation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Tenant Site Selection & Representation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Lease Renewal & Extension Negotiations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> Retail, Office & Industrial Space Matching
                  </li>
                </ul>
              </div>
              <a
                href="#leasing-process"
                className="inline-flex items-center text-amber-600 hover:text-amber-700 font-bold text-sm tracking-wide"
              >
                Explore Leasing Process <span className="ml-1.5">↓</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH KMF */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400">
              Why KMF Commercial
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Advantage of Dual Business & Real Estate Expertise
            </h3>
            <p className="text-slate-300 text-base sm:text-lg">
              Unlike traditional commercial brokerages that view property strictly as bricks and mortar, KMF understands the underlying business value, revenue models, and operational imperatives driving commercial decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                01
              </div>
              <h4 className="text-lg font-bold text-white">Dual Expertise</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                We handle transactions where business operations and real estate intersect, ensuring seamless coordinated closings without duplicate broker friction.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                02
              </div>
              <h4 className="text-lg font-bold text-white">Market Data-Driven</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                We utilize real-time Florida commercial market data, cap rate analysis, comps, and localized zoning regulations to price properties competitively.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                03
              </div>
              <h4 className="text-lg font-bold text-white">Negotiation Strength</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Decades of high-stakes dealmaking experience give our clients the edge in purchase contract terms, lease covenants, TI allowances, and contingencies.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-800/90 border border-slate-700/80 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xl">
                04
              </div>
              <h4 className="text-lg font-bold text-white">Full-Service Coordination</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                From environmental Phase I reviews and title coordination to legal documentation and lender approvals, we guide the deal smoothly to the closing table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SALES PROCESS */}
      <section id="sales-process" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Commercial Sales Methodology
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 6-Step Commercial Sales Process
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              A structured, confidential process designed to maximize net proceeds, attract vetted investors, and ensure clean closings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">01</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Property Valuation & Market Analysis</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We perform an in-depth valuation assessing income statements, cap rates, replacement cost, recent regional comps, and current commercial zoning to define the optimal listing price.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">02</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Listing Strategy & Marketing</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We build professional offering memorandums (OMs), launch targeted digital campaigns across top commercial exchanges, and tap our proprietary database of active Florida real estate investors.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">03</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Buyer Qualification & Vetting</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every interested buyer is screened for financial capacity, proof of funds, and acquisition track record before sensitive property records and rent rolls are shared under strict NDAs.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">04</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Offer Negotiation & Structuring</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We evaluate Letters of Intent (LOIs) and Purchase & Sale Agreements (PSA), negotiating purchase price, earnest money deposits, financing terms, and inspection timeframes to favor your position.
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">05</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Due Diligence Coordination</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We coordinate seamlessly between environmental consultants, property inspectors, title companies, and attorneys to resolve any inspection contingencies quickly and decisively.
              </p>
            </div>

            {/* Step 6 */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-amber-500 font-extrabold text-3xl">06</span>
              <h4 className="text-xl font-bold text-slate-900 mt-2 mb-3">Closing & Transaction Finalization</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                We monitor escrow deposits, review final closing statements (HUD/settlement sheets), assist with prorations and tenant transfer notices, and ensure clean disbursement of closing funds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL LEASING PROCESS (INTERACTIVE TABS) */}
      <section id="leasing-process" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Commercial Leasing Framework
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Landlord & Tenant Representation Process
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored approaches whether you are looking to monetize vacant commercial space or secure prime commercial square footage.
            </p>

            {/* Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 mt-4">
              <button
                onClick={() => setLeasingTab('landlords')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  leasingTab === 'landlords'
                    ? 'bg-slate-900 text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                For Landlords
              </button>
              <button
                onClick={() => setLeasingTab('tenants')}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
                  leasingTab === 'tenants'
                    ? 'bg-slate-900 text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                For Tenants
              </button>
            </div>
          </div>

          {/* Landlord Tab Content */}
          {leasingTab === 'landlords' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  1
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Property Assessment & Rate Strategy</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We inspect your asset, review submarket vacancy rates, and set competitive NNN, Modified Gross, or Full-Service lease rates.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  2
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Targeted Marketing & Tenant Sourcing</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We syndicate your property across commercial channels, broker networks, and business owner databases to source creditworthy tenants.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  3
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Tenant Screening & Financial Review</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We review tenant balance sheets, tax returns, credit reports, and business history to protect your investment from default risks.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  4
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Lease Agreement & Closing</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We negotiate favorable lease covenants, escalation clauses, security deposits, and personal guarantees before final execution.
                </p>
              </div>
            </div>
          )}

          {/* Tenant Tab Content */}
          {leasingTab === 'tenants' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  1
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Needs Assessment & Site Criteria</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We define your square footage requirements, foot traffic needs, parking ratios, ceiling heights, zoning constraints, and target budget.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  2
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Market Search & Property Tours</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We scour on-market listings and off-market commercial opportunities across Florida, curating private tours of shortlisted properties.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  3
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Proposal & Lease Negotiation</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We submit Letters of Intent (LOIs) and vigorously negotiate base rent, free rent build-out periods, and Tenant Improvement (TI) allowances.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center mb-4">
                  4
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Move-In & Lease Execution</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We review the final commercial lease agreement alongside your legal counsel to eliminate onerous clauses and confirm move-in readiness.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PROPERTY TYPES WE HANDLE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Commercial Asset Classes
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Property Types We Handle Across Florida
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Specialized expertise tailored to the unique economic and zoning dynamics of each commercial asset class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Office */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🏢
              </div>
              <h4 className="text-xl font-bold text-slate-900">Office Properties</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Class A, B, and C office buildings, corporate headquarters, medical office suites, and professional business parks throughout Florida's central business districts and suburban corridors.
              </p>
            </div>

            {/* Card 2: Retail */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🛍️
              </div>
              <h4 className="text-xl font-bold text-slate-900">Retail & Shopping Centers</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Neighborhood strip centers, standalone retail pads, quick-service restaurant (QSR) sites with drive-thrus, and prime downtown storefronts with high foot-traffic counts.
              </p>
            </div>

            {/* Card 3: Industrial */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🏭
              </div>
              <h4 className="text-xl font-bold text-slate-900">Industrial & Warehouses</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Flex-space facilities, light manufacturing plants, distribution warehouses, dock-high storage facilities, and logistics centers near major Florida ports and interstates.
              </p>
            </div>

            {/* Card 4: Mixed-Use */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🏙️
              </div>
              <h4 className="text-xl font-bold text-slate-900">Mixed-Use Properties</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Urban developments integrating ground-floor retail or dining with residential or office spaces above, providing diversified revenue streams and high tenant retention.
              </p>
            </div>

            {/* Card 5: Land (Spanning 2 columns on lg) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🏗️
              </div>
              <h4 className="text-xl font-bold text-slate-900">Land & Commercial Development Sites</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zoned commercial parcels, outparcels, infill redevelopment acreage, and prime highway frontage land ready for ground-up commercial, hospitality, or multifamily development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET SNAPSHOT STATS */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Florida Commercial Real Estate Market Snapshot
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Current benchmark indicators reflecting South Florida commercial vitality.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">$28 - $45</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Avg. Lease Rate / SF</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">4.2%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Market Vacancy Avg.</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">65 Days</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Avg. Days on Market</div>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">1,250+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Active Leads & Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUTH FLORIDA SERVICE AREAS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Regional Coverage
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              South Florida Commercial Service Hubs
            </h3>
            <p className="text-slate-600 text-base sm:text-lg">
              Active boots on the ground across Florida's fastest growing commercial corridors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Fort Lauderdale & Broward</h4>
              <p className="text-sm text-slate-600">
                Downtown financial core, Cypress Creek office district, Fort Lauderdale-Hollywood airport industrial submarkets.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Boca Raton & South Palm Beach</h4>
              <p className="text-sm text-slate-600">
                Glades Rd retail corridor, Boca Raton Innovation Campus, executive corporate parks, and Mizner Park retail.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Miami & Miami-Dade County</h4>
              <p className="text-sm text-slate-600">
                Brickell, Downtown Miami, Doral logistics hub, Coral Gables corporate suites, and Wynwood commercial properties.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Delray Beach & Atlantic Corridor</h4>
              <p className="text-sm text-slate-600">
                Atlantic Avenue boutique retail, mixed-use redevelopment parcels, and Congress Ave commercial spaces.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">West Palm Beach & Palm Beach</h4>
              <p className="text-sm text-slate-600">
                Clematis St, The Square district, I-95 corridor flex properties, and Palm Beach Gardens commercial centers.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-lg font-bold text-slate-900 mb-1">Orlando & Tampa Bay (Statewide)</h4>
              <p className="text-sm text-slate-600">
                Central Florida tourism hubs, I-4 corridor industrial warehouses, and West Coast commercial corridors.
              </p>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
            <h4 className="text-base font-bold text-slate-900">Need Commercial Representation Outside These Areas?</h4>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
              Our Florida licensed brokerage covers all 67 counties with deep relationships across Tampa, Orlando, Jacksonville, and the Florida Panhandle.
            </p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY & STATS */}
      <section className="py-16 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">20+ Years</div>
              <p className="text-slate-400 text-sm mt-1">Industry Experience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">Licensed Brokers</div>
              <p className="text-slate-400 text-sm mt-1">FL Real Estate & Business</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">IBBA / BBF / IFA</div>
              <p className="text-slate-400 text-sm mt-1">Accredited Affiliations</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">100% Confidential</div>
              <p className="text-slate-400 text-sm mt-1">Discreet Transactions</p>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY LEADERSHIP */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Leadership
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Advisory Leadership You Can Count On
            </h3>
            <p className="text-slate-600 text-base">
              Direct access to senior brokers with decades of verified transactional experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* John C. Bucher */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-500 font-bold text-xl flex items-center justify-center shrink-0">
                    JB
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">John C. Bucher</h4>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                      Managing Director & Commercial Specialist
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Over 25 years of high-level transaction experience across commercial real estate, multi-unit acquisitions, and middle-market advisory throughout South Florida.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Licensed Florida Broker</span>
                <Link href="/contact-us" className="text-amber-600 font-bold hover:underline">
                  Connect Directly →
                </Link>
              </div>
            </div>

            {/* Sanjay Wadhwani */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-500 font-bold text-xl flex items-center justify-center shrink-0">
                    SW
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Sanjay Wadhwani</h4>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                      President & Managing Broker
                    </p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Founder of KMF Business Advisors. Expert in corporate M&A, business valuations, franchise systems, and commercial property divestment strategies.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>swadhwani@kmfbusinessadvisors.com</span>
                <a href="tel:9548649161" className="text-amber-600 font-bold hover:underline">
                  954-864-9161
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Verified Client Reviews
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Florida Business & Property Owners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                "KMF handled the sale of our commercial warehouse and the operational distribution business at the same time. Having one team manage both the real estate closing and business transfer saved us months and thousands in fees."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-sm">Alex Henriquez</p>
                <p className="text-xs text-slate-500">Commercial Warehouse Owner, Fort Lauderdale</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                "When looking for a new corporate office space in Boca Raton, Sanjay and John helped us review multiple locations, renegotiated the tenant improvement package, and saved our firm over $60k on the final lease term."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-sm">Matheus Oliveira</p>
                <p className="text-xs text-slate-500">Managing Director, South Florida</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                "Utmost professionalism. They represented our retail center for leasing and brought us two triple-net long term corporate tenants within 90 days. Highly recommend KMF for any commercial property deal."
              </p>
              <div>
                <p className="font-bold text-slate-900 text-sm">Raul Smith</p>
                <p className="text-xs text-slate-500">Retail Property Investor, Miami-Dade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / BOOK APPOINTMENT BANNER */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Book a Private Consultation with Trusted Florida Commercial & Business Advisors
              </h3>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                Ready to assess the market value of your commercial property, discuss a 1031 exchange, or evaluate lease options? We are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all hover:scale-105"
                >
                  Book Appointment Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="tel:9548649161"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-colors"
                >
                  Call 954-864-9161
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right">
              <div className="inline-block p-6 rounded-2xl bg-slate-800/80 border border-slate-700 backdrop-blur-sm text-left">
                <h5 className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-2">Direct Contact</h5>
                <p className="text-slate-300 text-sm mb-4">Fort Lauderdale & Palm Beach Offices</p>
                <p className="text-white font-bold text-lg">954-864-9161</p>
                <p className="text-slate-400 text-xs">swadhwani@kmfbusinessadvisors.com</p>
                <p className="text-slate-400 text-xs mt-2">Mon - Sat: 8:00 AM - 7:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Frequently Asked Questions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Florida Commercial Real Estate FAQs
            </h3>
            <p className="text-slate-600 text-base">
              Common questions regarding commercial real estate sales, leasing, and advisory in Florida.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden transition-colors"
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
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
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
                Premier business brokerage and commercial real estate advisory firm serving Florida business owners, investors, and franchisees. Licensed Florida Real Estate & Business Brokers.
              </p>
              <div className="pt-2 text-sm text-slate-300 space-y-1">
                <p>📞 954-864-9161</p>
                <p>✉️ swadhwani@kmfbusinessadvisors.com</p>
                <p>📍 Fort Lauderdale, Boca Raton & South Florida</p>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Buy & Sell</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-amber-400 transition-colors">
                    Businesses for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/profitable-business-for-sale" className="hover:text-amber-400 transition-colors">
                    Profitable Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-business" className="hover:text-amber-400 transition-colors">
                    Sell Your Business
                  </Link>
                </li>
                <li>
                  <Link href="/sell-a-franchise" className="hover:text-amber-400 transition-colors">
                    Sell a Franchise
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/franchise-your-business-florida" className="hover:text-amber-400 transition-colors">
                    Franchise Your Business
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors">
                    Commercial Real Estate
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-business#valuation" className="hover:text-amber-400 transition-colors">
                    Business Valuation
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bizmls.com/cgi-bin/a-bus2ff.asp?display_allcats=go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-amber-400 transition-colors"
                  >
                    MLS Listings ↗
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-3">
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about-kmf" className="hover:text-amber-400 transition-colors">
                    About Firm
                  </Link>
                </li>
                <li>
                  <Link href="/our-team" className="hover:text-amber-400 transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/frequently-asked-questions" className="hover:text-amber-400 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-amber-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© {new Date().getFullYear()} KMF Business Advisors. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
              <Link href="/sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
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
