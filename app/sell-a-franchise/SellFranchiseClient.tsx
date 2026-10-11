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

function IconStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="#c59b27" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function SellFranchiseClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [sellDropdownOpen, setSellDropdownOpen] = useState(false);
  const [franchiseDropdownOpen, setFranchiseDropdownOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    conceptName: "",
    numUnits: "",
    unitLocations: "",
    yearsOperating: "",
    sdeEbitda: "",
    leaseExpiration: "",
    grossRevenue: "Under $500,000",
    remainingTerm: "3 – 5 years",
    resaleTimeframe: "Immediate (0 – 3 months)",
    franchisorNotified: "No, strictly confidential at this stage",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "How is a franchise resale valued?",
      a: "A franchise resale is commonly evaluated using normalized SDE or EBITDA, location performance, lease terms, brand trends, required capital improvements, transfer costs, remaining franchise term and comparable transactions.",
    },
    {
      q: "When should I notify the franchisor that I plan to sell?",
      a: "The timing should follow the franchise agreement and a coordinated confidentiality plan. The seller and advisers should confirm the franchisor's notice, approval, training and transfer requirements before committing to a transaction schedule.",
    },
    {
      q: "Can a buyer assume my existing lease?",
      a: "Only if the lease and landlord permit it. Assignment or a new lease may require landlord approval, financial disclosures, guarantees and negotiated terms. Lease risk should be reviewed early in the resale process.",
    },
    {
      q: "Can I sell without employees and customers knowing?",
      a: "The transaction can be marketed confidentially, but disclosure may eventually be required for an orderly transition. Prospective buyers may not contact employees or customers unless the seller authorizes the communication in writing.",
    },
  ];

  const resaleProcessSteps = [
    {
      num: "01",
      name: "Confidential Valuation",
      desc: "Analyze financials, territory rights, remaining term, brand performance, and comparable resales.",
    },
    {
      num: "02",
      name: "Seller Strategy Session",
      desc: "Design deal structure, discuss franchisor approval timing, and build go-to-market plan.",
    },
    {
      num: "03",
      name: "Blind Profile Marketing",
      desc: "Market to 40,000+ buyer database without revealing brand, location, or identity until NDA is signed.",
    },
    {
      num: "04",
      name: "Franchisor Approval",
      desc: "Manage notification, transfer application, and franchisor approval process seamlessly.",
    },
    {
      num: "05",
      name: "Buyer Qualification & NDA",
      desc: "Every buyer is financially pre-qualified and NDA-signed before receiving detailed metrics.",
    },
    {
      num: "06",
      name: "Offer Negotiation",
      desc: "Manage LOI review, competing offers, and deal structuring for maximum net proceeds.",
    },
    {
      num: "07",
      name: "Due Diligence",
      desc: "Manage buyer due diligence, lender coordination (incl. SBA), and documentation accuracy.",
    },
    {
      num: "08",
      name: "Closing & Transfer",
      desc: "Manage closing logistics, coordinate with franchise attorneys, and structure transition periods.",
    },
  ];

  const clientReviews = [
    {
      name: "Matheus Oliveira",
      text: "Working with John has been nothing short of exceptional. As a business broker, he is in a league of his own. His knowledge, professionalism, and dedication are unmatched — but what truly sets him apart is his integrity. John genuinely cares about the people behind the business, not just the deal. He guided us with honesty, clarity, and patience every step of the way.",
    },
    {
      name: "Alex Henriquez",
      text: "If I could give more than 5 stars I would. John is truly exceptional! Reliable, professional, and incredibly dedicated to his work. From start to finish, he exceeded all expectations with his attention to detail and commitment to delivering top-notch service. It's rare to find someone so trustworthy and passionate about what they do.",
    },
    {
      name: "Raul Smith",
      text: "John is highly professional and knowledgeable in his industry. He provides top quality service and his attention to detail is outstanding. I highly recommend him and we really appreciate his help finding the right business for us.",
    },
    {
      name: "Troy Wolfe",
      text: "John is truly a dedicated and knowledgeable business brokerage professional. He consistently goes above and beyond for others. John is also a relentless marketing machine!",
    },
    {
      name: "Saba Shahzadi",
      text: "I wish I can give them more than five star Sanjay and John help me out getting a lease of a place. They help me out with all paperwork highly recommended ⭐️⭐️⭐️⭐️⭐️⭐️",
    },
    {
      name: "Massage Envy South Beach",
      text: "Sanjay has been very professional in every aspect of my listing. We spoke late one night and 12 hours later he was in my office discussing the business and determining a very realistic valuation. We are off to a great start and hope we can complete a transaction in a timely manner.",
    },
    {
      name: "Martin Musitano",
      text: "Very professional and with constant monitoring and knowledge of the business and franchise requirements.",
    },
    {
      name: "Preeti Shah",
      text: "Excellent services, you can trust on them. Best in Florida. Reliable, friendly, punctual, clear communication upfront. They will negotiate you the best possible prices and offer quality services. Sanjay and John are the best for commercial leasing negotiations.",
    },
    {
      name: "Miguel Rodrigues",
      text: "John Bucher of KMF Business Advisors was professional, responsive, and easy to work with throughout the lease negotiation for a law office in East Boca. He represented his client well while keeping the process smooth and collaborative.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans antialiased selection:bg-[#c59b27] selection:text-white">


      {/* 3. HERO SECTION */}
      <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1c2d] leading-tight">
                Sell Your Franchise in Florida with Complete Confidentiality and Maximum Value
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Ready to sell your franchise in Florida? KMF Business Advisors specializes in the confidential resale of franchise units across every major brand and sector. Whether you own a single-unit franchise or a multi-unit portfolio, we manage the entire transfer process from valuation and franchisor approval to finding qualified buyers and closing your deal.
              </p>
              <p className="text-sm sm:text-base font-semibold text-[#c59b27] leading-relaxed">
                Qualified buyers, investors, and E2 and L1 visas and deep expertise in Florida's franchise resale market, KMF gets franchise deals done.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                <a
                  href="#franchise-form"
                  className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                >
                  Start My Franchise Sale &rarr;
                </a>
                <div className="flex items-center gap-3 border-l-2 border-gray-200 pl-6 py-1">
                  <span className="text-3xl font-extrabold text-[#0b1c2d]">15+</span>
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold leading-tight">
                    Years Of<br />Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 relative group">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2026/08/e2969419ee507d8701664c1c74364397.jpg"
                  alt="Sell Your Franchise in Florida"
                  width={736}
                  height={736}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE SUMMARY CALLOUT */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#c59b27] p-6 sm:p-8 rounded-r-xl shadow-sm">
            <p className="text-gray-700 leading-relaxed text-base">
              <strong className="text-[#0b1c2d] font-bold">Executive Summary:</strong> Selling a franchise requires navigating franchisor transfer rules and SBA loan guidelines. KMF Business Advisors guides franchise owners through valuation, compliance, and buyer matching.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FORM SECTION: SELL A FRANCHISE */}
      <section id="franchise-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              CONFIDENTIAL RESALE INTAKE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              Sell a Franchise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Fill out the confidential intake details below. Our licensed franchise brokers will evaluate your portfolio and contact you privately.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-lg">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconCheck className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1c2d] mb-2">
                  Confidential Franchise Inquiry Received
                </h3>
                <p className="text-gray-600 max-w-lg mx-auto mb-6 text-sm">
                  Thank you. Your franchise details have been safely transmitted. A KMF senior franchise advisor will contact you within 24 hours under complete non-disclosure discretion.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#0b1c2d] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#142638] transition-colors"
                >
                  Submit Another Location
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(954) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Concept Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Franchise Brand / Concept
                    </label>
                    <input
                      type="text"
                      name="conceptName"
                      value={formData.conceptName}
                      onChange={handleInputChange}
                      placeholder="e.g. Subway, Orangetheory"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Number of Units */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Number of Units / Locations <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="numUnits"
                      required
                      min={1}
                      value={formData.numUnits}
                      onChange={handleInputChange}
                      placeholder="1"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Years in Operation */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Years in Operation
                    </label>
                    <input
                      type="number"
                      name="yearsOperating"
                      min={0}
                      value={formData.yearsOperating}
                      onChange={handleInputChange}
                      placeholder="e.g. 5"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Location of Units Textarea */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                    Location of Each Unit (City, County, or Address)
                  </label>
                  <textarea
                    name="unitLocations"
                    rows={3}
                    value={formData.unitLocations}
                    onChange={handleInputChange}
                    placeholder="List City, State, or General Area for each unit (e.g. Unit 1: Fort Lauderdale; Unit 2: Boca Raton)"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* SDE / EBITDA */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Approximate SDE or EBITDA ($)
                    </label>
                    <input
                      type="text"
                      name="sdeEbitda"
                      value={formData.sdeEbitda}
                      onChange={handleInputChange}
                      placeholder="e.g. $280,000"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>

                  {/* Lease Expiration */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Commercial Lease Expiration Date
                    </label>
                    <input
                      type="text"
                      name="leaseExpiration"
                      value={formData.leaseExpiration}
                      onChange={handleInputChange}
                      placeholder="e.g. June 2028 + 5-yr option"
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Gross Revenue */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Annual Gross Revenue
                    </label>
                    <select
                      name="grossRevenue"
                      value={formData.grossRevenue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="Under $500,000">Under $500,000</option>
                      <option value="$500,000 – $1,000,000">$500,000 – $1,000,000</option>
                      <option value="$1,000,000 – $2,500,000">$1,000,000 – $2,500,000</option>
                      <option value="$2,500,000 – $5,000,000">$2,500,000 – $5,000,000</option>
                      <option value="$5,000,000+">$5,000,000+</option>
                    </select>
                  </div>

                  {/* Remaining Term */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Remaining Franchise Agreement Term
                    </label>
                    <select
                      name="remainingTerm"
                      value={formData.remainingTerm}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="Less than 1 year">Less than 1 year</option>
                      <option value="1 – 3 years">1 – 3 years</option>
                      <option value="3 – 5 years">3 – 5 years</option>
                      <option value="5 – 10 years">5 – 10 years</option>
                      <option value="10+ years / Renewal pending">10+ years / Renewal pending</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Resale Timeframe */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Target Resale Timeframe
                    </label>
                    <select
                      name="resaleTimeframe"
                      value={formData.resaleTimeframe}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="Immediate (0 – 3 months)">Immediate (0 – 3 months)</option>
                      <option value="3 – 6 months">3 – 6 months</option>
                      <option value="6 – 12 months">6 – 12 months</option>
                      <option value="Just exploring market value">Just exploring market value</option>
                    </select>
                  </div>

                  {/* Franchisor Notified */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                      Has the Franchisor Been Notified?
                    </label>
                    <select
                      name="franchisorNotified"
                      value={formData.franchisorNotified}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                    >
                      <option value="Yes, franchisor is aware and approved for resale">
                        Yes, franchisor is aware and approved for resale
                      </option>
                      <option value="No, strictly confidential at this stage">
                        No, strictly confidential at this stage
                      </option>
                      <option value="In preliminary discussions">
                        In preliminary discussions
                      </option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Request a Confidential Franchise-Resale Consultation
                    <IconArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-center text-xs text-gray-500 mt-3">
                    🔒 Strict non-disclosure protection. Franchisors, landlords, and employees are never contacted without your express authorization.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 6. WHAT IS MY FLORIDA FRANCHISE WORTH? (VALUATION TABLE & INCREASES/DECREASES GRID) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ✦ FRANCHISE VALUATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              What Is My Florida Franchise Worth?
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Franchise valuation is the foundation of every successful resale. Most owners either overestimate value or underestimate it. KMF provides confidential franchise valuations rooted in real Florida market transaction data.
            </p>
          </div>

          {/* Valuation Table */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#0b1c2d] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold">Franchise Sector</th>
                    <th scope="col" className="px-6 py-4 font-bold">Typical Valuation Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Food & Restaurant</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.5x–3.5x SDE
                      </span>
                      (Owner-operated) /{" "}
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs ml-1 mr-1">
                        3.8x–4.2x EBITDA
                      </span>
                      (managed)
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Fitness & Wellness</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.5x–4.0x SDE
                      </span>
                      Depending on membership base stability
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Home Services</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.5x–3.5x SDE
                      </span>
                      Strong demand, consistent cash flow
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Automotive Service</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.0x–3.0x SDE
                      </span>
                      Asset-heavy, location-dependent
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Retail</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.0x–3.0x SDE
                      </span>
                      Sensitive to lease terms and foot traffic
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Senior Care & Healthcare</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        3.0x–4.5x SDE
                      </span>
                      Highest multiples, growing demand
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Education & Tutoring</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.5x–3.5x SDE
                      </span>
                      Strong in FL due to population growth
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Cleaning & Maintenance</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        2.0x–3.0x SDE
                      </span>
                      Recurring contracts drive value
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Multi-Unit Portfolios</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-[#c59b27]/15 text-[#9a7719] font-bold px-2.5 py-0.5 rounded text-xs mr-2">
                        4.0x–6.0x EBITDA
                      </span>
                      Scale commands a premium
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Increases / Decreases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Increases Value */}
            <div className="bg-white border-2 border-emerald-500/30 rounded-xl p-6 shadow-sm">
              <div className="font-bold text-emerald-800 text-lg mb-4 flex items-center gap-2">
                <span>📈</span>
                <span>Increases Value</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Strong brand performance (high Item 19 AUV)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Long remaining term with renewal rights</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Trained management independent of owner</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Protected/exclusive territory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>3+ years consistent growth & high-growth FL location</span>
                </li>
              </ul>
            </div>

            {/* Decreases Value */}
            <div className="bg-white border-2 border-rose-500/30 rounded-xl p-6 shadow-sm">
              <div className="font-bold text-rose-800 text-lg mb-4 flex items-center gap-2">
                <span>📉</span>
                <span>Decreases Value</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Short remaining term (under 3 years)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Large deferred maintenance/remodel needs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>High owner-dependency & saturated territory</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Negative brand press</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>Pending franchisor litigation</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all text-base"
            >
              Start Free Consultation With Expert Franchise Broker &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* 7. THE KMF FRANCHISE RESALE PROCESS (DARK THEME #0B1C2D) */}
      <section className="py-20 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#f5d77f] uppercase tracking-wider bg-[#c59b27]/20 border border-[#c59b27]/40 px-3 py-1 rounded-full">
              STEP-BY-STEP PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              The KMF Franchise Resale Process
            </h2>
            <p className="text-gray-300 text-sm sm:text-base">
              A proven 8-phase roadmap engineered to protect confidentiality, satisfy franchisor compliance, and maximize proceeds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resaleProcessSteps.map((step) => (
              <div
                key={step.num}
                className="bg-[#142638] border border-gray-800 rounded-xl p-6 hover:border-[#c59b27]/60 transition-colors"
              >
                <div className="text-3xl font-black text-[#c59b27] mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="font-bold text-white text-lg mb-2">
                  {step.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FLORIDA FRANCHISE CATEGORIES WE HELP SELL */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              CATEGORIES WE COVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              Florida Franchise Categories We Help Sell
            </h2>
            <p className="text-gray-600">
              We represent established franchisees across all active industry sectors in the Florida market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Category 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍔</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Food & Restaurant</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• QSR resales, fast casual & dine-in</li>
                <li>• Coffee / smoothie / beverage franchises</li>
                <li>• Bakery & specialty food</li>
                <li>• Pizza / sandwich / sub franchises</li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🏋️‍♂️</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Fitness & Wellness</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Gyms & fitness studios</li>
                <li>• Yoga / Pilates / boutique fitness</li>
                <li>• Martial arts & kids fitness</li>
                <li>• Massage, spa & nutrition coaching</li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛠️</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Home Services</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Cleaning & janitorial</li>
                <li>• Landscaping & pest control</li>
                <li>• Restoration, handyman & HVAC/plumbing</li>
                <li>• Moving & junk removal</li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🚗</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Automotive</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Auto repair & oil change</li>
                <li>• Car wash & detailing</li>
                <li>• Collision & glass repair</li>
                <li>• Fleet & tire services</li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🛍️</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Retail & Specialty</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• Clothing & specialty retail</li>
                <li>• Pet products & services</li>
                <li>• Gift & seasonal stores</li>
                <li>• Printing & shipping services</li>
              </ul>
            </div>

            {/* Category 6 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🩺</span>
                <h3 className="font-bold text-[#0b1c2d] text-lg">Senior Care & Education</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li>• In-home senior care & home health</li>
                <li>• Medical staffing</li>
                <li>• Tutoring & learning centers</li>
                <li>• Daycare & STEM education</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY FLORIDA FRANCHISE OWNERS CHOOSE KMF */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d]">
              Why Florida Franchise Owners Choose KMF
            </h2>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-700">
                <thead className="bg-[#0b1c2d] text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th scope="col" className="px-6 py-4 font-bold">What Sellers Need</th>
                    <th scope="col" className="px-6 py-4 font-bold">How KMF Delivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Franchisor approval navigation</td>
                    <td className="px-6 py-4 text-gray-600">We manage the full FDD transfer process</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Confidentiality</td>
                    <td className="px-6 py-4 text-gray-600">Blind marketing + NDA-protected buyer access</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Maximum resale price</td>
                    <td className="px-6 py-4 text-gray-600">40,000+ qualified buyers create competition</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">SBA financing</td>
                    <td className="px-6 py-4 text-gray-600">Pre-qualified with lenders to expand buyer pool</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Accurate valuation</td>
                    <td className="px-6 py-4 text-gray-600">Data-driven SDE & territory-based analysis</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Deal negotiation</td>
                    <td className="px-6 py-4 text-gray-600">We manage offers, fees & contingencies</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Fast closing</td>
                    <td className="px-6 py-4 text-gray-600">6–10 month average timeline</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Multi-unit expertise</td>
                    <td className="px-6 py-4 text-gray-600">Portfolio structuring & staged exits</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Local expertise</td>
                    <td className="px-6 py-4 text-gray-600">Deep Florida market knowledge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all text-sm sm:text-base"
            >
              Start Free Consultation With Expert Franchise Broker
            </Link>
          </div>
        </div>
      </section>

      {/* 10. START YOUR CONFIDENTIAL FRANCHISE SALE */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
            GUARANTEE & REASSURANCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
            Start Your Confidential Franchise Sale
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base mb-10">
            Whether you are ready to sell now or just beginning to explore your options, the first step is a free, confidential consultation with a KMF franchise resale specialist. We will review your franchise, provide a preliminary value range, and outline a customized sale strategy with no obligation and complete discretion.
          </p>

          {/* 5-Point Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">Free confidential franchise valuation</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">No upfront fees — commission paid only at closing</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">40,000+ active buyers in our database</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">Licensed Florida business brokers with franchise expertise</span>
            </div>
            <div className="sm:col-span-2 flex items-center gap-3 bg-white p-3.5 rounded-lg border border-gray-200 shadow-sm max-w-md mx-auto w-full">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span className="text-xs sm:text-sm text-gray-800 font-medium">Franchisor approval process managed on your behalf</span>
            </div>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#0b1c2d] hover:bg-[#142638] text-white font-bold px-8 py-4 rounded-lg shadow-lg transition-all text-sm sm:text-base"
          >
            Register My Franchise For Sale Confidentially &rarr;
          </Link>
        </div>
      </section>

      {/* 11. MEET OUR EXPERIENCED BUSINESS BROKERS (EXECUTIVE TEAM) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              ADVISORY LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              Meet Our Experienced Business Brokers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Confidential guidance backed by decades of Florida commercial real estate and business brokerage expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Executive Card 1: John C. Bucher */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col items-center text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#c59b27] mb-6 shadow-md">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/John-C.-Bucher-1.webp"
                  alt="John C. Bucher"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0b1c2d] mb-1">John C. Bucher</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27] mb-4">
                Top-Rated Business Broker of Florida
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Specializing in confidential business sales, valuation reviews, and middle-market mergers & acquisitions.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#0b1c2d] hover:bg-[#142638] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors mb-6"
              >
                <span>Ask John Directly</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* QR Code */}
              <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-04-15-at-05.51.49_1babdbb8.jpg"
                  alt="John C. Bucher QR Code"
                  width={110}
                  height={110}
                  className="rounded-lg border border-gray-200 mb-2 shadow-sm"
                />
                <span className="text-xs font-medium text-gray-500">Scan to Connect</span>
              </div>
            </div>

            {/* Executive Card 2: Sanjay Wadhwani */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col items-center text-center p-8 hover:shadow-xl transition-shadow">
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#c59b27] mb-6 shadow-md">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/thumb_IMG_0004-1.jpg.webp"
                  alt="Sanjay Wadhwani"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#0b1c2d] mb-1">Sanjay Wadhwani</h3>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27] mb-4">
                Business, Franchise, and Commercial Real Estate Advisor
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Expert in packaging combined business & commercial real estate assets, franchise development, and lease negotiations.
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-[#0b1c2d] hover:bg-[#142638] text-white text-xs font-bold px-6 py-2.5 rounded-lg transition-colors mb-6"
              >
                <span>Speak with Sanjay</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* QR Code */}
              <div className="border-t border-gray-200 pt-6 flex flex-col items-center">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2026-08-07-at-8.07.30-PM-1.jpeg"
                  alt="Sanjay Wadhwani QR Code"
                  width={110}
                  height={110}
                  className="rounded-lg border border-gray-200 mb-2 shadow-sm"
                />
                <span className="text-xs font-medium text-gray-500">Scan to Value Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHAT OUR CLIENTS SAY (GOOGLE REVIEWS TESTIMONIALS) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mb-3">
              What Our Clients Say About Us
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="font-bold text-gray-800">5.0 Star Rating</span>
              <span>•</span>
              <span className="font-semibold text-gray-700">153 Google reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientReviews.map((rev, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-gray-900 text-sm">{rev.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, idx) => (
                        <IconStar key={idx} className="w-3.5 h-3.5" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Verified Google Review</span>
                  <span className="text-[#c59b27] font-semibold">KMF Business Advisors</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. BOOK APPOINTMENT SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0b1c2d] rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 text-white">
              <span className="text-xs font-bold text-[#f5d77f] uppercase tracking-wider bg-[#c59b27]/20 border border-[#c59b27]/40 px-3 py-1 rounded-full mb-4 inline-block">
                Request Confidential Call
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Book a Private Consultation with Trusted Business & Franchise Advisors
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link
                  href="/contact-us"
                  className="bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-3.5 rounded-lg text-sm shadow-md hover:shadow-lg transition-all"
                >
                  Book Appointment
                </Link>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#c59b27]">
                    <IconPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 block">Call Us Any Time:</span>
                    <a
                      href="tel:9548649161"
                      className="font-bold text-white hover:text-[#c59b27] transition-colors"
                    >
                      954-864-9161
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-full min-h-[300px] relative">
              <Image
                src="https://images.unsplash.com/photo-1703300450387-047da16a89c4?w=600&auto=format&fit=crop&q=60"
                alt="Book Appointment Calendar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1c2d] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">
              Key considerations when planning a franchise exit or unit transfer in Florida.
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
                  className="w-full px-6 py-5 text-left font-bold text-[#0b1c2d] text-base sm:text-lg flex justify-between items-center hover:text-[#c59b27] transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-mono text-[#c59b27] font-bold">
                    {activeFaq === i ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === i && (
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
      <footer className="bg-[#0b1c2d] text-gray-400 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Col 1: About */}
            <div>
              <Image
                src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png"
                alt="KMF Business Advisors"
                width={180}
                height={48}
                className="h-10 w-auto object-contain mb-4 brightness-200 contrast-200"
              />
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
            </div>

            {/* Col 2: Services */}
            <div>
              <h6 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                OUR SERVICES
              </h6>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link href="/franchise-services" className="hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-white transition-colors">
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

            {/* Col 3: Info */}
            <div>
              <h6 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                INFO
              </h6>
              <ul className="space-y-2 text-xs">
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
                  <Link href="/business-broker-faq" className="hover:text-white transition-colors">
                    Florida Business Brokerage FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h6 className="font-bold text-white text-xs uppercase tracking-wider mb-4">
                CONTACT INFO
              </h6>
              <div className="space-y-3 text-xs">
                <p className="flex items-start gap-2">
                  <IconMapPin className="w-4 h-4 text-[#c59b27] shrink-0 mt-0.5" />
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <a href="tel:9548649161" className="hover:text-white transition-colors">
                    954-864-9161
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <IconMail className="w-4 h-4 text-[#c59b27] shrink-0" />
                  <a
                    href="mailto:swadhwani@kmfbusinessadvisors.com"
                    className="hover:text-white transition-colors"
                  >
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-xs text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
            <p>Copyright © 2026 KMF Business Advisors. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms and Conditions
              </Link>
              <span>|</span>
              <Link href="/accessibility-statement" className="hover:text-white">
                Accessibility
              </Link>
              <span>|</span>
              <Link href="/disclaimers" className="hover:text-white">
                Disclaimers
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/19548649161"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}
