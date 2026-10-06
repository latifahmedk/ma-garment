import { Product, ProductColor } from "@/types";

export interface ValidationResult {
  valid: boolean;
  errors: string[];
}

export interface ValidateOptions {
  strictSidePocket?: boolean;
}

/**
 * Validates a single product and its color image data.
 * Ensures:
 * - Valid product name
 * - At least one color
 * - Every color has a valid name
 * - No duplicate colors within the product
 * - Every color has exactly 4 required images (full, waist, side-pocket, bottom)
 * - Every image path/reference is valid and non-empty
 * - No duplicate image references within a color
 * - Product data follows expected structure
 */
export function validateProduct(
  product: Product,
  options: ValidateOptions = {}
): ValidationResult {
  const errors: string[] = [];

  // 1. Product name validation
  if (!product || typeof product.name !== "string" || product.name.trim().length === 0) {
    errors.push(`Product is missing a valid product name.`);
    return { valid: false, errors };
  }

  const productName = product.name.trim();
  const isNs =
    productName.toLowerCase() === "ns" ||
    productName.toLowerCase() === "ns fabric" ||
    productName.toLowerCase() === "ns-fabric" ||
    productName.toLowerCase().startsWith("ns") ||
    options.strictSidePocket;

  // 2. Category, fabric, fit checks
  if (!product.category || typeof product.category !== "string") {
    errors.push(`Product "${productName}" is missing a valid category.`);
  }

  // 3. Colors array validation
  if (!Array.isArray(product.colors) || product.colors.length === 0) {
    errors.push(`Product "${productName}" must have at least one color.`);
    return { valid: false, errors };
  }

  // 4. Duplicate color check
  const seenColors = new Set<string>();
  product.colors.forEach((color, idx) => {
    if (!color || typeof color.name !== "string" || color.name.trim().length === 0) {
      errors.push(`Product "${productName}" color at index ${idx} is missing a valid color name.`);
      return;
    }

    const normalizedColor = color.name.trim().toLowerCase();
    if (seenColors.has(normalizedColor)) {
      errors.push(`Product "${productName}" has duplicate color: "${color.name}".`);
    } else {
      seenColors.add(normalizedColor);
    }

    // 5. Image structure validation for this color
    validateColorImages(productName, color, Boolean(isNs), errors);
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Helper to validate images for an individual color
 */
function validateColorImages(
  productName: string,
  color: ProductColor,
  isNs: boolean,
  errors: string[]
): void {
  const colorName = color.name || "Unknown Color";
  const images = color.images;

  if (!images || typeof images !== "object") {
    errors.push(`Product "${productName}" [${colorName}]: Missing images object.`);
    return;
  }

  // Check required image fields
  // For NS specifically, required fields are: full, waist, side-pocket, bottom.
  // For other products, pocket can be "side-pocket" or "pocket".
  const hasFull = typeof images.full === "string" && images.full.trim().length > 0;
  const hasWaist = typeof images.waist === "string" && images.waist.trim().length > 0;
  const hasBottom = typeof images.bottom === "string" && images.bottom.trim().length > 0;

  if (!hasFull) {
    errors.push(`Product "${productName}" [${colorName}]: Missing Full image.`);
  }

  if (!hasWaist) {
    errors.push(`Product "${productName}" [${colorName}]: Missing Waist image.`);
  }

  if (isNs) {
    const hasSidePocket =
      typeof images["side-pocket"] === "string" && images["side-pocket"].trim().length > 0;
    if (!hasSidePocket) {
      errors.push(`Product "${productName}" [${colorName}]: Missing Side Pocket image.`);
    }
  } else {
    const hasPocket =
      (typeof images["side-pocket"] === "string" && images["side-pocket"].trim().length > 0) ||
      (typeof images.pocket === "string" && images.pocket.trim().length > 0);
    if (!hasPocket) {
      errors.push(`Product "${productName}" [${colorName}]: Missing Pocket / Side Pocket image.`);
    }
  }

  if (!hasBottom) {
    errors.push(`Product "${productName}" [${colorName}]: Missing Bottom image.`);
  }

  // Count active defined image keys
  const validKeys = Object.keys(images).filter(
    (k) => typeof images[k] === "string" && (images[k] as string).trim().length > 0
  );

  if (validKeys.length !== 4) {
    errors.push(
      `Product "${productName}" [${colorName}]: Incorrect number of images. Expected exactly 4 images, received ${validKeys.length}.`
    );
  }

  // Check for duplicate image references within this color
  const seenPaths = new Set<string>();
  validKeys.forEach((key) => {
    const path = images[key]?.trim();
    if (path) {
      if (seenPaths.has(path)) {
        errors.push(
          `Product "${productName}" [${colorName}]: Duplicate image reference detected: "${path}".`
        );
      } else {
        seenPaths.add(path);
      }
    }
  });
}

/**
 * Validates all products in a list and returns overall results.
 */
export function validateAllProducts(products: Product[]): {
  valid: boolean;
  errors: string[];
  productCount: number;
} {
  const allErrors: string[] = [];

  if (!Array.isArray(products) || products.length === 0) {
    return {
      valid: false,
      errors: ["Product list is empty or invalid."],
      productCount: 0,
    };
  }

  products.forEach((prod) => {
    const result = validateProduct(prod);
    if (!result.valid) {
      allErrors.push(...result.errors);
    }
  });

  return {
    valid: allErrors.length === 0,
    errors: allErrors,
    productCount: products.length,
  };
}

/**
 * Asserts that a product is valid. Throws an Error if validation fails.
 */
export function assertValidProduct(product: Product, options?: ValidateOptions): void {
  const result = validateProduct(product, options);
  if (!result.valid) {
    throw new Error(`Product Validation Failed:\n${result.errors.join("\n")}`);
  }
}

/**
 * Normalizes and extracts standard manufacturing sizes (M, L, XL).
 */
export function getStandardSizes(sizes?: string[]): string[] {
  if (!Array.isArray(sizes)) return ["M", "L", "XL"];
  const standard = ["M", "L", "XL"];
  const filtered = sizes
    .map((s) => s.split(" ")[0].trim())
    .filter((s) => standard.includes(s.toUpperCase()));
  return filtered.length > 0 ? filtered : standard;
}
