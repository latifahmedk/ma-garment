import { Product } from "@/types";

/**
 * ============================================================================
 * MA GARMENTS - PRODUCT CATALOGUE DATA
 * ============================================================================
 * 
 * IMAGE STRUCTURE PER COLOR:
 * Each color object has an `images` field with exactly 4 detail images:
 *   1. full   -> Full Pant Image (front / overall silhouette)
 *   2. waist  -> Waist Detail Image (drawstring, eyelets, waistband stitching)
 *   3. pocket -> Pocket & Brand Logo Detail Image (zipper, branding, pocket construction)
 *   4. bottom -> Bottom Detail Image (cuff, hem, ankle finish)
 * 
 * RECOMMENDED FOLDER ORGANIZATION:
 * Place your images in `public/images/products/<product-slug>/<color-slug>/`
 * For example:
 *   public/images/products/lycra-4way/black/full.jpg
 *   public/images/products/lycra-4way/black/waist.jpg
 *   public/images/products/lycra-4way/black/pocket.jpg
 *   public/images/products/lycra-4way/black/bottom.jpg
 * 
 * For now, all 4 slots point to the existing verified AI-generated images so
 * that nothing breaks or 404s while you add your photos.
 * ============================================================================
 */

export const products: Product[] = [
  {
    id: "prod-001",
    name: "4-Way Lycra NS Athletic Track Pants",
    slug: "4-way-lycra-ns-athletic-track-pants",
    category: "4-Way Lycra",
    fabric: "220 GSM Imported 4-Way Stretch NS Lycra",
    gsm: 220,
    fit: "Modern Slim-Tapered Athletic Fit",
    image: "/images/products/4way/royal-blue/4way-royal-blue-full.png",
    featured: true,
    colors: [
      {
        name: "Royal Blue",
        hex: "#1D4ED8",
        inStock: true,
        images: {
          full: "/images/products/4way/royal-blue/4way-royal-blue-full.png",
          waist: "/images/products/4way/royal-blue/4way-royal-blue-waist.png",
          pocket: "/images/products/4way/royal-blue/4way-royal-blue-pocket.png",
          bottom: "/images/products/4way/royal-blue/4way-royal-blue-bottom.png",
        },
      },
      {
        name: "Charcole Grey",
        hex: "#3F4249",
        inStock: true,
        images: {
          full: "/images/products/4way/charcole-grey/4way-charcole-grey-full.png",
          waist: "/images/products/4way/charcole-grey/4way-charcole-grey-waist.png",
          pocket: "/images/products/4way/charcole-grey/4way-charcole-grey-pocket.png",
          bottom: "/images/products/4way/charcole-grey/4way-charcole-grey-bottom.png",
        },
      },
      {
        name: "Dark Teal",
        hex: "#183E51",
        inStock: true,
        images: {
          full: "/images/products/4way/dark-teal/4way-dark-teal-full.png",
          waist: "/images/products/4way/dark-teal/4way-dark-teal-waist.png",
          pocket: "/images/products/4way/dark-teal/4way-dark-teal-pocket.png",
          bottom: "/images/products/4way/dark-teal/4way-dark-teal-bottom.png",
        },
      },
      {
        name: "Olive Green",
        hex: "#3C412E",
        inStock: true,
        images: {
          full: "/images/products/4way/olive-green/4way-olive-green-full.png",
          waist: "/images/products/4way/olive-green/4way-olive-green-waist.png",
          pocket: "/images/products/4way/olive-green/4way-olive-green-pocket.png",
          bottom: "/images/products/4way/olive-green/4way-olive-green-bottom.png",
        },
      },
      {
        name: "Teal Blue",
        hex: "#186488",
        inStock: true,
        images: {
          full: "/images/products/4way/teal-blue/4way-teal-blue-full.png",
          waist: "/images/products/4way/teal-blue/4way-teal-blue-waist.png",
          pocket: "/images/products/4way/teal-blue/4way-teal-blue-pocket.png",
          bottom: "/images/products/4way/teal-blue/4way-teal-blue-bottom.png",
        },
      },
      {
        name: "Light Grey",
        hex: "#ABACB4",
        inStock: true,
        images: {
          full: "/images/products/4way/light-grey/4way-light-grey-full.png",
          waist: "/images/products/4way/light-grey/4way-light-grey-waist.png",
          pocket: "/images/products/4way/light-grey/4way-light-grey-pocket.png",
          bottom: "/images/products/4way/light-grey/4way-light-grey-bottom.png",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Standard Wholesale Pack - Assorted Sizes)",
    packaging: "Individual transparent polybag, 12 pcs inner bundle, 120 pcs master corrugated carton",
    description:
      "Our highest volume manufactured item. Tailored from high-density 220 GSM NS 4-Way Stretch fabric engineered for gym, running, and all-day wear. Equipped with concealed waterproof zipper pockets, reinforced crotch stitching, and a heavy-duty ribbed elastic waistband.",
    specifications: {
      fabricComposition: "88% Micro Polyester, 12% Spandex / Elastane",
      waistband: "45mm heavy-gauge knit elastic with internal polyester flat drawstring",
      pockets: "Dual side pockets with smooth nylon coil reversed zippers & heat-seal tape",
      stitching: "4-thread overlock interlock with double-needle flatlock hems",
      ankleFinish: "Soft stretch rib-knit cuffed ankle hems",
    },
    highlights: [
      "Water-repellent & sweat-wicking NS fabric",
      "Full 360-degree 4-way elasticity that holds shape after wash",
      "Dual deep zipper pockets capable of holding large smartphones securely",
      "Factory-standard ratio: 1 M : 2 L : 2 XL : 1 2XL (or custom buyer ratio)",
    ],
  },
  {
    id: "prod-002",
    name: "Heavyweight Combed Cotton Terry Joggers",
    slug: "heavyweight-combed-cotton-terry-joggers",
    category: "Cotton Terry",
    fabric: "260 GSM Bio-Washed 100% Combed Cotton Terry",
    gsm: 260,
    fit: "Relaxed Tapered Streetwear Fit",
    image: "/images/products/cotton-terry-grey.jpg",
    featured: true,
    colors: [
      {
        name: "Melange Heather Grey",
        hex: "#9CA3AF",
        inStock: true,
        images: {
          full: "/images/products/cotton-terry-grey.jpg",
          waist: "/images/products/cotton-terry-grey.jpg",
          pocket: "/images/products/cotton-terry-grey.jpg",
          bottom: "/images/products/cotton-terry-grey.jpg",
        },
      },
      {
        name: "Pitch Black",
        hex: "#111827",
        inStock: true,
        images: {
          full: "/images/products/cotton-terry-grey.jpg",
          waist: "/images/products/cotton-terry-grey.jpg",
          pocket: "/images/products/cotton-terry-grey.jpg",
          bottom: "/images/products/cotton-terry-grey.jpg",
        },
      },
      {
        name: "Deep Navy",
        hex: "#1E293B",
        inStock: true,
        images: {
          full: "/images/products/cotton-terry-grey.jpg",
          waist: "/images/products/cotton-terry-grey.jpg",
          pocket: "/images/products/cotton-terry-grey.jpg",
          bottom: "/images/products/cotton-terry-grey.jpg",
        },
      },
      {
        name: "Coffee Brown",
        hex: "#451A03",
        inStock: true,
        images: {
          full: "/images/products/cotton-terry-grey.jpg",
          waist: "/images/products/cotton-terry-grey.jpg",
          pocket: "/images/products/cotton-terry-grey.jpg",
          bottom: "/images/products/cotton-terry-grey.jpg",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)", "3XL (38-40)"],
    moq: "100 Pieces (Assorted Colors or Single Shade Available)",
    packaging: "Polybag with barcode sticker, 10 pcs inner pack, 100 pcs master bale/carton",
    description:
      "Crafted from premium 260 GSM combed cotton French Terry with an ultra-soft bio-washed finish. Ideal for premium casual wear and loungewear wholesalers. Breathable, non-shrink fabric with thick custom drawcords and deep slash side pockets.",
    specifications: {
      fabricComposition: "100% Super Combed Cotton French Terry (Bio-Polished)",
      waistband: "2x2 Lycra-ribbed waistband with antique silver eyelets and braided cotton rope",
      pockets: "Two deep slanted hand pockets plus one rear patch pocket with bar-tacking",
      stitching: "High-tensile cotton-poly core thread with heavy-duty crotch gusset",
      ankleFinish: "2.5-inch 2x2 stretch rib cuffs",
    },
    highlights: [
      "Zero pilling and color bleeding post bio-wash treatment",
      "Substantial 260 GSM fabric weight loved by branded retail buyers",
      "Generous back pocket and deep front pockets for daily convenience",
      "Customizable with wholesale customer's brand woven labels upon request",
    ],
  },
  {
    id: "prod-003",
    name: "Dry-Fit Polyester Sports Training Pants",
    slug: "dry-fit-polyester-sports-training-pants",
    category: "Dry-Fit Sports",
    fabric: "190 GSM Moisture-Wicking Micro Poly Dry-Fit",
    gsm: 190,
    fit: "Athletic Performance Fit with Knee Articulation",
    image: "/images/products/dryfit-sports-navy.jpg",
    featured: true,
    colors: [
      {
        name: "Navy Blue",
        hex: "#1E3A8A",
        inStock: true,
        images: {
          full: "/images/products/dryfit-sports-navy.jpg",
          waist: "/images/products/dryfit-sports-navy.jpg",
          pocket: "/images/products/dryfit-sports-navy.jpg",
          bottom: "/images/products/dryfit-sports-navy.jpg",
        },
      },
      {
        name: "Steel Grey",
        hex: "#4B5563",
        inStock: true,
        images: {
          full: "/images/products/dryfit-sports-navy.jpg",
          waist: "/images/products/dryfit-sports-navy.jpg",
          pocket: "/images/products/dryfit-sports-navy.jpg",
          bottom: "/images/products/dryfit-sports-navy.jpg",
        },
      },
      {
        name: "Jet Black",
        hex: "#111827",
        inStock: true,
        images: {
          full: "/images/products/dryfit-sports-navy.jpg",
          waist: "/images/products/dryfit-sports-navy.jpg",
          pocket: "/images/products/dryfit-sports-navy.jpg",
          bottom: "/images/products/dryfit-sports-navy.jpg",
        },
      },
      {
        name: "Royal Blue",
        hex: "#2563EB",
        inStock: true,
        images: {
          full: "/images/products/dryfit-sports-navy.jpg",
          waist: "/images/products/dryfit-sports-navy.jpg",
          pocket: "/images/products/dryfit-sports-navy.jpg",
          bottom: "/images/products/dryfit-sports-navy.jpg",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "120 Pieces (Assorted sizes / 1 Master Carton)",
    packaging: "Individual clear poly packaging, 12 pcs bundle, 120 pcs export carton",
    description:
      "Engineered specifically for football academies, gym chains, corporate sports events, and wholesale sportswear shops. Features high-airflow micro-dry mesh side ventilation panels and lower-leg zip gussets for swift shoe clearance.",
    specifications: {
      fabricComposition: "100% Micro Polyester with Hydrophilic Moisture Management Finish",
      waistband: "Covered elastic with round polyester drawstring with dipped aglets",
      pockets: "Two zipped side pockets with auto-locking pullers",
      stitching: "Flatlock anti-chafing seams along inner thigh and crotch",
      ankleFinish: "7-inch side zippers with reflective accents for easy shoe clearance",
    },
    highlights: [
      "Rapid dry technology disperses perspiration instantly",
      "Ankle bottom zippers allow putting on over sports spikes/sneakers",
      "Extremely durable fabric that withstands rigorous daily washing",
      "High margin fast-moving SKU for sports apparel retail counters",
    ],
  },
  {
    id: "prod-004",
    name: "6-Pocket Tactical Cargo Joggers",
    slug: "6-pocket-tactical-cargo-joggers",
    category: "Cargo Utility",
    fabric: "240 GSM Durable Stretch Poly-Cotton Twill Weave",
    gsm: 240,
    fit: "Tapered Urban Cargo Fit",
    image: "/images/products/cargo-utility-olive.jpg",
    featured: true,
    colors: [
      {
        name: "Military Olive Green",
        hex: "#3F4A3C",
        inStock: true,
        images: {
          full: "/images/products/cargo-utility-olive.jpg",
          waist: "/images/products/cargo-utility-olive.jpg",
          pocket: "/images/products/cargo-utility-olive.jpg",
          bottom: "/images/products/cargo-utility-olive.jpg",
        },
      },
      {
        name: "Tactical Black",
        hex: "#171717",
        inStock: true,
        images: {
          full: "/images/products/cargo-utility-olive.jpg",
          waist: "/images/products/cargo-utility-olive.jpg",
          pocket: "/images/products/cargo-utility-olive.jpg",
          bottom: "/images/products/cargo-utility-olive.jpg",
        },
      },
      {
        name: "Khaki Sand",
        hex: "#A89F81",
        inStock: true,
        images: {
          full: "/images/products/cargo-utility-olive.jpg",
          waist: "/images/products/cargo-utility-olive.jpg",
          pocket: "/images/products/cargo-utility-olive.jpg",
          bottom: "/images/products/cargo-utility-olive.jpg",
        },
      },
      {
        name: "Dark Charcoal",
        hex: "#334155",
        inStock: true,
        images: {
          full: "/images/products/cargo-utility-olive.jpg",
          waist: "/images/products/cargo-utility-olive.jpg",
          pocket: "/images/products/cargo-utility-olive.jpg",
          bottom: "/images/products/cargo-utility-olive.jpg",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Direct from Factory Floor)",
    packaging: "Individual poly pack, 10 pcs inner pack, 100 pcs carton",
    description:
      "A fast-growing trend item for youth fashion wholesalers. Built with 6 functional pockets: 2 front hand pockets, 2 bellows side cargo pockets with reinforced velcro flaps, and 2 rear flap pockets. Sturdy yet flexible stretch fabric for maximum comfort.",
    specifications: {
      fabricComposition: "65% Cotton, 32% Polyester, 3% Spandex Stretch Twill",
      waistband: "Heavy-duty elastic waistband with belt loops and drawstring",
      pockets: "6 total pockets (2 deep side, 2 thigh cargo with flaps, 2 back flap pockets)",
      stitching: "Triple-needle heavy chainstitch on outseams for rugged longevity",
      ankleFinish: "Encased elastic ankle cuffs with smooth stretch",
    },
    highlights: [
      "High street-wear appeal with authentic utility cargo aesthetics",
      "Bar-tack reinforced flaps ensure pockets do not tear under stress",
      "Strong demand across college and youth casual wear retail counters",
      "Available in classic tactical shades: Olive, Black, Khaki, and Dark Grey",
    ],
  },
  {
    id: "prod-005",
    name: "Contrast Double-Piping Sports Track Pants",
    slug: "contrast-double-piping-sports-track-pants",
    category: "Classic Athletic",
    fabric: "210 GSM Matte Finish Poly-Lycra Interlock",
    gsm: 210,
    fit: "Classic Straight-Leg / Subtle Taper Athletic Fit",
    image: "/images/products/piping-athletic-black.jpg",
    featured: false,
    colors: [
      {
        name: "Black with White Piping",
        hex: "#0F172A",
        inStock: true,
        images: {
          full: "/images/products/piping-athletic-black.jpg",
          waist: "/images/products/piping-athletic-black.jpg",
          pocket: "/images/products/piping-athletic-black.jpg",
          bottom: "/images/products/piping-athletic-black.jpg",
        },
      },
      {
        name: "Navy with Sky Blue Piping",
        hex: "#1E3A8A",
        inStock: true,
        images: {
          full: "/images/products/piping-athletic-black.jpg",
          waist: "/images/products/piping-athletic-black.jpg",
          pocket: "/images/products/piping-athletic-black.jpg",
          bottom: "/images/products/piping-athletic-black.jpg",
        },
      },
      {
        name: "Charcoal with Red Piping",
        hex: "#374151",
        inStock: true,
        images: {
          full: "/images/products/piping-athletic-black.jpg",
          waist: "/images/products/piping-athletic-black.jpg",
          pocket: "/images/products/piping-athletic-black.jpg",
          bottom: "/images/products/piping-athletic-black.jpg",
        },
      },
      {
        name: "Black with Neon Lime Piping",
        hex: "#18181B",
        inStock: true,
        images: {
          full: "/images/products/piping-athletic-black.jpg",
          waist: "/images/products/piping-athletic-black.jpg",
          pocket: "/images/products/piping-athletic-black.jpg",
          bottom: "/images/products/piping-athletic-black.jpg",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)", "3XL (38-40)"],
    moq: "100 Pieces (Standard Wholesale Assorted Carton)",
    packaging: "Transparent polybag, 12 pcs inner bundle, 120 pcs master carton",
    description:
      "The evergreen classic athletic track pant that sells consistently 12 months a year in every wholesale market across India. Features dual contrast cut-and-sew side piping ribbons with high color fastness and deep concealed zip pockets.",
    specifications: {
      fabricComposition: "92% Poly, 8% Elastane Double-Knit Interlock",
      waistband: "Dual-row topstitched elastic waistband with inner drawcord",
      pockets: "Two side zipped pockets with nylon pull tabs",
      stitching: "4-thread overlock with reinforced stress points",
      ankleFinish: "Open straight hem with inner hem tape (optional toggle cuff)",
    },
    highlights: [
      "Evergreen staple in wholesale markets across Maharashtra and Gujarat",
      "Cut-and-sew piping ribbons (not cheap surface printing) that never peel off",
      "Straight-leg comfort fit popular among both athletic and mature demographics",
      "Consistently in bulk production on our Sion stitching lines",
    ],
  },
  {
    id: "prod-006",
    name: "Brushed Thermal Fleece Winter Track Pants",
    slug: "brushed-thermal-fleece-winter-track-pants",
    category: "Winter Fleece",
    fabric: "280 GSM Heavyweight Brushed Anti-Pill Polar Fleece",
    gsm: 280,
    fit: "Comfort Warmth Regular Taper Fit",
    image: "/images/products/fleece-winter-charcoal.jpg",
    featured: false,
    colors: [
      {
        name: "Anthracite Charcoal Grey",
        hex: "#374151",
        inStock: true,
        images: {
          full: "/images/products/fleece-winter-charcoal.jpg",
          waist: "/images/products/fleece-winter-charcoal.jpg",
          pocket: "/images/products/fleece-winter-charcoal.jpg",
          bottom: "/images/products/fleece-winter-charcoal.jpg",
        },
      },
      {
        name: "Jet Black",
        hex: "#0F172A",
        inStock: true,
        images: {
          full: "/images/products/fleece-winter-charcoal.jpg",
          waist: "/images/products/fleece-winter-charcoal.jpg",
          pocket: "/images/products/fleece-winter-charcoal.jpg",
          bottom: "/images/products/fleece-winter-charcoal.jpg",
        },
      },
      {
        name: "Navy Blue",
        hex: "#1E293B",
        inStock: true,
        images: {
          full: "/images/products/fleece-winter-charcoal.jpg",
          waist: "/images/products/fleece-winter-charcoal.jpg",
          pocket: "/images/products/fleece-winter-charcoal.jpg",
          bottom: "/images/products/fleece-winter-charcoal.jpg",
        },
      },
      {
        name: "Wine / Maroon",
        hex: "#581C87",
        inStock: true,
        images: {
          full: "/images/products/fleece-winter-charcoal.jpg",
          waist: "/images/products/fleece-winter-charcoal.jpg",
          pocket: "/images/products/fleece-winter-charcoal.jpg",
          bottom: "/images/products/fleece-winter-charcoal.jpg",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Seasonal Bulk Orders)",
    packaging: "Individual zip-lock polybag, 10 pcs inner pack, 100 pcs bale",
    description:
      "Heavyweight winter warmth track pant designed for cold season wholesale buyers in North, Central, and Western India. Manufactured using 280 GSM dense thermal fleece with a velvety brushed interior that traps body heat without feeling bulky.",
    specifications: {
      fabricComposition: "100% Anti-Pilling Polyester Micro-Fleece (Dual Sided)",
      waistband: "Extra-wide 50mm elastic waistband with heavy round braided cord",
      pockets: "Extra-deep fleece-lined front hand-warmer pockets with bartacking",
      stitching: "Heavy-gauge reinforced 5-thread safety stitch",
      ankleFinish: "Snug-fitting ribbed cuffs that seal in warmth",
    },
    highlights: [
      "Dense 280 GSM thermal insulation with zero inner shedding",
      "Extremely popular winter seasonal order for wholesale distributors",
      "Anti-pill treatment guarantees clean smooth surface through heavy washing",
      "Advance booking available for pre-winter bulk dispatch schedules",
    ],
  },
];

export const productCategories = [
  "All Products",
  "4-Way Lycra",
  "Cotton Terry",
  "Dry-Fit Sports",
  "Cargo Utility",
  "Classic Athletic",
  "Winter Fleece",
] as const;
