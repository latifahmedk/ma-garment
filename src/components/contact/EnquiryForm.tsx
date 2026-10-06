"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { WholesaleEnquiry } from "@/types";

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState<WholesaleEnquiry>({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    productInterest: prefilledProduct || "All Track Pants Styles / General Inquiry",
    cityState: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Synchronize product interest during render if query parameter changes
  const [prevPrefilled, setPrevPrefilled] = useState(prefilledProduct);
  if (prefilledProduct !== prevPrefilled) {
    setPrevPrefilled(prefilledProduct);
    if (prefilledProduct) {
      setFormData((prev) => ({ ...prev, productInterest: prefilledProduct }));
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!formData.companyName.trim()) {
      setError("Please provide your business or shop name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setError("Please enter a valid phone or WhatsApp number for quotation delivery.");
      return;
    }

    // Mark as submitted
    setSubmitted(true);
  };

  // Build WhatsApp text from the form data
  const formattedWhatsAppText = `*NEW WHOLESALE / SHOP ORDER ENQUIRY (MA Garments Sion)*
------------------------------------
*Buyer Name:* ${formData.fullName}
*Business/Shop:* ${formData.companyName}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "N/A"}
*Location:* ${formData.cityState || "Mumbai / Maharashtra"}
*Product Required:* ${formData.productInterest}
*Notes:* ${formData.message || "Please send wholesale price list and sample terms."}
------------------------------------
Sent via MA Garments Factory Portal`;

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    formattedWhatsAppText
  )}`;

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-slate-900">
            Wholesale Enquiry Received!
          </h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span> from{" "}
            <span className="font-semibold text-slate-900">{formData.companyName}</span>. Our Sion factory production manager will review your requirements and contact you within 2–4 business hours.
          </p>
        </div>

        {/* Immediate WhatsApp Forward CTA */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 max-w-lg mx-auto text-left space-y-3">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
            <MessageCircle className="w-5 h-5 text-emerald-600" />
            <span>Need Immediate Response & Rate Card?</span>
          </div>
          <p className="text-xs text-emerald-900 leading-relaxed">
            Click below to instantly forward your enquiry details directly to our factory WhatsApp desk for immediate quotation:
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Enquiry to WhatsApp Now</span>
          </a>
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                companyName: "",
                phone: "",
                email: "",
                productInterest: "All Track Pants Styles / General Inquiry",
                cityState: "",
                message: "",
              });
            }}
            className="text-xs font-semibold text-blue-700 hover:underline"
          >
            Submit Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
    >
      <div className="border-b border-slate-100 pb-4">
        <h2 className="text-xl font-bold text-slate-900">
          Factory Direct Wholesale Enquiry Form
        </h2>
        <p className="text-slate-500 text-xs mt-1">
          Minimum wholesale order: 100 Pieces. Please provide your business credentials below.
        </p>
      </div>

      {error && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Row 1: Contact Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Shah"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Business / Shop / Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            required
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Bharat Apparels / Shah Garments"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Row 2: Phone & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98200 12345"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
          />
          <span className="text-[11px] text-slate-400 mt-1 block">
            Rate cards will be sent to this WhatsApp number.
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email Address (Optional)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. purchasing@company.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Row 3: Product Interested In & City/State */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Product Interested In
          </label>
          <select
            name="productInterest"
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
          >
            <option value="All Track Pants Styles / General Inquiry">
              All Track Pants Styles / General Wholesale Inquiry
            </option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name} ({p.fabric})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            City / State <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="cityState"
            required
            value={formData.cityState}
            onChange={handleChange}
            placeholder="e.g. Mumbai / Pune / Surat / Delhi"
            className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Row 5: Message / Requirements */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
          Specific Requirements / Notes (Optional)
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Mention specific fabric GSM preference, color assortment, sample requirements, or delivery deadline..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all placeholder:text-slate-400 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 px-6 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          <span>Submit Wholesale Enquiry</span>
        </button>
        <p className="text-[11px] text-slate-400 text-center mt-2.5">
          🔒 Wholesale &amp; Shop Orders: Your business information is confidential and will only be used to generate your factory quote (Min. 100 Pcs).
        </p>
      </div>
    </form>
  );
}
