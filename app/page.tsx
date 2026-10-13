"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { submitInquiry } from "@/app/actions/inquiries";

export default function HomePage() {
  // Navigation mobile state & dropdown state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Selling a Business",
    message: "",
  });

  // Active FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Review carousel active index
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const reviews = [
    {
      name: "Matheus Oliveira",
      stars: 5,
      text: "Working with John has been nothing short of exceptional. As a business broker, he is in a league of his own. His knowledge, professionalism, and dedication are unmatched — but what truly sets him apart is his integrity. John genuinely cares about the people behind the business, not just the deal. He guided us with honesty, clarity, and patience every step of the way. If you’re looking for someone you can trust with one of the biggest decisions of your life — John is the one. He deserves every bit of recognition, because he is simply the best. 👏🏽💼🌟",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUJsUiisujaNv0n5zKXYKr7SZiEfQz32Cpt0Znw99rbuXlyHBZk=w40-h40-c-rp-mo-br100",
    },
    {
      name: "Alex Henriquez",
      stars: 5,
      text: "If I could give more than 5 stars I would. John is truly exceptional! Reliable, professional, and incredibly dedicated to his work. From start to finish, he exceeded all expectations with his attention to detail and commitment to delivering top-notch service. It’s rare to find someone so trustworthy and passionate about what they do. I would highly recommend John to anyone looking for someone who genuinely cares and always goes the extra mile. Thank you, John, for being absolutely marvelous!",
      img: "https://lh3.googleusercontent.com/a/ACg8ocJdp7xG6XzvmRN_5VhgPUjq126t930b_ytq-vOTPnMYpZy1rgY=w40-h40-c-rp-mo-br100",
    },
    {
      name: "Raul Smith",
      stars: 5,
      text: "John is highly professional and knowledgeable in his industry. He provides top quality service and his attention to detail is outstanding. I highly recommend him and we really appreciate his help finding the right business for us.",
      img: "https://lh3.googleusercontent.com/a/ACg8ocIg85tt8oeEB7YlTKgWG_5t85L4yI-nfs29VmIKCPdmD2678g=w40-h40-c-rp-mo-ba2-br100",
    },
    {
      name: "Troy Wolfe",
      stars: 5,
      text: "John is truly a dedicated and knowledgeable business brokerage professional. He consistently goes above and beyond for others. John is also a relentless marketing machine!",
      img: "https://lh3.googleusercontent.com/a/ACg8ocLPJwgaFmVDhC80EBBe_Y48QEl_3zSd53b965P2vvNzalSo8w=w40-h40-c-rp-mo-br100",
    },
    {
      name: "Saba Shahzadi",
      stars: 5,
      text: "I wish I can give them more than five star Sanjay and John help me out getting a lease of a place. They help me out with all paperwork highly recommended ⭐️⭐️⭐️⭐️⭐️⭐️",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjV7SgmxfGlLvL_uaWwz1ciftPz2d01V64F3ZoMLVHMErmpWRFT7ig=w40-h40-c-rp-mo-ba2-br100",
    },
    {
      name: "Massage Envy South Beach",
      stars: 5,
      text: "Sanjay has been very professional in ever aspect of my listing. We spoke late one night and 12 hours later he was in my office discussing the business and determining a very valuation. We are off to a great start and hope we can complete a transaction in a timely manner.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjXlgvvUqos2RMQOIoplBw2hzu1BsgJyiqjWaeI-aNycSy2OD4w=w40-h40-c-rp-mo-br100",
    },
    {
      name: "Preeti Shah",
      stars: 5,
      text: "Excellent services, you can trust on them. Best in Florida. Reliable, friendly, punctual, clear communication upfront. They will negotiate you the best possible prices and offer quality services. Sanjay and John are the best for commercial leasing negotiations. Sanjay and John negotiated the best lease terms for my business with the landlord. Keep up the great work !!! Thankyou.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjUvRqlW--63dXeZo9SoiEYGztLzdzpqaxCgaoJXmz-SaGFVNuEMkw=w40-h40-c-rp-mo-br100",
    },
    {
      name: "Miguel Rodrigues",
      stars: 5,
      text: "John Bucher of KMF Business Advisors was professional, responsive, and easy to work with throughout the lease negotiation for a law office in East Boca. He represented his client well while keeping the process smooth and collaborative. We look forward to working with him again.",
      img: "https://lh3.googleusercontent.com/a-/ALV-UjXi3sdLwslgXXPd53avhnGOwktIzpGa42ZIaN4BVQfuAGW4ivRq=w40-h40-c-rp-mo-br100",
    },
  ];

  const faqs = [
    {
      q: "What types of transactions does KMF Business Advisors handle?",
      a: "We advise Florida owners and qualified buyers on business sales, franchise resales, franchise development and commercial real estate connected with an operating business. The appropriate process depends on the company, property, licenses, financing and transaction structure.",
    },
    {
      q: "Is my first conversation confidential?",
      a: "Yes. Initial discussions are handled privately. KMF does not contact employees, customers, vendors or other parties without authorization, and identifying information is released to prospective buyers only through the required confidentiality and qualification process.",
    },
    {
      q: "Do I need to be ready to sell before requesting a consultation?",
      a: "No. Owners may contact KMF to understand value, prepare for a future exit or discuss an immediate sale. An early review can identify records, operational risks and value drivers that should be addressed before the business goes to market.",
    },
    {
      q: "Does a consultation guarantee that my business will sell?",
      a: "No. Buyer demand, financial performance, financing, documentation, licensing, leases and deal terms affect every transaction. KMF can provide a market-informed strategy, but no broker can guarantee a sale price, buyer or closing date.",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        source: "home",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        details: {
          service: formData.service,
          message: formData.message,
        },
      });
      if (!result.ok) {
        setFormError(result.error);
        return;
      }
      setFormSubmitted(true);
    } catch {
      setFormError("We could not save your inquiry. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-[#c59b27] selection:text-white">


      {/* 3. HERO SECTION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-14 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-50 text-[#c59b27] border border-[#c59b27]/30 text-xs font-bold tracking-wider rounded font-mono uppercase">
                  CONFIDENTIAL FLORIDA BUSINESS BROKERS
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c2d] leading-tight">
                Sell Y<span className="text-[#003300]">ou</span>r Business With Expert{" "}
                <span className="text-[#ff9d00]">Business Brokers of Florida</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                KMF Business Advisors works as trusted{" "}
                <strong className="text-gray-900 font-semibold">
                  business brokers of florida
                </strong>{" "}
                to help owners evaluate, prepare, and confidentially sell a business, franchise,
                or commercial property. From private consultation to successful closing, our expert
                team guides you through every step of the transaction seamlessly.
              </p>
              <div className="p-3 bg-gray-100/80 rounded-md border border-gray-200 text-xs sm:text-sm font-mono text-gray-700">
                <span>✓ 100% Private Consultation</span> |{" "}
                <span>✓ Florida Focused</span> |{" "}
                <span>✓ No Obligation</span> |{" "}
                <span>✓ Florida Business Valuation</span>
              </div>

              {/* Call to actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="bg-[#c59b27] hover:bg-[#a8821f] text-white font-semibold px-6 py-3.5 rounded shadow hover:shadow-md transition-all text-sm tracking-wide text-center"
                >
                  Request a Confidential Valuation
                </Link>
                <Link
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="bg-[#0b1c2d] hover:bg-[#15324f] text-white font-semibold px-6 py-3.5 rounded shadow hover:shadow-md transition-all text-sm tracking-wide text-center"
                >
                  Speak With a Seller Advisor
                </Link>
              </div>
            </div>

            {/* Right Media / Video */}
            <div className="lg:col-span-5 relative">
              {/* Badge 1: 100% Confidential */}
              <div className="hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-lg shadow-lg border border-gray-100 absolute -top-6 -left-6 z-20">
                <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-[#c59b27]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" strokeWidth="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">100% Confidential</h4>
                  <p className="text-xs text-gray-500">Blind profiles &amp; NDA protection</p>
                </div>
              </div>

              {/* Video container */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/a3312f4a729319cea4d8b402a5330d86-1.mp4"
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                />
              </div>

              {/* Badge 2: Valuation Review */}
              <div className="hidden sm:flex items-center gap-3 bg-white p-3.5 rounded-lg shadow-lg border border-gray-100 absolute -bottom-6 -right-6 z-20">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0b1c2d]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 leading-tight">Valuation Review</h4>
                  <p className="text-xs text-gray-500">Market-based broker opinion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRUST & CREDIBILITY BAR */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Item 1 */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0 p-2.5 rounded-lg bg-[#0b1c2d]/5 text-[#0b1c2d]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <rect x="9" y="11" width="6" height="4" rx="1" />
                  <path d="M10 11V9a2 2 0 0 1 4 0v2" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Confidential Representation</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Protected process &amp; blind profiles</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0 p-2.5 rounded-lg bg-[#0b1c2d]/5 text-[#0b1c2d]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Florida Market Focus</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Statewide business &amp; CRE advisory</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0 p-2.5 rounded-lg bg-[#0b1c2d]/5 text-[#0b1c2d]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Business + Real Estate</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Turnkey transaction coordination</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start space-x-4">
              <div className="shrink-0 p-2.5 rounded-lg bg-[#0b1c2d]/5 text-[#0b1c2d]">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900">Seller-Focused Advisory</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Licensed &amp; compliant exit planning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY TAKEAWAY NOTICE */}
      <section className="bg-amber-50/50 py-4 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-700">
          <span className="font-bold text-black">Key Takeaway:</span> KMF Business Advisors is a premier Florida
          business brokerage firm providing confidential business sales, valuations, and franchise advisory services
          to middle-market business owners.
        </div>
      </section>

      {/* 6. FIVE SELLER PATHWAYS */}
      <section className="py-16 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Five Seller Pathways</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Pathway 1 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] flex items-center justify-center text-[#c59b27] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sell a Business</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Valuation, exit preparation, confidential marketing, prospect qualification, negotiation, due diligence, and closing coordination.
              </p>
            </div>

            {/* Pathway 2 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] flex items-center justify-center text-[#c59b27] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sell a Franchise Location</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Representation for single-unit, multi-unit, and franchise territory resales, including franchisor and lease coordination.
              </p>
            </div>

            {/* Pathway 3 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] flex items-center justify-center text-[#c59b27] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Franchise Your Business</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Franchise-readiness assessment, development coordination, marketing strategy, and expansion support.
              </p>
            </div>

            {/* Pathway 4 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] flex items-center justify-center text-[#c59b27] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Sell or Lease Commercial Property</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Owner and landlord representation for business-related real estate, investment property, lease assignments, and package sales.
              </p>
            </div>

            {/* Pathway 5 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] flex items-center justify-center text-[#c59b27] mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM9 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Franchise Development</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Strategic expansion support for new franchisors looking to scale their system. KMF Franchise Advisors assist in identifying, qualifying, and onboarding ideal clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT / VALUATION FORM & BENEFITS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Form Column */}
            <div className="lg:col-span-6 bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-md">
              <h3 className="text-2xl font-bold text-[#0b1c2d] mb-2">Request Confidential Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Fill in the details below. All communications are strictly confidential.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                  <h4 className="font-bold text-lg mb-1">Thank you for reaching out!</h4>
                  <p className="text-sm">We have received your inquiry and will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(954) 864-9161"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden bg-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Dropdown <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden bg-white text-sm"
                    >
                      <option value="Selling a Business">Selling a Business</option>
                      <option value="Buying a Business">Buying a Business</option>
                      <option value="Business Valuation">Business Valuation</option>
                      <option value="Franchise Opportunities">Franchise Opportunities</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Paragraph</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us briefly about your business goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden bg-white text-sm"
                    />
                  </div>
                  {formError ? (
                    <p className="text-sm text-red-600">{formError}</p>
                  ) : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c59b27] hover:bg-[#a8821f] text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm shadow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </form>
              )}
            </div>

            {/* Benefits Column */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 bg-amber-50 text-[#c59b27] border border-[#c59b27]/30 text-xs font-bold tracking-wider rounded uppercase">
                Confidential Exit Strategy
              </span>
              <h2 className="text-3xl font-extrabold text-[#0b1c2d] leading-tight">
                Get Free Confidential Valuation Of Your Business
              </h2>
              <p className="text-gray-600 text-base leading-relaxed">
                Maximize your business exit value with Florida’s trusted business brokers. Whether retiring, selling, or expanding, we provide accurate market valuations and seamless transactions.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Florida Market Expertise</h4>
                    <p className="text-sm text-gray-600">
                      Valuations backed by real-time South Florida &amp; statewide transaction data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">100% Confidential Process</h4>
                    <p className="text-sm text-gray-600">
                      Your business details remain strictly private throughout the evaluation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold shrink-0 mt-1">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Maximized Exit Value</h4>
                    <p className="text-sm text-gray-600">
                      Proven strategies to help you get top dollar in competitive markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 flex items-center gap-2">
                <span>🔒</span>
                <p>
                  <strong>Ready to explore your options?</strong> Complete the form to request your no-obligation business valuation and advisory call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 8-PHASE FRAMEWORK */}
      <section className="py-16 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest text-[#c59b27] uppercase mb-2">
              THE ROADMAP TO A SUCCESSFUL SALE
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              A Strategic 8-Phase Framework Designed to Maximize Your Exit Value
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 01 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Seller Objectives</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Understanding the seller’s goals, timeline, and confidentiality requirements to align the sale strategy accordingly.
              </p>
            </div>

            {/* Card 02 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Business Review</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Analyzing the company’s financial statements, overall performance, and daily operations to evaluate business health.
              </p>
            </div>

            {/* Card 03 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Valuation &amp; Pricing</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Determining the accurate market value of the business based on financial data and market trends to set a competitive asking price.
              </p>
            </div>

            {/* Card 04 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                04
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Exit Prep &amp; Docs</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Organizing all essential legal, financial, and operational documents to ensure the business is fully ready for a smooth sale.
              </p>
            </div>

            {/* Card 05 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                05
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Marketing &amp; Outreach</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Creating blind marketing materials and discreetly reaching out to potential buyers without exposing the company’s identity.
              </p>
            </div>

            {/* Card 06 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                06
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Buyer Vetting &amp; NDA</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Screening interested buyers, securing signed NDAs, and sharing sensitive business information in controlled stages.
              </p>
            </div>

            {/* Card 07 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                07
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Negotiation &amp; Diligence</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Evaluating offers, negotiating key terms, and facilitating the buyer's deep-dive financial and legal review.
              </p>
            </div>

            {/* Card 08 */}
            <div className="bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/10 shadow-xs relative overflow-hidden group hover:border-[#c59b27] transition-all">
              <div className="text-4xl font-black text-white/20 group-hover:text-[#c59b27]/40 transition-colors mb-2">
                08
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Closing &amp; Transition</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Finalizing contracts, executing the fund transfer, and managing the handoff process for a seamless ownership transition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 6 REASONS FLORIDA BUSINESS OWNERS CHOOSE KMF */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              6 Reasons Florida Business Owners Choose KMF Business Advisors
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0b1c2d]">
                Confidential Business Advisory · Serving All Of Florida
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                At KMF Business Advisors, we specialize in helping Florida business owners navigate smooth, highly profitable exits. From detailed business valuations and strategic market positioning to confidential marketing, targeted qualified buyer outreach, and skilled deal negotiation, our team guides you through every step of the transaction. We are committed to protecting your privacy, mitigating transaction risks, and securing maximum value for your enterprise.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl max-w-md">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/0c639a78e39baecd2cb2cad1082b0b3b-1.jpg"
                  alt="Professional business brokers in florida presenting exit strategy to Florida business owners in a modern boardroom"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6 Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">1</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Confidentiality First</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We protect your identity using blind profiles, strict NDAs, and controlled disclosure, ensuring sensitive details are only shared with verified prospects in staged phases.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">2</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Valuation and Pricing Strategy</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We analyze financial performance, SDE/EBITDA multiples, assets, and market risks to deliver an accurate, data-backed valuation strategy that maximizes your exit value.
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">3</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Targeted Marketing</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We reach qualified buyers discreetly through targeted outreach, confidential databases, and private investor networks without alerting competitors, employees, or customers.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">4</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Prospect Qualification</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We rigorously screen all buyers for financial capability, industry experience, and genuine intent before granting access to confidential business information.
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">5</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Negotiation Support</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We negotiate deal structures, purchase prices, and contingencies on your behalf, protecting your financial priorities and ensuring favorable transaction terms.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="flex gap-4 p-5 rounded-lg border border-gray-100 hover:border-[#c59b27] transition-colors">
              <div className="text-4xl font-extrabold text-[#c59b27] shrink-0">6</div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Transaction Coordination</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We manage seamless communication between attorneys, CPAs, lenders, landlords, and franchisors to resolve roadblocks and guide your deal smoothly to closing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. BOOK APPOINTMENT CTA BANNER */}
      <section className="py-14 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#c59b27] uppercase">
                Request Confidential Call
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Book a Private Consultation with Trusted Business &amp; Franchise Advisors
              </h2>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Link
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="bg-[#c59b27] hover:bg-[#a8821f] text-white font-semibold px-6 py-3 rounded shadow transition-all text-sm"
                >
                  Book Appointment
                </Link>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#c59b27]">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs text-gray-400">Call Us Any Time :</span>
                    <a href="tel:9548649161" className="text-base font-bold text-white hover:text-[#c59b27]">
                      954-864-9161
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 flex justify-center">
              <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-2xl border-2 border-white/10">
                <Image
                  src="https://images.unsplash.com/photo-1703300450387-047da16a89c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
                  alt="Book Appointment Calendar"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. INDUSTRIES WE SERVE */}
      <section className="py-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d] mb-3">Industries We Serve</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Florida’s economic landscape is dynamic and diverse. Our specialized advisory services focus on:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Home Services & Construction",
                desc: "HVAC, plumbing, electrical, roofing, restoration, pest control, landscaping",
              },
              {
                title: "Healthcare & Senior Care",
                desc: "Home healthcare, assisted living, medical practices, therapy, staffing",
              },
              {
                title: "Manufacturing & Distribution",
                desc: "Industrial manufacturing, food manufacturing, wholesale, import/export",
              },
              {
                title: "Automotive & Transportation",
                desc: "Repair, collision, fleet service, car wash, trucking, logistics",
              },
              {
                title: "Restaurants & Hospitality",
                desc: "Restaurants, multi-unit concepts, catering, bars, hotels",
              },
              {
                title: "Commercial Services",
                desc: "Cleaning, security, fire protection, maintenance, route businesses",
              },
              {
                title: "Education & Childcare",
                desc: "Childcare centers, private schools, training and enrichment",
              },
              {
                title: "Wellness & Medical Aesthetics",
                desc: "Beauty, salons, spas, med spas, fitness",
              },
              {
                title: "Business Services",
                desc: "Accounting, insurance, staffing, marketing, consulting",
              },
              {
                title: "Commercial Real Estate",
                desc: "Retail, industrial, office, medical, mixed-use, land",
              },
            ].map((ind, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-lg border border-gray-100 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-2">{ind.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FRANCHISE ADVISORY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">Franchise Advisory</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Sell a Franchise Location */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0b1c2d] mb-6">Sell a Franchise Location</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <polyline points="17 11 19 13 23 9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Resales</h4>
                      <p className="text-sm text-gray-600">
                        Representation for single-unit, multi-unit, and franchise territory resales.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
                        <path d="M12 6v12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Single-Unit Sales</h4>
                      <p className="text-sm text-gray-600">
                        Confidential marketing and prospect qualification for single franchise locations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Multi-Unit Sales</h4>
                      <p className="text-sm text-gray-600">
                        Portfolio coordination including franchisor and lease assignment approvals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="https://kmfbusinessadvisor.com/business-valuation/"
                className="block text-center bg-[#c59b27] hover:bg-[#a8821f] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Request Franchise Sale Valuation
              </Link>
            </div>

            {/* Card 2: Franchise Your Business */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#0b1c2d] mb-6">Franchise Your Business</h3>
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Development</h4>
                      <p className="text-sm text-gray-600">
                        Strategy and coordination to turn your established business into a franchise system.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Readiness Assessment</h4>
                      <p className="text-sm text-gray-600">
                        Evaluate unit economics, growth potential, and financial franchise readiness.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="8" y1="6" x2="21" y2="6" />
                        <line x1="8" y1="12" x2="21" y2="12" />
                        <line x1="8" y1="18" x2="21" y2="18" />
                        <line x1="3" y1="6" x2="3.01" y2="6" />
                        <line x1="3" y1="12" x2="3.01" y2="12" />
                        <line x1="3" y1="18" x2="3.01" y2="18" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base">Systems Creation</h4>
                      <p className="text-sm text-gray-600">
                        Develop expansion plans, marketing infrastructure, and operator support models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="https://kmfbusinessadvisor.com/contact-us-2/"
                className="block text-center bg-[#c59b27] hover:bg-[#a8821f] text-white font-semibold py-3 px-6 rounded-lg transition-colors text-sm"
              >
                Schedule Franchise Development Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. BUSINESS + COMMERCIAL REAL ESTATE */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Selling the Business, the Property or Both?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Sale Only</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Valuation and confidential marketing focused strictly on operating assets and cash flow when property is leased.
              </p>
            </div>

            {/* Card 2: Featured */}
            <div className="bg-white p-8 rounded-2xl border-2 border-[#0b1c2d] text-center flex flex-col items-center relative shadow-lg">
              <span className="absolute -top-3.5 bg-[#0b1c2d] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                Featured
              </span>
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-[#0b1c2d] mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                  <line x1="9" y1="6" x2="9" y2="6.01" />
                  <line x1="15" y1="6" x2="15" y2="6.01" />
                  <line x1="9" y1="10" x2="9" y2="10.01" />
                  <line x1="15" y1="10" x2="15" y2="10.01" />
                  <line x1="9" y1="14" x2="9" y2="14.01" />
                  <line x1="15" y1="14" x2="15" y2="14.01" />
                  <path d="M10 22v-4h4v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business + Real Estate Package</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Combine operating business equity and owned commercial real estate into a unified transaction package.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <polyline points="17 11 19 13 23 9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business + Lease Assignment</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Coordinate business transfer alongside landlord approvals, lease assignments, or renegotiation terms.
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center italic">
            *Note: Legal, tax, title, and environmental advice is provided by the appropriate licensed professionals.
          </p>
        </div>
      </section>

      {/* 14. SELLER SUCCESS STORIES / CASE STUDIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">Seller Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {/* Case Study 1 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
                  alt="Restoration Company"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    Restoration Services Company Central FL
                  </h3>
                  <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-lg border border-gray-100 text-xs mb-4">
                    <div>
                      <span className="text-gray-500 block">Revenue</span>
                      <strong className="text-gray-900">$3M–$5M</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Multiple</span>
                      <strong className="text-gray-900">Undisclosed</strong>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    <strong>Scenario:</strong> Owner exit preparation and confidential marketing targeting qualified strategic buyers.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    <strong>Key Steps:</strong> Structured SDE normalization and blind prospect qualification.
                  </p>
                </div>
                <Link
                  href="https://kmfbusinessadvisor.com/case-studies/"
                  className="text-sm font-semibold text-[#c59b27] hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
                  alt="Medical Practice"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Practice South FL</h3>
                  <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-lg border border-gray-100 text-xs mb-4">
                    <div>
                      <span className="text-gray-500 block">Revenue</span>
                      <strong className="text-gray-900">$3M–$5M</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Multiple</span>
                      <strong className="text-gray-900">Undisclosed</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Days</span>
                      <strong className="text-gray-900">88</strong>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    <strong>Scenario:</strong> Multi-provider medical clinic transition requiring strict patient confidentiality.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    <strong>Key Steps:</strong> Coordinated practice transfer with commercial lease assignment.
                  </p>
                </div>
                <Link
                  href="https://kmfbusinessadvisor.com/case-studies/"
                  className="text-sm font-semibold text-[#c59b27] hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 flex flex-col">
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Restaurant Group"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Restaurant Group Tampa Bay</h3>
                  <div className="grid grid-cols-2 gap-2 bg-white p-3 rounded-lg border border-gray-100 text-xs mb-4">
                    <div>
                      <span className="text-gray-500 block">Revenue</span>
                      <strong className="text-gray-900">Undisclosed</strong>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Outcome</span>
                      <strong className="text-gray-900">100% Acq</strong>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    <strong>Scenario:</strong> Multi-unit restaurant hospitality brand owner pursuing retirement.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mb-4">
                    <strong>Key Steps:</strong> Package deal structure combining operating business and lease rights.
                  </p>
                </div>
                <Link
                  href="https://kmfbusinessadvisor.com/case-studies/"
                  className="text-sm font-semibold text-[#c59b27] hover:underline"
                >
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 text-center italic">
            *Disclaimer: Case studies represent anonymized client transactions. Past results do not guarantee future transaction outcomes.
          </p>
        </div>
      </section>

      {/* 15. EXECUTIVE TEAM */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#c59b27] uppercase">
              ADVISORY LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1c2d] mt-2 mb-3">
              Meet Our Experienced Business Brokers
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Confidential guidance backed by decades of Florida commercial real estate and business brokerage expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Executive 1: John C. Bucher */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#c59b27] mb-4 shadow">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/John-C.-Bucher-1.webp"
                  alt="John C. Bucher"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">John C. Bucher</h3>
              <span className="text-xs font-semibold text-[#c59b27] uppercase mt-1 mb-3">
                Top-Rated Business Broker of Florida
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Specializing in confidential business sales, valuation reviews, and middle-market mergers &amp; acquisitions.
              </p>
              <Link
                href="https://kmfbusinessadvisor.com/#contact-john"
                className="inline-flex items-center gap-2 bg-[#0b1c2d] hover:bg-[#15324f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors mb-6"
              >
                <span>Ask John Directly</span>
                <span>&rarr;</span>
              </Link>
              {/* QR Code */}
              <div className="border border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col items-center">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-04-15-at-05.51.49_1babdbb8.jpg"
                  alt="John C. Bucher QR Code"
                  width={100}
                  height={100}
                  className="rounded object-contain"
                />
                <span className="text-[11px] font-bold text-gray-500 uppercase mt-2">Scan to Connect</span>
              </div>
            </div>

            {/* Executive 2: Sanjay Wadhwani */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md p-6 text-center flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#c59b27] mb-4 shadow">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/thumb_IMG_0004-1.jpg"
                  alt="Sanjay Wadhwani"
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Sanjay Wadhwani</h3>
              <span className="text-xs font-semibold text-[#c59b27] uppercase mt-1 mb-3">
                Business, Franchise, and Commercial Real Estate Advisor
              </span>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Expert in packaging combined business &amp; commercial real estate assets, franchise development, and lease negotiations.
              </p>
              <Link
                href="https://kmfbusinessadvisor.com/#contact-sanjay"
                className="inline-flex items-center gap-2 bg-[#0b1c2d] hover:bg-[#15324f] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors mb-6"
              >
                <span>Speak with Sanjay</span>
                <span>&rarr;</span>
              </Link>
              {/* QR Code */}
              <div className="border border-gray-200 rounded-xl p-3 bg-gray-50 flex flex-col items-center">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2026-08-07-at-8.07.30-PM-1.jpeg"
                  alt="Sanjay Wadhwani QR Code"
                  width={100}
                  height={100}
                  className="rounded object-contain"
                />
                <span className="text-[11px] font-bold text-gray-500 uppercase mt-2">Scan to Value Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 16. CLIENT REVIEWS / TESTIMONIALS */}
      <section className="py-16 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">What Our Clients Say About Us</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-[#c59b27] text-lg">★★★★★</span>
              <span className="text-sm text-gray-300 font-semibold">153 Google reviews</span>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Review Cards Grid or Carousel display */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={reviews[activeReviewIdx].img}
                  alt={reviews[activeReviewIdx].name}
                  width={50}
                  height={50}
                  className="rounded-full border-2 border-[#c59b27]"
                />
                <div>
                  <h4 className="font-bold text-lg text-white">{reviews[activeReviewIdx].name}</h4>
                  <div className="text-[#c59b27] text-sm">★★★★★ <span className="text-xs text-gray-300 ml-2">Verified Google Review</span></div>
                </div>
              </div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed italic">
                "{reviews[activeReviewIdx].text}"
              </p>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-between items-center mt-6">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveReviewIdx(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeReviewIdx === i ? "bg-[#c59b27] w-6" : "bg-white/30"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    setActiveReviewIdx(
                      activeReviewIdx === 0 ? reviews.length - 1 : activeReviewIdx - 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                  aria-label="Previous review"
                >
                  &larr;
                </button>
                <button
                  onClick={() =>
                    setActiveReviewIdx(
                      activeReviewIdx === reviews.length - 1 ? 0 : activeReviewIdx + 1
                    )
                  }
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white"
                  aria-label="Next review"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 17. SELLER RESOURCE CENTER */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">Seller Resource Center</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="https://kmfbusinessadvisor.com/florida-business-seller-resources/"
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#c59b27] transition-all flex flex-col"
            >
              <div className="h-44 relative">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80"
                  alt="Business Valuation"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#c59b27] transition-colors">
                  How Much Is My Florida Business Worth?
                </h4>
              </div>
            </Link>

            <Link
              href="https://kmfbusinessadvisor.com/florida-business-seller-resources/"
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#c59b27] transition-all flex flex-col"
            >
              <div className="h-44 relative">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
                  alt="SDE vs EBITDA"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#c59b27] transition-colors">
                  SDE vs. EBITDA: What Sellers Should Know
                </h4>
              </div>
            </Link>

            <Link
              href="https://kmfbusinessadvisor.com/florida-business-seller-resources/"
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#c59b27] transition-all flex flex-col"
            >
              <div className="h-44 relative">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                  alt="Real Estate Sale"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#c59b27] transition-colors">
                  Selling a Business with Real Estate
                </h4>
              </div>
            </Link>

            <Link
              href="https://kmfbusinessadvisor.com/florida-business-seller-resources/"
              className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#c59b27] transition-all flex flex-col"
            >
              <div className="h-44 relative">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80"
                  alt="Franchise Ready"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex-1">
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-[#c59b27] transition-colors">
                  Is My Business Ready to Franchise?
                </h4>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 18. FAQS ACCORDION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-base text-gray-900 hover:text-[#c59b27] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-xl font-bold ml-4 text-[#c59b27]">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19. FOOTER */}
      <footer className="bg-[#081523] text-gray-300 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            {/* Col 1: Brand & Logo */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png"
                  alt="business broker in florida"
                  width={200}
                  height={99}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
              {/* YouTube Link */}
              <div>
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>YouTube</span>
                </a>
              </div>
            </div>

            {/* Col 2: Our Services */}
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4">OUR SERVICES</h6>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="https://kmfbusinessadvisor.com/franchise-services/" className="hover:text-[#c59b27] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="https://kmfbusinessadvisor.com/about-us/" className="hover:text-[#c59b27] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="https://kmfbusinessadvisor.com/contact-us/" className="hover:text-[#c59b27] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Info */}
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4">INFO</h6>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="https://kmfbusinessadvisor.com/sell-a-business/" className="hover:text-[#c59b27] transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="https://kmfbusinessadvisor.com/buy-a-business/" className="hover:text-[#c59b27] transition-colors">
                    Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/business-broker-faq" className="hover:text-[#c59b27] transition-colors">
                    Florida Business Brokerage FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact Info */}
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4">CONTACT INFO</h6>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c59b27] mt-0.5">📍</span>
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#c59b27]">📞</span>
                  <a href="tel:9548649161" className="hover:text-[#c59b27] transition-colors">
                    954-864-9161
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="text-[#c59b27]">✉️</span>
                  <a href="mailto:swadhwani@kmfbusinessadvisors.com" className="hover:text-[#c59b27] transition-colors break-all">
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright & Legal Links */}
          <div className="pt-8 text-center text-xs text-gray-500 space-y-2">
            <p>
              Copyright © 2026 KMF Business Advisors. All rights reserved. |{" "}
              <Link href="/privacy-policy" className="underline hover:text-white">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="/terms-and-conditions" className="underline hover:text-white">
                Terms and Conditions
              </Link>{" "}
              |{" "}
              <Link href="/accessibility-statement" className="underline hover:text-white">
                Accessibility
              </Link>{" "}
              |{" "}
              <Link href="/disclaimers" className="underline hover:text-white">
                Disclaimers
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Click to WhatsApp button (Replicating ht-ctc plugin) */}
      <a
        href="https://wa.me/19548649161?text=Welcome%20to%20KMF%20Business%20Advisors!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-[#20b038] hover:bg-[#1ca033] text-white py-2 px-3.5 rounded-full shadow-lg transition-transform hover:scale-105"
        aria-label="Contact Broker on WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.06-2.184-.555-1.905-.788-3.125-2.73-3.22-2.857-.095-.128-.772-1.026-.772-1.956 0-.93.488-1.386.662-1.576.173-.19.378-.238.504-.238.126 0 .252.001.363.007.117.006.273-.044.427.324.159.38.542 1.32.59 1.417.048.096.08.209.016.335-.063.127-.095.207-.19.317-.095.111-.2.248-.286.334-.096.095-.195.198-.084.389.111.19.493.813 1.058 1.316.726.647 1.339.847 1.53.942.19.096.302.08.414-.047.112-.128.476-.556.603-.746.127-.19.254-.158.428-.095.174.063 1.107.522 1.297.617.19.096.318.143.365.223.048.079.048.46-.096.864z" />
        </svg>
        <span className="text-xs font-semibold">Contact Broker</span>
      </a>
    </div>
  );
}
