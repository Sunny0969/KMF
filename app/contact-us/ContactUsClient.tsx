'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { submitInquiry } from '@/app/actions/inquiries';

export default function ContactUsClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0); // First item open by default matching WP active
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'Selling a Business',
    message: '',
    honeypot: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setFormError('');
    setIsSubmitting(true);
    try {
      const result = await submitInquiry({
        source: 'contact-us',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        details: {
          serviceInterest: formData.serviceInterest,
          message: formData.message,
        },
      });
      if (!result.ok) {
        setFormError(result.error);
        return;
      }
      setIsSubmitted(true);
    } catch {
      setFormError('We could not save your inquiry. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      q: 'What happens after I submit the contact form?',
      a: 'KMF reviews the inquiry and contacts the prospective client privately to understand the objective, timing and appropriate next step. Submitting a form does not create a brokerage engagement or obligation to proceed.',
    },
    {
      q: 'What information should I include in my first message?',
      a: 'State whether you are selling, buying, seeking a valuation, exploring franchise services or discussing commercial property. Include the general location, desired timing and preferred contact method, but do not send highly sensitive records through an unsecured form.',
    },
    {
      q: 'How quickly will KMF respond?',
      a: 'Response time depends on business hours and inquiry volume. The website should state only a response commitment that the firm can consistently meet and should provide an alternative contact method for time-sensitive matters.',
    },
    {
      q: 'Will my inquiry be shared with prospective buyers or sellers?',
      a: 'No. Initial inquiry information is used to evaluate and respond to the request. KMF should obtain authorization and complete the appropriate confidentiality and engagement steps before sharing protected information.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased selection:bg-amber-500 selection:text-white">
      {/* 1. HERO & CONTACT FORM SECTION */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-850 text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Details & NDA Card */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  Get In Touch
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Connect with Florida’s Leading{' '}
                  <span className="text-amber-400">Business Advisors</span>
                </h1>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  Whether you are planning a strategic business exit, seeking to buy a profitable Florida business, or expanding commercial real estate assets, our licensed Florida business brokers are ready to guide your transaction with complete discretion.
                </p>
              </div>

              {/* Info Items List */}
              <div className="space-y-5 pt-2">
                {/* Office */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm transition-colors hover:border-amber-500/40">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Florida Office</h4>
                    <p className="text-sm text-slate-300">Serving South Florida & Statewide Operations</p>
                    <p className="text-xs text-slate-400 mt-0.5">10242 NW 47th St, STE 39, Sunrise FL 33351</p>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm transition-colors hover:border-amber-500/40">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Direct Advisory Line</h4>
                    <a
                      href="tel:+19548649161"
                      className="text-lg font-extrabold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      954-864-9161
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Direct broker connection for immediate consultations</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm transition-colors hover:border-amber-500/40">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Confidential Email</h4>
                    <a
                      href="mailto:swadhwani@kmfbusinessadvisors.com"
                      className="text-sm sm:text-base font-medium text-amber-400 hover:text-amber-300 break-all transition-colors"
                    >
                      swadhwani@kmfbusinessadvisors.com
                    </a>
                    <p className="text-xs text-slate-400 mt-0.5">Monitored 7 days a week by managing leadership</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 backdrop-blur-sm transition-colors hover:border-amber-500/40">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl shrink-0">
                    🕒
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Business Hours</h4>
                    <p className="text-sm text-slate-300 font-semibold">7:00 am to 7:00 pm EST</p>
                    <p className="text-xs text-slate-400 mt-0.5">Flexible evening & weekend consultation hours available</p>
                  </div>
                </div>
              </div>

              {/* NDA Protection Card */}
              <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-200 flex items-start gap-4">
                <span className="text-2xl shrink-0 text-amber-400">🔒</span>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  <strong className="text-amber-400 font-semibold">Confidentiality Guarantee:</strong> Your privacy is paramount. All information shared through this form is held in strict confidence. A formal Non-Disclosure Agreement (NDA) will be provided for mutual execution prior to sharing sensitive business information or financials.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Formidable-style Contact Form */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-2xl border border-slate-100 text-slate-900">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Schedule a Consultation
                  </h3>
                  <p className="text-sm text-slate-600 mt-2">
                    Fill out the form below. An advisor will contact you confidentially.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                      ✓
                    </div>
                    <h4 className="text-2xl font-bold text-emerald-900">Inquiry Received</h4>
                    <p className="text-sm text-emerald-700 leading-relaxed max-w-md mx-auto">
                      Thank you for contacting KMF Business Advisors. A licensed advisor will reach out privately within standard business hours to discuss your objectives.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Full Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm transition-colors text-slate-900 bg-white"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Email <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm transition-colors text-slate-900 bg-white"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Phone <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(954) 000-0000"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm transition-colors text-slate-900 bg-white"
                      />
                    </div>

                    {/* Dropdown Interest */}
                    <div>
                      <label htmlFor="serviceInterest" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        Area of Interest <span className="text-amber-600">*</span>
                      </label>
                      <select
                        id="serviceInterest"
                        name="serviceInterest"
                        required
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm transition-colors text-slate-900 bg-white"
                      >
                        <option value="Selling a Business">Selling a Business</option>
                        <option value="Buying a Business">Buying a Business</option>
                        <option value="Business Valuation">Business Valuation</option>
                        <option value="Franchise Opportunities">Franchise Opportunities</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message / Paragraph */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-slate-800 mb-1.5">
                        How Can We Assist You?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Provide brief context regarding your timeline or objectives..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm transition-colors text-slate-900 bg-white"
                      ></textarea>
                    </div>

                    {/* Honeypot for bots */}
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
                    {formError ? (
                      <p className="text-sm text-red-600">{formError}</p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base shadow-lg transition-all duration-200 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Confidential Inquiry'}</span>
                      <span>&rarr;</span>
                    </button>

                    <p className="text-center text-xs text-slate-500 pt-2">
                      🔒 No spam. Strictly confidential. Protected by mutual non-disclosure.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THREE-STEP PROCESS SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Clear & Transparent Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Happens After You Reach Out?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We respect your privacy. Here is what to expect immediately after submitting your inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 font-black text-xl flex items-center justify-center mb-6">
                  01
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Confidential Intro Call
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We initiate an initial private consultation to discuss your business or acquisition goals, establish clear confidentiality guidelines, and execute mutual NDAs before reviewing sensitive details.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 font-black text-xl flex items-center justify-center mb-6">
                  02
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Valuation & Goal Assessment
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Our advisors review financial statements, market positioning, and operational readiness to calculate realistic valuations and assess current deal feasibility in Florida’s market.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 font-black text-xl flex items-center justify-center mb-6">
                  03
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Customized Advisory Strategy
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We map out a structured roadmap whether that involves launching a targeted exit strategy to pre-vetted buyers or structuring an acquisition deal aligned with your exact objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Got questions before reaching out? Here are answers to common inquiries.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm transition-colors"
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
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FOOTER */}
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
                  <Link href="/contact-us" className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-2">
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
                  <Link href="/business-broker-faq" className="hover:text-amber-400 transition-colors flex items-center gap-2">
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
