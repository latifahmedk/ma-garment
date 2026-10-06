"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, MessageCircle, ArrowRight, Check } from "lucide-react";
import { Product } from "@/types";
import { siteConfig } from "@/config/site";
import ProductImageGallery from "./ProductImageGallery";

interface ProductModalProps {
  product: Product | null;
  initialColorName?: string;
  onClose: () => void;
}

export default function ProductModal({
  product,
  initialColorName,
  onClose,
}: ProductModalProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);

  // Sync initial color if provided when product opens
  useEffect(() => {
    if (product) {
      if (initialColorName) {
        const foundIndex = product.colors.findIndex(
          (c) => c.name.toLowerCase() === initialColorName.toLowerCase()
        );
        setSelectedColorIndex(foundIndex !== -1 ? foundIndex : 0);
      } else {
        setSelectedColorIndex(0);
      }
    }
  }, [product, initialColorName]);

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

  const activeColor = product.colors[selectedColorIndex] || product.colors[0];

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello MA Garments! I am a wholesale buyer inquiring about:
*Product:* ${product.name}
*Selected Shade:* ${activeColor.name}
*Fabric:* ${product.fabric} (${product.gsm} GSM)
*MOQ:* ${product.moq}
Please send me wholesale bulk price per piece and sample terms.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in overflow-y-auto">
      <div
        className="relative bg-white rounded-2xl max-w-4xl w-full my-6 sm:my-8 shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-white/95 text-slate-500 hover:text-slate-800 hover:bg-slate-100 shadow-md border border-slate-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[88vh] overflow-y-auto">
          {/* Left Column: Color-Aware 4-Image Slider Gallery & Packaging Info */}
          <div className="md:col-span-5 bg-slate-50 p-4 sm:p-6 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between gap-4">
            <ProductImageGallery
              product={product}
              selectedColorIndex={selectedColorIndex}
              onSelectColor={setSelectedColorIndex}
            />

            <div className="space-y-2 pt-2">
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
          <div className="md:col-span-7 p-5 sm:p-8 space-y-6">
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

            {/* Colors Selector */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Manufactured Colors
                </span>
                <span className="text-[11px] text-blue-700 font-medium">
                  Active: {activeColor.name}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {product.colors.map((c, i) => {
                  const isSelected = i === selectedColorIndex;
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColorIndex(i)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all border ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/80 text-blue-950 font-semibold ring-2 ring-blue-500/30"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      title={`Click to view 4 detail images for ${c.name}`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                      {isSelected && <Check className="w-3 h-3 text-blue-600 ml-0.5" />}
                    </button>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-500">
                Select any color above to view its 4 detail photos (Full, Waist, Pocket, and Bottom).
              </p>
            </div>

            {/* Sizes */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                Standard Size Assortment
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.sizes
                  .map((s) => s.split(" ")[0].trim())
                  .filter((s) => ["M", "L", "XL"].includes(s.toUpperCase()))
                  .map((s, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold bg-white border border-slate-300 rounded text-slate-800 shadow-2xs"
                    >
                      {s}
                    </span>
                  ))}
              </div>
              <p className="text-[11px] text-slate-400">
                *Custom ratio (M:L:XL) available for orders exceeding 300 pieces.
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
