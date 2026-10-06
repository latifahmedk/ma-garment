"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { Product } from "@/types";
import ProductCard from "@/components/products/ProductCard";
import ProductModal from "@/components/products/ProductModal";
import ProductFilters from "@/components/products/ProductFilters";
import { ShieldCheck, Package, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Products");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColorName, setSelectedColorName] = useState<string | undefined>(undefined);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory =
        selectedCategory === "All Products" || p.category === selectedCategory;
      const matchSearch =
        searchQuery === "" ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Header */}
        <div className="border-b border-slate-200 pb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Package className="w-3.5 h-3.5 text-blue-700" />
            <span>Factory Catalogue • Wholesale Enquiries Only</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Manufactured Track Pants Collection
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Every garment shown below is patterned, cut, stitched, and finished in our Sion, Mumbai factory. We supply standard size ratios in 100-piece minimum wholesale cartons directly to distributors, wholesalers, and retail chains.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Direct Factory Pricing
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Standard Assorted Carton Packaging
            </span>
            <span className="flex items-center gap-1.5 text-emerald-700">
              <CheckCircle2 className="w-4 h-4" /> Dispatch to Mumbai & Pan-India Hubs
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <ProductFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Product Count & Active Status */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>
            Showing <strong className="text-slate-900">{filteredProducts.length}</strong> styles
            {selectedCategory !== "All Products" && ` in "${selectedCategory}"`}
          </span>
          <span>Standard Wholesale MOQ: 100 Pcs / Style</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(prod, color) => {
                  setSelectedProduct(prod);
                  setSelectedColorName(color);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 space-y-3">
            <Package className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-800">
              No matching track pants found
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Try changing your search term or reset the category filter to view all manufactured styles.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All Products");
                setSearchQuery("");
              }}
              className="mt-2 px-4 py-2 bg-blue-700 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Wholesale Ordering & Sample Policy Info Box */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block">
              Wholesale Buyer Guidelines
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              How To Order Wholesale & Request Quality Samples
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              We operate exclusively on a B2B basis with verified wholesale traders, shop owners, and garment distributors. We do not sell loose single pieces to retail consumers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-sm text-white">Step 1: Select Styles</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Choose the required fabric categories (4-Way Lycra, Cotton Terry, Dry-Fit, or Cargo) and note your approximate monthly volume.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-sm text-white">Step 2: Sample Testing</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We courier physical sample pieces for fabric feel, stitching inspection, and sizing approval before bulk production commitment.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-sm text-white">Step 3: Factory Dispatch</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Finished wholesale cartons (100–120 pcs) are dispatched directly from our Sion factory via your preferred transport company.
              </p>
            </div>
          </div>

          {/* Direct CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors text-center"
            >
              Submit Detailed Wholesale Order
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
                "Hello MA Garments Sion! I am reviewing your wholesale catalogue and would like to request the wholesale price list and sample details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us for Price Card</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal for detailed specifications */}
      <ProductModal
        product={selectedProduct}
        initialColorName={selectedColorName}
        onClose={() => {
          setSelectedProduct(null);
          setSelectedColorName(undefined);
        }}
      />
    </div>
  );
}
