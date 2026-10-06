import React from "react";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: "MA Garments Track Pants Manufacturer",
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneCall,
    email: siteConfig.contact.email,
    priceRange: "₹₹",
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.pincode,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "19.0390",
      longitude: "72.8619",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    areaServed: [
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Track Pants Manufacturing",
      "Wholesale Joggers Supplier",
      "Garment Manufacturing in Mumbai",
      "B2B Apparel Supplier",
      "Clothes Shop Bulk Supplier",
      "4-Way Lycra Track Pants",
      "4-Way Military Track Pants",
      "Dyson Fabric Track Pants",
      "NS Fabric Track Pants",
      "Code Common Track Pants",
    ],
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Manufactured Track Pants Catalogue",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: `${siteConfig.url}${product.image}`,
        category: product.category,
        material: product.fabric,
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "INR",
          offerCount: 1,
          eligibleQuantity: {
            "@type": "QuantitativeValue",
            value: 100,
            unitCode: "C62", // Unit piece code
          },
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListSchema),
        }}
      />
    </>
  );
}
