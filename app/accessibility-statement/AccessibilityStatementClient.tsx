"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AccessibilityStatementClient() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800">
      {/* HERO / TITLE HEADER */}
      <section className="bg-slate-900 text-white py-14 lg:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-400 mb-3">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Accessibility Statement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Accessibility Statement
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            KMF Business Advisors Florida
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10 lg:p-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-l-4 border-amber-500 pl-4">
                Digital Accessibility Commitment
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                KMF Business Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards, including the Web Content Accessibility Guidelines (WCAG 2.1).
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Need Assistance?
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                If you experience any difficulty accessing any part of this website or need assistance, please contact us at{" "}
                <a
                  href="mailto:swadhwani@kmfbusinessadvisors.com"
                  className="text-[#c59b27] hover:underline font-medium"
                >
                  swadhwani@kmfbusinessadvisors.com
                </a>{" "}
                or call{" "}
                <a
                  href="tel:9548649161"
                  className="text-[#c59b27] hover:underline font-medium"
                >
                  954-864-9161
                </a>{" "}
                and we will gladly assist you.
              </p>
            </div>

            {/* Assistance Card */}
            <div className="mt-10 p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  Have feedback or accessibility questions?
                </h3>
                <p className="text-sm text-slate-600">
                  Our team is available 24/7 to assist with your requirements.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="shrink-0 bg-[#c59b27] hover:bg-[#a8821f] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png"
                  alt="KMF Business Advisors Logo"
                  width={220}
                  height={109}
                  className="brightness-0 invert object-contain"
                />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                Our Services
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/sell-your-business" className="hover:text-amber-400 transition-colors">
                    Sell Your Business
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-amber-400 transition-colors">
                    Buy a Business
                  </Link>
                </li>
                <li>
                  <Link href="/profitable-business-for-sale" className="hover:text-amber-400 transition-colors">
                    Profitable Businesses
                  </Link>
                </li>
                <li>
                  <Link href="/franchise-services" className="hover:text-amber-400 transition-colors">
                    Franchise Services
                  </Link>
                </li>
                <li>
                  <Link href="/real-estate" className="hover:text-amber-400 transition-colors">
                    Real Estate
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li>
                  <Link href="/case-studies" className="hover:text-amber-400 transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/florida-business-seller-resources" className="hover:text-amber-400 transition-colors">
                    Seller Resources
                  </Link>
                </li>
                <li>
                  <Link href="/florida-business-buyer-resources" className="hover:text-amber-400 transition-colors">
                    Buyer Resources
                  </Link>
                </li>
                <li>
                  <Link href="/business-broker-faq" className="hover:text-amber-400 transition-colors">
                    Business Broker FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/about-kmf" className="hover:text-amber-400 transition-colors">
                    About KMF
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white text-base font-bold uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-3">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm text-slate-400">
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
                  <a
                    href="mailto:swadhwani@kmfbusinessadvisors.com"
                    className="hover:text-amber-400 transition-colors break-all"
                  >
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>Copyright © 2026 KMF Business Advisors. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-400 transition-colors underline">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-slate-400 transition-colors underline">
                Terms and Conditions
              </Link>
              <Link href="/accessibility-statement" className="hover:text-slate-400 transition-colors underline text-amber-400 font-medium">
                Accessibility
              </Link>
              <Link href="/disclaimers" className="hover:text-slate-400 transition-colors underline">
                Disclaimers
              </Link>
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
