<?php

/**
 * Theme setup.
 */

namespace WA\App;

use Illuminate\Support\Facades\Vite;

add_filter( 'layout_block_setup', function ( $layout_instance, $block ) {
    // This ensures that even if the block is in a template part, the CSS classes for justification are registered.

    return $layout_instance;
}, 10, 2 );

// Used in Page-link-image block
add_filter( 'render_block', function ( $block_content, $block ) {
    if ( 'wa/image-link-tile' === $block['blockName'] && ! is_admin() ) {
        // Accessing the attributes
        $attrs    = $block['attrs'];
        $mediaId  = $attrs['mediaId'] ?? '';
        $mediaUrl = $attrs['mediaUrl'] ?? '';
        $linkUrl  = untrailingslashit( $attrs['linkUrl'] ) ?? '#';
        $linkId   = url_to_postid( $linkUrl ) ?? '';

        $title = get_the_title( $linkId );
        // Check for the ?lang=fr parameter
        if ( fr_lang_selected() ) {
            // Look for a French title in post meta
            $title = get_post_meta( $linkId ?: get_the_ID(), 'fr_title', true );
        }

        // Persist your language parameter logic
        if ( isset( $_GET['lang'] ) ) {
            $linkUrl = add_query_arg( 'lang', sanitize_text_field( untrailingslashit( $_GET['lang'] ) ), $linkUrl );
        }

        // Inject Dynamic Title
        $block_content = str_replace( 'DYNAMIC_TITLE_HOLDER', esc_html( $title ), $block_content );

        //var_dump( $block_content );

    }

    return $block_content;
}, 10, 2 );

/**
 * Modify Cover Block default attributes
 */
add_filter( 'register_block_type_args', function ( $args, $name ) {
    if ( 'core/cover' === $name ) {
        // Update the default value for minHeight
        $args['attributes']['minHeight']['default']     = 500;
        $args['attributes']['minHeightUnit']['default'] = 'px';
    }

    return $args;
}, 10, 2 );

/**
 * Force the core Navigation block to accept the custom language block as a child.
 */
add_filter( 'block_type_metadata', function ( $metadata ) {
    // We are looking specifically for the Navigation block's metadata
    if ( 'core/navigation' === $metadata['name'] ) {
        // Add your custom block name to the allowedChildren array
        if (  ! isset( $metadata['allowedBlocks'] ) ) {
            $metadata['allowedBlocks'] = [];
        }

        // Ensure our block is allowed
        if (  ! in_array( 'wa/language-selector', $metadata['allowedBlocks'] ) ) {
            $metadata['allowedBlocks'][] = 'wa/language-selector';
        }
    }
    return $metadata;
} );

/**
 * Register a custom block pattern category for Web Awesome components.
 */
add_action( 'init', function () {
    register_block_pattern_category( 'web-awesome', [
        'label' => __( 'Web Awesome Components', 'wa' ),
    ] );
} );

/**
 * Add custom gutenberg blocks
 */
add_action( 'init', function () {
    //wp_register_block_metadata_collection(
    //get_template_directory() . '/public/build/blocks',
    //get_template_directory() . '/public/build/blocks/blocks-manifest.php'
    //);

    $blocks_path = get_theme_file_path( '/public/blocks' );

    if ( is_dir( $blocks_path ) ) {
        foreach ( glob( $blocks_path . '/*/block.json' ) as $block_file ) {
            register_block_type( dirname( $block_file ) );
        }
    }
} );

add_action( 'wp_loaded', function () {
    // Common core styles include 'default', 'rounded', 'border'
    //unregister_block_style( 'core/group', 'default' );
    //unregister_block_style( 'core/group', 'rounded' );

    // Remove any for the Column block
    //unregister_block_style( 'core/column', 'default' );

    //unregister_block_variation( 'core/paragraph', 'stretchy-paragraph' );
    //unregister_block_variation( 'core/heading', 'stretchy-heading' );
    register_block_style(
        'Xcore/gallery',
        [
            'name'  => 'masonry',
            'label' => 'Masonry',
        ]
    );

    register_block_style(
        'core/separator',
        [
            'name'  => 'thin-border',
            'label' => 'Thin Line',
        ]
    );

    register_block_style(
        'core/columns',
        [
            'name'  => 'justify-space-between',
            'label' => 'Space Between',
        ]
    );

    //unregister_block_style( 'core/paragraph', 'subtitle' );
    // A high priority (100) ensures this runs after the style is registered
}, 100 );
add_filter( 'register_block_type_args', function ( $args, $name ) {
    if ( 'core/paragraph' === $name ) {
        // This removes variations like 'stretchy-paragraph'
        $args['variations'] = [];
        // This removes styles like 'subtitle'
        $args['styles'] = [];
    }
    return $args;
}, 20, 2 );
/**
 * Register the editor styles.
 *
 * @return void
 */
add_action( 'after_setup_theme', function () {
    /**
     * Enforce support for editor styles.
     */
    add_theme_support( 'editor-styles' );

    /**
     * Enqueue the editor-specific stylesheet.
     * * In Sage 11, we use the asset() helper to get the URI, but
     * add_editor_style() requires a path relative to the theme root.
     */
    //$editor_style = asset( 'styles/editor.css' )->relativePath( get_theme_file_path() );

    //add_editor_style( $editor_style );
}, 20 );
