import domReady from '@wordpress/dom-ready';

import { setBasePath } from '@awesome.me/webawesome/dist/webawesome.js';

// Import Web Awesome Components (Cherry-pick for performance)
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';

// Set the base path to your theme's public asset folder
setBasePath('/app/themes/cnfl-theme/public/build/');

// If you want to use the automated loader (less performant but easier):
// import { setBasePath } from '@awesome.me/webawesome/dist/webawesome.js';

import.meta.glob([
  '../images/**',
  '../fonts/**',
]);

domReady(() => {
  // This script listens for any wa-button click and checks for a language data attribute
  document.addEventListener('click', (event) => {
      const btn = event.target.closest('wa-button[data-onclick]');

      if (btn) {
          const lang = btn.getAttribute('data-onclick');
          //console.log(lang)
          window.location.search = `${lang}`;
      }
  });
});