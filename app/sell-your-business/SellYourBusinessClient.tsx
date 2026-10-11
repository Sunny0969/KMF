"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SellYourBusinessClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("sell");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Can KMF market my business without publicly identifying it?",
      a: "Yes. The business can be introduced through a blind profile. Identifying and financial information is released in stages after the prospective buyer signs the required confidentiality agreement and demonstrates financial capacity.",
    },
    {
      q: "What makes a business more attractive to qualified buyers?",
      a: "Buyers generally favor consistent earnings, accurate records, recurring revenue, a stable team, diversified customers, documented procedures, transferable licenses and limited dependence on the owner.",
    },
    {
      q: "Should I accept the offer with the highest purchase price?",
      a: "Not automatically. Sellers should compare cash at closing, financing risk, contingencies, escrow, seller notes, earnouts, working capital, assumed liabilities, real estate terms, transition duties and the buyer's ability to close.",
    },
    {
      q: "Will KMF coordinate due diligence and closing?",
      a: "KMF helps coordinate information requests and communication among the parties and their advisers. Attorneys, accountants, lenders, landlords, franchisors and licensing professionals remain responsible for matters within their respective roles.",
    },
  ];

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-[#c59b27] selection:text-white">


      {/* 3. HERO SECTION (DARK SPLIT HERO - #0B1C2D) */}
      <section className="bg-gradient-to-b from-[#0b1c2d] to-[#11283f] text-white py-16 lg:py-24 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Content & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="inline-block px-3.5 py-1 bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#c59b27] text-xs font-bold tracking-widest rounded uppercase">
                  SELL MY BUSINESS IN FLORIDA
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Sell Your Business For Maximum Value, Total Privacy.
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                If you are asking, "How do I sell my business in Florida confidently?" KMF Business Advisors is here to guide your exit strategy. From market-informed valuations to deal closing, we connect your company with pre-qualified buyers while strictly protecting your operational confidentiality.
              </p>
              <div className="pt-2">
                <Link
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="inline-flex items-center gap-3 bg-[#c59b27] hover:bg-[#a8821f] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
                >
                  <span>Get Free Business Valuation</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Metrics Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl space-y-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#c59b27]">#1 Rated</div>
                  <div className="text-sm font-semibold text-gray-200 mt-1">Florida Business Brokerage</div>
                </div>
                <div className="border-t border-white/10"></div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
                  <div className="text-sm font-semibold text-gray-200 mt-1">Confidential &amp; Protected Process</div>
                </div>
                <div className="border-t border-white/10"></div>
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                    <svg className="w-5 h-5 text-[#c59b27] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Pre-Screened Buyers Only</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                    <svg className="w-5 h-5 text-[#c59b27] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>SBA Loan Structured Deals</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200 font-medium">
                    <svg className="w-5 h-5 text-[#c59b27] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>100% Qualified Buyer Leads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE SUMMARY BANNER */}
      <section className="bg-amber-50/50 py-4 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-700">
          <span className="font-bold text-black">Executive Summary:</span> Selling a business in Florida requires complete confidentiality and accurate market pricing. KMF Business Advisors handles every step from valuation to closing to maximize your business payout.
        </div>
      </section>

      {/* 5. SELLING YOUR BUSINESS IN FLORIDA WITH KMF ADVISORS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              Selling Your Business in Florida with KMF Business Advisors
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Selling a business is one of the most significant financial transactions a business owner will ever undertake. At KMF Business Advisors, we guide business owners through every stage of the sale process, ensuring complete confidentiality, accurate valuation, and maximum return on investment. Whether you own a retail store, a service-based business, a manufacturing company, or a digital franchise, our experienced team provides tailored solutions to help you achieve your exit goals in Florida's competitive market.
              </p>
            </div>
            <div className="lg:col-span-6 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-lg">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/05/Business-broker-Florida-team-meeting-with-client-discussing-business-sale-1024x585.jpeg"
                  alt="Two professional business advisors discussing selling a business in Florida"
                  width={600}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUR STEP-BY-STEP BUSINESS SELLING PROCESS (#0B1C2D) */}
      <section className="py-16 bg-[#0b1c2d] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Step-by-Step Business Selling Process
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all">
              <div className="text-3xl font-black text-[#c59b27] mb-2">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Confidential Business Valuation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Before putting your business on the market, it is vital to know its true value. We perform a thorough{" "}
                <Link href="https://beta.kmfbusinessadvisor.com/free-business-valuation/" className="text-[#c59b27] underline">
                  business valuation
                </Link>{" "}
                based on your financial statements, market conditions, growth potential, and industry benchmarks.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all">
              <div className="text-3xl font-black text-[#c59b27] mb-2">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom Marketing &amp; CIM Preparation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We create a comprehensive Confidential Information Memorandum (CIM) that highlights your business's strengths, financial metrics, and growth prospects without revealing your identity.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all">
              <div className="text-3xl font-black text-[#c59b27] mb-2">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Buyer Vetting &amp; NDA Execution</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Protecting your business confidentiality is our top priority. Every potential buyer undergoes strict financial screening and must sign a legally binding Non-Disclosure Agreement (NDA) before receiving sensitive operational details.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all">
              <div className="text-3xl font-black text-[#c59b27] mb-2">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Deal Structuring &amp; Offer Negotiation</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Our expert brokers help structure competitive offers, negotiating terms that align with your financial targets and post-sale plans while minimizing tax liabilities.
              </p>
            </div>

            {/* Step 5: Full Width */}
            <div className="md:col-span-2 bg-white/10 backdrop-blur-xs p-8 rounded-2xl border border-white/10 shadow-xs hover:border-[#c59b27] transition-all">
              <div className="text-3xl font-black text-[#c59b27] mb-2">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Due Diligence &amp; Closing</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We coordinate with attorneys, CPAs, escrow agents, and lenders to ensure a smooth due diligence process, compliant with{" "}
                <a href="https://www.sunbiz.org/" target="_blank" rel="noopener noreferrer" className="text-[#c59b27] underline">
                  Florida Division of Corporations
                </a>{" "}
                business registration standards, leading to a successful closing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE KMF BUSINESS ADVISORS? */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#c59b27] uppercase">
              OUR ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d] mt-2 mb-3">
              Why Choose KMF Business Advisors?
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs">
              <div className="w-12 h-12 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strict Confidentiality</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We ensure your employees, competitors, vendors, and customers never know your business is for sale until the deal is officially closed.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs">
              <div className="w-12 h-12 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Maximum Valuation</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We analyze SDE (Seller's Discretionary Earnings) and EBITDA to position your company for top market value in Florida.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs">
              <div className="w-12 h-12 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Buyer Network</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Access thousands of pre-qualified local, national, and international buyers actively searching for{" "}
                <Link href="/businesses-for-sale" className="text-[#c59b27] underline">
                  businesses for sale
                </Link>.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs">
              <div className="w-12 h-12 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f39c12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Full Deal Management</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From initial financial assessment to final escrow closing, our brokers handle all heavy lifting so you can focus on running your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. A SMARTER WAY TO SELL YOUR BUSINESS */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c2d]">
              A Smarter Way to Sell Your Business
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              Designed specifically to give owners full leverage, total privacy, and peace of mind.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mb-10">
            {/* List Item 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-6 shadow-xs">
              <div className="text-3xl font-extrabold text-[#c59b27] shrink-0">01</div>
              <div>
                <h4 className="font-bold text-base text-gray-900 mb-1">Strict Non-Disclosure Protocols</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No public names or addresses. Buyers sign strict legal NDAs and undergo vetting before seeing financial info.
                </p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-6 shadow-xs">
              <div className="text-3xl font-extrabold text-[#c59b27] shrink-0">02</div>
              <div>
                <h4 className="font-bold text-base text-gray-900 mb-1">Qualified Buyer Matching</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Tap into our active database of verified investors, corporate firms, and SBA pre-approved individual buyers.
                </p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-start gap-6 shadow-xs">
              <div className="text-3xl font-extrabold text-[#c59b27] shrink-0">03</div>
              <div>
                <h4 className="font-bold text-base text-gray-900 mb-1">End-to-End Negotiation</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We handle valuation, offers, due diligence, and closing escrow to protect your proceeds at every step.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 border-2 border-[#0b1c2d] hover:bg-[#0b1c2d] text-[#0b1c2d] hover:text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm"
            >
              <span>Speak with a Business Broker</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 bg-white">
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
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden shadow-2xs"
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
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#081523] text-gray-300 pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
            {/* Col 1 */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png"
                  alt="KMF Business Advisors official logo - Florida business brokerage services"
                  width={200}
                  height={99}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
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

            {/* Col 2 */}
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

            {/* Col 3 */}
            <div>
              <h6 className="text-white text-sm font-bold uppercase tracking-wider mb-4">INFO</h6>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link href="https://kmfbusinessadvisor.com/sell-a-business/" className="hover:text-[#c59b27] transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-[#c59b27] transition-colors">
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

            {/* Col 4 */}
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

          {/* Copyright */}
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
              <Link href="https://kmfbusinessadvisor.com/accessibility-statement/" className="underline hover:text-white">
                Accessibility
              </Link>{" "}
              |{" "}
              <Link href="https://kmfbusinessadvisor.com/disclaimers/" className="underline hover:text-white">
                Disclaimers
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Click to WhatsApp button */}
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
