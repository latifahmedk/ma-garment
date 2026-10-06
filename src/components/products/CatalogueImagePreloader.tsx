"use client";

import { useEffect } from "react";
import { products } from "@/data/products";

/**
 * CatalogueImagePreloader
 * Eagerly preloads all product color images into browser cache upon website visit.
 * Ensures switching colors on any product card or modal is 100% instantaneous.
 */
export default function CatalogueImagePreloader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const primaryImages: string[] = [];
    const detailImages: string[] = [];
    const seen = new Set<string>();

    const addPrimary = (url?: string) => {
      if (url && !seen.has(url)) {
        seen.add(url);
        primaryImages.push(url);
      }
    };

    const addDetail = (url?: string) => {
      if (url && !seen.has(url)) {
        seen.add(url);
        detailImages.push(url);
      }
    };

    // Collect all image URLs across all products and colors
    products.forEach((prod) => {
      addPrimary(prod.image);
      prod.colors.forEach((col) => {
        addPrimary(col.images?.full);
        addDetail(col.images?.waist);
        addDetail(col.images?.pocket);
        addDetail(col.images?.["side-pocket"]);
        addDetail(col.images?.bottom);
      });
    });

    const preload = (url: string) => {
      try {
        const img = new window.Image();
        img.src = url;
      } catch {
        // Ignore preload errors gracefully
      }
    };

    // 1. Preload all primary/full views immediately
    primaryImages.forEach(preload);

    // 2. Preload remaining detail views in background idle time
    const scheduleDetails = () => {
      detailImages.forEach(preload);
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(scheduleDetails, { timeout: 1500 });
    } else {
      setTimeout(scheduleDetails, 300);
    }
  }, []);

  return null;
}
