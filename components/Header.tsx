'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const isBuyActive =
    pathname === '/businesses-for-sale' || pathname === '/profitable-business-for-sale';
  const isSellActive =
    pathname === '/sell-your-business' || pathname === '/profitable-business-for-sale';
  const isFranchiseActive =
    pathname === '/franchise-services' ||
    pathname === '/sell-a-franchise' ||
    pathname === '/franchise-your-business-florida';
  const isRealEstateActive = pathname === '/real-estate';
  const isAboutActive = pathname === '/about-kmf' || pathname === '/our-team' || pathname === '/about-us';
  const isContactActive = pathname === '/contact-us';
  const isHomeActive = pathname === '/';

  return (
    <>
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#0b1c2d] text-white text-xs sm:text-sm py-2 px-4 border-b border-gray-800 z-50 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Left: Phone & Email */}
          <div className="flex items-center space-x-6">
            <a
              href="tel:+19548649161"
              className="flex items-center space-x-2 text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              <svg className="w-4 h-4 fill-[#c59b27]" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>954-864-9161</span>
            </a>
            <a
              href="mailto:swadhwani@kmfbusinessadvisors.com"
              className="hidden md:flex items-center space-x-2 text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              <svg className="w-4 h-4 fill-[#c59b27]" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>swadhwani@kmfbusinessadvisors.com</span>
            </a>
          </div>

          {/* Right: FAQs, Support & Get Started */}
          <div className="flex items-center space-x-4">
            <Link
              href="/frequently-asked-questions"
              className="text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              FAQs
            </Link>
            <span className="text-gray-600">|</span>
            <Link
              href="/contact-us"
              className="text-gray-300 hover:text-[#c59b27] transition-colors"
            >
              Support
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-1.5 bg-[#c59b27] hover:bg-[#a8821f] text-white font-medium px-3.5 py-1 rounded text-xs transition-colors shadow-sm"
            >
              <span>Get Started</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 2. MAIN STATIC HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="shrink-0 flex items-center">
              <Image
                src="https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png"
                alt="KMF Business Advisors official logo - Florida business brokerage services"
                width={210}
                height={75}
                priority
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7 text-[15px] font-semibold text-gray-800">
              {/* Home / Business Broker Florida */}
              <Link
                href="/"
                className={`transition-colors ${
                  isHomeActive
                    ? 'text-[#c59b27] font-bold'
                    : 'text-gray-800 hover:text-[#c59b27]'
                }`}
              >
                Business Broker Florida
              </Link>

              {/* Buy a Business Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown('buy')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isBuyActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
                  }`}
                >
                  Buy a Business
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                {openDropdown === 'buy' && (
                  <div className="absolute left-0 top-full w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    <a
                      href="https://kmfbusinessadvisor.com/wp-content/uploads/2026/09/KMF_Buyer_Broker_Representation_Agreement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Buyer Broker Representation
                    </a>
                    <Link
                      href="/businesses-for-sale"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Businesses for Sale in Florida
                    </Link>
                    <a
                      href="https://bizmls.com/cgi-bin/a-enterbuyer.asp?folder=bbf-1267003"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Buyer Registration
                    </a>
                  </div>
                )}
              </div>

              {/* Sell a Business Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown('sell')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isSellActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
                  }`}
                >
                  Sell a Business
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                {openDropdown === 'sell' && (
                  <div className="absolute left-0 top-full w-60 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    <Link
                      href="/sell-your-business"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Sell Your Business
                    </Link>
                    <Link
                      href="/profitable-business-for-sale"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Profitable Business for Sale
                    </Link>
                  </div>
                )}
              </div>

              {/* Franchise Services Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown('franchise')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isFranchiseActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
                  }`}
                >
                  Franchise Services
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                {openDropdown === 'franchise' && (
                  <div className="absolute left-0 top-full w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    <Link
                      href="/franchise-services"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Franchise Services Overview
                    </Link>
                    <Link
                      href="/sell-a-franchise"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Sell a Franchise in Florida
                    </Link>
                    <a
                      href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Buy a Franchise ↗
                    </a>
                    <Link
                      href="/franchise-your-business-florida"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Franchise Your Business Florida
                    </Link>
                  </div>
                )}
              </div>

              {/* Real Estate Dropdown (ALWAYS VISIBLE ON ALL PAGES) */}
              <div
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown('realestate')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isRealEstateActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
                  }`}
                >
                  Real Estate
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                {openDropdown === 'realestate' && (
                  <div className="absolute left-0 top-full w-64 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    <Link
                      href="/real-estate"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27] font-semibold"
                    >
                      Commercial Real Estate Florida
                    </Link>
                    <a
                      href="https://kmfsellsflorida.com/property-search"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Florida Property Search ↗
                    </a>
                    <a
                      href="https://beachesmls.buildersupdate.com/search/searchbu.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      New Construction Homes ↗
                    </a>
                    <a
                      href="https://beachesmls.buildersupdate.com/search/SearchCustomBuilder.aspx"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Custom Home builder ↗
                    </a>
                  </div>
                )}
              </div>

              {/* About Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 transition-colors cursor-pointer ${
                    isAboutActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
                  }`}
                >
                  About
                  <svg className="w-3.5 h-3.5 fill-current opacity-70" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                {openDropdown === 'about' && (
                  <div className="absolute left-0 top-full w-56 bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50">
                    <Link
                      href="/about-kmf"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      KMF Business Advisors
                    </Link>
                    <Link
                      href="/our-team"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#c59b27]"
                    >
                      Our Team
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us link */}
              <Link
                href="/contact-us"
                className={`transition-colors ${
                  isContactActive
                    ? 'text-[#c59b27] font-bold'
                    : 'text-gray-800 hover:text-[#c59b27]'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Gold CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-[#c59b27] hover:bg-[#b0881f] text-white font-semibold text-sm shadow-sm transition-all hover:shadow-md"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#c59b27] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-medium ${
                isHomeActive ? 'text-[#c59b27] font-bold' : 'text-gray-800 hover:text-[#c59b27]'
              }`}
            >
              Business Broker Florida
            </Link>

            {/* Mobile Buy a Business */}
            <div className="py-2 border-t border-gray-100">
              <button
                onClick={() => toggleDropdown('mbuy')}
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
              >
                Buy a Business
                <span>{openDropdown === 'mbuy' ? '−' : '+'}</span>
              </button>
              {openDropdown === 'mbuy' && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <a
                    href="https://kmfbusinessadvisor.com/wp-content/uploads/2026/09/KMF_Buyer_Broker_Representation_Agreement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Buyer Broker Representation ↗
                  </a>
                  <Link
                    href="/businesses-for-sale"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Businesses for Sale in Florida
                  </Link>
                  <a
                    href="https://bizmls.com/cgi-bin/a-enterbuyer.asp?folder=bbf-1267003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Buyer Registration ↗
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Sell a Business */}
            <div className="py-2 border-t border-gray-100">
              <button
                onClick={() => toggleDropdown('msell')}
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
              >
                Sell a Business
                <span>{openDropdown === 'msell' ? '−' : '+'}</span>
              </button>
              {openDropdown === 'msell' && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <Link
                    href="/sell-your-business"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Sell Your Business
                  </Link>
                  <Link
                    href="/profitable-business-for-sale"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Profitable Business for Sale
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Franchise Services */}
            <div className="py-2 border-t border-gray-100">
              <button
                onClick={() => toggleDropdown('mfranchise')}
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
              >
                Franchise Services
                <span>{openDropdown === 'mfranchise' ? '−' : '+'}</span>
              </button>
              {openDropdown === 'mfranchise' && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <Link
                    href="/franchise-services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Franchise Services Overview
                  </Link>
                  <Link
                    href="/sell-a-franchise"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Sell a Franchise in Florida
                  </Link>
                  <a
                    href="https://bizmls.com/listings/bbf-1267003/bus-all.asp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Buy a Franchise ↗
                  </a>
                  <Link
                    href="/franchise-your-business-florida"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Franchise Your Business Florida
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Real Estate (ALWAYS VISIBLE) */}
            <div className="py-2 border-t border-gray-100">
              <button
                onClick={() => toggleDropdown('mre')}
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
              >
                Real Estate
                <span>{openDropdown === 'mre' ? '−' : '+'}</span>
              </button>
              {openDropdown === 'mre' && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <Link
                    href="/real-estate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 font-semibold text-[#c59b27]"
                  >
                    Commercial Real Estate Florida
                  </Link>
                  <a
                    href="https://kmfsellsflorida.com/property-search"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Florida Property Search ↗
                  </a>
                  <a
                    href="https://beachesmls.buildersupdate.com/search/searchbu.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    New Construction Homes ↗
                  </a>
                  <a
                    href="https://beachesmls.buildersupdate.com/search/SearchCustomBuilder.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Custom Home builder ↗
                  </a>
                </div>
              )}
            </div>

            {/* Mobile About */}
            <div className="py-2 border-t border-gray-100">
              <button
                onClick={() => toggleDropdown('mabout')}
                className="w-full flex justify-between items-center text-base font-medium text-gray-800"
              >
                About
                <span>{openDropdown === 'mabout' ? '−' : '+'}</span>
              </button>
              {openDropdown === 'mabout' && (
                <div className="pl-4 mt-2 space-y-2 text-sm text-gray-600">
                  <Link
                    href="/about-kmf"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    KMF Business Advisors
                  </Link>
                  <Link
                    href="/our-team"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 hover:text-[#c59b27]"
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Contact */}
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-800 hover:text-[#c59b27] border-t border-gray-100"
            >
              Contact Us
            </Link>

            <div className="pt-4">
              <Link
                href="/contact-us"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3 text-center font-semibold rounded-lg bg-[#c59b27] text-white hover:bg-[#b0881f] shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
