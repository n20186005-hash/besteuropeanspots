"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getLocaleFromPathname, homeCopy } from "@/lib/site-locale";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = homeCopy[locale];

  const navLinks = [
    { label: copy.nav.destinations, href: "/destinations" },
    { label: copy.nav.collections, href: "/collections" },
    { label: copy.nav.encyclopedia, href: "/category/encyclopedia" },
    { label: copy.nav.travelogue, href: "/category/travelogue" },
    { label: copy.nav.history, href: "/category/history" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">&#9830;</span>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold tracking-tight text-primary">
                Best European Spots
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted hidden sm:block">
                {copy.headerTagline}
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 border border-border rounded-full p-1">
              <Link
                href="/"
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "zh" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
                }`}
              >
                {copy.language.zh}
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "en" ? "bg-primary text-white" : "text-gray-600 hover:text-primary"
                }`}
              >
                {copy.language.en}
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-border shadow-lg">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-3">
            <div className="flex items-center gap-2 px-3 py-2">
              <Link
                href="/"
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "zh" ? "bg-primary text-white" : "bg-surface text-gray-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {copy.language.zh}
              </Link>
              <Link
                href="/en"
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors ${
                  locale === "en" ? "bg-primary text-white" : "bg-surface text-gray-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {copy.language.en}
              </Link>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-gray-600 hover:text-primary hover:bg-gray-50 px-3 py-2 rounded-md font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
