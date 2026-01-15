<?php

/**
 * Theme filters.
 */

namespace WA\App;

/**
 * Register custom meta field for French Title
 */
add_action( 'init', function () {
    register_post_meta( 'page', 'fr_title', [
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
    ] );
} );

/**
 * Intercepts the block rendering process to filter visibility based on language.
 * * If the block is a 'language-container', it checks the 'lang' URL parameter.
 * If the parameter doesn't match the block's attribute, the content is discarded.
 *
 * @param string $block_content The HTML content of the block.
 * @param array  $block         The block settings and attributes.
 * @return string               The filtered HTML content.
 */
add_filter( 'render_block', function ( $block_content, $block ) {
    // Check if this is our custom language container
    if ( is_admin() || 'wa/language-container' !== $block['blockName'] ) {
        return $block_content;
    }

    // Identify the active language. In a production environment, you might replace $_GET with a function from a plugin or a session variable.
    $current_lang = isset( $_GET['lang'] ) ? untrailingslashit( $_GET['lang'] ) : 'en';
    $target_lang  = $block['attrs']['language'] ?? 'en';

    // Hide the block entirely if it's not the requested language
    if ( $current_lang !== $target_lang ) {
        return '';
    }

    return $block_content;
}, 10, 2 );

/**
 * Bilingual title logic
 * Intercepts the page title and replaces it with the French translation if the 'lang=fr' query parameter is present in the URL.
 * @param string $title The original post title.
 * @param int    $id    The post ID.
 * @return string       The translated or original title.
 */
add_filter( 'Xpre_get_document_title', function ( $title ) {
    if (  ! fr_lang_selected() ) {
        $fr_title = get_post_meta( get_the_ID(), 'fr_title', true );

        if (  ! empty( $fr_title ) ) {
            return $fr_title . ' - ' . get_bloginfo( 'name' );
        }
    }

    return $title;
}, 999 );

add_filter( 'the_title', function ( $title, $id = null ) {
    // Check for the ?lang=fr parameter
    if ( fr_lang_selected() ) {
        // Look for a French title in post meta
        $fr_title = get_post_meta( $id ?: get_the_ID(), 'fr_title', true );
        return $fr_title ?: $title;
    }

    return $title;
}, 10, 2 );

/**
 * Persist ?lang in the Home URL
 */
add_filter( 'Xhome_url', function ( $url ) {
    if ( fr_lang_selected() ) {
        $url = untrailingslashit( $url );
        var_dump( add_query_arg( 'lang', sanitize_text_field( $_GET['lang'] ), $url ) );
        return add_query_arg( 'lang', sanitize_text_field( $_GET['lang'] ), $url . '/' );
    }

    return $url;
}, 10, 1 );

add_filter( 'render_block_core/site-logo', function ( $block_content, $block, \WP_Block $instance ): string {
    // Safety checks, make changes if not admin and on fr version
    if (  ! fr_lang_selected() ) {
        return $block_content;
    }
    //var_dump( $block );
    if ( 'core/site-logo' === $block['blockName'] ) {
        $lang = sanitize_text_field( $_GET['lang'] );
        // Use a regex to find the href and inject the lang parameter
        $block_content = preg_replace_callback( '/href="([^"]+)"/', function ( $matches ) use ( $lang ) {
            $url = untrailingslashit( $matches[1] );

            // Only modify internal links (ignore # anchors and external sites)
            if ( strpos( $url, get_home_url() ) !== false && strpos( $url, '#' ) === false ) {
                $url = add_query_arg( 'lang', $lang, $url );
            }

            return 'href="' . $url . '"';
        }, $block_content );
    }

    return $block_content;
}, 10, 3 );

/**
 * Translate top menu names from En to Fr and add ?lang=fr when in french version
 */
add_filter( 'render_block_core/navigation-link', function ( $block_content, $block, \WP_Block $instance ): string {
    // Safety checks, make changes if not admin and on fr version
    if (  ! fr_lang_selected() ) {
        return $block_content;
    }

    if ( 'core/navigation-link' === $block['blockName'] ) {
        $id = $block['attrs']['id'] ?? null;
        $fr = get_post_meta( $id, 'fr_title', true );

        if ( $fr ) {
            $block['attrs']['label'] = $fr;
        }

        $lang = sanitize_text_field( $_GET['lang'] );
        // Use a regex to find the href and inject the lang parameter
        $block_content = preg_replace_callback( '/href="([^"]+)"/', function ( $matches ) use ( $lang ) {
            $url = untrailingslashit( $matches[1] );

            // Only modify internal links (ignore # anchors and external sites)
            if ( strpos( $url, get_home_url() ) !== false && strpos( $url, '#' ) === false ) {
                $url = add_query_arg( 'lang', $lang, $url );
            }

            return 'href="' . $url . '"';
        }, $block_content );

        $block_content = preg_replace_callback( '/wp-block-navigation-item__label">([^"]+)<\/span>/', function ( $matches ) use ( $fr ) {
            return 'wp-block-navigation-item__label">' . $fr . '</span>';
        }, $block_content );

        return $block_content;
    }
}, 10, 3 );
