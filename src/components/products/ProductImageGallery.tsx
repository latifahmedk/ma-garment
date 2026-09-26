"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Check } from "lucide-react";
import { Product } from "@/types";

interface ProductImageGalleryProps {
  product: Product;
  selectedColorIndex: number;
  onSelectColor: (index: number) => void;
  className?: string;
}

const DETAIL_LABELS = [
  { key: "full", label: "Full Pant View", badge: "Full Silhouette" },
  { key: "waist", label: "Waist Detail", badge: "Waist & Elastic" },
  { key: "pocket", label: "Pocket & Logo Detail", badge: "Pocket & Zipper" },
  { key: "bottom", label: "Bottom Detail", badge: "Ankle & Hem" },
] as const;

export default function ProductImageGallery({
  product,
  selectedColorIndex,
  onSelectColor,
  className = "",
}: ProductImageGalleryProps) {
  // Current active image index (0 to 3)
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  // Fullscreen / larger view lightbox
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  // When selected color changes, reset active image to 0 (Full Pant)
  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedColorIndex]);

  // Safe color access
  const currentColor = product.colors[selectedColorIndex] || product.colors[0];

  // The 4 images for the selected color
  const colorImagesList = [
    { ...DETAIL_LABELS[0], src: currentColor.images?.full || product.image },
    { ...DETAIL_LABELS[1], src: currentColor.images?.waist || product.image },
    { ...DETAIL_LABELS[2], src: currentColor.images?.pocket || product.image },
    { ...DETAIL_LABELS[3], src: currentColor.images?.bottom || product.image },
  ];

  const currentImage = colorImagesList[activeImageIndex] || colorImagesList[0];

  // Navigation handlers
  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? colorImagesList.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImageIndex((prev) => (prev === colorImagesList.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, colorImagesList.length]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Color Selector Bar */}
      <div className="bg-white p-3 rounded-xl border border-slate-200/90 shadow-2xs">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="font-semibold text-slate-700">
            Selected Color:{" "}
            <strong className="text-slate-900">{currentColor.name}</strong>
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            {product.colors.length} shades available
          </span>
        </div>

        {/* Color Swatch Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {product.colors.map((color, idx) => {
            const isSelected = idx === selectedColorIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectColor(idx)}
                className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs transition-all border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-xs font-semibold ring-2 ring-blue-500/40"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
                title={`Select ${color.name} (switches gallery to ${color.name})`}
                aria-pressed={isSelected}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border border-black/20 shrink-0 shadow-2xs transition-transform group-hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="truncate max-w-[110px]">{color.name}</span>
                {isSelected && <Check className="w-3 h-3 ml-0.5 text-blue-400" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Image Slider View */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-white shadow-xs border border-slate-200 group">
        <Image
          src={currentImage.src}
          alt={`${product.name} - ${currentColor.name} - ${currentImage.label}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 450px"
          className="object-cover transition-all duration-300 cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
        />

        {/* Detail Badge Overlay */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start pointer-events-none">
          <span className="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase shadow-xs">
            {activeImageIndex + 1}/4 • {currentImage.badge}
          </span>
          <span className="bg-blue-600/90 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-0.5 rounded shadow-2xs">
            {currentColor.name}
          </span>
        </div>

        {/* View Larger (Zoom) Button */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-md backdrop-blur-xs transition-transform hover:scale-105"
          aria-label="View larger image"
          title="Click to view full size"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Navigation Arrows (Prev / Next) */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110 active:scale-95 border border-slate-200"
          aria-label="Previous detail image"
          title="Previous image"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition-all hover:scale-110 active:scale-95 border border-slate-200"
          aria-label="Next detail image"
          title="Next image"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Hint text bottom overlay on hover */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="absolute inset-x-0 bottom-0 py-1.5 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer pointer-events-none"
        >
          <span className="text-[11px] text-white font-medium drop-shadow-xs">
            Click image to expand larger
          </span>
        </div>
      </div>

      {/* 4 Detail Thumbnails Strip */}
      <div className="grid grid-cols-4 gap-2">
        {colorImagesList.map((item, idx) => {
          const isActive = idx === activeImageIndex;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`relative flex flex-col rounded-xl overflow-hidden border transition-all text-left bg-white ${
                isActive
                  ? "border-blue-600 ring-2 ring-blue-600/40 shadow-xs"
                  : "border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100"
              }`}
              aria-label={`Show ${item.label}`}
              aria-pressed={isActive}
            >
              {/* Thumbnail Image */}
              <div className="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={`${currentColor.name} ${item.label}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
                <span
                  className={`absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-blue-600 text-white" : "bg-slate-900/80 text-white"
                  }`}
                >
                  {idx + 1}
                </span>
              </div>

              {/* View Label */}
              <div className="p-1.5 bg-white border-t border-slate-100">
                <p className="text-[10px] font-semibold text-slate-800 truncate leading-tight">
                  {item.badge}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox / Larger View Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="w-full flex items-center justify-between text-white border-b border-slate-800 pb-3">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block border border-white/30"
                    style={{ backgroundColor: currentColor.hex }}
                  />
                  <span>
                    Color: <strong>{currentColor.name}</strong> • View {activeImageIndex + 1} of 4:{" "}
                    <strong>{currentImage.label}</strong>
                  </span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                aria-label="Close larger view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Main Image */}
            <div className="relative w-full max-h-[65vh] aspect-square max-w-[550px] mx-auto rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={`${product.name} - ${currentColor.name} - ${currentImage.label}`}
                fill
                sizes="(max-width: 1024px) 90vw, 600px"
                className="object-contain"
                priority
              />

              {/* Lightbox Arrow Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white shadow-lg border border-slate-700 transition-all hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white shadow-lg border border-slate-700 transition-all hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Thumbnails Strip */}
            <div className="flex items-center gap-3">
              {colorImagesList.map((thumb, idx) => {
                const isActive = idx === activeImageIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      isActive
                        ? "border-blue-500 scale-105 shadow-md shadow-blue-500/30"
                        : "border-slate-700 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={thumb.src}
                      alt={thumb.label}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                    <span className="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] text-white text-center py-0.5 truncate px-0.5">
                      {thumb.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
