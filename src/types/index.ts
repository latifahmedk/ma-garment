export interface ProductColorImages {
  full: string; // 1. Full Pant Image
  waist: string; // 2. Waist Detail Image
  pocket?: string; // 3. Pocket + Logo Detail Image
  "side-pocket"?: string; // 3. Side Pocket Detail Image (for NS)
  bottom: string; // 4. Bottom Detail Image
  [key: string]: string | undefined;
}

export interface ProductColor {
  name: string;
  hex: string;
  inStock?: boolean;
  images: ProductColorImages;
}

export type ProductCategory =
  | "4-Way Lycra"
  | "4-Way Military"
  | "Dyson Fabric"
  | "NS Fabric"
  | "NS"
  | "Code Common";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
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
  customerType?: string;
  productInterest: string;
  quantity?: string;
  cityState: string;
  message: string;
}
