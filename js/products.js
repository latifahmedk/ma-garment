/**
 * MA Garments - Products & Gallery Interactivity (Vanilla JavaScript)
 * Handles:
 * - Product cards rendering
 * - Real-time category filtering & search
 * - Interactive color swatch preview on cards
 * - 4-Detail image gallery slider (Full, Waist, Pocket, Bottom)
 * - Fullscreen zoom lightbox with keyboard arrows & Esc
 * - Product specifications modal
 * - Dynamic WhatsApp enquiry links
 */

(function () {
  const DETAIL_LABELS = [
    { key: "full", label: "Full Pant View", badge: "Full Silhouette" },
    { key: "waist", label: "Waist Detail", badge: "Waist & Elastic" },
    { key: "pocket", label: "Pocket & Logo Detail", badge: "Pocket & Zipper" },
    { key: "bottom", label: "Bottom Detail", badge: "Ankle & Hem" },
  ];

  // Global state for open modal
  let currentModalProduct = null;
  let currentModalColorIndex = 0;
  let currentModalImageIndex = 0;
  let isLightboxOpen = false;

  // Selected filters for catalogue page
  let selectedCategory = "All Products";
  let searchQuery = "";

  /**
   * Safe getter for standard sizes array
   */
  function getStandardSizes(sizes) {
    if (Array.isArray(sizes) && sizes.length > 0) return sizes;
    return ["M", "L", "XL"];
  }

  /**
   * Helper to build WhatsApp Inquiry URL
   */
  function getWhatsAppUrl(product, colorName) {
    const phone = window.SITE_CONFIG?.contact?.whatsappNumber || "919326174220";
    const msg = `Hello MA Garments! I am interested in wholesale pricing for your "${product.name}" in ${colorName} (${product.fabric}, MOQ: ${product.moq}). Please share catalog & bulk quotation.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Helper to build Modal WhatsApp Quote URL
   */
  function getModalWhatsAppUrl(product, colorName) {
    const phone = window.SITE_CONFIG?.contact?.whatsappNumber || "919326174220";
    const msg = `Hello MA Garments! I am a wholesale buyer inquiring about:
*Product:* ${product.name}
*Selected Shade:* ${colorName}
*Fabric:* ${product.fabric} (${product.gsm} GSM)
*MOQ:* ${product.moq}
Please send me wholesale bulk price per piece and sample terms.`;
    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  }

  /**
   * Render a single product card HTML
   */
  function createProductCardHTML(product, priority) {
    const defaultColor = product.colors[0];
    const initialImg = defaultColor.images?.full || product.image;
    const sizes = getStandardSizes(product.sizes).join(", ");
    const moqParts = product.moq.split(" ");
    const moqDisplay = `${moqParts[0] || "100"} ${moqParts[1] || "Pieces"}`;
    const initialWaUrl = getWhatsAppUrl(product, defaultColor.name);

    // Color buttons HTML
    const swatchesHTML = product.colors
      .map((c, idx) => {
        const isSelected = idx === 0;
        return `
          <button
            type="button"
            class="color-swatch-btn w-5 h-5 rounded-full border transition-all ${
              isSelected
                ? "border-blue-600 ring-2 ring-blue-500/40 scale-110"
                : "border-slate-300 hover:scale-105 opacity-80 hover:opacity-100"
            }"
            style="background-color: ${c.hex};"
            data-color-idx="${idx}"
            title="${c.name} (Click to switch preview)"
            aria-label="Select ${c.name}"
          ></button>
        `;
      })
      .join("");

    return `
      <div class="product-card bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group" data-product-id="${product.id}">
        <!-- Top Image Container -->
        <div>
          <div class="card-image-wrap relative aspect-square w-full bg-slate-100 overflow-hidden cursor-pointer" data-action="open-details">
            <img
              src="${initialImg}"
              alt="${product.name} - ${defaultColor.name} - Wholesale Track Pants Manufacturer Mumbai"
              class="card-img w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              ${priority ? "" : 'loading="lazy"'}
            />

            <!-- Category & GSM Badge -->
            <div class="card-badge-top absolute top-3 left-3 flex flex-col gap-1.5 items-start pointer-events-none">
              <span class="bg-slate-900/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md tracking-wide uppercase shadow-xs">
                ${product.category}
              </span>
              <span class="bg-blue-600/95 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow-xs">
                ${product.gsm} GSM
              </span>
            </div>

            <!-- Active Color Pill Badge -->
            <div class="absolute bottom-3 left-3 pointer-events-none">
              <span class="card-color-badge bg-slate-950/80 backdrop-blur-xs text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-xs flex items-center gap-1.5">
                <span class="card-color-dot w-2 h-2 rounded-full border border-white/40" style="background-color: ${defaultColor.hex}"></span>
                <span class="card-color-name">${defaultColor.name}</span>
              </span>
            </div>

            <!-- Quick View trigger on hover -->
            <div class="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span class="bg-white/95 text-slate-900 text-xs font-bold px-3.5 py-2 rounded-lg shadow-md pointer-events-auto">
                View 4 Detail Views & Specs
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div class="card-content p-5 space-y-3">
            <div>
              <h3 class="card-title text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors cursor-pointer" data-action="open-details">
                ${product.name}
              </h3>
              <p class="card-fabric text-xs font-medium text-slate-500 mt-1">
                ${product.fabric}
              </p>
            </div>

            <!-- Color swatches with click-to-preview -->
            <div class="space-y-1.5 pt-1">
              <div class="flex items-center justify-between text-[11px]">
                <span class="font-semibold text-slate-400 uppercase tracking-wider">
                  Colors (${product.colors.length}):
                </span>
                <span class="card-color-text text-slate-600 font-medium truncate max-w-[140px]">
                  ${defaultColor.name}
                </span>
              </div>
              <div class="card-swatches-wrap flex items-center gap-1.5">
                ${swatchesHTML}
                <span class="text-[10px] text-slate-400 font-medium ml-1">
                  (4 views each)
                </span>
              </div>
            </div>

            <!-- Sizes and MOQ Box -->
            <div class="pt-2 border-t border-slate-100 space-y-1.5">
              <div class="flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium text-slate-500">Sizes:</span>
                <span class="font-semibold text-slate-800">${sizes}</span>
              </div>

              <div class="flex items-center justify-between text-xs bg-slate-50 p-2 rounded-md border border-slate-100">
                <span class="text-slate-500 font-medium">Wholesale MOQ:</span>
                <span class="font-bold text-blue-800">${moqDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Card Footer Actions -->
        <div class="card-actions-grid p-5 pt-0 grid grid-cols-2 gap-2">
          <button
            type="button"
            class="w-full py-2.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors text-center"
            data-action="open-details"
          >
            <span class="hidden sm:inline">View Specs & Gallery</span>
            <span class="sm:hidden">Specs & Views</span>
          </button>

          <a
            href="${initialWaUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="card-wa-btn w-full py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1 text-center"
          >
            <svg class="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
            <span>Inquiry</span>
          </a>
        </div>
      </div>
    `;
  }

  /**
   * Bind event listeners on product cards (swatches and detail buttons)
   */
  function bindCardEvents(container) {
    if (!container) return;

    // Card Color Swatches click
    const swatchBtns = container.querySelectorAll(".color-swatch-btn");
    swatchBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        const card = btn.closest(".product-card");
        if (!card) return;

        const prodId = card.getAttribute("data-product-id");
        const prod = window.PRODUCTS_DATA.find((p) => p.id === prodId);
        if (!prod) return;

        const colorIdx = parseInt(btn.getAttribute("data-color-idx"), 10);
        const color = prod.colors[colorIdx];
        if (!color) return;

        // Update active swatch state
        card.querySelectorAll(".color-swatch-btn").forEach((s) => {
          s.classList.remove("border-blue-600", "ring-2", "ring-blue-500/40", "scale-110");
          s.classList.add("border-slate-300", "opacity-80");
        });
        btn.classList.add("border-blue-600", "ring-2", "ring-blue-500/40", "scale-110");
        btn.classList.remove("border-slate-300", "opacity-80");

        // Update main image in card
        const cardImg = card.querySelector(".card-img");
        if (cardImg && color.images?.full) {
          cardImg.src = color.images.full;
          cardImg.alt = `${prod.name} - ${color.name} - Wholesale Track Pants Manufacturer Mumbai`;
        }

        // Update color badges
        const dot = card.querySelector(".card-color-dot");
        if (dot) dot.style.backgroundColor = color.hex;

        const nameLabel = card.querySelector(".card-color-name");
        if (nameLabel) nameLabel.textContent = color.name;

        const textLabel = card.querySelector(".card-color-text");
        if (textLabel) textLabel.textContent = color.name;

        // Update WhatsApp inquiry link with this specific color
        const waBtn = card.querySelector(".card-wa-btn");
        if (waBtn) waBtn.href = getWhatsAppUrl(prod, color.name);

        // Save selected color on card for modal trigger
        card.setAttribute("data-selected-color", color.name);
      });

      // Preload image on hover
      btn.addEventListener("mouseenter", function () {
        const card = btn.closest(".product-card");
        if (!card) return;
        const prodId = card.getAttribute("data-product-id");
        const prod = window.PRODUCTS_DATA.find((p) => p.id === prodId);
        if (!prod) return;
        const colorIdx = parseInt(btn.getAttribute("data-color-idx"), 10);
        const color = prod.colors[colorIdx];
        if (color?.images?.full) {
          const img = new Image();
          img.src = color.images.full;
        }
      });
    });

    // Card Open Details trigger
    const triggers = container.querySelectorAll('[data-action="open-details"]');
    triggers.forEach((el) => {
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        const card = el.closest(".product-card");
        if (!card) return;
        const prodId = card.getAttribute("data-product-id");
        const prod = window.PRODUCTS_DATA.find((p) => p.id === prodId);
        if (!prod) return;

        const selectedColorName = card.getAttribute("data-selected-color") || prod.colors[0]?.name;
        openProductModal(prod, selectedColorName);
      });
    });
  }

  /**
   * Render Featured Products Grid on Homepage (index.html)
   */
  function initFeaturedProducts() {
    const featuredContainer = document.getElementById("featured-products-grid");
    if (!featuredContainer || !window.PRODUCTS_DATA) return;

    const featuredList = window.PRODUCTS_DATA.filter((p) => p.featured).slice(0, 4);
    featuredContainer.innerHTML = featuredList
      .map((p, idx) => createProductCardHTML(p, idx < 2))
      .join("");

    bindCardEvents(featuredContainer);
  }

  /**
   * Render Full Catalogue Grid on products.html with search & filter
   */
  function initCataloguePage() {
    const catalogueGrid = document.getElementById("products-grid");
    const emptyState = document.getElementById("products-empty-state");
    const countDisplay = document.getElementById("products-count");
    const categoryInfo = document.getElementById("selected-category-info");
    const searchInput = document.getElementById("product-search-input");
    const filterPills = document.querySelectorAll(".category-filter-btn");

    if (!catalogueGrid || !window.PRODUCTS_DATA) return;

    function renderFiltered() {
      const q = searchQuery.toLowerCase().trim();
      const filtered = window.PRODUCTS_DATA.filter((p) => {
        const matchCategory =
          selectedCategory === "All Products" || p.category === selectedCategory;
        const matchSearch =
          q === "" ||
          p.name.toLowerCase().includes(q) ||
          p.slug.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q);
        return matchCategory && matchSearch;
      });

      if (countDisplay) countDisplay.textContent = filtered.length;
      if (categoryInfo) {
        categoryInfo.textContent =
          selectedCategory !== "All Products" ? ` in "${selectedCategory}"` : "";
      }

      if (filtered.length > 0) {
        catalogueGrid.innerHTML = filtered
          .map((p, idx) => createProductCardHTML(p, idx < 2))
          .join("");
        catalogueGrid.classList.remove("hidden");
        if (emptyState) emptyState.classList.add("hidden");
        bindCardEvents(catalogueGrid);
      } else {
        catalogueGrid.innerHTML = "";
        catalogueGrid.classList.add("hidden");
        if (emptyState) emptyState.classList.remove("hidden");
      }
    }

    // Category button clicks
    filterPills.forEach((btn) => {
      btn.addEventListener("click", function () {
        selectedCategory = btn.getAttribute("data-category") || "All Products";
        filterPills.forEach((p) => {
          p.classList.remove("bg-blue-700", "text-white", "shadow-2xs");
          p.classList.add("bg-slate-100", "text-slate-700");
          p.setAttribute("aria-pressed", "false");
        });
        btn.classList.add("bg-blue-700", "text-white", "shadow-2xs");
        btn.classList.remove("bg-slate-100", "text-slate-700");
        btn.setAttribute("aria-pressed", "true");
        renderFiltered();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        searchQuery = e.target.value;
        renderFiltered();
      });
    }

    // Reset filters button
    const resetBtn = document.getElementById("reset-filters-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        selectedCategory = "All Products";
        searchQuery = "";
        if (searchInput) searchInput.value = "";
        filterPills.forEach((p) => {
          if (p.getAttribute("data-category") === "All Products") {
            p.classList.add("bg-blue-700", "text-white", "shadow-2xs");
            p.classList.remove("bg-slate-100", "text-slate-700");
            p.setAttribute("aria-pressed", "true");
          } else {
            p.classList.remove("bg-blue-700", "text-white", "shadow-2xs");
            p.classList.add("bg-slate-100", "text-slate-700");
            p.setAttribute("aria-pressed", "false");
          }
        });
        renderFiltered();
      });
    }

    // Initial render
    renderFiltered();
  }

  /**
   * Returns list of 4 detail images for the current active color
   */
  function getModalDetailImages(product, colorIndex) {
    const color = product.colors[colorIndex] || product.colors[0];
    return [
      { ...DETAIL_LABELS[0], src: color.images?.full || product.image },
      { ...DETAIL_LABELS[1], src: color.images?.waist || product.image },
      {
        ...DETAIL_LABELS[2],
        src: color.images?.["side-pocket"] || color.images?.pocket || product.image,
      },
      { ...DETAIL_LABELS[3], src: color.images?.bottom || product.image },
    ];
  }

  /**
   * Update the modal gallery view (Main image, badges, and thumbnails)
   */
  function updateModalGallery() {
    if (!currentModalProduct) return;
    const color = currentModalProduct.colors[currentModalColorIndex] || currentModalProduct.colors[0];
    const detailImages = getModalDetailImages(currentModalProduct, currentModalColorIndex);
    const activeItem = detailImages[currentModalImageIndex] || detailImages[0];

    // Main image
    const mainImg = document.getElementById("modal-main-img");
    if (mainImg) {
      mainImg.src = activeItem.src;
      mainImg.alt = `${currentModalProduct.name} - ${color.name} - ${activeItem.label}`;
    }

    // Badges
    const badgeCount = document.getElementById("modal-img-badge-count");
    if (badgeCount) {
      badgeCount.textContent = `${currentModalImageIndex + 1}/4 • ${activeItem.badge}`;
    }
    const badgeColor = document.getElementById("modal-img-badge-color");
    if (badgeColor) {
      badgeColor.textContent = color.name;
    }

    // Active color text inside modal
    const activeColorText = document.getElementById("modal-selected-color-name");
    if (activeColorText) activeColorText.textContent = color.name;

    const modalRightColor = document.getElementById("modal-right-active-color");
    if (modalRightColor) modalRightColor.textContent = `Active: ${color.name}`;

    // Update 4 detail thumbnails
    const thumbsContainer = document.getElementById("modal-detail-thumbs");
    if (thumbsContainer) {
      thumbsContainer.innerHTML = detailImages
        .map((item, idx) => {
          const isActive = idx === currentModalImageIndex;
          return `
            <button
              type="button"
              class="modal-thumb-btn relative flex flex-col rounded-xl overflow-hidden border transition-all text-left bg-white ${
                isActive
                  ? "border-blue-600 ring-2 ring-blue-600/40 shadow-xs"
                  : "border-slate-200 hover:border-slate-300 opacity-75 hover:opacity-100"
              }"
              data-thumb-idx="${idx}"
              aria-label="Show ${item.label}"
              aria-pressed="${isActive}"
            >
              <div class="relative aspect-square w-full bg-slate-100 overflow-hidden">
                <img src="${item.src}" alt="${color.name} ${item.label}" class="w-full h-full object-cover" />
                <span class="absolute top-1 left-1 text-[9px] font-bold px-1.5 py-0.5 rounded ${
                  isActive ? "bg-blue-600 text-white" : "bg-slate-900/80 text-white"
                }">${idx + 1}</span>
              </div>
              <div class="p-1.5 bg-white border-t border-slate-100">
                <p class="text-[10px] font-semibold text-slate-800 truncate leading-tight">${item.badge}</p>
              </div>
            </button>
          `;
        })
        .join("");

      // Bind thumb clicks
      thumbsContainer.querySelectorAll(".modal-thumb-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          currentModalImageIndex = parseInt(btn.getAttribute("data-thumb-idx"), 10);
          updateModalGallery();
        });
      });
    }

    // Update color swatches in modal
    const colorSwatchesContainer = document.getElementById("modal-color-swatches");
    if (colorSwatchesContainer) {
      colorSwatchesContainer.querySelectorAll(".modal-color-btn").forEach((btn) => {
        const cIdx = parseInt(btn.getAttribute("data-color-idx"), 10);
        if (cIdx === currentModalColorIndex) {
          btn.classList.add("border-blue-600", "bg-blue-50/80", "text-blue-950", "font-semibold", "ring-2", "ring-blue-500/30");
          btn.classList.remove("border-slate-200", "bg-white", "text-slate-700");
          const checkIcon = btn.querySelector(".check-icon");
          if (checkIcon) checkIcon.classList.remove("hidden");
        } else {
          btn.classList.remove("border-blue-600", "bg-blue-50/80", "text-blue-950", "font-semibold", "ring-2", "ring-blue-500/30");
          btn.classList.add("border-slate-200", "bg-white", "text-slate-700");
          const checkIcon = btn.querySelector(".check-icon");
          if (checkIcon) checkIcon.classList.add("hidden");
        }
      });
    }

    // Update Action Buttons
    const waQuoteBtn = document.getElementById("modal-wa-quote-btn");
    if (waQuoteBtn) {
      waQuoteBtn.href = getModalWhatsAppUrl(currentModalProduct, color.name);
    }

    const bulkEnquiryBtn = document.getElementById("modal-bulk-enquiry-btn");
    if (bulkEnquiryBtn) {
      bulkEnquiryBtn.href = `contact.html?product=${encodeURIComponent(currentModalProduct.name)}`;
    }

    // If lightbox is also open, keep it synced
    if (isLightboxOpen) updateLightbox();
  }

  /**
   * Open Product Details Modal
   */
  function openProductModal(product, initialColorName) {
    currentModalProduct = product;
    currentModalImageIndex = 0;

    // Find initial color index
    let colorIdx = 0;
    if (initialColorName) {
      const found = product.colors.findIndex(
        (c) => c.name.toLowerCase() === initialColorName.toLowerCase()
      );
      if (found !== -1) colorIdx = found;
    }
    currentModalColorIndex = colorIdx;

    // Populate Right Column Details
    const catBadge = document.getElementById("modal-product-category");
    if (catBadge) catBadge.textContent = product.category;

    const gsmBadge = document.getElementById("modal-product-gsm");
    if (gsmBadge) gsmBadge.textContent = `${product.gsm} GSM`;

    const titleEl = document.getElementById("modal-product-name");
    if (titleEl) titleEl.textContent = product.name;

    const fabricEl = document.getElementById("modal-product-fabric");
    if (fabricEl) fabricEl.textContent = `Fabric: ${product.fabric}`;

    const descEl = document.getElementById("modal-product-description");
    if (descEl) descEl.textContent = product.description;

    const packagingEl = document.getElementById("modal-packaging-info");
    if (packagingEl) packagingEl.textContent = product.packaging;

    const moqEl = document.getElementById("modal-moq-info");
    if (moqEl) moqEl.textContent = `MOQ: ${product.moq} • Dispatch from Sion, Mumbai.`;

    // Sizes
    const sizesContainer = document.getElementById("modal-sizes-container");
    if (sizesContainer) {
      const sizes = getStandardSizes(product.sizes);
      sizesContainer.innerHTML = sizes
        .map(
          (s) => `
            <span class="px-3 py-1 text-xs font-semibold bg-white border border-slate-300 rounded text-slate-800 shadow-2xs">
              ${s}
            </span>
          `
        )
        .join("");
    }

    // Specifications Table
    const specComp = document.getElementById("modal-spec-composition");
    if (specComp) specComp.textContent = product.specifications?.fabricComposition || "N/A";

    const specWaist = document.getElementById("modal-spec-waistband");
    if (specWaist) specWaist.textContent = product.specifications?.waistband || "N/A";

    const specPockets = document.getElementById("modal-spec-pockets");
    if (specPockets) specPockets.textContent = product.specifications?.pockets || "N/A";

    const specStitch = document.getElementById("modal-spec-stitching");
    if (specStitch) specStitch.textContent = product.specifications?.stitching || "N/A";

    const specHem = document.getElementById("modal-spec-ankle");
    if (specHem) specHem.textContent = product.specifications?.ankleFinish || "N/A";

    // Color Swatch buttons in modal
    const colorSwatchesContainer = document.getElementById("modal-color-swatches");
    if (colorSwatchesContainer) {
      colorSwatchesContainer.innerHTML = product.colors
        .map((c, i) => {
          const isSelected = i === currentModalColorIndex;
          return `
            <button
              type="button"
              class="modal-color-btn inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs transition-all border ${
                isSelected
                  ? "border-blue-600 bg-blue-50/80 text-blue-950 font-semibold ring-2 ring-blue-500/30"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
              }"
              data-color-idx="${i}"
              title="Click to view 4 detail images for ${c.name}"
            >
              <span class="w-3.5 h-3.5 rounded-full border border-slate-300 shrink-0" style="background-color: ${c.hex}"></span>
              <span>${c.name}</span>
              <svg class="check-icon w-3 h-3 text-blue-600 ml-0.5 ${isSelected ? "" : "hidden"}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </button>
          `;
        })
        .join("");

      // Bind color button clicks
      colorSwatchesContainer.querySelectorAll(".modal-color-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          currentModalColorIndex = parseInt(btn.getAttribute("data-color-idx"), 10);
          currentModalImageIndex = 0; // reset to full view
          updateModalGallery();
        });
      });
    }

    // Color count label
    const colorCountLabel = document.getElementById("modal-color-count");
    if (colorCountLabel) {
      colorCountLabel.textContent = `${product.colors.length} shades available`;
    }

    // Update gallery image and thumbnails
    updateModalGallery();

    // Show modal & prevent background scroll
    const modal = document.getElementById("product-modal");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    }
  }

  /**
   * Close Product Details Modal
   */
  function closeProductModal() {
    const modal = document.getElementById("product-modal");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto";
    }
    currentModalProduct = null;
    closeLightbox();
  }

  /**
   * Update Lightbox view
   */
  function updateLightbox() {
    if (!currentModalProduct) return;
    const color = currentModalProduct.colors[currentModalColorIndex] || currentModalProduct.colors[0];
    const detailImages = getModalDetailImages(currentModalProduct, currentModalColorIndex);
    const activeItem = detailImages[currentModalImageIndex] || detailImages[0];

    const lbTitle = document.getElementById("lightbox-product-name");
    if (lbTitle) lbTitle.textContent = currentModalProduct.name;

    const lbDot = document.getElementById("lightbox-color-dot");
    if (lbDot) lbDot.style.backgroundColor = color.hex;

    const lbColorName = document.getElementById("lightbox-color-name");
    if (lbColorName) lbColorName.textContent = color.name;

    const lbViewIdx = document.getElementById("lightbox-view-idx");
    if (lbViewIdx) lbViewIdx.textContent = `${currentModalImageIndex + 1}`;

    const lbViewLabel = document.getElementById("lightbox-view-label");
    if (lbViewLabel) lbViewLabel.textContent = activeItem.label;

    const lbImg = document.getElementById("lightbox-main-img");
    if (lbImg) {
      lbImg.src = activeItem.src;
      lbImg.alt = `${currentModalProduct.name} - ${color.name} - ${activeItem.label}`;
    }

    // Lightbox thumbnails
    const lbThumbs = document.getElementById("lightbox-thumbs");
    if (lbThumbs) {
      lbThumbs.innerHTML = detailImages
        .map((thumb, idx) => {
          const isActive = idx === currentModalImageIndex;
          return `
            <button
              type="button"
              class="lb-thumb-btn relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                isActive
                  ? "border-blue-500 scale-105 shadow-md shadow-blue-500/30"
                  : "border-slate-700 opacity-60 hover:opacity-100"
              }"
              data-lb-idx="${idx}"
              aria-label="View ${thumb.label}"
              aria-pressed="${isActive}"
            >
              <img src="${thumb.src}" alt="${thumb.label}" class="w-full h-full object-cover" />
              <span class="absolute bottom-0 inset-x-0 bg-slate-950/80 text-[9px] text-white text-center py-0.5 truncate px-0.5">
                ${thumb.badge}
              </span>
            </button>
          `;
        })
        .join("");

      lbThumbs.querySelectorAll(".lb-thumb-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
          currentModalImageIndex = parseInt(btn.getAttribute("data-lb-idx"), 10);
          updateModalGallery();
        });
      });
    }
  }

  function openLightbox() {
    isLightboxOpen = true;
    const lb = document.getElementById("lightbox-modal");
    if (lb) {
      lb.classList.remove("hidden");
      updateLightbox();
    }
  }

  function closeLightbox() {
    isLightboxOpen = false;
    const lb = document.getElementById("lightbox-modal");
    if (lb) lb.classList.add("hidden");
  }

  /**
   * Bind Modal & Lightbox navigation events
   */
  function bindModalEvents() {
    const modal = document.getElementById("product-modal");
    if (!modal) return;

    // Close button
    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeProductModal);

    // Backdrop click
    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeProductModal();
    });

    // Gallery Prev / Next in Modal
    const prevBtn = document.getElementById("modal-prev-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        currentModalImageIndex = currentModalImageIndex === 0 ? 3 : currentModalImageIndex - 1;
        updateModalGallery();
      });
    }

    const nextBtn = document.getElementById("modal-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        currentModalImageIndex = currentModalImageIndex === 3 ? 0 : currentModalImageIndex + 1;
        updateModalGallery();
      });
    }

    // Zoom / Maximize button
    const zoomBtn = document.getElementById("modal-zoom-btn");
    if (zoomBtn) {
      zoomBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        openLightbox();
      });
    }

    const mainImgWrap = document.getElementById("modal-main-img-wrap");
    if (mainImgWrap) {
      mainImgWrap.addEventListener("click", function () {
        openLightbox();
      });
    }

    // Lightbox controls
    const lb = document.getElementById("lightbox-modal");
    if (lb) {
      lb.addEventListener("click", function (e) {
        if (e.target === lb) closeLightbox();
      });

      const lbClose = document.getElementById("lightbox-close-btn");
      if (lbClose) lbClose.addEventListener("click", closeLightbox);

      const lbPrev = document.getElementById("lightbox-prev-btn");
      if (lbPrev) {
        lbPrev.addEventListener("click", function (e) {
          e.stopPropagation();
          currentModalImageIndex = currentModalImageIndex === 0 ? 3 : currentModalImageIndex - 1;
          updateModalGallery();
        });
      }

      const lbNext = document.getElementById("lightbox-next-btn");
      if (lbNext) {
        lbNext.addEventListener("click", function (e) {
          e.stopPropagation();
          currentModalImageIndex = currentModalImageIndex === 3 ? 0 : currentModalImageIndex + 1;
          updateModalGallery();
        });
      }
    }

    // Keyboard navigation (Escape to close, Left/Right arrow to cycle detail views)
    document.addEventListener("keydown", function (e) {
      if (isLightboxOpen) {
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") {
          currentModalImageIndex = currentModalImageIndex === 0 ? 3 : currentModalImageIndex - 1;
          updateModalGallery();
        }
        if (e.key === "ArrowRight") {
          currentModalImageIndex = currentModalImageIndex === 3 ? 0 : currentModalImageIndex + 1;
          updateModalGallery();
        }
      } else if (currentModalProduct) {
        if (e.key === "Escape") closeProductModal();
        if (e.key === "ArrowLeft") {
          currentModalImageIndex = currentModalImageIndex === 0 ? 3 : currentModalImageIndex - 1;
          updateModalGallery();
        }
        if (e.key === "ArrowRight") {
          currentModalImageIndex = currentModalImageIndex === 3 ? 0 : currentModalImageIndex + 1;
          updateModalGallery();
        }
      }
    });
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", function () {
    initFeaturedProducts();
    initCataloguePage();
    bindModalEvents();
  });
})();

