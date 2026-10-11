"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Inline icons for lightning-fast Turbopack compilation without external dependencies
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

function IconChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
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

function IconFacebook({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

function IconLinkedIn({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.156z" />
    </svg>
  );
}

function IconYouTube({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

interface FAQItem {
  q: string;
  a: string;
}

const faqList: FAQItem[] = [
  {
    q: "Who will manage my transaction?",
    a: "The assigned adviser depends on the type, location and complexity of the engagement. Clients should receive the responsible adviser's role, contact information and the scope of services in writing.",
  },
  {
    q: "Are KMF advisers licensed?",
    a: "The website should display only current, verified license information and the capacity in which each adviser acts. Clients may confirm applicable licenses through the appropriate Florida regulatory authority.",
  },
  {
    q: "Can the team advise on both the business and commercial property?",
    a: "KMF's combined experience can help coordinate transactions involving an operating business and related property. The business and real estate components still require separate analysis, contracts and professional review.",
  },
  {
    q: "Will my adviser work with my attorney and accountant?",
    a: "Yes. KMF encourages clients to involve qualified legal, tax and accounting advisers. Coordinated communication can reduce delays and help the parties address issues before closing.",
  },
];

export default function OurTeamClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">


      {/* 3. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 lg:py-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Team Collage Visual */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                {/* Decorative background glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-[#0B1C2D]/10 rounded-3xl blur-2xl -z-10" />
                
                {/* 6-Photo Mosaic Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 p-3 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-slate-200/80">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 shadow-sm hover:scale-[1.02] transition-transform duration-300">
                    <img
                      src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=400&auto=format&fit=crop"
                      alt="Advisor"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-[#0B1C2D] text-white px-5 py-3 rounded-xl shadow-lg border border-slate-700/60 hidden sm:flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold tracking-wide uppercase">Decades of Combined FL Dealflow</span>
                </div>
              </div>
            </div>

            {/* Right Column: Text & CTA */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-[#c59b27] text-xs font-bold tracking-wider uppercase">
                <span>KMF EXPERT BROKERS</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1C2D] leading-[1.18] tracking-tight">
                Experienced and Licensed Business Brokers Florida &amp;{" "}
                <span className="text-[#c59b27]">M&amp;A Advisors</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Our business broker&apos;s team brings decades of combined experience in business valuation,
                commercial real estate, and trade acquisitions across Florida.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#advisors"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#c59b27] hover:bg-[#b0871e] text-slate-900 font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Meet Our Advisors</span>
                  <span className="text-lg leading-none">↓</span>
                </a>
                <a
                  href="https://kmfbusinessadvisor.com/contact-us/"
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base rounded-xl border border-slate-300 shadow-sm transition-colors"
                >
                  <span>Schedule Consultation</span>
                  <IconArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. EXECUTIVE TEAM LEADERSHIP CARDS SECTION */}
      <section id="advisors" className="py-20 lg:py-28 bg-[#0B1C2D] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#c59b27] text-xs font-bold tracking-widest uppercase">
              ADVISORY LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Meet Our Experienced Business Brokers
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Confidential guidance backed by decades of Florida commercial real estate and business brokerage expertise.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Card 1: John C. Bucher */}
            <div className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col hover:border-amber-500/40 transition-all duration-300 group">
              {/* Top Banner accent */}
              <div className="h-28 bg-gradient-to-r from-amber-600 via-[#c59b27] to-amber-500 relative" />

              {/* Avatar Wrap */}
              <div className="px-8 -mt-16 flex items-end justify-between">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-xl bg-slate-800">
                  <Image
                    src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/John-C.-Bucher-1.webp"
                    alt="John C. Bucher"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="hidden sm:block text-right pb-2">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">Licensed Florida Broker</span>
                  <span className="text-xs text-slate-400">Senior Partner</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">John C. Bucher</h3>
                  <span className="text-sm font-semibold text-[#c59b27] block mt-1">
                    Top-Rated Business Broker of Florida
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    Specializing in confidential business sales, valuation reviews, and middle-market mergers &amp; acquisitions.
                  </p>
                </div>

                <div className="space-y-5 pt-2 border-t border-slate-800">
                  <a
                    href="mailto:swadhwani@kmfbusinessadvisors.com?subject=Inquiry%20for%20John%20C.%20Bucher"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-[#c59b27] hover:bg-[#b0871e] text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md shadow-amber-500/10"
                  >
                    <span>Ask John Directly</span>
                    <IconArrowRight className="w-4 h-4" />
                  </a>

                  {/* Socials & QR */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <a
                        href="https://kmfbusinessadvisor.com/our-team/#"
                        aria-label="Facebook"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconFacebook className="w-4 h-4" />
                      </a>
                      <a
                        href="https://kmfbusinessadvisor.com/our-team/#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconLinkedIn className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.youtube.com/@kmfbusinessadvisors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconYouTube className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3 py-1.5 rounded-xl">
                      <div className="w-9 h-9 relative rounded overflow-hidden bg-white p-0.5">
                        <Image
                          src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-04-15-at-05.51.49_1babdbb8.jpg"
                          alt="QR Code John"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 tracking-wider">SCAN TO CONNECT</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2: Sanjay Wadhwani */}
            <div className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col hover:border-amber-500/40 transition-all duration-300 group">
              {/* Top Banner accent */}
              <div className="h-28 bg-gradient-to-r from-amber-600 via-[#c59b27] to-amber-500 relative" />

              {/* Avatar Wrap */}
              <div className="px-8 -mt-16 flex items-end justify-between">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-4 border-slate-900 shadow-xl bg-slate-800">
                  <Image
                    src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/thumb_IMG_0004-1.jpg.webp"
                    alt="Sanjay Wadhwani"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="hidden sm:block text-right pb-2">
                  <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block">Managing Principal</span>
                  <span className="text-xs text-slate-400">CRE &amp; Business Broker</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Sanjay Wadhwani</h3>
                  <span className="text-sm font-semibold text-[#c59b27] block mt-1">
                    Business, Franchise &amp; Commercial Real Estate Advisor
                  </span>
                  <p className="text-slate-300 text-sm leading-relaxed mt-4">
                    Expert in packaging combined business &amp; commercial real estate assets, franchise development, and lease negotiations.
                  </p>
                </div>

                <div className="space-y-5 pt-2 border-t border-slate-800">
                  <a
                    href="tel:+19548649161"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-[#c59b27] hover:bg-[#b0871e] text-slate-950 font-bold text-sm rounded-xl transition-colors shadow-md shadow-amber-500/10"
                  >
                    <span>Speak with Sanjay</span>
                    <IconArrowRight className="w-4 h-4" />
                  </a>

                  {/* Socials & QR */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <a
                        href="https://kmfbusinessadvisor.com/our-team/#"
                        aria-label="Facebook"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconFacebook className="w-4 h-4" />
                      </a>
                      <a
                        href="https://kmfbusinessadvisor.com/our-team/#"
                        aria-label="LinkedIn"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconLinkedIn className="w-4 h-4" />
                      </a>
                      <a
                        href="https://www.youtube.com/@kmfbusinessadvisors"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-[#c59b27] hover:text-slate-950 text-slate-300 flex items-center justify-center transition-colors"
                      >
                        <IconYouTube className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3 py-1.5 rounded-xl">
                      <div className="w-9 h-9 relative rounded overflow-hidden bg-white p-0.5">
                        <Image
                          src="https://kmfbusinessadvisor.com/wp-content/uploads/2025/01/WhatsApp-Image-2026-08-07-at-8.07.30-PM-1.jpeg"
                          alt="QR Code Sanjay"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-300 tracking-wider">SCAN TO VALUE BUSINESS</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="text-[#c59b27] font-bold text-xs uppercase tracking-widest">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1C2D]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-[#c59b27] transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <span className="text-xl font-bold text-[#c59b27] w-6 h-6 flex items-center justify-center shrink-0">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL FOOTER */}
      <footer className="bg-[#0B1C2D] text-slate-300 pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1 */}
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png"
                  alt="KMF Business Advisors Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </Link>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your premier business brokerage in Florida, facilitating successful transactions with integrity and expertise.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.youtube.com/@kmfbusinessadvisors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#c59b27] hover:text-slate-900 text-slate-300 flex items-center justify-center transition-colors"
                >
                  <IconYouTube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 2 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link href="/sell-a-franchise" className="hover:text-[#c59b27] transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/about-kmf" className="hover:text-[#c59b27] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="https://kmfbusinessadvisor.com/contact-us/" className="hover:text-[#c59b27] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Info</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li>
                  <Link href="/sell-your-business" className="hover:text-[#c59b27] transition-colors">
                    Sell a Business in Florida
                  </Link>
                </li>
                <li>
                  <Link href="/businesses-for-sale" className="hover:text-[#c59b27] transition-colors">
                    Buy a Business in Florida
                  </Link>
                </li>
                <li>
                  <a href="https://kmfbusinessadvisor.com/frequently-asked-questions/" className="hover:text-[#c59b27] transition-colors">
                    Florida Business Brokerage FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Info</h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#c59b27] mt-0.5">📍</span>
                  <span>10242 NW 47th St, STE 39, Sunrise FL 33351</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <IconPhone className="w-4 h-4 text-[#c59b27]" />
                  <a href="tel:9548649161" className="hover:text-[#c59b27] transition-colors">
                    954-864-9161
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <IconMail className="w-4 h-4 text-[#c59b27]" />
                  <a href="mailto:swadhwani@kmfbusinessadvisors.com" className="hover:text-[#c59b27] transition-colors">
                    swadhwani@kmfbusinessadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-8 text-center text-xs text-slate-400 space-y-2">
            <p>
              Copyright © 2026 KMF Business Advisors. All rights reserved. |{" "}
              <a href="https://kmfbusinessadvisor.com/privacy-policy/" className="underline hover:text-white">Privacy Policy</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/terms-and-conditions/" className="underline hover:text-white">Terms and Conditions</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/accessibility-statement/" className="underline hover:text-white">Accessibility</a> |{" "}
              <a href="https://kmfbusinessadvisor.com/disclaimers/" className="underline hover:text-white">Disclaimers</a>
            </p>
          </div>
        </div>
      </footer>

      {/* 7. FLOATING WHATSAPP CHAT WIDGET */}
      <a
        href="https://api.whatsapp.com/send?phone=19548649161&text=Welcome%20to%20KMF%20Business%20Advisors!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 z-50 flex items-center gap-2.5 bg-white text-slate-700 px-3.5 py-2 rounded-full shadow-2xl border border-slate-200 hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300 group"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-2.072-.511-1.636-.679-2.697-2.338-2.778-2.447-.08-.109-.661-.879-.661-1.677 0-.797.416-1.189.564-1.35.148-.162.324-.202.432-.202.108 0 .216.002.311.007.1.005.234-.038.366.279.135.324.46 1.12.5 1.202.04.081.067.176.013.283-.053.108-.08.175-.16.27-.08.094-.168.21-.24.282-.08.08-.163.167-.07.327.094.16.417.688.895 1.114.615.548 1.133.718 1.294.798.161.081.256.068.351-.041.095-.108.405-.472.513-.634.108-.162.216-.135.365-.081.148.054.945.446 1.107.527.162.081.27.121.31.189.04.067.04.391-.104.796z" />
          </svg>
        </div>
        <span className="text-xs font-semibold pr-1">Contact Broker</span>
      </a>
    </div>
  );
}
