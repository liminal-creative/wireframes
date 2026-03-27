// Password Gate for Wireframe Preview
(function() {
  var PASS = 'ccrm2025';
  var SITE_NAME = 'Capital City Rescue Mission';

  // Check if already authenticated
  if (localStorage.getItem('wireframe_auth') === 'true') {
    return; // Already authenticated, don't show gate
  }

  // Create and inject the password gate HTML
  var gateHTML = `
    <div id="passwordGate" class="password-gate">
      <div class="password-form">
        <h2>Wireframe Preview</h2>
        <p class="site-name">for ${SITE_NAME}</p>
        <p>Enter password to view this site</p>
        <div class="password-input-wrapper">
          <input type="password" id="passwordInput" placeholder="Password" autofocus>
          <button type="button" class="password-toggle" aria-label="Show password">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        <button id="passwordSubmit">Enter</button>
        <p id="passwordError" class="error">Incorrect password</p>
      </div>
    </div>
  `;

  // Inject at start of body
  document.body.insertAdjacentHTML('afterbegin', gateHTML);

  // Get elements
  var gate = document.getElementById('passwordGate');
  var input = document.getElementById('passwordInput');
  var submitBtn = document.getElementById('passwordSubmit');
  var errorMsg = document.getElementById('passwordError');
  var toggleBtn = document.querySelector('.password-toggle');

  // Check password function
  function checkPassword() {
    if (input.value === PASS) {
      localStorage.setItem('wireframe_auth', 'true');
      gate.classList.add('hidden');
    } else {
      errorMsg.classList.add('show');
      input.value = '';
      input.focus();
    }
  }

  // Toggle password visibility
  function togglePassword() {
    input.type = input.type === 'password' ? 'text' : 'password';
  }

  // Event listeners
  submitBtn.addEventListener('click', checkPassword);
  toggleBtn.addEventListener('click', togglePassword);
  input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') checkPassword();
  });
})();
