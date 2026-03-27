// Site Header Component
(function() {
  // ============================================
  // SITE CONFIGURATION - Edit these for new sites
  // ============================================
  var CONFIG = {
    siteName: 'Capital City Rescue Mission',
    donateUrl: 'https://give.capitalcityrescuemission.org/give',
    donateButtonText: 'Donate Now'
  };

  // Detect if we're in a subfolder by checking the script path
  var scripts = document.getElementsByTagName('script');
  var currentScript = scripts[scripts.length - 1];
  var basePath = currentScript.src.includes('/js/site-header.js') ? '' : '../';
  if (currentScript.src.includes('../js/')) basePath = '../';
  else if (currentScript.src.includes('js/')) basePath = '';

  // Build the header HTML
  var headerHTML = `
  <header class="site-header">
    <div class="header-inner">
      <a href="${basePath}index.html" class="logo">${CONFIG.siteName}</a>
      <button class="mobile-nav-toggle" aria-label="Toggle navigation">&#9776;</button>
      <nav class="main-nav">
        <div class="nav-left">
          <div class="nav-item">
            <a href="${basePath}about.html">About</a>
            <div class="dropdown">
              <a href="${basePath}about.html">Our Story</a>
              <a href="${basePath}leadership.html">Leadership</a>
              <a href="${basePath}financials.html">Financials</a>
              <a href="${basePath}stories.html">Stories</a>
              <a href="${basePath}contact.html">Contact</a>
            </div>
          </div>
          <div class="nav-item">
            <a href="${basePath}programs.html">Programs</a>
          </div>
          <div class="nav-item">
            <a href="${basePath}get-involved.html">Get Involved</a>
            <div class="dropdown">
              <a href="${basePath}get-involved.html#volunteer">Volunteer</a>
              <a href="${basePath}get-involved.html#events">Events</a>
              <a href="${basePath}get-involved.html#pray">Pray</a>
              <a href="${basePath}get-involved.html#subscribe">Subscribe</a>
              <a href="${basePath}get-involved.html#donate-goods">Donate Goods</a>
            </div>
          </div>
        </div>
        <div class="nav-right">
          <div class="nav-item">
            <a href="${basePath}get-help.html">Get Help</a>
          </div>
          <div class="nav-item">
            <a href="${basePath}give.html">Ways to Give</a>
          </div>
          <a href="${CONFIG.donateUrl}" class="btn btn-primary btn-small" target="_blank">${CONFIG.donateButtonText}</a>
        </div>
      </nav>
    </div>
  </header>
  `;

  // Find insertion point (after password gate script, before main content)
  var passwordScript = document.querySelector('script[src*="password-gate"]');
  if (passwordScript) {
    passwordScript.insertAdjacentHTML('afterend', headerHTML);
  } else {
    // Fallback: insert at start of body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }

  // Mobile nav toggle functionality
  document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.querySelector('.mobile-nav-toggle');
    var nav = document.querySelector('.main-nav');
    if (toggle && nav) {
      toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
      });
    }
  });
})();
