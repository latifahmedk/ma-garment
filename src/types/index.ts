export interface ProductColorImages {
  full: string; // 1. Full Pant Image
  waist: string; // 2. Waist Detail Image
  pocket: string; // 3. Pocket + Logo Detail Image
  bottom: string; // 4. Bottom Detail Image
}

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
  images: ProductColorImages;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "4-Way Lycra" | "Cotton Terry" | "Dry-Fit Sports" | "Winter Fleece" | "Cargo Utility" | "Classic Athletic";
  fabric: string;
  gsm: number;
  fit: string;
  colors: ProductColor[];
  sizes: string[];
  moq: string;
  packaging: string;
  description: string;
  specifications: {
    waistband: string;
    pockets: string;
    drawstring?: string;
    stitching: string;
    ankleFinish: string;
    fabricComposition: string;
  };
  highlights: string[];
  image: string;
  featured: boolean;
}

export interface WholesaleEnquiry {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  customerType: "Wholesale Trader" | "Retail Shop / MBO" | "Bulk Distributor" | "Corporate / Sports Team" | "Online Seller / Reseller";
  productInterest: string;
  quantity: "100 - 250 Pcs (Trial Order)" | "250 - 500 Pcs" | "500 - 1,000 Pcs" | "1,000+ Pcs (Full Carton / Monthly)";
  cityState: string;
  message: string;
}
