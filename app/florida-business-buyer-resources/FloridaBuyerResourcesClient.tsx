'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FloridaBuyerResourcesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First FAQ open by default
  const [formData, setFormData] = useState({
    refNumber: '',
    fullName: '',
    email: '',
    phone: '',
    locations: '',
    preferredIndustry: 'HVAC & Mechanical Services',
    investmentBudget: '$500,000 – $1,000,000',
    liquidCapital: '$250,000 – $500,000',
    purchaseStructure: 'Financing Required (SBA / Conventional)',
    timeframe: 'Immediate (0 – 3 months)',
    visaInterest: 'Not Applicable (US Citizen / Permanent Resident)',
    opportunityAlerts: true,
    honeypot: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: 'What should I prepare before contacting KMF about an acquisition?',
      a: 'Define the preferred industry, geography, budget, owner role and minimum earnings. Prepare a buyer profile, proof of funds and lender information so KMF can evaluate fit efficiently.',
    },
    {
      q: 'When does due diligence begin?',
      a: 'For KMF transactions that proceed through a purchase contract, the formal due-diligence period generally begins after the parties sign the contract and the required escrow deposit is made. The contract controls the scope and timing.',
    },
    {
      q: 'Can the due-diligence period be extended?',
      a: 'An extension may be considered when reasonably required, but it must be agreed to by the parties and documented properly. A buyer should not assume that an extension will be granted.',
    },
    {
      q: 'Is a letter of intent accepted for every transaction?',
      a: 'No. Under KMF\'s process, an LOI is generally reserved for transactions of $10 million or more or matters whose complexity makes one appropriate. Smaller transactions generally use an asset-purchase contract with escrow and a defined due-diligence period.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. BUYER ADVISORY ROADMAP / TIMELINE HERO */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              BUYER ADVISORY ROADMAP
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Smart Acquisition Guidance for{' '}
              <span className="text-amber-400">Florida Buyers</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Master the essential steps of business acquisition from securing SBA financing to closing seamless deal structures.
            </p>
          </div>

          {/* 3 Step Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5 border border-amber-500/30">
                  STEP 01
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  SBA & Acquisition Financing
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Understand 7(a) SBA loan eligibility, down payment requirements (10-20%), and equity structures to finance your deal.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/60">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-semibold border border-slate-700">
                  Pre-Approval Guidance
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5 border border-amber-500/30">
                  STEP 02
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  Rigorous Due Diligence
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Analyze tax returns, balance sheets, lease agreements, and staff retention risks before finalizing purchase terms.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/60">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-semibold border border-slate-700">
                  Financial Verification
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl p-8 bg-slate-800/90 border border-slate-700/80 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-5 border border-amber-500/30">
                  STEP 03
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  LOI & Offer Structuring
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Craft binding and non-binding Letters of Intent (LOI) with built-in protection clauses and earn-out schedules.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-700/60">
                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-amber-400 text-xs font-semibold border border-slate-700">
                  Legal Protection
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE BUYER REGISTRATION FORM */}
      <section id="buyer-registration" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Verified Buyer Onboarding
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Buyer Registration
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Register your acquisition criteria with KMF Business Advisors to receive confidential deal teasers and off-market opportunities.
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-emerald-900">Registration Complete</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto leading-relaxed">
                  Thank you for registering. A senior broker will review your investment parameters and reach out confidentially with matching listings.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Reference Number */}
                  <div>
                    <label htmlFor="refNumber" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Reference Number (If Any)
                    </label>
                    <input
                      type="number"
                      id="refNumber"
                      name="refNumber"
                      value={formData.refNumber}
                      onChange={handleChange}
                      placeholder="e.g. 104"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    />
                  </div>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(954) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    />
                  </div>

                  {/* Locations */}
                  <div>
                    <label htmlFor="locations" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Target Locations / Regions
                    </label>
                    <input
                      type="text"
                      id="locations"
                      name="locations"
                      value={formData.locations}
                      onChange={handleChange}
                      placeholder="e.g., Tampa Bay, Orlando, South Florida, Statewide"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Preferred Industries */}
                  <div>
                    <label htmlFor="preferredIndustry" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Industry
                    </label>
                    <select
                      id="preferredIndustry"
                      name="preferredIndustry"
                      value={formData.preferredIndustry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="HVAC & Mechanical Services">HVAC & Mechanical Services</option>
                      <option value="Construction & Trade Services">Construction & Trade Services</option>
                      <option value="Food & Beverage / Restaurants">Food & Beverage / Restaurants</option>
                      <option value="Professional & Business Services">Professional & Business Services</option>
                      <option value="Retail & E-Commerce">Retail & E-Commerce</option>
                      <option value="Healthcare & Medical">Healthcare & Medical</option>
                      <option value="Distribution & Logistics">Distribution & Logistics</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Total Investment Budget */}
                  <div>
                    <label htmlFor="investmentBudget" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Total Investment Budget
                    </label>
                    <select
                      id="investmentBudget"
                      name="investmentBudget"
                      value={formData.investmentBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="Under $250,000">Under $250,000</option>
                      <option value="$250,000 – $500,000">$250,000 – $500,000</option>
                      <option value="$500,000 – $1,000,000">$500,000 – $1,000,000</option>
                      <option value="$1,000,000 – $2,500,000">$1,000,000 – $2,500,000</option>
                      <option value="$2,500,000 – $5,000,000+">$2,500,000 – $5,000,000+</option>
                    </select>
                  </div>

                  {/* Available Liquid Capital */}
                  <div>
                    <label htmlFor="liquidCapital" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Available Liquid Capital
                    </label>
                    <select
                      id="liquidCapital"
                      name="liquidCapital"
                      value={formData.liquidCapital}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="Under $100,000">Under $100,000</option>
                      <option value="$100,000 – $250,000">$100,000 – $250,000</option>
                      <option value="$250,000 – $500,000">$250,000 – $500,000</option>
                      <option value="$500,000 – $1,000,000+">$500,000 – $1,000,000+</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Purchase Structure */}
                  <div>
                    <label htmlFor="purchaseStructure" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Purchase Structure
                    </label>
                    <select
                      id="purchaseStructure"
                      name="purchaseStructure"
                      value={formData.purchaseStructure}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="All Cash">All Cash</option>
                      <option value="Financing Required (SBA / Conventional)">Financing Required (SBA / Conventional)</option>
                      <option value="Cash + Seller Financing">Cash + Seller Financing</option>
                    </select>
                  </div>

                  {/* Target Acquisition Timeframe */}
                  <div>
                    <label htmlFor="timeframe" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Acquisition Timeframe
                    </label>
                    <select
                      id="timeframe"
                      name="timeframe"
                      value={formData.timeframe}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="Immediate (0 – 3 months)">Immediate (0 – 3 months)</option>
                      <option value="3 – 6 months">3 – 6 months</option>
                      <option value="6 – 12 months">6 – 12 months</option>
                      <option value="Just exploring / 12+ months">Just exploring / 12+ months</option>
                    </select>
                  </div>

                  {/* Visa-Related Business Interest */}
                  <div>
                    <label htmlFor="visaInterest" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Visa-Related Business Interest
                    </label>
                    <select
                      id="visaInterest"
                      name="visaInterest"
                      value={formData.visaInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm bg-white"
                    >
                      <option value="Not Applicable (US Citizen / Permanent Resident)">Not Applicable (US Citizen / Permanent Resident)</option>
                      <option value="E-2 Treaty Investor Visa">E-2 Treaty Investor Visa</option>
                      <option value="EB-5 Immigrant Investor Program">EB-5 Immigrant Investor Program</option>
                      <option value="L-1 Intracompany Transferee">L-1 Intracompany Transferee</option>
                    </select>
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="opportunityAlerts"
                      checked={formData.opportunityAlerts}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-300"
                    />
                    <span className="text-xs sm:text-sm text-slate-700 font-medium">
                      I consent to receive confidential business opportunity alerts and new listing updates.
                    </span>
                  </label>
                </div>

                {/* Honeypot field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2"
                >
                  <span>Register as a Buyer</span>
                  <span>&rarr;</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. EXCLUSIVE ACCESS CTA BANNER */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 lg:p-14 bg-gradient-to-r from-[#0b1c2d] to-slate-900 text-white shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                EXCLUSIVE ACCESS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Get First Access to Off-Market Florida Deals
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Register as an approved buyer to receive confidential teasers before businesses are publicly listed on the market.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto text-center">
              <a
                href="#buyer-registration"
                className="inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap"
              >
                <span>Register As Verified Buyer</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Buyer Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Common questions from acquisition buyers navigating Florida business transactions.
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
                  <Link href="/frequently-asked-questions" className="hover:text-amber-400 transition-colors flex items-center gap-2">
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
