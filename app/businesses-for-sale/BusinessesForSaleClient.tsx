"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessesForSaleClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>("buy");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [keyword, setKeyword] = useState("");
  const [region, setRegion] = useState("");
  const [price, setPrice] = useState("");

  const faqs = [
    {
      q: "Why do some listings omit the business name and exact address?",
      a: "KMF markets businesses confidentially. Public summaries may describe the industry, general location, revenue and earnings without revealing information that could identify the company to employees, customers or competitors.",
    },
    {
      q: "Are all listed businesses eligible for SBA financing?",
      a: "No. Financing depends on verified cash flow, tax returns, buyer qualifications, collateral, industry risk, deal structure and lender requirements. A buyer should not assume that a listing is SBA eligible unless a lender has evaluated the transaction.",
    },
    {
      q: "How can I request the confidential information memorandum?",
      a: "Complete the buyer-registration process, sign the required NDA and provide proof of funds or lender support. KMF will then determine whether the opportunity fits the buyer's qualifications and the seller's disclosure requirements.",
    },
    {
      q: "May I contact the company's employees or customers?",
      a: "No. Buyers may not contact employees, customers, vendors, landlords or other connected parties unless the seller gives written authorization and the transaction documents permit the contact. Unauthorized communication may violate the NDA and damage the transaction.",
    },
  ];

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans selection:bg-[#c59b27] selection:text-white">


      {/* 3. HERO & SEARCH FILTER SECTION */}
      <section className="bg-gradient-to-b from-[#0b1c2d] to-[#11283f] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#c59b27] text-xs font-bold tracking-widest rounded uppercase mb-4">
              FLORIDA BUSINESSES FOR SALE
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-4">
              Explore Profitable Businesses for Sale in Florida
            </h1>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed">
              Explore pre-vetted Florida business for sale opportunities. Access confidential financial profiles,
              connect with senior brokers, and acquire established enterprises across Florida under full NDA protection.
            </p>
          </div>

          {/* Live Search & Filter Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-gray-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://bizmls.com/listings/bbf-1267003/bus-all.asp", "_blank");
              }}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
            >
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Keyword / Industry
                </label>
                <input
                  type="text"
                  placeholder="e.g. Restaurant, HVAC, Franchise..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Location
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden text-sm"
                >
                  <option value="">All Florida Regions</option>
                  <option value="south-fl">South Florida (Miami, Fort Lauderdale)</option>
                  <option value="central-fl">Central Florida (Orlando, Tampa)</option>
                  <option value="north-fl">North Florida (Jacksonville)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
                  Price Range
                </label>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#c59b27] focus:outline-hidden text-sm"
                >
                  <option value="">Any Budget</option>
                  <option value="under-500k">Under $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $5,000,000</option>
                  <option value="5m-plus">$5,000,000+</option>
                </select>
              </div>

              <div>
                <a
                  href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#c59b27] hover:bg-[#a8821f] text-white font-bold py-2.5 px-4 rounded-lg transition-colors text-sm shadow-md"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span>Find Businesses</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. KEY TAKEAWAY BANNER */}
      <section className="bg-amber-50/50 py-4 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-700">
          <span className="font-bold text-black">Key Takeaway:</span> Explore verified and profitable businesses for
          sale across Florida. KMF Business Advisors offers pre-screened opportunities with full financial transparency
          and confidential acquisition support.
        </div>
      </section>

      {/* 5. BUYER VALUE / WHY ACQUIRE A BUSINESS WITH KMF ADVISORS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest text-[#c59b27] uppercase">
              SMART ACQUISITIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0b1c2d] mt-2 mb-3">
              Why Acquire a Business with KMF Advisors?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              We streamline your business buying journey while protecting your assets and confidentiality at every step.
            </p>
          </div>

          {/* 3 Value Proposition Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Confidential Listings</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All sensitive details for <strong>businesses for sale in Florida</strong> remain secure behind legally binding NDAs to protect both buyer and seller integrity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Vetted Financial Data</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every listed opportunity undergoes deep financial review and tax-return verification before hitting our active <strong>Florida business for sale</strong> portal.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-[#c59b27] transition-all shadow-xs flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-amber-100/80 text-[#c59b27] flex items-center justify-center mb-6">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Senior Advisor Guidance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Work directly with licensed <strong>Florida business brokers</strong> who guide you through offer drafting, negotiations, and closing.
              </p>
            </div>
          </div>

          {/* Bottom Benefit Highlights Banner */}
          <div className="bg-[#0b1c2d] text-white rounded-2xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex items-start gap-4">
              <span className="text-4xl font-extrabold text-[#c59b27]">01</span>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">SBA Financing Ready</h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Most of our featured <strong>Florida businesses for sale</strong> are pre-qualified for SBA 7(a) loan financing with 10% down.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl font-extrabold text-[#c59b27]">02</span>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">E2 Visa Compliant Options</h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Ideal opportunities structured for foreign investors aiming to <strong>buy a business in Florida</strong> and secure US E-2 residency visas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-4xl font-extrabold text-[#c59b27]">03</span>
              <div>
                <h4 className="font-bold text-lg text-white mb-1">Turnkey Cash Flow</h4>
                <p className="text-xs sm:text-sm text-gray-300">
                  Acquire established operations with existing staff, supplier contracts, and immediate cash flow.
                </p>
              </div>
            </div>
          </div>

          {/* Register Action CTA Button */}
          <div className="text-center">
            <a
              href="https://bizmls.com/listings/bbf-1267003/buy-enter.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#c59b27] hover:bg-[#a8821f] text-white font-bold py-3.5 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 text-sm sm:text-base"
            >
              <span>Register as a Qualified Buyer</span>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 6. FAQS SECTION */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
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

      {/* 7. FOOTER */}
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
              <Link href="https://kmfbusinessadvisor.com/privacy-policy/" className="underline hover:text-white">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="https://kmfbusinessadvisor.com/terms-and-conditions/" className="underline hover:text-white">
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
