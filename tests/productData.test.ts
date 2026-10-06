import { describe, it } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { products, productCategories } from "../src/data/products.js";

describe("Product Data Tests - NS Product", () => {
  const nsProduct = products.find(
    (p) => p.name === "NS Fabric" || p.name === "NS" || p.slug === "ns-fabric" || p.slug === "ns"
  );

  it("NS Fabric product exists in products list", () => {
    assert.ok(nsProduct, "NS Fabric product should exist in products array");
    assert.strictEqual(nsProduct.name, "NS Fabric");
    assert.strictEqual(nsProduct.id, "prod-004");
  });

  it("NS has the correct number of colors (exactly 6 colors)", () => {
    assert.ok(nsProduct);
    assert.strictEqual(nsProduct.colors.length, 6, "NS must have exactly 6 colors from reference");

    const expectedColors = [
      "Navy Blue",
      "Maroon",
      "Royal Blue",
      "Black",
      "Dark Teal",
      "Light Grey",
    ];

    const actualColors = nsProduct.colors.map((c) => c.name);
    assert.deepStrictEqual(actualColors, expectedColors);
  });

  it("Every NS color has exactly 4 images", () => {
    assert.ok(nsProduct);
    for (const color of nsProduct.colors) {
      const keys = Object.keys(color.images);
      assert.strictEqual(
        keys.length,
        4,
        `Color "${color.name}" must have exactly 4 image keys, found ${keys.length}`
      );
    }
  });

  it("Every NS color contains: full, waist, side-pocket, and bottom", () => {
    assert.ok(nsProduct);
    for (const color of nsProduct.colors) {
      assert.ok(color.images.full, `Color "${color.name}" must have full image`);
      assert.ok(color.images.waist, `Color "${color.name}" must have waist image`);
      assert.ok(color.images["side-pocket"], `Color "${color.name}" must have side-pocket image`);
      assert.ok(color.images.bottom, `Color "${color.name}" must have bottom image`);

      // Verify strings are non-empty
      assert.ok(color.images.full.trim().length > 0);
      assert.ok(color.images.waist.trim().length > 0);
      assert.ok(color.images["side-pocket"].trim().length > 0);
      assert.ok(color.images.bottom.trim().length > 0);
    }
  });

  it("No duplicate colors in NS", () => {
    assert.ok(nsProduct);
    const colorNames = nsProduct.colors.map((c) => c.name.toLowerCase());
    const uniqueColors = new Set(colorNames);
    assert.strictEqual(uniqueColors.size, colorNames.length, "Colors must be unique");
  });

  it("No duplicate image references within any NS color", () => {
    assert.ok(nsProduct);
    for (const color of nsProduct.colors) {
      const paths = [
        color.images.full,
        color.images.waist,
        color.images["side-pocket"],
        color.images.bottom,
      ];
      const uniquePaths = new Set(paths);
      assert.strictEqual(
        uniquePaths.size,
        4,
        `All 4 images for color "${color.name}" must have unique paths`
      );
    }
  });

  it("All NS image files physically exist on disk in public directory", () => {
    assert.ok(nsProduct);
    const publicDir = path.resolve(process.cwd(), "public");

    for (const color of nsProduct.colors) {
      for (const [view, imgPath] of Object.entries(color.images)) {
        if (!imgPath) continue;
        const fullDiskPath = path.join(publicDir, imgPath.replace(/^\//, ""));
        assert.ok(
          fs.existsSync(fullDiskPath),
          `Image file does not exist on disk: ${fullDiskPath} (${color.name} - ${view})`
        );
      }
    }
  });
});

describe("Product Data Tests - Code Common Product", () => {
  const codeCommonProduct = products.find(
    (p) => p.name === "Code Common" || p.slug === "code-common"
  );

  it("Code Common product exists in products list", () => {
    assert.ok(codeCommonProduct, "Code Common product should exist in products array");
    assert.strictEqual(codeCommonProduct.name, "Code Common");
    assert.strictEqual(codeCommonProduct.id, "prod-005");
  });

  it("Code Common has the correct number of provided colors (exactly 6 colors)", () => {
    assert.ok(codeCommonProduct);
    assert.strictEqual(
      codeCommonProduct.colors.length,
      6,
      "Code Common must have exactly 6 colors from reference"
    );

    const expectedColors = [
      "Olive Green",
      "Black",
      "Teal Blue",
      "Royal Blue",
      "Charcoal Grey",
      "Navy Blue",
    ];

    const actualColors = codeCommonProduct.colors.map((c) => c.name);
    assert.deepStrictEqual(actualColors, expectedColors);
  });

  it("Every Code Common color has exactly 4 images", () => {
    assert.ok(codeCommonProduct);
    for (const color of codeCommonProduct.colors) {
      const keys = Object.keys(color.images);
      assert.strictEqual(
        keys.length,
        4,
        `Color "${color.name}" must have exactly 4 image keys, found ${keys.length}`
      );
    }
  });

  it("Every Code Common color contains: full, waist, pocket, and bottom", () => {
    assert.ok(codeCommonProduct);
    for (const color of codeCommonProduct.colors) {
      assert.ok(color.images.full, `Color "${color.name}" must have full image`);
      assert.ok(color.images.waist, `Color "${color.name}" must have waist image`);
      assert.ok(color.images.pocket, `Color "${color.name}" must have pocket image`);
      assert.ok(color.images.bottom, `Color "${color.name}" must have bottom image`);

      // Verify strings are non-empty
      assert.ok(color.images.full.trim().length > 0);
      assert.ok(color.images.waist.trim().length > 0);
      assert.ok(color.images.pocket.trim().length > 0);
      assert.ok(color.images.bottom.trim().length > 0);
    }
  });

  it("No duplicate colors in Code Common", () => {
    assert.ok(codeCommonProduct);
    const colorNames = codeCommonProduct.colors.map((c) => c.name.toLowerCase());
    const uniqueColors = new Set(colorNames);
    assert.strictEqual(uniqueColors.size, colorNames.length, "Colors must be unique");
  });

  it("No duplicate image references within any Code Common color", () => {
    assert.ok(codeCommonProduct);
    for (const color of codeCommonProduct.colors) {
      const paths = [
        color.images.full,
        color.images.waist,
        color.images.pocket,
        color.images.bottom,
      ];
      const uniquePaths = new Set(paths);
      assert.strictEqual(
        uniquePaths.size,
        4,
        `All 4 images for color "${color.name}" must have unique paths`
      );
    }
  });

  it("All Code Common image files physically exist on disk in public directory", () => {
    assert.ok(codeCommonProduct);
    const publicDir = path.resolve(process.cwd(), "public");

    for (const color of codeCommonProduct.colors) {
      for (const [view, imgPath] of Object.entries(color.images)) {
        if (!imgPath) continue;
        const fullDiskPath = path.join(publicDir, imgPath.replace(/^\//, ""));
        assert.ok(
          fs.existsSync(fullDiskPath),
          `Image file does not exist on disk: ${fullDiskPath} (${color.name} - ${view})`
        );
      }
    }
  });
});

describe("All Products Catalog Consistency Tests (1 to 5)", () => {
  it("Exactly 5 products exist in the catalog", () => {
    assert.strictEqual(products.length, 5, "Catalog must contain exactly 5 products");
  });

  it("All 5 products load with valid names and categories", () => {
    const expectedNames = [
      "4-Way Athletic Track Pants",
      "4 Way Military Track Pants",
      "Dyson Fabric Track Pants",
      "NS Fabric",
      "Code Common",
    ];

    const expectedCategories = [
      "4-Way Lycra",
      "4-Way Military",
      "Dyson Fabric",
      "NS Fabric",
      "Code Common",
    ];

    products.forEach((prod, idx) => {
      assert.strictEqual(prod.name, expectedNames[idx]);
      assert.strictEqual(prod.category, expectedCategories[idx]);
      assert.ok(prod.colors.length > 0);
      assert.ok(prod.fabric);
      assert.ok(prod.fit);
      assert.ok(prod.moq);
      assert.ok(prod.specifications);
    });
  });

  it("productCategories contains All Products and matches the 5 product categories", () => {
    const expectedCategoriesList = [
      "All Products",
      "4-Way Lycra",
      "4-Way Military",
      "Dyson Fabric",
      "NS Fabric",
      "Code Common",
    ];
    assert.deepStrictEqual(Array.from(productCategories), expectedCategoriesList);
  });

  it("Existing Products 1–4 maintain their data integrity and images", () => {
    const prod1 = products[0];
    const prod2 = products[1];
    const prod3 = products[2];
    const prod4 = products[3];

    assert.strictEqual(prod1.colors.length, 6, "Product 1 must have 6 colors");
    assert.strictEqual(prod2.colors.length, 3, "Product 2 must have 3 colors");
    assert.strictEqual(prod3.colors.length, 6, "Product 3 must have 6 colors");
    assert.strictEqual(prod4.colors.length, 6, "Product 4 must have 6 colors");

    // All images for products 1-4 exist on disk
    const publicDir = path.resolve(process.cwd(), "public");
    for (const prod of [prod1, prod2, prod3, prod4]) {
      for (const color of prod.colors) {
        for (const [view, imgPath] of Object.entries(color.images)) {
          if (!imgPath) continue;
          const fullDiskPath = path.join(publicDir, imgPath.replace(/^\//, ""));
          assert.ok(
            fs.existsSync(fullDiskPath),
            `Image for ${prod.name} ${color.name} ${view} missing: ${fullDiskPath}`
          );
        }
      }
    }
  });

  it("Every specific category correctly filters to its manufactured product", () => {
    const specificCategories = productCategories.filter((c) => c !== "All Products");
    for (const cat of specificCategories) {
      const matched = products.filter((p) => p.category === cat);
      assert.strictEqual(matched.length >= 1, true, `Category "${cat}" must have at least one product`);
    }
  });

  it("All catalogue images collected for preloading physically exist on disk", () => {
    const publicDir = path.resolve(process.cwd(), "public");
    const allImages: string[] = [];

    products.forEach((prod) => {
      if (prod.image) allImages.push(prod.image);
      prod.colors.forEach((col) => {
        Object.values(col.images || {}).forEach((src) => {
          if (src) allImages.push(src);
        });
      });
    });

    assert.ok(allImages.length > 0, "Catalogue must contain images to preload");

    for (const imgPath of allImages) {
      const fullDiskPath = path.join(publicDir, imgPath.replace(/^\//, ""));
      assert.ok(
        fs.existsSync(fullDiskPath),
        `Preload image missing from disk: ${fullDiskPath}`
      );
    }
  });
});
