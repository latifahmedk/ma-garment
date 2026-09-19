import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Building2, PhoneCall } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-slate-50/50 py-12 lg:py-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Messaging & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 text-xs sm:text-sm font-semibold shadow-2xs">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Sion, Mumbai Manufacturing Unit • Strictly B2B</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Track Pants Manufacturer & Wholesale Supplier in Mumbai
              </h1>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                We manufacture high-grade athletic, cotton terry, and 4-way Lycra track pants directly from our factory in Sion, Mumbai. We partner with wholesalers, garment distributors, and retail chain buyers with authentic factory-rate bulk pricing.
              </p>
            </div>

            {/* Realistic Factory Capacity Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">Daily Production</div>
                <div className="text-lg font-bold text-slate-900">200–300 Pcs</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">Skilled Tailors</div>
                <div className="text-lg font-bold text-slate-900">15–20 Staff</div>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-2xs col-span-2 sm:col-span-1">
                <div className="text-xs text-slate-500 font-medium">Minimum Order (MOQ)</div>
                <div className="text-lg font-bold text-slate-900">100 Pieces</div>
              </div>
            </div>

            {/* Key Assurance Points */}
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero middlemen — buy directly at genuine factory rates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Heavy-gauge 4-thread overlock stitching & premium zips</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Centrally located in Sion for fast dispatches across India</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>View Products Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-lg border border-slate-300 shadow-2xs hover:border-slate-400 transition-all"
              >
                <span>Request Wholesale Rate Card</span>
              </Link>

              <a
                href={`tel:${siteConfig.contact.phoneCall}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-blue-700 px-2 py-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Factory Workshop Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-900 group">
              <Image
                src="/images/factory/hero-workshop.jpg"
                alt="MA Garments Track Pants Stitching Workshop in Sion Mumbai"
                width={800}
                height={550}
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
                priority
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block">
                    Manufacturing Floor
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Sion Industrial Estate, Mumbai
                  </p>
                  <p className="text-xs text-slate-500">
                    Active lines: 4-Way Lycra & Cotton Joggers
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Production Active
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative backdrop badge */}
            <div className="absolute -top-4 -right-4 -z-10 w-64 h-64 bg-blue-100/50 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
