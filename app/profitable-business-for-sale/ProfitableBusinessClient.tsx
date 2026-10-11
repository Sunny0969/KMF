'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProfitableBusinessClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    industry: 'Residential HVAC contractors',
    timeframe: 'Immediate',
    realEstateIncluded: 'No',
    location: '',
    yearsOperating: '',
    annualRevenue: '',
    profitSDE: '',
    ownerCompensation: '',
    expectedPrice: '',
    employees: '',
    ownerHours: '',
  });

  const [activeStepCard, setActiveStepCard] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const valuationFactors = [
    {
      num: '01',
      title: 'Normalized Earnings',
      desc: "Seller’s Discretionary Earnings (SDE) or EBITDA after reviewing legitimate owner adjustments and nonrecurring items.",
    },
    {
      num: '02',
      title: 'Revenue Quality',
      desc: 'Stability, growth, recurring revenue, margins, customer concentration, and collection history.',
    },
    {
      num: '03',
      title: 'Owner Dependence',
      desc: 'How much the company relies on the owner for sales, production, relationships, licensing, or daily management.',
    },
    {
      num: '04',
      title: 'Employees & Management',
      desc: 'Tenure, skill, compensation, retention risk, and whether management can operate after a transition.',
    },
    {
      num: '05',
      title: 'Assets & Working Capital',
      desc: 'Equipment, vehicles, inventory, receivables, intellectual property, and working-capital requirements.',
    },
    {
      num: '06',
      title: 'Lease & Real Estate',
      desc: 'Rent, lease term, renewal options, transferability, landlord approval, location, and whether property is included.',
    },
    {
      num: '07',
      title: 'Industry & Market Demand',
      desc: 'Buyer activity, financing availability, regulation, competition, and the company’s local market position.',
    },
    {
      num: '08',
      title: 'Transferability & Risk',
      desc: 'Licenses, contracts, supplier relationships, litigation, concentration, compliance, and documentation.',
    },
    {
      num: '09',
      title: 'Growth Potential',
      desc: 'Capacity, geographic expansion, new services, untapped marketing channels, and scalable systems.',
    },
    {
      num: '10',
      title: 'Deal Structure',
      desc: 'Cash at closing, seller financing, earnouts, retained assets, debt, and the inclusion of real estate can affect price and proceeds.',
    },
  ];

  const industries = [
    {
      title: 'Home Services & Construction',
      desc: 'HVAC, plumbing, electrical, roofing, restoration, pest control, landscaping',
      icon: '🛠️',
    },
    {
      title: 'Healthcare & Senior Care',
      desc: 'Home healthcare, assisted living, medical practices, therapy, staffing',
      icon: '🩺',
    },
    {
      title: 'Manufacturing & Distribution',
      desc: 'Industrial manufacturing, food manufacturing, wholesale, import/export',
      icon: '🏭',
    },
    {
      title: 'Automotive & Transportation',
      desc: 'Repair, collision, fleet service, car wash, trucking, logistics',
      icon: '🚗',
    },
    {
      title: 'Restaurants & Hospitality',
      desc: 'Restaurants, multi-unit concepts, catering, bars, hotels',
      icon: '🍽️',
    },
    {
      title: 'Commercial Services',
      desc: 'Cleaning, security, fire protection, maintenance, route businesses',
      icon: '🏢',
    },
    {
      title: 'Education & Childcare',
      desc: 'Childcare centers, private schools, training and enrichment',
      icon: '🎓',
    },
    {
      title: 'Wellness & Medical Aesthetics',
      desc: 'Beauty, salons, spas, med spas, fitness',
      icon: '💆',
    },
    {
      title: 'Business Services',
      desc: 'Accounting, insurance, staffing, marketing, consulting',
      icon: '💼',
    },
    {
      title: 'Commercial Real Estate',
      desc: 'Retail, industrial, office, medical, mixed-use, land',
      icon: '🏗️',
    },
  ];

  const multiStepStages = [
    {
      stage: '1. Contact Information',
      purpose:
        'Full name; email; phone; preferred contact method; best time to reach; consent checkbox.',
    },
    {
      stage: '2. Business Profile',
      purpose:
        'Business name optional; industry; city/county; years operating; independent or franchise; number of locations; website optional.',
    },
    {
      stage: '3. Financial Snapshot',
      purpose:
        'Revenue range; approximate SDE or EBITDA; trend over three years; inventory; equipment; debt; owner salary/add-backs; “not sure” option.',
    },
    {
      stage: '4. Operations',
      purpose:
        'Employees; management team; owner hours and responsibilities; recurring revenue; top-customer concentration; licenses; major contracts.',
    },
    {
      stage: '5. Lease and Property',
      purpose:
        'Own or lease; rent; lease expiration; options; landlord relationship; property included; estimated property value; mortgage optional.',
    },
    {
      stage: '6. Seller Objectives',
      purpose:
        'Sale timing; reason; desired involvement after sale; confidentiality concerns; prior valuation or listing; preferred next step.',
    },
    {
      stage: '7. Upload and Consent',
      purpose:
        'Optional initial upload; privacy acknowledgement; no-brokerage-relationship disclaimer; submit and schedule consultation.',
    },
  ];

  const processSteps = [
    'Confidential review & requirement confirmation',
    'Advisor consultation on goals & operations',
    'Financial normalization & record adjustments',
    'Market discussion & buyer profile review',
    'Recommended path & formal valuation',
    'Confidential representation & closing support',
  ];

  const faqs = [
    {
      q: 'What is the difference between SDE and EBITDA?',
      a: "Seller's discretionary earnings, or SDE, is commonly used for smaller owner-operated companies and may include one working owner's compensation and supported discretionary expenses. EBITDA is more common for larger, management-operated companies. Every adjustment must be documented.",
    },
    {
      q: 'Does KMF provide a certified business appraisal?',
      a: 'A broker opinion of value supports planning, pricing and marketing discussions. It is not a certified appraisal unless a qualified appraisal professional is separately engaged to prepare one under the applicable standards.',
    },
    {
      q: 'Which factors can increase business value?',
      a: 'Consistent earnings, clean financial records, recurring revenue, customer diversification, management depth, documented systems, transferable contracts, maintained equipment and limited owner dependence may support stronger buyer interest and terms.',
    },
    {
      q: 'Can KMF value my business from a profit-and-loss statement alone?',
      a: 'A preliminary range may be discussed from limited financial information, but it cannot be finalized from one statement alone. A supportable opinion requires tax returns, balance sheets, current results, add-back documentation, assets, liabilities and operational information.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#c59b27] selection:text-white">
      
      {/* 1. HERO SECTION (Dark Blue Background with Overlay) */}
      <section className="relative bg-[#071320] text-white py-16 lg:py-24 overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#e0b138] text-xs sm:text-sm font-bold uppercase tracking-wider font-mono">
              PROFITABLE BUSINESSES FOR SALE & VALUATION IN FLORIDA
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Find Profitable Businesses For Sale or{' '}
              <span className="text-[#c59b27]">Discover What Yours Is Worth</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you are looking to acquire a highly <strong>profitable business for sale in Florida</strong> or preparing to sell your own company for top market value, KMF Business Advisors is here to guide you. We deliver comprehensive financial evaluation, confidential market analysis, and strategic deal negotiation helping both buyers and sellers navigate Florida’s dynamic market with total confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold text-sm sm:text-base shadow-lg transition-all hover:scale-105"
              >
                Request a Confidential Value Review ➔
              </Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold text-sm sm:text-base border border-gray-700 transition-colors"
              >
                Schedule a Seller Consultation
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-medium pt-2">
              🔒 Confidential inquiry &nbsp;•&nbsp; ⚡ No obligation &nbsp;•&nbsp; 🛡️ Information reviewed privately
            </p>

            {/* Trust Cards Strip */}
            <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center text-lg shrink-0">
                  🔒
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Confidential Owner Consultation
                </span>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center text-lg shrink-0">
                  📍
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Florida-Focused Market Analysis
                </span>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center text-lg shrink-0">
                  🏢
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Business, Franchise & Real-Estate Synergy
                </span>
              </div>

              <div className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#c59b27]/20 text-[#c59b27] flex items-center justify-center text-lg shrink-0">
                  📋
                </div>
                <span className="text-xs sm:text-sm font-semibold text-gray-200">
                  Clear Valuation Assumptions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY BOX */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#f8fafc] border-l-4 border-[#f39c12] rounded-lg p-5 sm:p-6 shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed m-0">
              <strong className="text-[#0b1c2d] text-base sm:text-lg block sm:inline font-bold mr-2">
                Executive Summary:
              </strong>
              Discover what your Florida business is worth. Our professional valuation process analyzes financial performance, market benchmarks, and growth drivers to give you an accurate market valuation.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BUSINESS VALUATION INTAKE FORM */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
                Business Valuation Intake Form
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Provide basic operational metrics to receive a confidential preliminary valuation assessment.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-xl space-y-3">
                <div className="text-4xl">✅</div>
                <h3 className="text-xl font-bold text-emerald-800">
                  Thank You for Submitting!
                </h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Your confidential details have been securely received. Our senior advisor will contact you privately within 1 business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="Acme Services, Inc."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

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
                      placeholder="johndoe@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

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
                      placeholder="954-555-0199"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm bg-white"
                    >
                      <option value="Residential HVAC contractors">Residential HVAC contractors</option>
                      <option value="Commercial and industrial HVAC companies">Commercial and industrial HVAC</option>
                      <option value="Heating and air-conditioning businesses">Heating & Air Conditioning</option>
                      <option value="Plumbing, electrical, and mechanical">Plumbing, Electrical, Mechanical</option>
                      <option value="Healthcare & Medical">Healthcare & Medical Practices</option>
                      <option value="Manufacturing & Distribution">Manufacturing & Distribution</option>
                      <option value="Automotive & Transportation">Automotive & Transportation</option>
                      <option value="Restaurants & Hospitality">Restaurants & Hospitality</option>
                      <option value="Franchises & Multi-Unit">Franchises & Multi-Unit</option>
                      <option value="Other Industry">Other Industry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Desired Timeframe <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="timeframe"
                      required
                      value={formData.timeframe}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm bg-white"
                    >
                      <option value="Immediate">Immediate</option>
                      <option value="1–3 months">1–3 months</option>
                      <option value="3–6 months">3–6 months</option>
                      <option value="6–12 months">6–12 months</option>
                      <option value="Exploring">Exploring</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Real Estate Included
                    </label>
                    <select
                      name="realEstateIncluded"
                      value={formData.realEstateIncluded}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm bg-white"
                    >
                      <option value="No">No (Leased)</option>
                      <option value="Yes">Yes (Owned)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Location (City / County) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Fort Lauderdale / Broward"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Years Operating
                    </label>
                    <input
                      type="number"
                      name="yearsOperating"
                      value={formData.yearsOperating}
                      onChange={handleInputChange}
                      placeholder="12"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Annual Revenue
                    </label>
                    <input
                      type="text"
                      name="annualRevenue"
                      value={formData.annualRevenue}
                      onChange={handleInputChange}
                      placeholder="$1,800,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Approx. Profit / SDE
                    </label>
                    <input
                      type="text"
                      name="profitSDE"
                      value={formData.profitSDE}
                      onChange={handleInputChange}
                      placeholder="$420,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Owner Compensation
                    </label>
                    <input
                      type="text"
                      name="ownerCompensation"
                      value={formData.ownerCompensation}
                      onChange={handleInputChange}
                      placeholder="$150,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Expected Selling Price
                    </label>
                    <input
                      type="text"
                      name="expectedPrice"
                      value={formData.expectedPrice}
                      onChange={handleInputChange}
                      placeholder="$1,200,000"
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c59b27] text-sm"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold text-base shadow-md transition-all hover:shadow-lg"
                  >
                    Request My Confidential Business Valuation
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-2">
                    🔒 Strictly confidential. No information shared with third parties or employees.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4. REALISTIC VALUATION APPROACH (SPLIT COPY & CARD) */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#9a7719] text-xs font-bold uppercase tracking-wider font-mono">
                ✦ REALISTIC VALUATION APPROACH
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d] tracking-tight leading-tight">
                A Strong Exit Begins With a{' '}
                <span className="text-[#c59b27]">Realistic View of Value</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                A business is not valued by revenue alone. Buyers and lenders examine normalized earnings, owner involvement, recurring revenue, customer concentration, management depth, industry risk, contracts, equipment, inventory, lease terms, growth opportunities, and the quality of the company’s financial records. KMF helps organize these factors into a practical market discussion so the owner can prepare, price, and negotiate more effectively.
              </p>
            </div>

            {/* Right Column: Card Box with Lighter Blue Tint */}
            <div className="lg:col-span-5">
              <div className="bg-[#f0f7ff] border border-blue-100 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-lg font-bold text-[#0b1c2d]">
                    What Buyers & Lenders Audit
                  </h3>
                </div>
                <ul className="space-y-3.5 text-sm font-medium text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    Normalized Earnings (SDE / EBITDA)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    Recurring Revenue & Customer Risk
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    Owner Dependence & Management Depth
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    Equipment, Lease Terms & Contracts
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#c59b27] font-bold">✓</span>
                    Financial Record Consistency
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT INFLUENCES BUSINESS VALUE? (10 MINIMALIST ROWS) */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit space-y-4">
              <span className="inline-block px-3 py-1 rounded bg-amber-100 text-[#9a7719] text-xs font-bold uppercase tracking-wider font-mono">
                ✦ Valuation Drivers
              </span>
              <h2 className="text-3xl font-extrabold text-[#0b1c2d] leading-tight">
                What Influences <span className="text-[#c59b27]">Business Value?</span>
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Key operational and financial metrics evaluated by buyers and lenders during due diligence.
              </p>
            </div>

            {/* Right Side Clean Minimalist Rows */}
            <div className="lg:col-span-8 space-y-4">
              {valuationFactors.map((factor) => (
                <div
                  key={factor.num}
                  className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs flex items-start gap-5 hover:border-[#c59b27]/60 transition-colors"
                >
                  <span className="text-[#c59b27] font-mono font-extrabold text-2xl shrink-0 pt-0.5">
                    {factor.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#0b1c2d] mb-1">
                      {factor.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {factor.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW KMF REVIEWS THE OPPORTUNITY & SCOPE */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-[#9a7719] text-xs font-bold uppercase tracking-wider font-mono">
              ✦ Evaluation & Scope
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d]">
              How KMF Reviews <span className="text-[#c59b27]">The Opportunity</span>
            </h2>
            <p className="text-base text-gray-600">
              Our practical multi-angle valuation approach combined with a clear understanding of review scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📈</span>
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Approach 01</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Income Approach</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Reviews normalized SDE or EBITDA and applies market-based judgment regarding risk, growth, business size, quality, and overall transferability.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🏢</span>
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Approach 02</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Market Approach</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Considers relevant sold-business evidence and current market activity, recognizing that no two operational businesses are identical.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📊</span>
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Approach 03</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Asset Approach</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Examines tangible and identifiable intangible assets, operational liabilities, and the economic value of the business where appropriate.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🤝</span>
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Approach 04</span>
              </div>
              <h3 className="text-lg font-bold text-[#0b1c2d]">Transaction Reality Check</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Evaluates probable buyer profiles, financing options, lease transfers, working capital requirements, deal structure, and due diligence readiness.
              </p>
            </div>
          </div>

          {/* Black Callout Banner */}
          <div className="bg-[#0b1c2d] text-white p-6 sm:p-8 rounded-2xl border border-gray-800 flex items-start gap-5 shadow-lg">
            <span className="text-3xl shrink-0 pt-0.5">⚠️</span>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                Important Distinction & Scope
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                A preliminary business value review or broker opinion of value is intended to support potential sale pricing discussions. It is <strong>not automatically a certified appraisal, tax opinion, litigation report, or guarantee of final sale price</strong>. When a formal certified valuation is required, KMF recommends retaining a qualified valuation professional, CPA, or specialist attorney.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HIGH-VALUE INDUSTRIES TO FEATURE (10 CARDS) */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d]">
              High-Value Industries to Feature
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Florida’s economic landscape is dynamic and diverse. Our specialized advisory services focus on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-gray-200 text-center shadow-xs hover:border-[#c59b27] hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#0b1c2d] mb-1.5 group-hover:text-[#c59b27] transition-colors">
                    {ind.title}
                  </h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TWO-STAGE DOCUMENT REVIEW */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-50 text-[#9a7719] text-xs font-bold uppercase tracking-wider font-mono">
              🔒 Streamlined Evaluation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c2d]">
              Two-Stage <span className="text-[#c59b27]">Document Review</span>
            </h2>
            <p className="text-base text-gray-600">
              We protect your confidential business data. We start with basic information before requesting detailed financial records.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stage 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Stage 01</span>
                <h3 className="text-xl font-bold text-[#0b1c2d]">Initial Intake</h3>
                <p className="text-xs text-gray-500 mt-1">Basic overview to start the conversation</p>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Three years of approximate revenue
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Approximate SDE or EBITDA
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Industry sector and geographic location
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Years in business & operational history
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Number of employees and active owner role
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Lease structure or real estate status
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Primary reason and desired timing for sale
                </li>
              </ul>
            </div>

            {/* Stage 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <span className="text-xs font-mono font-bold text-[#c59b27] uppercase">Stage 02</span>
                <h3 className="text-xl font-bold text-[#0b1c2d]">Secure Document Request</h3>
                <p className="text-xs text-gray-500 mt-1">Requested after confirming fit and confidentiality</p>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Three years of business tax returns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Year-to-date profit & loss statement and balance sheet
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  General ledger or detailed expense report (when needed)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Equipment, vehicle, and inventory schedules
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Lease agreements, amendments, renewals & landlord terms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Franchise agreements and transfer requirements (if applicable)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Customer, contract, licensing, & employee data (redacted)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#c59b27] font-bold">✓</span>
                  Real estate information (when property is included)
                </li>
              </ul>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-amber-50/80 border border-amber-200 flex items-center gap-3 text-xs sm:text-sm text-gray-700">
            <span className="text-2xl shrink-0">🛡️</span>
            <p>
              <strong>Strict Confidentiality Guaranteed:</strong> KMF does not require sensitive financial or proprietary documents prior to our initial consultation and mutual agreement on confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* 9. MULTI-STEP VALUATION FORM TABLE & ACCORDION */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#0b1c2d]">
              Multi-Step Valuation Form Architecture
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Structured stages used to collect and evaluate middle-market businesses in Florida.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm text-gray-700 border-collapse">
              <thead className="bg-[#0b1c2d] text-white text-xs uppercase font-mono tracking-wider">
                <tr>
                  <th className="py-4 px-6 border-b border-gray-700 w-1/3">Form Stage</th>
                  <th className="py-4 px-6 border-b border-gray-700">Fields and Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {multiStepStages.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-[#0b1c2d] whitespace-nowrap align-top">
                      {row.stage}
                    </td>
                    <td className="py-3.5 px-6 leading-relaxed text-gray-600">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Collapsible Backend Logic Details */}
          <details className="group rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
            <summary className="font-bold text-sm text-[#0b1c2d] cursor-pointer flex items-center justify-between list-none">
              <span>⚙️ View Technical Form Qualification Logic</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 pt-4 border-t border-gray-100 text-xs sm:text-sm text-gray-600 space-y-2">
              <p>1. Route business-sale inquiries directly to the seller pipeline.</p>
              <p>2. Route franchise resales separately from franchise-development requests.</p>
              <p>3. Create a distinct commercial-real-estate path for property sale, lease, landlord representation, or business-plus-property.</p>
              <p>4. Score urgency based on timing, financial readiness, records, owner motivation, and transaction complexity.</p>
              <p>5. Send an immediate confirmation email without disclosing valuation conclusions automatically.</p>
              <p>6. Create tasks in CRM and pass structured fields through secure webhooks.</p>
              <p>7. Use secure file-upload storage rather than ordinary email attachments for sensitive financial records.</p>
            </div>
          </details>
        </div>
      </section>

      {/* 10. WHAT HAPPENS AFTER SUBMISSION */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#0b1c2d]">
              What Happens After Submission
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Our 6-step advisory roadmap from initial intake to closing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStepCard(idx)}
                className={`p-6 rounded-xl border cursor-pointer transition-all ${
                  activeStepCard === idx
                    ? 'border-[#c59b27] bg-amber-50/50 shadow-md scale-[1.02]'
                    : 'border-gray-200 bg-gray-50/60 hover:border-gray-300'
                }`}
              >
                <div className="text-xs font-mono font-bold text-[#c59b27] uppercase mb-2">
                  Step 0{idx + 1}
                </div>
                <p className="font-bold text-sm text-[#0b1c2d]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA BANNER */}
      <section className="py-20 bg-[#071320] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3 py-1 rounded bg-[#c59b27]/20 text-[#e0b138] text-xs font-bold uppercase tracking-wider font-mono">
                Confidential Value Review
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Know Your Position Before You Enter the Market
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
                A confidential value review can help you decide whether to sell now, prepare for a future exit, separate the business from the real estate, or address issues that may reduce marketability. Share a few details with KMF Business Advisors to begin a private discussion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold text-sm shadow-lg transition-transform hover:scale-105"
                >
                  Request My Confidential Value Review
                </Link>
                <a
                  href="https://api.whatsapp.com/send?phone=19548649161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors"
                >
                  Speak With a Seller Advisor ↗
                </a>
              </div>

              {/* Strip */}
              <div className="pt-4 border-t border-gray-800 flex flex-wrap items-center gap-6 text-xs text-gray-400">
                <a href="tel:9548649161" className="flex items-center gap-2 hover:text-[#c59b27]">
                  <span>📞</span> Call Us Any Time: 954-864-9161
                </a>
                <a
                  href="https://wa.me/19548649161"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400"
                >
                  <span>💬</span> WhatsApp Discussion
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                  alt="Private Business Consultation"
                  className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-[#0b1c2d]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Common questions regarding business valuation, SDE vs EBITDA, and market readiness.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4.5 text-left flex justify-between items-center text-[#0b1c2d] font-bold text-base hover:text-[#c59b27] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#c59b27] font-extrabold text-xl ml-4">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. GLOBAL FOOTER */}
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
                  <Link href="/franchise-services" className="hover:text-amber-400 transition-colors">
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
              <h4 className="text-white font-bold text-sm tracking-wider uppercase">Valuation & Sale</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/profitable-business-for-sale" className="text-[#c59b27] font-semibold hover:text-amber-300 transition-colors">
                    Profitable Businesses for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/sell-your-business" className="hover:text-amber-400 transition-colors">
                    Sell Your Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-amber-400 transition-colors">
                    Businesses for Sale
                  </Link>
                </li>
                <li>
                  <Link href="/sell-a-franchise" className="hover:text-amber-400 transition-colors">
                    Sell a Franchise
                  </Link>
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
                  <Link href="/business-broker-faq" className="hover:text-amber-400 transition-colors">
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
