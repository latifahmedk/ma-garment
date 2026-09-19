import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Building2,
  Users,
  Gauge,
  MapPin,
  Scissors,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Layers,
  Sparkles,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Our Garment Factory in Sion, Mumbai",
  description:
    "Learn about MA Garments, a specialized track pants manufacturing unit in Sion, Mumbai. 15-20 skilled craftsmen, 200-300 pcs daily capacity, in-house master cutting, overlock stitching & QC.",
  keywords: [
    "about track pants factory sion mumbai",
    "garment manufacturer in sion",
    "track pants manufacturing process",
    "b2b garment factory mumbai maharashtra",
    "small scale track pants manufacturing unit",
  ],
};

export default function AboutPage() {
  const steps = [
    {
      num: "01",
      title: "Mill-Direct Fabric Sourcing & GSM Testing",
      desc: "We procure raw knit rolls directly from leading textile mills in Surat, Ludhiana, and Bhiwandi. Each fabric roll is checked for color uniformity, weight (GSM verification), stretch recovery, and shrinkage control before entering our cutting lines.",
    },
    {
      num: "02",
      title: "Master Pattern Grading & Spreading",
      desc: "Our cutting master lays multi-tiered fabric plies on our 30-foot cutting table. Patterns for sizes M, L, XL, and 2XL are marked with millimeter precision to ensure exact rise, inseam, and waist measurements across all pieces.",
    },
    {
      num: "03",
      title: "Precision Electric Rotary Cutting",
      desc: "Using high-speed industrial vertical and rotary cutters, stacks of up to 80 fabric plies are cut cleanly without frayed edges or thread pulling. Bundles are then ticketed and numbered to prevent color shading differences.",
    },
    {
      num: "04",
      title: "Overlock & Flatlock Assembly Stitching",
      desc: "Our skilled tailors use 4-thread overlock machines and double-needle flatlock machines for sturdy, flexible seams that withstand rigorous athletic movement. Crotch seams and pocket openings receive heavy-duty bar-tacking.",
    },
    {
      num: "05",
      title: "100% Quality Inspection & Thread Trimming",
      desc: "Before finishing, each track pant undergoes complete inspection: zipper functionality, elastic stretch tension, pocket symmetry, and loose thread trimming. Rejects are pulled immediately.",
    },
    {
      num: "06",
      title: "Vacuum Steam Pressing & Carton Packaging",
      desc: "Approved garments pass through industrial vacuum steam tables to give them a crisp retail finish. They are folded into transparent polybags, bundled in dozen packs, and packed into heavy 5-ply corrugated export cartons.",
    },
  ];

  return (
    <div className="py-12 lg:py-20 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Factory Profile & Operational Background</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            A Focused Track Pants Manufacturing Factory in Sion, Mumbai
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            MA Garments was founded to provide wholesale garment traders, distributors, and retail shop owners with direct factory-rate track pants without the inconsistency and markups of intermediaries.
          </p>
        </div>

        {/* Real Factory Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
          <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-slate-100 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs font-semibold text-slate-500 uppercase">
              Daily Production Capacity
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              200–300 Pcs
            </div>
            <p className="text-xs text-slate-500">
              Steady output across dedicated overlock lines
            </p>
          </div>

          <div className="space-y-1 border-b sm:border-b-0 lg:border-r border-slate-100 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs font-semibold text-slate-500 uppercase">
              Factory Workforce
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              15–20 Staff
            </div>
            <p className="text-xs text-slate-500">
              Master cutters, skilled tailors, and QC checkers
            </p>
          </div>

          <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-slate-100 pb-4 sm:pb-0 sm:pr-4">
            <span className="text-xs font-semibold text-slate-500 uppercase">
              Active Wholesale Clients
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              10–15 Wholesalers
            </div>
            <p className="text-xs text-slate-500">
              Regular monthly buyers across Maharashtra & India
            </p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-500 uppercase">
              Facility Location
            </span>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sion, Mumbai
            </div>
            <p className="text-xs text-slate-500">
              Prime central Mumbai transport connectivity
            </p>
          </div>
        </div>

        {/* Story & Philosophy Section with Factory Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">
              Our Manufacturing Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Honest Scale, Dependable Stitching, Realistic Commitments
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We started our manufacturing unit in Sion with a straightforward goal: create a reliable, focused garment unit specializing in bottom wear, specifically track pants and athletic joggers.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Unlike massive garment conglomerates that juggle hundreds of diverse apparel categories, we specialize strictly in track pants. This singular focus allows us to master pattern grading, optimize thread tension for athletic fabrics, source the most durable pocket zippers, and maintain consistent quality across every batch.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our 15–20 employees are experienced textile workers, many of whom have spent over a decade in Mumbai's renowned garment industry. We treat our wholesale clients as long-term partners—when we give an order dispatch date, we deliver on time.
            </p>

            <div className="pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-slate-900 text-sm block">
                  Our B2B Wholesale Commitment
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We sell exclusively to wholesalers, bulk traders, and retail chain buyers. We do not operate any consumer-facing retail shop or e-commerce store, ensuring zero competition with our wholesale clients.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900">
              <Image
                src="/images/factory/hero-workshop.jpg"
                alt="Sewing floor inside MA Garments factory in Sion Mumbai"
                width={800}
                height={550}
                className="w-full h-[440px] object-cover"
              />
              <div className="p-4 bg-white/95 border-t border-slate-200">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-900">
                    Sion Industrial Estate Facility
                  </span>
                  <span className="text-slate-500">Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Process Walkthrough */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 block">
              Step-by-Step Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our In-House Manufacturing Process
            </h2>
            <p className="text-slate-600 text-sm">
              From raw fabric rolls to master carton packaging, every operation takes place under direct supervision in our Sion factory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all space-y-3 relative group"
              >
                <div className="text-3xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                  {s.num}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {s.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Factory Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src="/images/factory/fabric-cutting.jpg"
                alt="Fabric Cutting Master at MA Garments Sion Factory"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-1.5">
              <h3 className="text-base font-bold text-slate-900">
                In-House Master Cutting Table
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Precision electric cutting machines and uniform pattern stencils guarantee standard sizing across all track pants batches.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
            <div className="relative h-64 sm:h-72 w-full">
              <Image
                src="/images/factory/quality-packaging.jpg"
                alt="Quality Inspection and Carton Packing at MA Garments Sion"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-1.5">
              <h3 className="text-base font-bold text-slate-900">
                Finishing, Ironing & Carton Boxing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Each completed garment undergoes seam verification, thread trimming, vacuum steam pressing, and corrugated carton bundling.
              </p>
            </div>
          </div>
        </div>

        {/* Location Advantage: Sion, Mumbai */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Strategic Mumbai Manufacturing Location</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Why Sion, Mumbai Gives Wholesale Buyers a Strategic Advantage
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Sion sits at the crossroads of Mumbai’s Eastern and Western transit corridors. For wholesale buyers, this means unmatched speed and reduced shipping freight:
              </p>

              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>15 Minutes to Dadar Garment Market:</strong> Rapid daily deliveries to wholesale shops in Dadar and King's Circle.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>25 Minutes to Crawford Market & Mangaldas Market:</strong> Direct transit connection to South Mumbai trading hubs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Express Depots for Pan-India Transport:</strong> Daily parcel booking via Bhiwandi, Vashi, and Kurla transport carriers covering Maharashtra, Gujarat, and South India.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-800/90 rounded-xl p-6 border border-slate-700 space-y-4">
              <h3 className="text-base font-bold text-white">
                Visit Our Factory
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Wholesale buyers are welcome to visit our factory unit in Sion West by prior appointment to examine running production and review physical fabric swatches.
              </p>
              <div className="pt-2 space-y-2 text-xs text-slate-300">
                <div>
                  <strong className="text-white block">Address:</strong>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.landmark}, {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.pincode}
                </div>
                <div>
                  <strong className="text-white block">Hours:</strong>
                  {siteConfig.contact.visitingHours}
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <Link
                  href="/contact"
                  className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg text-center transition-colors"
                >
                  Schedule Factory Visit
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phoneCall}`}
                  className="flex-1 py-2.5 px-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold text-xs rounded-lg text-center transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
