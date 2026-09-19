"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Layers, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello MA Garments! I am interested in wholesale pricing for your "${product.name}" (${product.fabric}, MOQ: ${product.moq}). Please share catalog & bulk quotation.`
  )}`;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image Container */}
      <div>
        <div className="relative aspect-square w-full bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onOpenDetails?.(product)}>
          <Image
            src={product.image}
            alt={`${product.name} - Wholesale Track Pants Manufacturer Mumbai`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Category & GSM Badge */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
            <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase shadow-xs">
              {product.category}
            </span>
            <span className="bg-blue-600/95 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
              {product.gsm} GSM
            </span>
          </div>

          {/* Quick View trigger on hover */}
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-lg shadow-md pointer-events-auto">
              View Factory Specs
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3
              onClick={() => onOpenDetails?.(product)}
              className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 mt-1">
              {product.fabric}
            </p>
          </div>

          {/* Color swatches */}
          <div className="space-y-1.5 pt-1">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Available Colors ({product.colors.length}):
            </div>
            <div className="flex items-center gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  title={color.name}
                  className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs block"
                  style={{ backgroundColor: color.hex }}
                />
              ))}
              <span className="text-[11px] text-slate-500 font-medium ml-1">
                {product.colors.map((c) => c.name.split(" ")[0]).join(", ")}
              </span>
            </div>
          </div>

          {/* Sizes and MOQ Box */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium text-slate-500">Sizes:</span>
              <span className="font-semibold text-slate-800">
                {product.sizes.map((s) => s.split(" ")[0]).join(", ")}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-md border border-slate-100">
              <span className="text-slate-500 font-medium">Wholesale MOQ:</span>
              <span className="font-bold text-blue-800">
                {product.moq.split(" ")[0]} {product.moq.split(" ")[1]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => onOpenDetails?.(product)}
          className="w-full py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors text-center"
        >
          View Specs
        </button>

        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 text-center shadow-2xs"
          title="Direct WhatsApp Wholesale Enquiry"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>Enquire Now</span>
        </a>
      </div>
    </div>
  );
}
