import React, { Suspense } from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Wholesale Enquiries | Track Pants Factory Sion Mumbai",
  description:
    "Direct contact and wholesale rate enquiry for MA Garments. Located in Sion West, Mumbai. Call, WhatsApp, or submit your bulk track pants requirements (minimum order 100 pcs).",
  keywords: [
    "contact track pants manufacturer mumbai",
    "wholesale track pants enquiry sion",
    "track pants factory contact number",
    "bulk track pants rate quotation",
    "b2b garment manufacturer mumbai contact",
  ],
};

export default function ContactPage() {
  return (
    <div className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Direct Factory Desk • Sion, Mumbai</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Wholesale Enquiries & Factory Contact
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We partner with wholesale traders, regional distributors, and garment retailers looking for direct factory rates on track pants. Fill out the bulk inquiry form below or connect directly via WhatsApp and phone.
          </p>
        </div>

        {/* Quick Contact CTAs Grid (Phone, WhatsApp, Email, Visit) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Phone Card */}
          <a
            href={`tel:${siteConfig.contact.phoneCall}`}
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-3 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Call Factory Directly
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                {siteConfig.contact.phoneDisplay}
              </h3>
            </div>
            <span className="text-xs font-semibold text-blue-700 mt-3 block">
              Direct Production Call →
            </span>
          </a>

          {/* WhatsApp Card */}
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
              "Hello MA Garments! I would like to inquire about wholesale track pants pricing and samples."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-sm transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Instant WhatsApp Quote
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                {siteConfig.contact.whatsappDisplay}
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-700 mt-3 block">
              Chat on WhatsApp →
            </span>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-3 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Email Formal RFQ
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1 truncate">
                {siteConfig.contact.email}
              </h3>
            </div>
            <span className="text-xs font-semibold text-blue-700 mt-3 block">
              Send Email RFQ →
            </span>
          </a>

          {/* Factory Location Card */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase">
                Factory Location
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-1">
                Sion West, Mumbai
              </h3>
            </div>
            <span className="text-xs text-slate-500 mt-3 block">
              Maharashtra 400022
            </span>
          </div>
        </div>

        {/* Main Grid: Enquiry Form + Factory Information Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Interactive B2B Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-8 bg-white rounded-2xl border border-slate-200 animate-pulse text-slate-500 text-sm">
                  Loading enquiry form...
                </div>
              }
            >
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Right: Factory Dispatch & Buying Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            {/* Wholesale Terms Notice Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                Wholesale Buyer Terms
              </span>
              <h3 className="text-lg font-bold text-white">
                Commercial Order Conditions
              </h3>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Minimum Order Quantity (MOQ):</strong> 100 pieces per style. Carton packaging with standard size breakdown (M, L, XL, 2XL).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Physical Samples:</strong> Sample swatches and garments available via courier prior to commercial order commitment.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Payment Terms:</strong> Direct RTGS/NEFT/Bank Transfer. GST invoice issued with 100% compliant HSN codes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Transport & Logistics:</strong> FOB factory or dispatched to your nominated transport godown in Mumbai / Bhiwandi.</span>
                </li>
              </ul>
            </div>

            {/* Factory Address & Hours */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-700" />
                <span>Factory Location & Hours</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div>
                  <strong className="text-slate-800 block mb-0.5">Factory Address:</strong>
                  <p className="leading-relaxed">
                    {siteConfig.legalName}
                    <br />
                    {siteConfig.contact.address.street}
                    <br />
                    {siteConfig.contact.address.landmark}
                    <br />
                    {siteConfig.contact.address.locality}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} – {siteConfig.contact.address.pincode}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <strong className="text-slate-800 block mb-0.5">Visiting Hours (By Appointment):</strong>
                  <p>{siteConfig.contact.visitingHours}</p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <strong className="text-slate-800 block mb-0.5">Daily Dispatch Markets:</strong>
                  <p className="leading-relaxed">
                    Dadar Wholesale Market, Crawford Market, King&apos;s Circle, Bhiwandi, Ulhasnagar, Surat, Pune, Ahmedabad, and Bangalore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
