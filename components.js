/* ==========================================================================
   JAX DRYER VENT CLEANERS — SHARED COMPONENTS
   File: components.js

   PURPOSE:
   This file injects the navigation bar and footer into every page automatically.
   Instead of copying nav/footer HTML into each page, each page loads this script
   and it fills in two placeholder divs:
     <div id="nav-placeholder">  ← gets the nav bar
     <div id="footer-placeholder"> ← gets the footer

   WHY THIS APPROACH:
   If you need to update the phone number in the nav, or add a new page link,
   you only edit THIS FILE — and it updates on every page automatically.
   Without this, you'd have to edit 5 separate HTML files for every change.

   HOW TO MAKE COMMON CHANGES:
   ─────────────────────────────────────────────────────────────────────────
   Change phone number:       Find "904-555-1234" below and update both the
                              display text AND the href="tel:9045551234" (no dashes)

   Add a new page to nav:     Copy one of the <li> items in navHTML and update
                              the href and link text

   Change "Book now" button:  Find class="nav-cta" in navHTML and edit text or href

   Update business name:      Find "JAX DRYER VENT CLEANERS" in navHTML/footerHTML

   Update copyright year:     Footer uses new Date().getFullYear() — auto-updates
   ─────────────────────────────────────────────────────────────────────────
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── ACTIVE PAGE DETECTION ──────────────────────────────────────────────
     Reads the current page filename from the URL so we can highlight
     the correct nav link as "active" (shown in white instead of soft teal).
     Example: if URL is /services.html, currentPage = "services.html"
     Falls back to "index.html" for the root URL (e.g. jaxdryerventcleaners.com/)
     ────────────────────────────────────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* ── HELPER: active style ────────────────────────────────────────────────
     Returns inline style to make the active nav link appear white.
     Usage: activeIf('services.html') → returns 'style="color:white"' if current
     ────────────────────────────────────────────────────────────────────── */
  function activeIf(page) {
    return currentPage === page ? 'style="color:white; border-bottom: 2px solid #1A6BB5; padding-bottom: 2px;"' : '';
  }


  /* ========================================================================
     NAVIGATION HTML
     ─────────────────────────────────────────────────────────────────────────
     STRUCTURE:
     <nav>                         ← sticky dark bar (styled in style.css nav {})
       <div class="nav-inner">     ← constrains content to --max width
         logo (left side)
         <ul class="nav-links">   ← nav items (hidden on mobile)
           page links
           phone number            ← class="nav-phone" (gold)
           "Book now" button       ← class="nav-cta" (gold pill)
         </ul>
         hamburger icon            ← shown only on mobile
       </div>
     </nav>
     <div id="mobile-nav">         ← mobile dropdown (toggled by hamburger)

     NOTE ON JOBBER BOOKING LINK:
     The "Book now" button and all "Book online" links point to contact.html.
     Once Jobber is set up, you can optionally change these to link directly
     to your Jobber booking URL instead of the contact page:
     href="https://clienthub.getjobber.com/client_hubs/YOUR-ID/public/work_request/new_request"
     ─────────────────────────────────────────────────────────────────────────
     ======================================================================== */
  const navHTML = `

    <!-- ── UTILITY BAR (above main nav) ── -->
    <!-- Shows email, service area, and phone at a glance -->
    <!-- TO CHANGE: update email address, service area text, and phone number below -->
    <div style="background:#0A1C47; padding:7px 0; font-size:13px;">
      <div style="max-width:1100px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
        <div style="display:flex; gap:20px; align-items:center;">
          <!-- Email address -->
          <a href="mailto:dan@jaxdvc.com" style="color:#A8C4E8; text-decoration:none;">
            &#9993;&nbsp; dan@jaxdvc.com
          </a>
          <!-- Service area -->
          <span style="color:#A8C4E8;">
            &#128205;&nbsp; Serving Jacksonville &amp; Northeast Florida
          </span>
        </div>
        <!-- Phone number — most important action -->
        <a href="tel:9045551234" style="color:#C8581A; font-weight:700; text-decoration:none;">
          Call Now: 904-555-1234
        </a>
      </div>
    </div>

    <nav>
      <div class="nav-inner">

        <!-- ── LOGO (left side of nav) — uses transparent PNG ── -->
        <!-- TO CHANGE: swap Logo_v2_transparent_background.png for a new file -->
        <a href="index.html" class="nav-logo">
          <img
            src="Images/Logo transparent background.png"
            alt="Jax Dryer Vent Cleaners logo"
            style="height:64px; width:auto; display:block;"
          />
        </a>

        <!-- ── DESKTOP NAV LINKS (hidden on mobile) ── -->
        <ul class="nav-links">

          <!-- Page links — active page shows in white with underline -->
          <li><a href="index.html"    ${activeIf('index.html')}>Home</a></li>
          <li><a href="services.html" ${activeIf('services.html')}>Services &amp; Pricing</a></li>
          <li><a href="areas.html"    ${activeIf('areas.html')}>Service Areas</a></li>
          <li><a href="gallery.html"  ${activeIf('gallery.html')}>Gallery</a></li>
          <li><a href="blog.html"     ${activeIf('blog.html')}>Blog</a></li>
          <li><a href="about.html"    ${activeIf('about.html')}>About</a></li>
          <li><a href="contact.html"  ${activeIf('contact.html')}>Contact</a></li>

          <!-- Phone number — links directly to call on mobile -->
          <!-- TO CHANGE: update display text AND the tel: number (no dashes) -->
          <li><a href="tel:9045551234" class="nav-phone">904-555-1234</a></li>

          <!-- "Book now" CTA button — links to contact page with Jobber form -->
          <!-- JOBBER UPGRADE: replace href with your Jobber direct booking URL -->
          <li><a href="contact.html" class="nav-cta">Book now</a></li>

        </ul>

        <!-- ── MOBILE HAMBURGER ICON ── -->
        <!-- Clicking this shows/hides the #mobile-nav dropdown -->
        <!-- Styled in style.css section 4 — toggle logic is toggleMobileNav() below -->
        <div class="nav-hamburger" onclick="toggleMobileNav()">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>
    </nav>

    <!-- ── MOBILE DROPDOWN MENU ── -->
    <!-- Hidden by default — shown when hamburger is clicked -->
    <!-- Stacked vertically for easy thumb tapping on phones -->
    <div id="mobile-nav" style="display:none; background:#0D2358; padding:16px 24px; border-top: 1px solid #0A1C47;">
      <ul style="list-style:none; display:flex; flex-direction:column; gap:16px;">
        <li><a href="index.html"    style="color:#A8C4E8; font-size:15px; font-weight:600;">Home</a></li>
        <li><a href="services.html" style="color:#A8C4E8; font-size:15px; font-weight:600;">Services &amp; Pricing</a></li>
        <li><a href="areas.html"    style="color:#A8C4E8; font-size:15px; font-weight:600;">Service Areas</a></li>
        <li><a href="gallery.html"  style="color:#A8C4E8; font-size:15px; font-weight:600;">Gallery</a></li>
        <li><a href="blog.html"     style="color:#A8C4E8; font-size:15px; font-weight:600;">Blog</a></li>
        <li><a href="about.html"    style="color:#A8C4E8; font-size:15px; font-weight:600;">About</a></li>
        <li><a href="contact.html"  style="color:#A8C4E8; font-size:15px; font-weight:600;">Contact</a></li>
        <!-- Phone shown large in orange on mobile nav — most important action -->
        <li><a href="tel:9045551234" style="color:#C8581A; font-size:20px; font-weight:700;">904-555-1234</a></li>
        <!-- Book now button in mobile menu -->
        <li>
          <a href="contact.html" style="display:inline-block; background:#C8581A; color:#ffffff; padding:10px 20px; border-radius:6px; font-weight:700; font-size:14px;">
            Book now
          </a>
        </li>
      </ul>
    </div>`;


  /* ========================================================================
     FOOTER HTML
     ─────────────────────────────────────────────────────────────────────────
     STRUCTURE:
     <footer>
       business name
       tagline
       nav links
       phone number
       copyright line (year auto-generates)
     </footer>

     TO CHANGE: edit the strings below. The copyright year uses
     new Date().getFullYear() which always shows the current year automatically.
     ─────────────────────────────────────────────────────────────────────────
     ======================================================================== */
  const footerHTML = `
    <footer>
      <div class="footer-inner">

        <!-- Business name in teal -->
        <div class="footer-name">JAX DRYER VENT CLEANERS</div>

        <!-- Tagline / positioning statement -->
        <div style="font-size:12px; color:#A8C4E8; margin-bottom:8px;">
          Jacksonville's dedicated dryer vent specialist &middot; Commercial &amp; Residential
        </div>

        <!-- Footer nav links -->
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="areas.html">Service Areas</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>

        <!-- Phone number in gold — clickable to call -->
        <!-- TO CHANGE: update display text AND tel: number (no dashes) -->
        <a href="tel:9045551234" style="color:#C8581A; font-size:16px; font-weight:700; display:block; margin: 8px 0;">
          904-555-1234
        </a>

        <!-- Copyright line — year updates automatically each year -->
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} Jax Dryer Vent Cleaners LLC
          &middot; Jacksonville, FL
          &middot; Licensed &amp; Insured
          &middot; <a href="index.html" style="color:inherit;">jaxdryerventcleaning.com</a>
        </div>

      </div>
    </footer>`;


  /* ── INJECT NAV AND FOOTER INTO THE PAGE ──────────────────────────────────
     Finds the placeholder divs in each HTML file and fills them with the HTML
     strings defined above. This runs on every page that loads components.js.
     ────────────────────────────────────────────────────────────────────── */

  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (navEl)    navEl.innerHTML    = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

});


/* ==========================================================================
   MOBILE NAV TOGGLE FUNCTION
   Called by onclick="toggleMobileNav()" on the hamburger icon.
   Shows the mobile dropdown menu when hidden, hides it when visible.
   ========================================================================== */
function toggleMobileNav() {
  const mobileNav = document.getElementById('mobile-nav');
  if (!mobileNav) return;
  mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
}
