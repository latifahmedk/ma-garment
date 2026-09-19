"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage =
    "Hello MA Garments! I am a wholesale buyer interested in your track pants manufacturing catalog. Please share wholesale pricing and MOQ.";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip callout */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-lg shadow-xl border border-slate-200 animate-fade-in">
          <span>Chat with Factory Manager (B2B)</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
          defaultMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-600/30 hover:scale-105 transition-all duration-200"
        aria-label="Contact wholesale factory on WhatsApp"
        title="Direct WhatsApp Wholesale Enquiry"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
}
