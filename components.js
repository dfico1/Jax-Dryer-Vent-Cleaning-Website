/* JAX DRYER VENT CLEANING — components.js
   Injects the shared nav and footer into every page.
   Edit this file to update nav links, phone number, or footer content site-wide.
   To update phone: change "904-867-0816" and href="tel:9048670816" (no dashes) */

document.addEventListener('DOMContentLoaded', function () {

  // Highlight the active page's nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function activeIf(page) {
    return currentPage === page ? 'style="color:white; border-bottom: 2px solid white; padding-bottom: 2px;"' : '';
  }


  // ── NAV ──────────────────────────────────────────────────────────────────
  const navHTML = `

    <div style="background:#0A1C47; padding:7px 0; font-size:13px;">
      <div style="max-width:1100px; margin:0 auto; padding:0 24px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px;">
        <div style="display:flex; gap:20px; align-items:center;">
          <a href="mailto:dan@jaxdvc.com" style="color:#A8C4E8; text-decoration:none;">
            &#9993;&nbsp; dan@jaxdvc.com
          </a>
          <span style="color:#A8C4E8;">
            &#128205;&nbsp; Serving Jacksonville &amp; Northeast Florida
          </span>
        </div>
        <a href="tel:9048670816" style="color:#ffffff; font-weight:700; text-decoration:none;">
          Call Now: 904-867-0816
        </a>
      </div>
    </div>

    <nav>
      <div class="nav-inner">

        <a href="index.html" class="nav-logo">
          <img src="Images/logo_v3.png" alt="Jax Dryer Vent Cleaning logo" style="height:64px; width:auto; display:block;" />
        </a>

        <!-- Desktop nav links -->
        <ul class="nav-links">
          <li><a href="index.html"    ${activeIf('index.html')}>Home</a></li>
          <li><a href="services.html" ${activeIf('services.html')}>Services</a></li>
          <li><a href="gallery.html"  ${activeIf('gallery.html')}>Gallery</a></li>
          <li><a href="blog.html"     ${activeIf('blog.html')}>Blog</a></li>
          <li><a href="faq.html"      ${activeIf('faq.html')}>FAQ</a></li>
          <li><a href="about.html"    ${activeIf('about.html')}>About</a></li>
          <li><a href="contact.html"  ${activeIf('contact.html')}>Contact</a></li>
          <li><a href="contact.html" class="nav-cta">Book now</a></li>
        </ul>

        <!-- Mobile hamburger — hover to reveal dropdown -->
        <div class="nav-hamburger-wrap">
          <div class="nav-hamburger" id="hamburger-toggle">
            <span></span><span></span><span></span>
          </div>
          <div id="mobile-nav" class="mobile-nav-dropdown">
            <ul>
              <li><a href="index.html"    style="color:#A8C4E8; font-size:15px; font-weight:600;">Home</a></li>
              <li><a href="services.html" style="color:#A8C4E8; font-size:15px; font-weight:600;">Services</a></li>
              <li><a href="gallery.html"  style="color:#A8C4E8; font-size:15px; font-weight:600;">Gallery</a></li>
              <li><a href="blog.html"     style="color:#A8C4E8; font-size:15px; font-weight:600;">Blog</a></li>
              <li><a href="faq.html"      style="color:#A8C4E8; font-size:15px; font-weight:600;">FAQ</a></li>
              <li><a href="about.html"    style="color:#A8C4E8; font-size:15px; font-weight:600;">About</a></li>
              <li><a href="contact.html"  style="color:#A8C4E8; font-size:15px; font-weight:600;">Contact</a></li>
              <li><a href="tel:9048670816" style="color:#ffffff; font-size:20px; font-weight:700;">904-867-0816</a></li>
              <li>
                <a href="contact.html" style="display:inline-block; background:#ffffff; color:#0D2358; padding:10px 20px; border-radius:6px; font-weight:700; font-size:14px;">
                  Book now
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
    
    <!-- Sticky Mobile Call Button -->
    <a href="tel:9048670816" class="mobile-sticky-cta">
      <span>Call for Same-Day Service: 904-867-0816</span>
    </a>
    `;


  // ── FOOTER ───────────────────────────────────────────────────────────────
  // Copyright year auto-generates via new Date().getFullYear()
  const footerHTML = `
    <footer>
      <div class="footer-inner">
        <div class="footer-name">JAX DRYER VENT CLEANING</div>
        <div style="font-size:12px; color:#A8C4E8; margin-bottom:8px;">
          Jacksonville's dedicated dryer vent specialist &middot; Commercial &amp; Residential
        </div>
        <div class="footer-links">
          <a href="index.html">Home</a>
          <a href="services.html">Services</a>
          <a href="areas.html">Service Areas</a>
          <a href="about.html">About</a>
          <a href="contact.html">Contact</a>
        </div>
        <a href="tel:9048670816" style="color:#ffffff; font-size:16px; font-weight:700; display:block; margin: 8px 0;">
          904-867-0816
        </a>
        <div class="footer-copy">
          &copy; ${new Date().getFullYear()} Jax Dryer Vent Cleaning LLC
          &middot; Jacksonville, FL
          &middot; Licensed &amp; Insured
          &middot; <a href="index.html" style="color:inherit;">jaxdryerventcleaning.com</a>
        </div>
      </div>
    </footer>`;


  // Inject into placeholder divs on every page
  const navEl    = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  if (navEl)    navEl.innerHTML    = navHTML;
  if (footerEl) footerEl.innerHTML = footerHTML;

  // Mobile menu toggle logic
  const hamburger = document.getElementById('hamburger-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function(e) {
      mobileNav.classList.toggle('is-active');
      e.stopPropagation();
    });
  }
});
