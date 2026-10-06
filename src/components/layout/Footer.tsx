import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Truck,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { productCategories } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top B2B Summary Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 border-b border-slate-800 text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400 shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-0.5">Sion, Mumbai Manufacturing Unit</h4>
              <p className="text-slate-400 text-xs">
                In-house cutting master, flatlock & overlock stitching lines, steam finishing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-0.5">200–300 Pcs Daily Capacity</h4>
              <p className="text-slate-400 text-xs">
                Consistent sizing, dependable stitching, and verified fabric GSM quality.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white mb-0.5">Transport</h4>
              <p className="text-slate-400 text-xs">
                Daily parcel dispatch to Dadar, Crawford Market, Bhiwandi, and Pan-India logistics.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          {/* Col 1 & 2: Factory Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-700 flex items-center justify-center text-white font-bold text-lg">
                MA
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                MA GARMENTS
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated track pants manufacturing factory based in Sion, Mumbai. We operate with 15–20 skilled tailors producing 200–300 pieces daily, exclusively supplying wholesale traders, bulk distributors, and multi-brand garment retailers.
            </p>

            <div className="pt-2">
              <span className="inline-block bg-slate-900 border border-slate-800 text-amber-300 text-xs px-3 py-1.5 rounded-md font-medium">
                📦 Wholesale &amp; Clothes Shop Orders • Minimum Order: 100 Pieces (No Single Pieces)
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors text-slate-400 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Request Bulk Price List →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Manufactured Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {productCategories
                .filter((cat) => cat !== "All Products")
                .map((cat) => (
                  <li key={cat}>
                    <Link href="/products" className="hover:text-white transition-colors">
                      {cat}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Col 5: Factory Address & Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Factory Unit
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.address.street},{" "}
                  {siteConfig.contact.address.landmark},{" "}
                  {siteConfig.contact.address.locality},{" "}
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} –{" "}
                  {siteConfig.contact.address.pincode}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneCall}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  Direct WhatsApp Chat
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5 pt-1 text-slate-400 text-xs">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>Mon–Sat: 9:30 AM to 7:30 PM (Wholesale buyers by appointment)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>Wholesale Garment Manufacturer in Sion, Mumbai, India</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-300">
              Wholesale &amp; Shop Enquiries
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-300">
              Factory Profile
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
