"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change without cascading effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Factory Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-lg bg-slate-900 flex items-center justify-center text-white font-bold text-xl tracking-wider shadow-sm group-hover:bg-blue-900 transition-colors">
              MA
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 leading-tight">
                MA GARMENTS
              </span>
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                Track Pants Manufacturer • Sion, Mumbai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-blue-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-700 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Call & B2B Enquiry Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneCall}`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>Wholesale Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="px-3 py-1.5 bg-blue-700 text-white text-xs font-semibold rounded-md"
            >
              Enquire
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-fade-in">
          <div className="space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-800 font-semibold"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <div className="px-3 py-2 bg-slate-50 rounded-lg text-xs text-slate-600">
              <span className="font-semibold text-slate-900 block mb-1">
                Factory Dispatch Info:
              </span>
              Sion West, Mumbai • Daily 200–300 pcs production • Min Order: 100 pcs
            </div>

            <Link
              href="/contact"
              className="w-full flex items-center justify-center gap-2 py-3 bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm"
            >
              <span>Submit Wholesale Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${siteConfig.contact.phoneCall}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 border border-slate-300 text-slate-800 font-medium text-sm rounded-lg hover:bg-slate-50"
            >
              <PhoneCall className="w-4 h-4 text-blue-700" />
              <span>Call Factory: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
