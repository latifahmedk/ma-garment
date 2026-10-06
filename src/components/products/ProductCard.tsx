"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getStandardSizes } from "@/utils/productValidation";

interface ProductCardProps {
  product: Product;
  onOpenDetails?: (product: Product, initialColorName?: string) => void;
}

export default function ProductCard({ product, onOpenDetails }: ProductCardProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const currentColor = product.colors[selectedColorIndex] || product.colors[0];
  const cardImage = currentColor.images?.full || product.image;

  const whatsappInquiryUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello MA Garments! I am interested in wholesale pricing for your "${product.name}" in ${currentColor.name} (${product.fabric}, MOQ: ${product.moq}). Please share catalog & bulk quotation.`
  )}`;

  // Eagerly preload this card's color variants so swatch clicks are instant
  useEffect(() => {
    product.colors.forEach((col) => {
      if (col.images?.full) {
        const img = new window.Image();
        img.src = col.images.full;
      }
    });
  }, [product]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image Container */}
      <div>
        <div
          className="relative aspect-square w-full bg-slate-100 overflow-hidden cursor-pointer"
          onClick={() => onOpenDetails?.(product, currentColor.name)}
        >
          <Image
            src={cardImage}
            alt={`${product.name} - ${currentColor.name} - Wholesale Track Pants Manufacturer Mumbai`}
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

          {/* Active Color Pill Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-xs flex items-center gap-1.5">
              <span
                className="w-2 h-2 rounded-full border border-white/40"
                style={{ backgroundColor: currentColor.hex }}
              />
              <span>{currentColor.name}</span>
            </span>
          </div>

          {/* Quick View trigger on hover */}
          <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-lg shadow-md pointer-events-auto">
              View 4 Detail Views & Specs
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          <div>
            <h3
              onClick={() => onOpenDetails?.(product, currentColor.name)}
              className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors cursor-pointer"
            >
              {product.name}
            </h3>
            <p className="text-xs font-medium text-slate-500 mt-1">
              {product.fabric}
            </p>
          </div>

          {/* Color swatches with click-to-preview */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-semibold text-slate-400 uppercase tracking-wider">
                Colors ({product.colors.length}):
              </span>
              <span className="text-slate-600 font-medium truncate max-w-[140px]">
                {currentColor.name}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {product.colors.map((color, idx) => {
                const isSelected = idx === selectedColorIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColorIndex(idx);
                    }}
                    onMouseEnter={() => {
                      if (color.images?.full) {
                        const img = new window.Image();
                        img.src = color.images.full;
                      }
                    }}
                    title={`${color.name} (Click to switch preview)`}
                    className={`w-5 h-5 rounded-full border transition-all ${
                      isSelected
                        ? "border-blue-600 ring-2 ring-blue-500/40 scale-110"
                        : "border-slate-300 hover:scale-105 opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={`Select ${color.name}`}
                  />
                );
              })}
              <span className="text-[10px] text-slate-400 font-medium ml-1">
                (4 views each)
              </span>
            </div>
          </div>

          {/* Sizes and MOQ Box */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium text-slate-500">Sizes:</span>
              <span className="font-semibold text-slate-800">
                {getStandardSizes(product.sizes).join(", ")}
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
          onClick={() => onOpenDetails?.(product, currentColor.name)}
          className="w-full py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors text-center"
        >
          View Specs & Gallery
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
