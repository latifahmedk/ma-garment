import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ShieldCheck, Truck, Scissors, Award, Clock } from "lucide-react";

export default function WhyWorkWithUs() {
  const points = [
    {
      icon: Scissors,
      title: "Consistent Pattern Grading & Fitting",
      desc: "Our master cutting table operates with precision acrylic stencils. Sizes M, L, and XL maintain uniform waist, rise, and thigh dimensions batch after batch.",
    },
    {
      icon: ShieldCheck,
      title: "Reinforced 4-Thread Overlock Stitching",
      desc: "Track pants endure heavy stretching. We use high-tensile core thread, reinforced crotch seams, and bartack stitches at all pocket corners to prevent tearing.",
    },
    {
      icon: Award,
      title: "Verified Fabric GSM & Anti-Pilling",
      desc: "Every roll of 4-way Lycra, cotton terry, or fleece is inspected for uniform weight (GSM), colorfastness against washing, and shrinkage control before cutting.",
    },
    {
      icon: Clock,
      title: "Reliable 200–300 Pcs Daily Output",
      desc: "Because we run a focused small factory with 15–20 dedicated workers, we do not over-promise. When we give a delivery date for a wholesale carton, we honor it.",
    },
    {
      icon: Truck,
      title: "Centrally Situated in Sion, Mumbai",
      desc: "Sion is Mumbai’s prime logistical pivot. We supply daily to wholesale traders in Dadar, Crawford Market, and send same-day dispatches via Bhiwandi and Kurla depots.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <Image
                src="/images/factory/fabric-cutting.jpg"
                alt="Precision Fabric Cutting Table at MA Garments Factory Sion Mumbai"
                width={600}
                height={450}
                className="w-full h-[320px] object-cover"
              />
              <div className="p-4 bg-white">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Master Cutting Table
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  Multi-layer fabric spreading and precision rotary blade cutting for zero-tolerance size accuracy.
                </p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <Image
                src="/images/factory/quality-packaging.jpg"
                alt="Finishing, Quality Checking and Carton Packaging at MA Garments"
                width={600}
                height={450}
                className="w-full h-[320px] object-cover"
              />
              <div className="p-4 bg-white">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                  Quality Check & Wholesale Boxing
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  100% manual seam inspection, thread trimming, vacuum steam pressing, and corrugated carton bundling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Why Wholesale Buyers Partner With Us */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block mb-1">
                Why Wholesalers Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Built For Wholesale Stability & Margin Confidence
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Wholesale traders and garment shop owners cannot afford defective seams, mismatched sizes, or unpredictable delivery schedules. Here is why our current 10–15 wholesale partners place repeat orders with us every month:
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
              >
                <span>Read more about our manufacturing process & Sion unit →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
