import React from "react";
import { Phone, MessageCircle, MapPin, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function TopNoticeBanner() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Wholesale & Shop Orders Notice */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded text-[11px] border border-amber-500/30">
            <Building2 className="w-3 h-3" />
            WHOLESALE &amp; CLOTHES SHOPS
          </span>
          <span className="text-slate-300 hidden md:inline">
            Direct Factory Dispatch • Min. Order: 100 Pcs • Sion, Mumbai
          </span>
          <span className="text-slate-300 md:hidden">
            Min. Order: 100 Pcs • Sion, Mumbai
          </span>
        </div>

        {/* Right: Quick Contacts */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="hidden lg:flex items-center gap-1 text-slate-400">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Sion West, Mumbai 400022</span>
          </div>

          <a
            href={`tel:${siteConfig.contact.phoneCall}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            title="Call Factory Direct"
          >
            <Phone className="w-3 h-3 text-blue-400" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello MA Garments, I am interested in track pants for wholesale / clothes shop order (Min. 100 pcs)."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            title="WhatsApp Factory Direct"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
