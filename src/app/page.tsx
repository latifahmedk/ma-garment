import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProductionStats from "@/components/home/ProductionStats";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import QuickInquiryCTA from "@/components/home/QuickInquiryCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Transparent Manufacturing Capacity & Operational Stats */}
      <ProductionStats />

      {/* 3. Featured Manufactured Track Pants Catalog */}
      <FeaturedProducts />

      {/* 4. What We Manufacture (Fabric categories & technical specs) */}
      <CategoryGrid />

      {/* 5. Why Wholesalers Work With Us (In-house cutting, QC, Sion Mumbai advantage) */}
      <WhyWorkWithUs />

      {/* 6. High-Conversion B2B Lead Generation CTA */}
      <QuickInquiryCTA />
    </>
  );
}
