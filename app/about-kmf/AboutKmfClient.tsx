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

export default function AboutKmfClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);
  const [sellDropdownOpen, setSellDropdownOpen] = useState(false);
  const [franchiseDropdownOpen, setFranchiseDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "What types of businesses does KMF represent?",
      a: "KMF considers operating businesses across service, construction, healthcare, manufacturing, distribution, hospitality, retail and other sectors, together with franchise and business-related commercial property assignments.",
    },
    {
      q: "What does middle market mean for KMF clients?",
      a: "The phrase generally refers to established companies larger than a typical owner-operated small business. The appropriate valuation method and marketing strategy depend on earnings, management depth, transaction size and likely buyer groups.",
    },
    {
      q: "How does KMF determine whether to accept an engagement?",
      a: "KMF considers financial records, seller expectations, marketability, industry, location, transaction risks and whether the assignment fits the firm's capabilities and professional obligations.",
    },
    {
      q: "What professionals may be involved in a transaction?",
      a: "A transaction may require attorneys, CPAs, lenders, appraisers, inspectors, landlords, franchisors, licensing professionals and closing or escrow agents. KMF coordinates communication but does not replace their independent advice.",
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
              <span className="inline-block bg-[#c59b27]/15 border border-[#c59b27]/30 text-[#9a7719] text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                About KMF Business Advisors
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0b1c2d] leading-tight">
                Florida’s Premier Middle-Market{" "}
                <span className="text-[#c59b27]">Business Advisory</span> Firm
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We combine strict confidentiality, precise market valuations, and data-backed exit strategies to help business owners prepare for market, evaluate offers, and maximize enterprise value across Florida.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-[#c59b27] hover:bg-[#b0881f] text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                >
                  Contact Us &rarr;
                </Link>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 relative group">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                  alt="KMF Business Advisors Team Consultation"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY TAKEAWAYS SHORT BOX */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-[#c59b27] p-6 sm:p-8 rounded-r-xl shadow-sm flex items-start gap-4">
            <span className="text-2xl shrink-0 mt-0.5">💡</span>
            <div>
              <h2 className="text-lg font-bold text-[#0b1c2d] mb-1">Key Takeaways</h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                <strong>KMF Business Advisors</strong> is a premier Florida middle-market advisory firm delivering expert business brokerage, precise market valuations, confidential exit planning, and full-service franchising solutions across the state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR ADVISORY APPROACH & CORE VALUES (3 PILLARS) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              OUR ADVISORY APPROACH & CORE VALUES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              Built on Confidentiality, Precision & Proven Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop"
                  alt="Uncompromising Confidentiality"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c2d] mb-2">
                    Uncompromising Confidentiality
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Protecting your business identity with strict NDA protocols and blind profile marketing throughout the deal process.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
                  alt="Florida Market Mastery"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c2d] mb-2">
                    Florida Market Mastery
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Deep local insights into commercial real estate, trade valuations, and Florida’s middle-market business landscape.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
              <div className="h-56 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop"
                  alt="End-to-End Deal Execution"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1c2d] mb-2">
                    End-to-End Deal Execution
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Comprehensive advisory support guiding you seamlessly from initial valuation to final closing and ownership transition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADVISORY EXCELLENCE (3 STEP ROWS) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              Advisory Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              How Does KMF Support Your Business Growth & Exit Strategy?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              At <strong>KMF Business Advisors</strong>, we combine deep Florida market intelligence with structured deal execution to maximize business enterprise value.
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c59b27] transition-colors">
              <div className="md:w-1/3">
                <span className="text-xs font-mono font-bold text-[#c59b27] block mb-1">
                  STEP 01
                </span>
                <h3 className="text-xl font-bold text-[#0b1c2d]">
                  Confidential Market Positioning
                </h3>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  We protect operational stability, staff, and buyer confidentiality using tailored non-disclosure agreements, private listings, and vetted network access throughout Florida.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c59b27] transition-colors">
              <div className="md:w-1/3">
                <span className="text-xs font-mono font-bold text-[#c59b27] block mb-1">
                  STEP 02
                </span>
                <h3 className="text-xl font-bold text-[#0b1c2d]">
                  Precision Valuation & Analytics
                </h3>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our team evaluates balance sheets, market comps, and intangible brand assets to establish a realistic, top-tier enterprise valuation for seamless negotiations.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#c59b27] transition-colors">
              <div className="md:w-1/3">
                <span className="text-xs font-mono font-bold text-[#c59b27] block mb-1">
                  STEP 03
                </span>
                <h3 className="text-xl font-bold text-[#0b1c2d]">
                  Structured Closing & Transition
                </h3>
              </div>
              <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-gray-200 pt-4 md:pt-0 md:pl-6">
                <p className="text-sm text-gray-600 leading-relaxed">
                  From legal due diligence and contract structuring to buyer handover, we oversee every milestone to ensure a secure and lucrative transaction finish line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. COMPREHENSIVE BUSINESS BROKERAGE & ADVISORY SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider bg-[#c59b27]/10 px-3 py-1 rounded-full">
              Empowering Business Leaders Across Florida
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] mt-3 mb-4">
              Comprehensive Business Brokerage & Advisory Solutions
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              At <strong>KMF Business Advisors</strong>, we specialize in helping lower to middle-market business owners navigate complex financial transactions. Whether you are looking to sell a multi-million dollar enterprise, acquire an established Florida business, or franchise a proven operational model, our multidisciplinary team provides strategic, data-driven execution every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-lg font-bold text-[#0b1c2d] mb-2">
                Strict Confidentiality Guarantees
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We protect your business reputation, staff, and customer relationships using custom non-disclosure agreements and discreet marketing channels throughout the sales process.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-[#0b1c2d] mb-2">
                Valuation & Deal Structuring
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our advisors perform in-depth financial analysis and market comparisons to determine fair market value, ensuring sellers receive maximum return and buyers secure viable investments.
              </p>
            </div>

            <div className="border border-gray-200 rounded-2xl p-8 bg-gray-50 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-[#0b1c2d] mb-2">
                End-to-End Growth & Exit Planning
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From pre-sale optimization and document preparation to closing, legal structuring, and post-transaction transition, we ensure a seamless execution for every stakeholder.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY FLORIDA BUSINESS OWNERS CHOOSE KMF (WITH IMAGE) */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1c2d] leading-tight">
                Why Florida Business Owners Choose KMF Business Advisors?
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                At <strong>KMF Business Advisors</strong>, we bridge the gap between business owners and qualified investors across Florida. Our middle-market advisory team brings technical precision, complete confidentiality, and deep local market expertise to every transaction.
              </p>

              <ul className="space-y-4 pt-2">
                <li className="flex items-start gap-3">
                  <span className="text-[#c59b27] font-bold text-lg mt-0.5">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Strict Confidentiality Protocols:</strong> We protect your operational stability, employees, and proprietary relationships using custom non-disclosure agreements and discreet, private buyer screenings throughout the sales process.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c59b27] font-bold text-lg mt-0.5">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Data-Driven Enterprise Valuations:</strong> Our valuation team performs in-depth financial analysis, earnings adjustments, and Florida market comparisons to ensure your business commands maximum enterprise value.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#c59b27] font-bold text-lg mt-0.5">•</span>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>End-to-End Deal Execution:</strong> From pre-sale optimization and legal compliance to final contract negotiations and buyer transition, we guide you seamlessly through every milestone.
                  </p>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2026/10/53e4defa970fcba494f0208c5eb9c757.jpg"
                  alt="KMF Business Advisors team consulting with Florida business owner"
                  width={735}
                  height={617}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. AEO / VALUE ACCREDITATION SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 sm:p-12 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0b1c2d] mb-4">
              How Does KMF Support Your Business Growth & Exit Strategy?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              At <strong>KMF Business Advisors</strong>, we bridge the gap between business owners and qualified investors across Florida. Specifically designed for <strong>Florida middle-market business owners, prospective enterprise buyers, and franchise investors</strong>, our advisory team brings technical precision, complete confidentiality, and deep local market expertise to every transaction.
            </p>

            <ul className="space-y-4 mb-8 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c59b27] font-bold">✓</span>
                <span>
                  <strong>Strict Confidentiality Protocols:</strong> We protect your operational stability, employees, and proprietary relationships using custom non-disclosure agreements and discreet, private buyer screenings throughout the sales process.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c59b27] font-bold">✓</span>
                <span>
                  <strong>Data-Driven Enterprise Valuations:</strong> Based on our hands-on experience guiding lower-to-middle market transactions across Florida, we apply custom financial valuation templates and confidential buyer screening protocols to ensure seamless deal execution. Our advisors follow industry-standard valuation practices aligned with the{" "}
                  <a
                    href="https://www.ibba.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c59b27] underline hover:text-[#9a7719]"
                  >
                    International Business Brokers Association (IBBA)
                  </a>{" "}
                  and official corporate records via{" "}
                  <a
                    href="https://dos.fl.gov/sunbiz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c59b27] underline hover:text-[#9a7719]"
                  >
                    Florida Sunbiz
                  </a>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c59b27] font-bold">✓</span>
                <span>
                  <strong>End-to-End Deal Execution:</strong> From pre-sale optimization and legal compliance to final contract negotiations and buyer transition, we guide you seamlessly through every milestone.
                </span>
              </li>
            </ul>

            <p className="text-sm text-gray-600 italic border-t border-gray-200 pt-4">
              Ready to discuss your business valuation or franchise expansion? Connect with our Florida advisory team today for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0b1c2d] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm">
              Answers regarding our middle-market engagements and Florida transaction process.
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

      {/* 11. FOOTER */}
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
              <div>
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#c59b27] hover:underline"
                >
                  Watch on YouTube
                </a>
              </div>
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
                  <Link href="/frequently-asked-questions" className="hover:text-white transition-colors">
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
