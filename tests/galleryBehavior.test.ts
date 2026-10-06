import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { products } from "../src/data/products.js";
import { Product, ProductColor } from "../src/types/index.js";

/**
 * Simulates gallery state machine logic as implemented in ProductImageGallery.tsx
 */
class GalleryModel {
  private product: Product;
  public selectedColorIndex: number;
  public activeImageIndex: number;

  constructor(product: Product, initialColorIndex = 0) {
    this.product = product;
    this.selectedColorIndex = initialColorIndex;
    this.activeImageIndex = 0; // Initial active image is 0 (Full)
  }

  get currentColor(): ProductColor {
    return this.product.colors[this.selectedColorIndex] || this.product.colors[0];
  }

  get colorImagesList() {
    const curr = this.currentColor;
    return [
      { key: "full", label: "Full Pant View", src: curr.images.full || this.product.image },
      { key: "waist", label: "Waist Detail", src: curr.images.waist || this.product.image },
      {
        key: "side-pocket",
        label: "Side Pocket Detail",
        src: curr.images["side-pocket"] || curr.images.pocket || this.product.image,
      },
      { key: "bottom", label: "Bottom Detail", src: curr.images.bottom || this.product.image },
    ];
  }

  get currentActiveImage() {
    return this.colorImagesList[this.activeImageIndex];
  }

  selectColor(index: number) {
    if (index >= 0 && index < this.product.colors.length) {
      this.selectedColorIndex = index;
      // Per gallery specification: Changing color resets active image to 0 (Full Pant)
      this.activeImageIndex = 0;
    }
  }

  selectImage(index: number) {
    if (index >= 0 && index < this.colorImagesList.length) {
      this.activeImageIndex = index;
    }
  }

  nextImage() {
    this.activeImageIndex = (this.activeImageIndex + 1) % this.colorImagesList.length;
  }

  prevImage() {
    this.activeImageIndex =
      (this.activeImageIndex - 1 + this.colorImagesList.length) % this.colorImagesList.length;
  }
}

