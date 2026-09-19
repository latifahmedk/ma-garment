"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import ProductModal from "@/components/products/ProductModal";

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Take the 4 featured products
  const featuredList = products.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-1">
              Manufactured In Sion
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Wholesale Track Pants
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              High-volume styles regularly on our cutting tables. Ready for wholesale carton orders with assorted size ratios.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            <span>View Complete Catalogue ({products.length} Styles)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenDetails={(prod) => setSelectedProduct(prod)}
            />
          ))}
        </div>

        {/* Bottom Banner for custom/bulk inquiries */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Need custom fabric GSM, specific color shades, or buyer branding?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              For bulk orders exceeding 300 pieces, we offer custom pattern grading, buyer logo heat-transfer, and custom packaging.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-xs transition-colors"
          >
            Enquire For Custom Manufacturing
          </Link>
        </div>
      </div>

      {/* Modal View */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
