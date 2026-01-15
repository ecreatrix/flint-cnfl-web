<?php

/**
 * Theme setup.
 */

namespace WA\App;

use Illuminate\Support\Facades\Vite;

/**
 * Enable Full Site Editing (FSE) features.
 * * This "switches on" the Appearance > Editor menu and allows you to
 * use HTML templates and template parts within the Sage ecosystem.
 */
add_action( 'after_setup_theme', function () {
    // Required to show the 'Editor' menu in the admin sidebar
    add_theme_support( 'block-templates' );

    // Allows you to manage 'Template Parts' (Headers/Footers) in the Editor
    add_theme_support( 'block-template-parts' );
}, 20 );

/**
 * Register the theme assets and localization.
 */
add_action( 'after_setup_theme', function () {
    // Change 'wa' to 'wa'
    load_theme_textdomain( 'wa', get_template_directory() . '/resources/lang' );
}, 20 );

/**
 * Map the theme.json path to the Vite build directory.
 * * Since Sage 11 compiles the final theme.json into the public folder,
 * we must tell WordPress to look there instead of the theme root.
 */
add_filter( 'theme_file_path', function ( $path, $file ) {
    // Only target the theme.json file
    if ( 'theme.json' === $file ) {
        // Define the path where Vite outputs the compiled file
        $compiled = public_path( 'build/assets/theme.json' );

        // If the compiled file exists, return its path to WordPress
        if ( file_exists( $compiled ) ) {
            return $compiled;
        }
    }

    // Otherwise, fall back to the default path
    return $path;
}, 10, 2 );

/**
 * Remove default admin menu items.
 */
add_action( 'admin_menu', function () {
    remove_menu_page( 'edit.php' );          // Removes 'Posts'
    remove_menu_page( 'edit-comments.php' ); // Removes 'Comments'
} );

/**
 * Completely disable comment support for post types.
 */
add_action( 'init', function () {
    // Remove comments support from Posts and Pages
    remove_post_type_support( 'post', 'comments' );
    remove_post_type_support( 'page', 'comments' );

    // Close comments on the frontend
    add_filter( 'comments_open', '__return_false', 20, 2 );
    add_filter( 'pings_open', '__return_false', 20, 2 );
} );

/**
 * Remove comments from the Admin Bar.
 */
add_action( 'wp_before_admin_bar_render', function () {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu( 'comments' );
} );

/**
 * Register FSE features.
 */
add_action( 'after_setup_theme', function () {
    // Enable the "Template Editor" for pages/posts
    add_theme_support( 'block-templates' );

    // Enable the "Template Parts" UI in the Admin
    add_theme_support( 'block-template-parts' );
}, 20 );

/**
 * Use the generated theme.json file.
 *
 * @return string
 */
add_filter( 'theme_file_path', function ( $path, $file ) {
    return 'theme.json' === $file ? public_path( 'build/assets/theme.json' ) : $path;
}, 10, 2 );

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action( 'after_setup_theme', function () {
    /**
     * Register the navigation menus.
     *
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus( [
        'primary_navigation' => __( 'Primary Navigation', 'wa' ),
    ] );

    /**
     * Disable the default block patterns.
     *
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support( 'core-block-patterns' );

    /**
     * Enable plugins to manage the document title.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support( 'title-tag' );

    /**
     * Enable post thumbnail support.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    /**
     * Enable responsive embed support.
     *
     * @link https://developer.wordpress.org/block-editor/how-to-guides/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support( 'responsive-embeds' );

    /**
     * Enable HTML5 markup support.
     *
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support( 'html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style',
    ] );
}, 20 );
