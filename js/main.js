/**
 * MA Garments - Main Application Script (Vanilla JavaScript)
 * Handles layout interactivity: navigation, mobile menu, active states, WhatsApp floating button
 */

document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");

  if (mobileMenuBtn && mobileMenu) {
    function openMobileMenu() {
      mobileMenu.classList.remove("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "true");
      if (mobileMenuIcon) {
        // Change to Close (X) icon
        mobileMenuIcon.innerHTML = `
          <line x1="18" x2="6" y1="6" y2="18"></line>
          <line x1="6" x2="18" y1="6" y2="18"></line>
        `;
      }
    }

    function closeMobileMenu() {
      mobileMenu.classList.add("hidden");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      if (mobileMenuIcon) {
        // Change back to Hamburger Menu icon
        mobileMenuIcon.innerHTML = `
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        `;
      }
    }

    mobileMenuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        if (!mobileMenu.classList.contains("hidden")) {
          closeMobileMenu();
        }
      }
    });

    // Close mobile menu when Escape key is pressed
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        closeMobileMenu();
      }
    });

    // Close mobile menu when a nav link is clicked
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        closeMobileMenu();
      });
    });
  }

  // 2. Highlight Active Navigation Links based on URL
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll("nav a[data-nav-href], #mobile-menu a[data-nav-href]");

  navLinks.forEach((link) => {
    const target = link.getAttribute("data-nav-href") || "";
    const isHome =
      (target === "/" || target === "index.html") &&
      (currentPath === "/" || currentPath.endsWith("/index.html") || currentPath.endsWith("/ma-garment/") || currentPath === "");
    const isOther =
      target !== "/" &&
      target !== "index.html" &&
      (currentPath.includes(target) || currentPath.endsWith(target));

    if (isHome || isOther) {
      link.classList.remove("text-slate-600");
      link.classList.add("text-blue-700", "font-semibold");
    }
  });

  // 3. Floating WhatsApp Button Tooltip Close
  const waTooltipClose = document.getElementById("wa-tooltip-close");
  const waTooltip = document.getElementById("wa-tooltip");
  if (waTooltipClose && waTooltip) {
    waTooltipClose.addEventListener("click", function (e) {
      e.stopPropagation();
      waTooltip.style.display = "none";
    });
  }

  // 4. Desktop Catalogue Image Idle Preloader
  if (window.innerWidth >= 768 && window.PRODUCTS_DATA) {
    const isSaveData = navigator?.connection?.saveData;
    if (!isSaveData) {
      const scheduleWarmup = () => {
        window.PRODUCTS_DATA.forEach((prod) => {
          if (prod.image) {
            const img = new Image();
            img.src = prod.image;
          }
        });
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(scheduleWarmup, { timeout: 3000 });
      } else {
        setTimeout(scheduleWarmup, 1500);
      }
    }
  }
});

