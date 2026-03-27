// Site Footer Component
(function() {
  // ============================================
  // SITE CONFIGURATION - Edit these for new sites
  // ============================================
  var CONFIG = {
    siteName: 'Capital City Rescue Mission',
    tagline: 'Giving Hope. Transforming Lives.',
    address: '259 South Pearl Street, Albany, NY 12202',
    phone: '(518) 462-0459',
    phoneLink: 'tel:5184620459',
    copyrightYear: '2026'
  };

  // Detect if we're in a subfolder
  var scripts = document.getElementsByTagName('script');
  var currentScript = scripts[scripts.length - 1];
  var basePath = '';
  if (currentScript.src.includes('../js/')) basePath = '../';
  else if (currentScript.src.includes('js/')) basePath = '';

  // Build the footer HTML (footer only - help bar is separate)
  var footerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h4>About</h4>
          <ul>
            <li><a href="${basePath}about.html">Our Story</a></li>
            <li><a href="${basePath}leadership.html">Leadership</a></li>
            <li><a href="${basePath}financials.html">Financials</a></li>
            <li><a href="${basePath}stories.html">Stories</a></li>
            <li><a href="${basePath}faq.html">FAQ</a></li>
            <li><a href="${basePath}contact.html">Contact</a></li>
            <li><a href="#">Newsletters</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><a href="${basePath}programs.html#emergency">Emergency Services</a></li>
            <li><a href="${basePath}programs.html#recovery">Recovery Programs</a></li>
            <li><a href="${basePath}programs.html#support">Support Services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li><a href="${basePath}get-involved.html#volunteer">Volunteer</a></li>
            <li><a href="${basePath}get-involved.html#events">Events</a></li>
            <li><a href="${basePath}get-involved.html#pray">Pray</a></li>
            <li><a href="${basePath}get-involved.html#subscribe">Subscribe</a></li>
            <li><a href="${basePath}careers.html">Careers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Give</h4>
          <ul>
            <li><a href="${basePath}give.html">Give Online</a></li>
            <li><a href="${basePath}give.html#monthly">Give Monthly</a></li>
            <li><a href="${basePath}give.html#legacy">Legacy Giving</a></li>
            <li><a href="${basePath}get-involved.html#donate-goods">Donate Goods</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-tagline">${CONFIG.tagline}</div>
        <div class="footer-contact">
          ${CONFIG.address} | ${CONFIG.phone}
        </div>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a> | &copy; ${CONFIG.copyrightYear} ${CONFIG.siteName}
        </div>
      </div>
    </div>
  </footer>

  <!-- Mobile Help Bar -->
  <div class="mobile-help-bar">
    <a href="${CONFIG.phoneLink}">
      <div class="help-text">
        <strong>Need Help?</strong>
        ${CONFIG.phone}
      </div>
      <span class="help-cta">Call Now</span>
    </a>
  </div>
  `;

  // Insert at end of body (footer and help bar always at bottom)
  document.body.insertAdjacentHTML('beforeend', footerHTML);
})();
