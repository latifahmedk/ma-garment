"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Check, MessageCircle, ArrowRight, ShieldCheck, Box, Scissors, Layers } from "lucide-react";
import { Product } from "@/types";
import { siteConfig } from "@/config/site";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello MA Garments! I am a wholesale buyer inquiring about:
*Product:* ${product.name}
*Fabric:* ${product.fabric} (${product.gsm} GSM)
*MOQ:* ${product.moq}
Please send me wholesale bulk price per piece and sample terms.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-800 hover:bg-slate-100 shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          {/* Left Column: Product Image & Badges */}
          <div className="md:col-span-5 bg-slate-100 p-6 flex flex-col justify-between relative">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white shadow-xs border border-slate-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 space-y-2">
              <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs">
                <span className="font-semibold text-slate-800 block mb-1">
                  Wholesale Packaging
                </span>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  {product.packaging}
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-xs">
                <span className="font-bold text-blue-900 block mb-0.5">
                  Direct Factory Terms
                </span>
                <p className="text-blue-800 text-[11px]">
                  MOQ: {product.moq} • Dispatch from Sion, Mumbai.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Enquiry Options */}
          <div className="md:col-span-7 p-6 sm:p-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
                <span className="text-[11px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                  {product.gsm} GSM
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {product.name}
              </h2>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Fabric: {product.fabric}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Manufactured Color Options
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {product.colors.map((c, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border border-slate-200 bg-slate-50 text-slate-800"
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-slate-300"
                      style={{ backgroundColor: c.hex }}
                    />
                    {c.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Standard Size Assortment
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes.map((s, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-semibold bg-white border border-slate-300 rounded text-slate-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="text-[11px] text-slate-400">
                *Custom ratio (M:L:XL:2XL) available for orders exceeding 300 pieces.
              </p>
            </div>

            {/* Factory Stitching Specifications Table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden text-xs">
              <div className="bg-slate-100 px-3.5 py-2 font-bold text-slate-800 border-b border-slate-200">
                Factory Stitch & Component Specs
              </div>
              <div className="divide-y divide-slate-100">
                <div className="grid grid-cols-3 p-2.5">
                  <span className="text-slate-500 font-medium">Composition</span>
                  <span className="col-span-2 text-slate-800 font-semibold">
                    {product.specifications.fabricComposition}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-2.5">
                  <span className="text-slate-500 font-medium">Waistband</span>
                  <span className="col-span-2 text-slate-800">
                    {product.specifications.waistband}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-2.5">
                  <span className="text-slate-500 font-medium">Pockets</span>
                  <span className="col-span-2 text-slate-800">
                    {product.specifications.pockets}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-2.5">
                  <span className="text-slate-500 font-medium">Stitching</span>
                  <span className="col-span-2 text-slate-800">
                    {product.specifications.stitching}
                  </span>
                </div>
                <div className="grid grid-cols-3 p-2.5">
                  <span className="text-slate-500 font-medium">Ankle Hem</span>
                  <span className="col-span-2 text-slate-800">
                    {product.specifications.ankleFinish}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Factory Quote</span>
              </a>

              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                onClick={onClose}
                className="flex-1 py-3 px-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors text-center"
              >
                <span>Send Bulk Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
