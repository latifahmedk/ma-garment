import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNoticeBanner from "@/components/layout/TopNoticeBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import JsonLd from "@/components/seo/JsonLd";
import CatalogueImagePreloader from "@/components/products/CatalogueImagePreloader";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Track Pants Manufacturer & Wholesale Supplier Mumbai`,
    template: `%s | ${siteConfig.name} - Sion, Mumbai`,
  },
  description: siteConfig.description,
  keywords: [
    "track pants manufacturer in mumbai",
    "track pants wholesaler supplier",
    "track pants manufacturer maharashtra",
    "wholesale track pants supplier",
    "track pants manufacturer india",
    "b2b track pants supplier mumbai",
    "sion mumbai garment manufacturer",
    "4 way lycra track pants wholesale",
    "cotton terry joggers manufacturer",
    "bulk track pants supplier india",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} - Track Pants Manufacturer & Wholesale Supplier Sion Mumbai`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Garment Factory Sion Mumbai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Track Pants Manufacturer Mumbai`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {/* Background Catalogue Image Preloader */}
        <CatalogueImagePreloader />

        {/* Top Wholesale B2B Notice */}
        <TopNoticeBanner />

        {/* Main Sticky Navbar */}
        <Navbar />

        {/* Dynamic Page Content */}
        <main className="flex-1">{children}</main>

        {/* B2B Footer */}
        <Footer />

        {/* Floating Wholesale WhatsApp Inquiry Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
