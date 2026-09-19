import React from "react";
import { Users, Gauge, Handshake, PackageCheck, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function ProductionStats() {
  const stats = [
    {
      icon: Gauge,
      value: "200–300",
      unit: "Pcs / Day",
      label: "Manufacturing Output",
      subtext: "Consistent daily volume across active stitching lines",
    },
    {
      icon: Users,
      value: "15–20",
      unit: "Craftsmen",
      label: "Skilled Tailoring Team",
      subtext: "Master cutters, machine operators & finishing checkers",
    },
    {
      icon: Handshake,
      value: "10–15",
      unit: "Wholesalers",
      label: "Current Partner Network",
      subtext: "Regular buyers across Mumbai & regional textile markets",
    },
    {
      icon: PackageCheck,
      value: "100",
      unit: "Pcs MOQ",
      label: "Minimum Bulk Order",
      subtext: "Packed in assorted size cartons ready for prompt dispatch",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-1">
            Manufacturing Transparency
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            A Focused, Small-Scale Manufacturing Facility
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            We don’t make exaggerated claims. We run an efficient, dedicated garment production unit in Sion, Mumbai, providing reliable quality and honest commitments to wholesale partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:bg-white transition-all shadow-2xs hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-xs font-semibold text-blue-700 uppercase">
                    {item.unit}
                  </span>
                </div>
                <div className="font-semibold text-slate-800 text-sm mt-1">
                  {item.label}
                </div>
                <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
