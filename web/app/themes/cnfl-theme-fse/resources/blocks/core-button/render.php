<?php
/**
 * Safe replacement of core/button with Web Awesome wa-button.
 * * This version is compatible with WordPress 6.2 through 6.9+.
 */
add_filter( 'render_block_core/button', function ( $block_content, $block ) {
    // Initialize the processor
    $processor = new \WP_HTML_Tag_Processor( $block_content );

    // Find the anchor (<a>) or button tag inside the wrapper
    if ( $processor->next_tag( ['tag_name' => 'a'] ) || $processor->next_tag( ['tag_name' => 'button'] ) ) {
        // Extract necessary attributes
        $href    = $processor->get_attribute( 'href' ) ?: '';
        $target  = $processor->get_attribute( 'target' );
        $rel     = $processor->get_attribute( 'rel' );
        $classes = $processor->get_attribute( 'class' ) ?: '';

        // Map WordPress Style Variations to Web Awesome Variants
        $variant = 'neutral';
        if ( str_contains( $classes, 'is-style-outline' ) ) {
            $variant = 'outline';
        }

        // Get the inner text (the button label)
        // We use strip_tags to ensure no nested <span> tags interfere
        $label = strip_tags( $block_content );

        // Construct the Web Awesome component
        // Note: wa-button automatically handles 'href' as a link
        $output = sprintf(
            '<!-- %s --><wa-button variant="%s" appearance="accent" size="medium" href="%s" %s %s>%s</wa-button>',
            time(),
            esc_attr( $variant ),
            esc_url( $href ),
            $target ? 'target="' . esc_attr( $target ) . '"' : '',
            $rel ? 'rel="' . esc_attr( $rel ) . '"' : '',
            esc_html( $label )
        );

        return $output;
    }

    if ( str_contains( $classes, 'is-style-wa-ghost' ) ) {
        $tags->set_attribute( 'variant', 'ghost' );
    }

    return $block_content;
}, 10, 2 );

/**
 * Register Web Awesome button variations.
 */
add_action( 'init', function () {
    register_block_style( 'core/button', [
        'name'  => 'wa-ghost',
        'label' => __( 'Ghost (WA)', 'wa' ),
    ] );
} );
