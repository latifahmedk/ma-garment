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
    name: "4-Way Athletic Track Pants",
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
    name: "4 Way Military Track Pants",
    slug: "4-way-military",
    category: "4-Way Lycra",
    fabric: "220 GSM Imported 4-Way Stretch Camo NS Lycra",
    gsm: 220,
    fit: "Modern Slim-Tapered Athletic Fit",
    image: "/images/products/4way-military/military-green/4way-military-green-full.png",
    featured: true,
    colors: [
      {
        name: "Military Green",
        hex: "#3A4232",
        inStock: true,
        images: {
          full: "/images/products/4way-military/military-green/4way-military-green-full.png",
          waist: "/images/products/4way-military/military-green/4way-military-green-waist.png",
          pocket: "/images/products/4way-military/military-green/4way-military-green-pocket.png",
          bottom: "/images/products/4way-military/military-green/4way-military-green-bottom.png",
        },
      },
      {
        name: "Navy Blue",
        hex: "#232D3F",
        inStock: true,
        images: {
          full: "/images/products/4way-military/navy-blue/4way-military-navy-blue-full.png",
          waist: "/images/products/4way-military/navy-blue/4way-military-navy-blue-waist.png",
          pocket: "/images/products/4way-military/navy-blue/4way-military-navy-blue-pocket.png",
          bottom: "/images/products/4way-military/navy-blue/4way-military-navy-blue-bottom.png",
        },
      },
      {
        name: "Grey/Blue",
        hex: "#4E5D6C",
        inStock: true,
        images: {
          full: "/images/products/4way-military/grey-blue/4way-military-grey-blue-full.png",
          waist: "/images/products/4way-military/grey-blue/4way-military-grey-blue-waist.png",
          pocket: "/images/products/4way-military/grey-blue/4way-military-grey-blue-pocket.png",
          bottom: "/images/products/4way-military/grey-blue/4way-military-grey-blue-bottom.png",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Standard Wholesale Pack - Assorted Sizes)",
    packaging: "Individual transparent polybag, 12 pcs inner bundle, 120 pcs master corrugated carton",
    description:
      "High-demand tactical military camouflage track pants manufactured with premium 220 GSM 4-way stretch NS Lycra. Engineered with authentic military camo print, heavy-gauge elastic waistband with braided drawstring, deep D-type open scoop pockets with MA Garments branding, and reinforced twin-needle hems for superior athletic durability.",
    specifications: {
      fabricComposition: "88% Micro Polyester, 12% Spandex / 4-Way Stretch Camo Lycra",
      waistband: "45mm heavy-gauge knit elastic with internal flat braided drawstring & reinforced eyelets",
      pockets: "Dual side open D-type scoop pockets with precision MA Garments logo print",
      stitching: "4-thread overlock interlock with double-needle flatlock hems",
      ankleFinish: "Clean straight-cut ankle hem with double-needle topstitching",
    },
    highlights: [
      "Authentic military camouflage print in 3 high-moving colorways",
      "Full 360-degree 4-way elasticity that holds shape after wash",
      "Deep D-type open scoop pockets with precision MA Garments crest",
      "Factory-standard ratio: 1 M : 2 L : 2 XL : 1 2XL (or custom buyer ratio)",
    ],
  },
  {
    id: "prod-003",
    name: "Dyson Fabric Track Pants",
    slug: "dyson-fabric-track-pants",
    category: "4-Way Lycra",
    fabric: "220 GSM Imported Dyson Fine Dotted Lycra",
    gsm: 220,
    fit: "Modern Slim-Tapered Athletic Fit",
    image: "/images/products/dyson/light-grey/dyson-light-grey-full.png",
    featured: true,
    colors: [
      {
        name: "Light Grey",
        hex: "#98999D",
        inStock: true,
        images: {
          full: "/images/products/dyson/light-grey/dyson-light-grey-full.png",
          waist: "/images/products/dyson/light-grey/dyson-light-grey-waist.png",
          pocket: "/images/products/dyson/light-grey/dyson-light-grey-pocket.png",
          bottom: "/images/products/dyson/light-grey/dyson-light-grey-bottom.png",
        },
      },
      {
        name: "Royal Blue",
        hex: "#334269",
        inStock: true,
        images: {
          full: "/images/products/dyson/royal-blue/dyson-royal-blue-full.png",
          waist: "/images/products/dyson/royal-blue/dyson-royal-blue-waist.png",
          pocket: "/images/products/dyson/royal-blue/dyson-royal-blue-pocket.png",
          bottom: "/images/products/dyson/royal-blue/dyson-royal-blue-bottom.png",
        },
      },
      {
        name: "Olive Green",
        hex: "#333933",
        inStock: true,
        images: {
          full: "/images/products/dyson/olive-green/dyson-olive-green-full.png",
          waist: "/images/products/dyson/olive-green/dyson-olive-green-waist.png",
          pocket: "/images/products/dyson/olive-green/dyson-olive-green-pocket.png",
          bottom: "/images/products/dyson/olive-green/dyson-olive-green-bottom.png",
        },
      },
      {
        name: "Charcoal Grey",
        hex: "#5B636A",
        inStock: true,
        images: {
          full: "/images/products/dyson/charcoal-grey/dyson-charcoal-grey-full.png",
          waist: "/images/products/dyson/charcoal-grey/dyson-charcoal-grey-waist.png",
          pocket: "/images/products/dyson/charcoal-grey/dyson-charcoal-grey-pocket.png",
          bottom: "/images/products/dyson/charcoal-grey/dyson-charcoal-grey-bottom.png",
        },
      },
      {
        name: "Teal Blue",
        hex: "#566A74",
        inStock: true,
        images: {
          full: "/images/products/dyson/teal-blue/dyson-teal-blue-full.png",
          waist: "/images/products/dyson/teal-blue/dyson-teal-blue-waist.png",
          pocket: "/images/products/dyson/teal-blue/dyson-teal-blue-pocket.png",
          bottom: "/images/products/dyson/teal-blue/dyson-teal-blue-bottom.png",
        },
      },
      {
        name: "Navy Blue",
        hex: "#26364E",
        inStock: true,
        images: {
          full: "/images/products/dyson/navy-blue/dyson-navy-blue-full.png",
          waist: "/images/products/dyson/navy-blue/dyson-navy-blue-waist.png",
          pocket: "/images/products/dyson/navy-blue/dyson-navy-blue-pocket.png",
          bottom: "/images/products/dyson/navy-blue/dyson-navy-blue-bottom.png",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Standard Wholesale Pack - Assorted Sizes)",
    packaging: "Individual transparent polybag, 12 pcs inner bundle, 120 pcs master corrugated carton",
    description:
      "Engineered from specialized Dyson micro-textured fabric distinguished by its fine dotted weave that offers superior breathability and multidirectional stretch. Features reinforced D-type scoop pockets with an integrated horizontal zipper coin pocket, contrast red eyelet drawstring waistband, and durable double-needle straight hems.",
    specifications: {
      fabricComposition: "88% Micro Polyester, 12% Spandex / Micro-Dotted Dyson Lycra",
      waistband: "Heavy-duty knit elastic waistband with braided drawstring & contrast red eyelet",
      pockets: "Dual D-type scoop pockets with horizontal coin zipper compartment & SPORTS crest badge",
      stitching: "4-thread overlock interlock with double-needle reinforced flatlock seams",
      ankleFinish: "Clean straight-cut ankle hem with double-needle topstitching",
    },
    highlights: [
      "Distinctive Dyson micro-dotted textured fabric visible at all angles",
      "Full 360-degree 4-way elasticity that holds shape after wash",
      "Dual D-type scoop pockets with secondary zipper pocket & authentic badge",
      "Factory-standard ratio: 1 M : 2 L : 2 XL : 1 2XL (or custom buyer ratio)",
    ],
  },
  {
    id: "prod-004",
    name: "NS",
    slug: "ns",
    category: "4-Way Lycra",
    fabric: "200 GSM Imported NS Micro-Stretch Parachute Fabric",
    gsm: 200,
    fit: "Modern Slim-Tapered Athletic Cargo Jogger Fit",
    image: "/images/products/ns/navy-blue/ns-navy-blue-full.png",
    featured: true,
    colors: [
      {
        name: "Navy Blue",
        hex: "#21233A",
        inStock: true,
        images: {
          full: "/images/products/ns/navy-blue/ns-navy-blue-full.png",
          waist: "/images/products/ns/navy-blue/ns-navy-blue-waist.png",
          "side-pocket": "/images/products/ns/navy-blue/ns-navy-blue-side-pocket.png",
          bottom: "/images/products/ns/navy-blue/ns-navy-blue-bottom.png",
        },
      },
      {
        name: "Royal Blue",
        hex: "#1E3A8A",
        inStock: true,
        images: {
          full: "/images/products/ns/royal-blue/ns-royal-blue-full.png",
          waist: "/images/products/ns/royal-blue/ns-royal-blue-waist.png",
          "side-pocket": "/images/products/ns/royal-blue/ns-royal-blue-side-pocket.png",
          bottom: "/images/products/ns/royal-blue/ns-royal-blue-bottom.png",
        },
      },
      {
        name: "Black",
        hex: "#18181B",
        inStock: true,
        images: {
          full: "/images/products/ns/black/ns-black-full.png",
          waist: "/images/products/ns/black/ns-black-waist.png",
          "side-pocket": "/images/products/ns/black/ns-black-side-pocket.png",
          bottom: "/images/products/ns/black/ns-black-bottom.png",
        },
      },
      {
        name: "Dark Teal",
        hex: "#264653",
        inStock: true,
        images: {
          full: "/images/products/ns/dark-teal/ns-dark-teal-full.png",
          waist: "/images/products/ns/dark-teal/ns-dark-teal-waist.png",
          "side-pocket": "/images/products/ns/dark-teal/ns-dark-teal-side-pocket.png",
          bottom: "/images/products/ns/dark-teal/ns-dark-teal-bottom.png",
        },
      },
      {
        name: "Light Grey",
        hex: "#D1D5DB",
        inStock: true,
        images: {
          full: "/images/products/ns/light-grey/ns-light-grey-full.png",
          waist: "/images/products/ns/light-grey/ns-light-grey-waist.png",
          "side-pocket": "/images/products/ns/light-grey/ns-light-grey-side-pocket.png",
          bottom: "/images/products/ns/light-grey/ns-light-grey-bottom.png",
        },
      },
      {
        name: "Maroon",
        hex: "#4A1521",
        inStock: true,
        images: {
          full: "/images/products/ns/maroon/ns-maroon-full.png",
          waist: "/images/products/ns/maroon/ns-maroon-waist.png",
          "side-pocket": "/images/products/ns/maroon/ns-maroon-side-pocket.png",
          bottom: "/images/products/ns/maroon/ns-maroon-bottom.png",
        },
      },
    ],
    sizes: ["M (30-32)", "L (32-34)", "XL (34-36)", "2XL (36-38)"],
    moq: "100 Pieces (Standard Wholesale Pack - Assorted Sizes)",
    packaging: "Individual transparent polybag, 12 pcs inner bundle, 120 pcs master corrugated carton",
    description:
      "Engineered from ultra-lightweight high-density NS micro-stretch parachute fabric offering crisp texture, wind resistance, and athletic flexibility. Tailored with a ruched gathered waistband with white contrast drawstring, dual slash welt pockets reinforced with white bar-tack stitches, authentic red XL seam tab, signature SPORTS 26 crest badge, mid-thigh cargo flap pocket, and ruched elastic cuffed jogger hems.",
    specifications: {
      fabricComposition: "90% Nylon, 10% Spandex / Technical NS Micro-Stretch Parachute Fabric",
      waistband: "Ruched gathered elastic waistband with inner flat braided white drawstring",
      pockets: "Dual side slash welt pockets with white bar-tack reinforcement + mid-thigh cargo flap pocket with SPORTS 26 crest badge",
      stitching: "Heavy-duty 4-thread overlock interlock with reinforced stress-point bar-tacks",
      ankleFinish: "Ruched gathered elastic cuffed jogger hem",
    },
    highlights: [
      "Technical NS micro-stretch parachute fabric offering crisp texture and lightweight mobility",
      "Ruched gathered waistband with white contrast drawcord and cuffed jogger hems",
      "Dual slash welt pockets + mid-thigh flap pocket with signature SPORTS 26 badge",
      "Factory-standard ratio: 1 M : 2 L : 2 XL : 1 2XL (or custom buyer ratio)",
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