describe("Gallery Behavior Tests - NS Product", () => {
  const nsProduct = products.find(
    (p) => p.name === "NS Fabric" || p.name === "NS" || p.slug === "ns-fabric" || p.slug === "ns"
  )!;

  it("NS loads correctly with initial color", () => {
    const gallery = new GalleryModel(nsProduct, 0);
    assert.strictEqual(gallery.currentColor.name, "Maroon");
    assert.strictEqual(gallery.colorImagesList.length, 4);
  });

  it("First selected image is Full", () => {
    const gallery = new GalleryModel(nsProduct, 0);
    assert.strictEqual(gallery.activeImageIndex, 0);
    assert.strictEqual(gallery.currentActiveImage.key, "full");
    assert.ok(gallery.currentActiveImage.src.includes("ns-maroon-full.png"));
  });

  it("Selecting a color changes the gallery images to that color's images", () => {
    const gallery = new GalleryModel(nsProduct, 0);

    // Initial is Maroon
    assert.ok(gallery.currentActiveImage.src.includes("maroon"));

    // Select color index 2: Black
    gallery.selectColor(2);
    assert.strictEqual(gallery.currentColor.name, "Black");

    const images = gallery.colorImagesList.map((img) => img.src);
    assert.ok(images[0].includes("ns-black-full.png"));
    assert.ok(images[1].includes("ns-black-waist.png"));
    assert.ok(images[2].includes("ns-black-side-pocket.png"));
    assert.ok(images[3].includes("ns-black-bottom.png"));
  });

  it("Changing color resets the active image to Full", () => {
    const gallery = new GalleryModel(nsProduct, 0);

    // Navigate to bottom view (index 3)
    gallery.selectImage(3);
    assert.strictEqual(gallery.activeImageIndex, 3);
    assert.strictEqual(gallery.currentActiveImage.key, "bottom");

    // Change color to Navy Blue (index 5)
    gallery.selectColor(5);
    assert.strictEqual(gallery.currentColor.name, "Navy Blue");

    // Must be reset to index 0 (Full)
    assert.strictEqual(gallery.activeImageIndex, 0, "Color change must reset active image to Full");
    assert.strictEqual(gallery.currentActiveImage.key, "full");
    assert.ok(gallery.currentActiveImage.src.includes("ns-navy-blue-full.png"));
  });

  it("Correct 4 images are displayed for the selected color", () => {
    const gallery = new GalleryModel(nsProduct);

    nsProduct.colors.forEach((color, colorIdx) => {
      gallery.selectColor(colorIdx);
      const list = gallery.colorImagesList;

      assert.strictEqual(list.length, 4);
      assert.strictEqual(list[0].key, "full");
      assert.strictEqual(list[1].key, "waist");
      assert.strictEqual(list[2].key, "side-pocket");
      assert.strictEqual(list[3].key, "bottom");

      assert.strictEqual(list[0].src, color.images.full);
      assert.strictEqual(list[1].src, color.images.waist);
      assert.strictEqual(list[2].src, color.images["side-pocket"]);
      assert.strictEqual(list[3].src, color.images.bottom);
    });
  });

  it("Images from another color are not displayed", () => {
    const gallery = new GalleryModel(nsProduct);

    nsProduct.colors.forEach((color, colorIdx) => {
      gallery.selectColor(colorIdx);
      const currentListSrcs = new Set(gallery.colorImagesList.map((i) => i.src));

      // Compare with all other colors
      nsProduct.colors.forEach((otherColor, otherIdx) => {
        if (colorIdx === otherIdx) return;

        const otherSrcs = [
          otherColor.images.full,
          otherColor.images.waist,
          otherColor.images["side-pocket"],
          otherColor.images.bottom,
        ];

        for (const otherSrc of otherSrcs) {
          if (!otherSrc) continue;
          assert.ok(
            !currentListSrcs.has(otherSrc),
            `Color ${color.name} gallery must NOT contain images from ${otherColor.name}: ${otherSrc}`
          );
        }
      });
    });
  });

  it("Next and Previous thumbnail navigation work correctly", () => {
    const gallery = new GalleryModel(nsProduct, 0);

    // Initial = 0 (full)
    assert.strictEqual(gallery.activeImageIndex, 0);

    // Next -> 1 (waist)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 1);

    // Next -> 2 (side-pocket)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 2);

    // Next -> 3 (bottom)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 3);

    // Next wraps to 0 (full)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 0);

    // Prev wraps to 3 (bottom)
    gallery.prevImage();
    assert.strictEqual(gallery.activeImageIndex, 3);
  });
});

