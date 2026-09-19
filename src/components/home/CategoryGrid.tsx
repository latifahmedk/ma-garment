import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Activity, Layers, Box, Flame, Scissors } from "lucide-react";

export default function CategoryGrid() {
  const categories = [
    {
      title: "4-Way Lycra NS Tracks",
      subtitle: "High Elasticity & Water Repellent",
      gsm: "220 GSM",
      icon: Activity,
      desc: "Fast-drying, sweat-wicking synthetic blend with 360° stretch for sportswear wholesalers.",
      tag: "Best Seller",
    },
    {
      title: "100% Combed Cotton Terry",
      subtitle: "Bio-Washed French Terry Joggers",
      gsm: "260 GSM",
      icon: Layers,
      desc: "Ultra-soft luxury feel, thick waistband ribs, non-fading colors for premium retail shops.",
      tag: "Premium Grade",
    },
    {
      title: "Micro Polyester Dry-Fit",
      subtitle: "Ventilated Sports Training Tracks",
      gsm: "190 GSM",
      icon: Sparkles,
      desc: "Ankle zip gussets, breathable mesh inserts, engineered for sports clubs & academies.",
      tag: "High Turnover",
    },
    {
      title: "6-Pocket Cargo Track Pants",
      subtitle: "Tactical Bellows Pocket Joggers",
      gsm: "240 GSM",
      icon: Box,
      desc: "Heavy-duty twill/poly stretch weave with secure velcro flaps for youth street fashion.",
      tag: "Trending",
    },
    {
      title: "Classic Double-Piping Tracks",
      subtitle: "Evergreen Athletic Staple",
      gsm: "210 GSM",
      icon: Scissors,
      desc: "Cut-and-sew contrast side piping ribbons that never fade or crack under washing.",
      tag: "Consistent Demand",
    },
    {
      title: "Winter Thermal Fleece",
      subtitle: "Brushed Anti-Pill Warm Tracks",
      gsm: "280 GSM",
      icon: Flame,
      desc: "Heavyweight dual-sided fleece that insulates against cold weather for seasonal bulk dispatches.",
      tag: "Seasonal Bulk",
    },
  ];

  return (
    <section className="py-16 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-1">
              What We Manufacture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Specialized Track Pants For Every Wholesale Segment
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-xl">
              From high-stretch gym wear to heavy combed cotton joggers, our Sion stitching floor produces consistent, retail-ready garments.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            <span>Explore All Product Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-700 mb-0.5">
                    {cat.gsm} • {cat.subtitle}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-700">
                  <span>MOQ: 100 Pcs</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Catalogue →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
