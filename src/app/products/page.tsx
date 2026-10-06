import React from "react";
import { Metadata } from "next";
import ProductsClient from "./ProductsClient";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Manufactured Products Catalogue | Wholesale Track Pants Mumbai",
  description:
    "Explore our complete in-house manufactured track pants collection: 4-Way Lycra NS, Combed Cotton French Terry, Micro Poly Dry-Fit, and Cargo Joggers. Minimum order 100 pcs. Direct factory dispatches from Sion, Mumbai.",
  keywords: [
    "track pants wholesale catalog mumbai",
    "4 way lycra track pants manufacturer",
    "cotton terry joggers wholesale",
    "sports track pants bulk supplier sion",
    "cargo track pants manufacturer maharashtra",
    "wholesale track pants rate list",
  ],
  openGraph: {
    title: `Manufactured Track Pants Catalogue | ${siteConfig.name}`,
    description:
      "Direct factory manufactured track pants catalogue for wholesale buyers, traders, and retail clothes shops across India. Minimum order: 100 pieces.",
    images: [{ url: siteConfig.ogImage }],
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}