describe("Gallery Behavior Tests - Code Common Product", () => {
  const codeCommonProduct = products.find((p) => p.name === "Code Common")!;

  it("Code Common loads correctly with initial color (Olive Green)", () => {
    const gallery = new GalleryModel(codeCommonProduct, 0);
    assert.strictEqual(gallery.currentColor.name, "Olive Green");
    assert.strictEqual(gallery.colorImagesList.length, 4);
  });

  it("First selected image is Full", () => {
    const gallery = new GalleryModel(codeCommonProduct, 0);
    assert.strictEqual(gallery.activeImageIndex, 0);
    assert.strictEqual(gallery.currentActiveImage.key, "full");
    assert.ok(gallery.currentActiveImage.src.includes("code-common-olive-green-full.png"));
  });

  it("Selecting a color changes the gallery images to that color's images", () => {
    const gallery = new GalleryModel(codeCommonProduct, 0);

    // Initial is Olive Green
    assert.ok(gallery.currentActiveImage.src.includes("olive-green"));

    // Select color index 1: Black
    gallery.selectColor(1);
    assert.strictEqual(gallery.currentColor.name, "Black");

    const images = gallery.colorImagesList.map((img) => img.src);
    assert.ok(images[0].includes("code-common-black-full.png"));
    assert.ok(images[1].includes("code-common-black-waist.png"));
    assert.ok(images[2].includes("code-common-black-pocket.png"));
    assert.ok(images[3].includes("code-common-black-bottom.png"));
  });

  it("Changing color resets the active image to Full", () => {
    const gallery = new GalleryModel(codeCommonProduct, 0);

    // Navigate to bottom view (index 3)
    gallery.selectImage(3);
    assert.strictEqual(gallery.activeImageIndex, 3);
    assert.strictEqual(gallery.currentActiveImage.key, "bottom");

    // Change color to Royal Blue (index 3)
    gallery.selectColor(3);
    assert.strictEqual(gallery.currentColor.name, "Royal Blue");

    // Must be reset to index 0 (Full)
    assert.strictEqual(gallery.activeImageIndex, 0, "Color change must reset active image to Full");
    assert.strictEqual(gallery.currentActiveImage.key, "full");
    assert.ok(gallery.currentActiveImage.src.includes("code-common-royal-blue-full.png"));
  });

  it("Correct 4 images are displayed for the selected color", () => {
    const gallery = new GalleryModel(codeCommonProduct);

    codeCommonProduct.colors.forEach((color, colorIdx) => {
      gallery.selectColor(colorIdx);
      const list = gallery.colorImagesList;

      assert.strictEqual(list.length, 4);
      assert.strictEqual(list[0].key, "full");
      assert.strictEqual(list[1].key, "waist");
      assert.strictEqual(list[2].key, "side-pocket");
      assert.strictEqual(list[3].key, "bottom");

      assert.strictEqual(list[0].src, color.images.full);
      assert.strictEqual(list[1].src, color.images.waist);
      assert.strictEqual(list[2].src, color.images.pocket);
      assert.strictEqual(list[3].src, color.images.bottom);
    });
  });

  it("Images from another color are not displayed", () => {
    const gallery = new GalleryModel(codeCommonProduct);

    codeCommonProduct.colors.forEach((color, colorIdx) => {
      gallery.selectColor(colorIdx);
      const currentListSrcs = new Set(gallery.colorImagesList.map((i) => i.src));

      // Compare with all other colors
      codeCommonProduct.colors.forEach((otherColor, otherIdx) => {
        if (colorIdx === otherIdx) return;

        const otherSrcs = [
          otherColor.images.full,
          otherColor.images.waist,
          otherColor.images.pocket,
          otherColor.images.bottom,
        ];

        for (const otherSrc of otherSrcs) {
          if (!otherSrc) continue;
          assert.ok(
            !currentListSrcs.has(otherSrc),
            `Color ${color.name} gallery must NOT contain images from ${otherColor.name}: ${otherSrc}`
          );
        }
      });
    });
  });

  it("Next and Previous thumbnail navigation work correctly", () => {
    const gallery = new GalleryModel(codeCommonProduct, 0);

    // Initial = 0 (full)
    assert.strictEqual(gallery.activeImageIndex, 0);

    // Next -> 1 (waist)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 1);

    // Next -> 2 (pocket)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 2);

    // Next -> 3 (bottom)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 3);

    // Next wraps to 0 (full)
    gallery.nextImage();
    assert.strictEqual(gallery.activeImageIndex, 0);

    // Prev wraps to 3 (bottom)
    gallery.prevImage();
    assert.strictEqual(gallery.activeImageIndex, 3);
  });
});

describe("Gallery Behavior Across All 5 Products", () => {
  it("Every product initializes gallery with Full image at index 0", () => {
    for (const prod of products) {
      const gallery = new GalleryModel(prod, 0);
      assert.strictEqual(gallery.activeImageIndex, 0);
      assert.strictEqual(gallery.currentActiveImage.key, "full");
      assert.strictEqual(gallery.colorImagesList.length, 4);
    }
  });

  it("Every product supports color switching with reset to Full image", () => {
    for (const prod of products) {
      const gallery = new GalleryModel(prod, 0);
      if (prod.colors.length > 1) {
        gallery.selectImage(2); // Pocket view
        gallery.selectColor(1); // Switch to second color
        assert.strictEqual(gallery.activeImageIndex, 0, `Product ${prod.name} must reset to Full`);
      }
    }
  });
});
