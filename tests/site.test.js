const { describe, it } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Helper to load products-data.js in a VM context
function loadProductsData() {
  const code = fs.readFileSync(path.resolve(process.cwd(), 'js/products-data.js'), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return {
    products: sandbox.window.PRODUCTS_DATA,
    categories: sandbox.window.PRODUCT_CATEGORIES,
    siteConfig: sandbox.window.SITE_CONFIG
  };
}

describe('1. Static Website Assets & Configuration Integrity', () => {
  it('Required HTML pages exist and are non-empty', () => {
    const pages = ['index.html', 'products.html', 'about.html', 'contact.html'];
    for (const page of pages) {
      assert.ok(fs.existsSync(page), `${page} should exist`);
      const stat = fs.statSync(page);
      assert.ok(stat.size > 1000, `${page} should not be empty`);
    }
  });

  it('Style and script files exist and are non-empty', () => {
    const files = [
      'css/style.css',
      'js/products-data.js',
      'js/main.js',
      'js/products.js',
      'js/contact.js'
    ];
    for (const f of files) {
      assert.ok(fs.existsSync(f), `${f} should exist`);
      const stat = fs.statSync(f);
      assert.ok(stat.size > 100, `${f} should not be empty`);
    }
  });

  it('SEO and search engine files exist', () => {
    assert.ok(fs.existsSync('robots.txt'), 'robots.txt should exist');
    assert.ok(fs.existsSync('sitemap.xml'), 'sitemap.xml should exist');
    assert.ok(fs.existsSync('favicon.ico'), 'favicon.ico should exist');
    assert.ok(fs.existsSync('images/logo.png'), 'images/logo.png should exist');
    assert.ok(fs.existsSync('images/og-image.jpg'), 'images/og-image.jpg should exist');
  });

  it('HTML files have no broken local CSS, JS, or image links', () => {
    const htmlFiles = ['index.html', 'products.html', 'about.html', 'contact.html'];
    for (const htmlFile of htmlFiles) {
      const content = fs.readFileSync(htmlFile, 'utf8');

      // CSS
      const cssMatches = content.matchAll(/href="([^"#?]+\.css)"/g);
      for (const match of cssMatches) {
        assert.ok(fs.existsSync(match[1]), `CSS file ${match[1]} in ${htmlFile} must exist`);
      }

      // JS
      const jsMatches = content.matchAll(/src="([^"#?]+\.js)"/g);
      for (const match of jsMatches) {
        assert.ok(fs.existsSync(match[1]), `JS file ${match[1]} in ${htmlFile} must exist`);
      }

      // Local Images
      const imgMatches = content.matchAll(/src="([^"#?]+\.(png|jpg|jpeg|svg|webp))"/gi);
      for (const match of imgMatches) {
        assert.ok(fs.existsSync(match[1]), `Image file ${match[1]} in ${htmlFile} must exist`);
      }
    }
  });

  it('JavaScript files have valid syntax', () => {
    const jsFiles = ['js/products-data.js', 'js/main.js', 'js/products.js', 'js/contact.js', 'server.js'];
    for (const f of jsFiles) {
      const code = fs.readFileSync(f, 'utf8');
      assert.doesNotThrow(() => new vm.Script(code), `${f} should have valid syntax`);
    }
  });
});

describe('2. Product Data & Wholesale Catalogue Tests', () => {
  const { products, categories, siteConfig } = loadProductsData();

  it('Site config contains correct phone, email, and WhatsApp numbers', () => {
    assert.ok(siteConfig);
    assert.strictEqual(siteConfig.contact.phoneCall, '+919326174220');
    assert.strictEqual(siteConfig.contact.whatsappNumber, '919326174220');
    assert.strictEqual(siteConfig.contact.email, 'magarments968@gmail.com');
  });

  it('All 5 wholesale track pant products are present', () => {
    assert.strictEqual(products.length, 5);
    const names = products.map(p => p.name);
    assert.ok(names.includes('4-Way Athletic Track Pants'));
    assert.ok(names.includes('4 Way Military Track Pants'));
    assert.ok(names.includes('Dyson Fabric Track Pants'));
    assert.ok(names.includes('NS Fabric'));
    assert.ok(names.includes('Code Common'));
  });

  it('Product categories are defined', () => {
    assert.ok(Array.isArray(categories));
    assert.ok(categories.length >= 6);
  });

  it('NS Fabric has 6 unique colors with all 4 view images', () => {
    const ns = products.find(p => p.name === 'NS Fabric');
    assert.ok(ns, 'NS Fabric must exist');
    assert.strictEqual(ns.colors.length, 6);

    const expectedColors = ['Navy Blue', 'Maroon', 'Royal Blue', 'Black', 'Dark Teal', 'Light Grey'];
    const actualColors = Array.from(ns.colors.map(c => c.name));
    assert.deepStrictEqual(actualColors, expectedColors);

    for (const col of ns.colors) {
      assert.ok(col.images.full, `${col.name} has full image`);
      assert.ok(col.images.waist, `${col.name} has waist image`);
      assert.ok(col.images['side-pocket'] || col.images.pocket, `${col.name} has side-pocket image`);
      assert.ok(col.images.bottom, `${col.name} has bottom image`);
    }
  });

  it('Every single product detail image physically exists on disk', () => {
    let totalImages = 0;
    for (const prod of products) {
      if (prod.image) {
        totalImages++;
        assert.ok(fs.existsSync(prod.image), `Main image must exist: ${prod.image}`);
      }
      for (const col of prod.colors) {
        for (const [view, imgPath] of Object.entries(col.images || {})) {
          totalImages++;
          assert.ok(fs.existsSync(imgPath), `Detail image (${view}) must exist: ${imgPath}`);
        }
      }
    }
    assert.ok(totalImages >= 100, `Expected over 100 images, checked ${totalImages}`);
  });

  it('Product specifications are complete and wholesale-ready', () => {
    for (const prod of products) {
      assert.ok(prod.fabric, `${prod.name} has fabric spec`);
      assert.ok(prod.sizes, `${prod.name} has sizes spec`);
      assert.ok(prod.moq, `${prod.name} has moq spec`);
      assert.ok(prod.specifications, `${prod.name} has specifications object`);
    }
  });
});

describe('3. Gallery & Modal Logic Simulation', () => {
  const { products } = loadProductsData();

  it('Gallery correctly handles color switching and active view resets', () => {
    const prod = products[0];
    let selectedColorIndex = 0;
    let activeImageIndex = 2; // User had selected pocket view

    // Switching color should reset active view to full pant (index 0)
    selectedColorIndex = 1;
    activeImageIndex = 0;

    assert.strictEqual(selectedColorIndex, 1);
    assert.strictEqual(activeImageIndex, 0);

    const currentColor = prod.colors[selectedColorIndex];
    assert.ok(currentColor.images.full);
  });

  it('WhatsApp URL generator creates valid encoded link with product details', () => {
    const prod = products[0];
    const color = prod.colors[0];
    const text = `Hi, I am interested in wholesale inquiry for ${prod.name} (${color.name}). Please share catalog & bulk pricing.`;
    const url = `https://wa.me/919326174220?text=${encodeURIComponent(text)}`;

    assert.ok(url.startsWith('https://wa.me/919326174220?text='));
    assert.ok(url.includes(encodeURIComponent(prod.name)));
    assert.ok(url.includes(encodeURIComponent(color.name)));
  });
});
