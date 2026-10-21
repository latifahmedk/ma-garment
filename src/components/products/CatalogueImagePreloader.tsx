"use client";

import { useEffect } from "react";
import { products } from "@/data/products";

/**
 * CatalogueImagePreloader
 * Intelligently warms cache for primary catalogue cards during idle time.
 * Prevents mobile network congestion by skipping heavy bulk downloads on small screens.
 */
export default function CatalogueImagePreloader() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip on mobile screens or if Save-Data mode is active to preserve mobile bandwidth
    const isMobile = window.innerWidth < 768;
    const isSaveData = (navigator as unknown as { connection?: { saveData?: boolean } })
      ?.connection?.saveData;

    if (isMobile || isSaveData) {
      return;
    }

    // On desktop, gently warm only the 5 main product images during idle time
    const scheduleWarmup = () => {
      products.forEach((prod) => {
        if (prod.image) {
          const img = new window.Image();
          img.src = prod.image;
        }
      });
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(scheduleWarmup, { timeout: 3000 });
    } else {
      setTimeout(scheduleWarmup, 1500);
    }
  }, []);

  return null;
}
