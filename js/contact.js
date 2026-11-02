/**
 * MA Garments - Contact & Wholesale Enquiry Form (Vanilla JavaScript)
 * Handles:
 * - Query parameter parsing (?product=...)
 * - Dynamic population of product interest dropdown
 * - Client-side validation
 * - Instant WhatsApp redirection & confirmation state
 */

document.addEventListener("DOMContentLoaded", function () {
  const enquiryForm = document.getElementById("enquiry-form");
  const successCard = document.getElementById("enquiry-success-card");
  const productSelect = document.getElementById("productInterest");
  const errorBox = document.getElementById("enquiry-error-box");
  const errorText = document.getElementById("enquiry-error-text");
  const resetBtn = document.getElementById("submit-another-btn");

  // 1. Populate product options dynamically
  if (productSelect && window.PRODUCTS_DATA) {
    // Keep first generic option
    window.PRODUCTS_DATA.forEach((prod) => {
      const opt = document.createElement("option");
      opt.value = prod.name;
      opt.textContent = `${prod.name} (${prod.fabric})`;
      productSelect.appendChild(opt);
    });

    // 2. Parse URL parameter (?product=...)
    const urlParams = new URLSearchParams(window.location.search);
    const prefilledProduct = urlParams.get("product");
    if (prefilledProduct) {
      // Find matching option
      for (let i = 0; i < productSelect.options.length; i++) {
        if (
          productSelect.options[i].value.toLowerCase() ===
          prefilledProduct.toLowerCase()
        ) {
          productSelect.selectedIndex = i;
          break;
        }
      }
    }
  }

  // 3. Form submission & validation
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (errorBox) errorBox.classList.add("hidden");

      const fullName = document.getElementById("fullName")?.value.trim() || "";
      const companyName = document.getElementById("companyName")?.value.trim() || "";
      const phone = document.getElementById("phone")?.value.trim() || "";
      const email = document.getElementById("email")?.value.trim() || "";
      const productInterest = productSelect?.value || "All Track Pants Styles / General Inquiry";
      const cityState = document.getElementById("cityState")?.value.trim() || "";
      const message = document.getElementById("message")?.value.trim() || "";

      // Validation
      if (!fullName) {
        showError("Please enter your name.");
        return;
      }
      if (!companyName) {
        showError("Please provide your business or shop name.");
        return;
      }
      if (!phone || phone.length < 8) {
        showError("Please enter a valid phone or WhatsApp number for quotation delivery.");
        return;
      }
      if (!cityState) {
        showError("Please provide your city or state.");
        return;
      }

      // Build WhatsApp message text
      const formattedWhatsAppText = `*NEW WHOLESALE / SHOP ORDER ENQUIRY (MA Garments Sion)*
------------------------------------
*Buyer Name:* ${fullName}
*Business/Shop:* ${companyName}
*Phone:* ${phone}
*Email:* ${email || "N/A"}
*Location:* ${cityState || "Mumbai / Maharashtra"}
*Product Required:* ${productInterest}
*Notes:* ${message || "Please send wholesale price list and sample terms."}
------------------------------------
Sent via MA Garments Factory Portal`;

      const whatsappNumber = window.SITE_CONFIG?.contact?.whatsappNumber || "919326174220";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        formattedWhatsAppText
      )}`;

      // Update success card elements
      const successBuyer = document.getElementById("success-buyer-name");
      if (successBuyer) successBuyer.textContent = fullName;

      const successCompany = document.getElementById("success-company-name");
      if (successCompany) successCompany.textContent = companyName;

      const successWaBtn = document.getElementById("success-wa-btn");
      if (successWaBtn) successWaBtn.href = whatsappUrl;

      // Switch views
      enquiryForm.classList.add("hidden");
      if (successCard) successCard.classList.remove("hidden");
    });
  }

  function showError(msg) {
    if (errorBox && errorText) {
      errorText.textContent = msg;
      errorBox.classList.remove("hidden");
      errorBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      alert(msg);
    }
  }

  // 4. Submit Another Enquiry button
  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      if (enquiryForm) {
        enquiryForm.reset();
        enquiryForm.classList.remove("hidden");
      }
      if (successCard) {
        successCard.classList.add("hidden");
      }
      if (errorBox) {
        errorBox.classList.add("hidden");
      }
    });
  }
});

