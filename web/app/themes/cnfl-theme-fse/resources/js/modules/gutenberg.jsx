import domReady from '@wordpress/dom-ready';

import { unregisterBlockType, registerBlockStyle, unregisterBlockStyle, unregisterBlockVariation, getBlockType, getBlockTypes, getBlockStyle, getBlockVariations } from '@wordpress/blocks';
import { select, subscribe } from '@wordpress/data';

var allowedBlocks = [
	'core/paragraph',
	'core/image',
	'core/heading',
	'core/gallery',
	'core/list',
	'core/list-item',
	//'core/quote',
	//'core/accordion',
	//'core/accordion-item',
	//'core/accordion-heading',
	//'core/accordion-panel',
	//'core/archives',
	//'core/audio',
	'core/button',
	'core/buttons',
	//'core/calendar',
	//'core/categories',
	'core/code',
	'core/column',
	'core/columns',
	'core/cover',
	//'core/details',
	'core/embed',
	'core/file',
	'core/group',
	'core/html',
	//'core/math',
	//'core/latest-comments',
	//'core/latest-posts',
	'core/media-text',
	//'core/missing',
	//'core/more',
	//'core/nextpage',
	//'core/page-list',
	//'core/page-list-item',
	//'core/pattern',
	//'core/preformatted',
	//'core/pullquote',
	'core/block',
	//'core/rss',
	//'core/search',
	'core/separator',
	//'core/shortcode',
	//'core/social-link',
	//'core/social-links',
	'core/spacer',
	'core/table',
	//'core/tag-cloud',
	//'core/text-columns',
	//'core/verse',
	'core/video',
	//'core/footnotes',
	'core/navigation',
	'core/navigation-link',
	'core/navigation-submenu',
	'core/site-logo',
	'core/site-title',
	'core/site-tagline',
	//'core/query',
	//'core/template-part',
	//'core/avatar',
	//'core/post-title',
	//'core/post-excerpt',
	//'core/post-featured-image',
	//'core/post-content',
	//'core/post-author',
	//'core/post-author-name',
	//'core/post-comments-count',
	//'core/post-comments-link',
	//'core/post-date',
	//'core/post-terms',
	//'core/post-navigation-link',
	//'core/post-template',
	//'core/post-time-to-read',
	//'core/query-pagination',
	//'core/query-pagination-next',
	//'core/query-pagination-numbers',
	//'core/query-pagination-previous',
	//'core/query-no-results',
	//'core/query-total',
	//'core/read-more',
	//'core/comments',
	//'core/comment-author-name',
	//'core/comment-content',
	//'core/comment-date',
	//'core/comment-edit-link',
	//'core/comment-reply-link',
	//'core/comment-template',
	//'core/comments-title',
	//'core/comments-pagination',
	//'core/comments-pagination-next',
	//'core/comments-pagination-numbers',
	//'core/comments-pagination-previous',
	//'core/post-comments-form',
	'core/home-link',
	//'core/loginout',
	//'core/term-count',
	//'core/term-description',
	//'core/term-name',
	//'core/terms-query',
	//'core/term-template',
	//'core/query-title',
	//'core/post-author-biography',
	//'core/freeform',
	//'core/legacy-widget',
	//'core/widget-group',
];

domReady(() => {    
	// Function to attempt unregistration
	const tryUnregister = () => {
		const allBlocks = select('core/blocks').getBlockTypes();

		if (allBlocks.length > 0 ) {
			showComments && console.group('--- BLOCK STYLES & VARIATIONS LIST ---');
			
			allBlocks.forEach((block) => {
				const styles = select('core/blocks').getBlockStyles( block.name ) || [];
				const variations = select('core/blocks').getBlockVariations( block.name ) || [];

				// If the block is on the allowed list then do the following
				if ( block.name.startsWith( 'core/' ) && allowedBlocks.indexOf( block.name ) !== -1 ) {
					showComments && console.group(`Block: ${block.name}`);

					if (styles.length > 0) {
						showComments && console.log('Styles:', styles.map(s => s.name));

						if( block.name === 'core/heading') {
							styles.forEach((style) => {
								showComments && console.log('Remove:', style.name)
								unregisterBlockStyle( block.name, style.name );
							})
						}

						if( block.name === 'core/paragraph') {
							styles.forEach((style) => {
								showComments && console.log('Remove:', style.name)
								unregisterBlockStyle( block.name, style.name );
							})
						}

						if( block.name === 'core/column') {
							styles.forEach((style) => {
								showComments && console.log('Remove:', style.name)
								unregisterBlockStyle( block.name, style.name );
							})
						}

						if( block.name === 'core/columns') {
							styles.forEach((style) => {
								if ( style.name.startsWith( 'section' ) ) {
									showComments && console.log('Remove:', style.name)
									unregisterBlockStyle( block.name, style.name );
								}
							})
						}
					}
					
					if (variations.length > 0) {
						showComments && console.log('Variations:', variations.map(v => v.name));

						if( block.name === 'core/embed') {
							variations.forEach((variation) => {
								showComments && console.log('Remove:', variation.name)
								if ( variation.name != 'youtube' ) {
									unregisterBlockVariation( block.name, variation.name );
								}
							})
						}
					}
					
					showComments && console.groupEnd();
				} else if ( block.name.startsWith( 'core/' ) ) {
					// remove all non allowed core blocks
					unregisterBlockType( block.name );
				}
			});
			
			showComments && console.groupEnd();

			return true; // Success
		}

		return false;
	};

	// If they aren't there yet, poll briefly
	const showComments = false
	if (!tryUnregister( showComments )) {
		const interval = setInterval(() => {
			if (tryUnregister( showComments )) {
				clearInterval(interval);
				//console.log('Cleanup successful.');
			}
		}, 100);

		// Stop trying after 5 seconds to prevent memory leaks
		setTimeout(() => clearInterval(interval), 5000);
	}
});
