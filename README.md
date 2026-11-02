# MA Garments — Official Wholesale Manufacturer Website

> Premium Men's Track Pants Manufacturer & B2B Wholesale Supplier in Sion, Mumbai.

This project is a high-performance, responsive static website built with **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**. It has been completely migrated from Next.js/React into a traditional frontend architecture with zero external runtime dependencies.

---

## 🚀 Quick Start (Run Locally)

You can run this project locally using any static web server.

### Option 1: Native Node.js Server (Recommended — Zero Dependencies)
Run the included lightweight HTTP server:
```bash
npm start
# or
npm run dev
# or
node server.js
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Option 2: Direct File Access
Simply double-click `index.html` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 3: Python Built-in Server
```bash
python -m http.server 3000
```

### Option 4: VS Code Live Server
Right-click `index.html` in VS Code and click **"Open with Live Server"**.

---

## 🧪 Automated Testing

Run the automated test suite verifying asset integrity, JavaScript syntax, all 113+ product images, and data consistency:
```bash
npm test
```

---

## 📁 Project Architecture & File Structure

```
ma-garments/
│
├── index.html                  # Home page (Hero, Stats, Featured Products, Category Grid, Why Us, CTA)
├── products.html               # Full B2B Wholesale Catalogue (Filters, Search, Product Modal, Zoom Lightbox)
├── about.html                  # Factory Profile (Machinery, Workflow, Sion Advantage, Production Stats)
├── contact.html                # Wholesale Inquiry & Order Placement (Direct Form, Terms, Map, WhatsApp)
│
├── css/
│   └── style.css               # Production compiled stylesheet (Typography, Layouts, Responsive breakpoints)
│
├── js/
│   ├── products-data.js        # Single source of truth for products, specifications, colors & images
│   ├── main.js                 # Global navigation, mobile hamburger drawer, WhatsApp CTA, image preloader
│   ├── products.js             # Catalogue rendering, category filtering, search, modal & 4-view gallery
│   └── contact.js              # Inquiry form validation, URL prefill (?product=...), WhatsApp forwarding
│
├── images/
│   ├── logo.png                # Official MA Garments branding logo
│   ├── og-image.jpg            # Social media OpenGraph banner
│   ├── factory/                # High-resolution workshop, cutting & packaging photos
│   └── products/               # High-res product images categorized by fabric & color (113+ images)
│       ├── 4way/
│       ├── 4way-military/
│       ├── dyson/
│       ├── ns/
│       └── code-common/
│
├── tests/
│   └── site.test.js            # Automated Node.js test suite
│
├── server.js                   # Zero-dependency local development server
├── robots.txt                  # Search engine crawler directives
├── sitemap.xml                 # XML sitemap for SEO indexing
├── favicon.ico / favicon.png   # Favicons and touch icons
├── package.json                # Project scripts
└── README.md                   # Documentation
```

---

## ✨ Features & Functionality

### 1. B2B Wholesale Product Catalogue
- **5 Comprehensive Product Lines**:
  - 4-Way Athletic Track Pants (220 GSM Imported NS Lycra)
  - 4-Way Military Track Pants (Tactical Camouflage NS Lycra)
  - Dyson Fabric Track Pants (Heavyweight 240 GSM Luxury Lycra)
  - NS Fabric (Lightweight 130 GSM Micro-Poly Air-Weave)
  - Code Common (220 GSM Ribbed Textured Poly-Lycra)
- **Interactive Multi-View Product Modal**:
  - 4 detailed zoom angles per colorway: **Full Pant**, **Waistband & Drawstring**, **Side Pocket / Badge**, and **Ankle Bottom**.
  - Dynamic colorway swatch preview switcher.
  - Fullscreen lightbox zoom with keyboard navigation (`Esc`, `←`, `→`).
  - Technical wholesale specifications table (GSM, Fabric Composition, Stitching, Sizes, MOQ, Packaging).
  - One-click WhatsApp quotation generator pre-filled with the exact selected product and colorway.

### 2. Category & Real-Time Search Filtering
- Category filter pills (`All Products`, `4-Way Lycra`, `4-Way Military`, `Dyson Fabric`, `NS Fabric`, `Code Common`).
- Live instant search filtering across product titles, fabrics, fits, descriptions, and color options.
- Dynamic counter showing matched wholesale items.

### 3. Responsive Navigation & Mobile Experience
- Fixed sticky header with official MA Garments logo and active link indicator.
- Smooth mobile slide-out navigation drawer with body scroll lock and backdrop click dismissal.
- Floating WhatsApp assistance button with pulsing tooltip.

### 4. Direct B2B Inquiry Form
- Automatic URL parameter pre-selection (`contact.html?product=prod-004`).
- Client-side validation ensuring valid business name, phone number, and city/state.
- Immediate confirmation state with a direct button to forward inquiry details to WhatsApp.

### 5. SEO & Social Metadata
- Standard HTML5 semantic elements (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`).
- Fully populated OpenGraph and Twitter Card metadata for rich link previews.
- Valid Schema.org structured data (`WholesaleStore`, `ManufacturingBusiness`, `Product`, `LocalBusiness`).
- Canonical URLs referencing `https://magarments.in`.
- `robots.txt` and `sitemap.xml` configured for Google Search indexing.

---

## 🌐 Deployment to Production (Vercel, Netlify, Apache, Nginx)

Because this website is composed of 100% pure static HTML, CSS, JavaScript, and assets, it can be deployed anywhere without a Node.js build process:

### Vercel / Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Leave the **Build Command** blank (or set to `echo "No build step needed"`).
3. Set the **Output Directory** to `.` (root).
4. Deploy!

### Shared Hosting / cPanel / Apache / Nginx
Upload all files in the root folder directly to your web server's `public_html` or document root.

---

## 📞 Factory Contact Information
- **Factory Address**: Gala No. 4 & 5, Sion Industrial Compound, LBS Marg, Sion West, Mumbai, Maharashtra 400022
- **Phone / WhatsApp**: [+91 93261 74220](https://wa.me/919326174220)
- **Email**: [magarments968@gmail.com](mailto:magarments968@gmail.com)
- **Visiting Hours**: Monday – Saturday: 9:30 AM – 7:30 PM (Wholesalers & shop owners by appointment)
