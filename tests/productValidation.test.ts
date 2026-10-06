import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { products } from "../src/data/products.js";
import {
  validateProduct,
  validateAllProducts,
  assertValidProduct,
} from "../src/utils/productValidation.js";
import { Product } from "../src/types/index.js";

describe("Validation Tests - Product & Image Validation Rules", () => {
  const nsProduct = products.find((p) => p.name === "NS")!;

  it("Valid NS data passes validation", () => {
    const result = validateProduct(nsProduct);
    assert.strictEqual(result.valid, true, `NS should pass validation: ${result.errors.join(", ")}`);
    assert.strictEqual(result.errors.length, 0);

    // assertValidProduct should not throw
    assert.doesNotThrow(() => assertValidProduct(nsProduct));
  });

  it("Missing Full image fails validation", () => {
    // Clone NS and delete full image from first color
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.colors[0].images.full = "";

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Missing Full image")),
      `Expected 'Missing Full image' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Missing Waist image fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.colors[0].images.waist = "";

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Missing Waist image")),
      `Expected 'Missing Waist image' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Missing Side Pocket image fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    delete invalidNs.colors[0].images["side-pocket"];

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Missing Side Pocket image")),
      `Expected 'Missing Side Pocket image' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Missing Bottom image fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.colors[0].images.bottom = "";

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Missing Bottom image")),
      `Expected 'Missing Bottom image' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Duplicate color fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    // Duplicate the first color
    invalidNs.colors.push({ ...invalidNs.colors[0] });

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("duplicate color")),
      `Expected duplicate color error, got: ${result.errors.join("; ")}`
    );
  });

  it("Duplicate image reference fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    // Assign waist path to full path
    invalidNs.colors[0].images.waist = invalidNs.colors[0].images.full;

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Duplicate image reference detected")),
      `Expected duplicate image error, got: ${result.errors.join("; ")}`
    );
  });

  it("Incorrect number of images fails validation (e.g. 3 images)", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    delete (invalidNs.colors[0].images as Record<string, unknown>).bottom;

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Incorrect number of images")),
      `Expected 'Incorrect number of images' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Incorrect number of images fails validation (e.g. 5 images)", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.colors[0].images["extra-angle"] = "/images/products/ns/extra.png";

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Incorrect number of images")),
      `Expected 'Incorrect number of images' error, got: ${result.errors.join("; ")}`
    );
  });

  it("Empty or missing product name fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.name = "";

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(result.errors.some((e) => e.includes("missing a valid product name")));
  });

  it("Zero colors fails validation", () => {
    const invalidNs: Product = JSON.parse(JSON.stringify(nsProduct));
    invalidNs.colors = [];

    const result = validateProduct(invalidNs);
    assert.strictEqual(result.valid, false);
    assert.ok(result.errors.some((e) => e.includes("must have at least one color")));
  });

  it("Valid Code Common data passes validation", () => {
    const codeCommonProduct = products.find((p) => p.name === "Code Common")!;
    assert.ok(codeCommonProduct, "Code Common must exist");
    const result = validateProduct(codeCommonProduct);
    assert.strictEqual(
      result.valid,
      true,
      `Code Common should pass validation: ${result.errors.join(", ")}`
    );
    assert.strictEqual(result.errors.length, 0);
    assert.doesNotThrow(() => assertValidProduct(codeCommonProduct));
  });

  it("Code Common missing Pocket image fails validation", () => {
    const codeCommonProduct = products.find((p) => p.name === "Code Common")!;
    const invalidCode: Product = JSON.parse(JSON.stringify(codeCommonProduct));
    delete (invalidCode.colors[0].images as Record<string, unknown>).pocket;

    const result = validateProduct(invalidCode);
    assert.strictEqual(result.valid, false);
    assert.ok(
      result.errors.some((e) => e.includes("Missing Pocket")),
      `Expected 'Missing Pocket' error, got: ${result.errors.join("; ")}`
    );
  });

  it("All 5 products in catalogue pass validation", () => {
    assert.strictEqual(products.length, 5, "Catalog must contain exactly 5 products");

    const overallResult = validateAllProducts(products);
    assert.strictEqual(
      overallResult.valid,
      true,
      `All 5 products must pass validation: ${overallResult.errors.join("; ")}`
    );
    assert.strictEqual(overallResult.productCount, 5);
  });
});
