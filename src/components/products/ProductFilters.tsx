"use client";

import React from "react";
import { Search, Filter } from "lucide-react";
import { productCategories } from "@/data/products";
import { ProductCategory } from "@/types";

export type CategoryFilterValue = "All Products" | ProductCategory;

interface ProductFiltersProps {
  selectedCategory: CategoryFilterValue | string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProductFilters({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: ProductFiltersProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-2xs space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search input */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by fabric, style, or GSM..."
            aria-label="Search manufactured track pants by fabric, style, or GSM"
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder:text-slate-400"
          />
        </div>

        <div className="text-xs text-slate-500 font-medium hidden md:block">
          Click any category below to filter catalogue
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <span className="text-xs font-semibold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" />
          <span>Category:</span>
        </span>

        {productCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? "bg-blue-700 text-white shadow-2xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
