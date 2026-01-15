<?php

/**
 * Theme filters.
 */

namespace WA\App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter( 'excerpt_more', function () {
    return sprintf( ' &hellip; <a href="%s">%s</a>', get_permalink(), __( 'Continued', 'wa' ) );
} );

/**
 * One-time migration: Convert French Title blocks to Post Meta
 */
add_action( 'init', function () {
    // Only run if a specific trigger is in the URL to prevent constant execution
    if (  ! isset( $_GET['migrate_titles'] ) ) {
        return;
    }

    $pages = get_posts( ['post_type' => 'page', 'posts_per_page' => -1] );

    foreach ( $pages as $page ) {
        $blocks       = parse_blocks( $page->post_content );
        $new_blocks   = [];
        $french_title = get_post_meta( $page->ID, 'french_title', true );
        $fr_title     = get_post_meta( $page->ID, 'fr_title', true );

        //update_post_meta( $page->ID, 'fr_title', $french_title );
        //delete_post_meta( $page->ID, 'french_title' );

        echo "<br>";
    }

    echo 'Migration complete. Please delete this code from setup.php.';
    //exit;
} );
