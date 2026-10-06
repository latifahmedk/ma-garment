import React from "react";
import Link from "next/link";
import { MessageCircle, Phone, ArrowRight, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function QuickInquiryCTA() {
  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-slate-900 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Direct Manufacturer • No Middlemen • Authentic Factory Rates</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Source Track Pants Directly From Our Sion Factory?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you run a garment wholesale business in Crawford Market, an apparel retail showroom in Maharashtra, or a sports distribution agency across India, we invite you to review our quality samples and factory pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Wholesale Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello MA Garments! I would like to inquire about wholesale track pants pricing and samples for my business."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Factory Team</span>
            </a>

            <a
              href={`tel:${siteConfig.contact.phoneCall}`}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {siteConfig.contact.phoneDisplay}</span>
            </a>
          </div>

          <div className="pt-4 text-xs text-slate-400 flex items-center justify-center gap-4 flex-wrap">
            <span>✓ Min. Order: 100 Pcs (Wholesalers &amp; Clothes Shop Owners)</span>
            <span>•</span>
            <span>✓ Sample pieces provided on request</span>
            <span>•</span>
            <span>✓ Daily dispatches from Sion, Mumbai</span>
          </div>
        </div>
      </div>
    </section>
  );
}
