import domReady from '@wordpress/dom-ready';

import './modules/languages.jsx';
import './modules/gutenberg.jsx';

// Gutenberg blocks
//import '../blocks/core-button/index.jsx';
import '../blocks/language-container/index.jsx';
import '../blocks/language-selector/index.jsx';
import '../blocks/copyright-date-block/index.jsx';
import '../blocks/page-link-image/index.jsx';

domReady(() => {
  //console.log('editor')
});
