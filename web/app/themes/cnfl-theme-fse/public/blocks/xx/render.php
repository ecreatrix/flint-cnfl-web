<?php
// resources/blocks/cnfl-hero/render.php

/**
 * @var array    $attributes The block attributes.
 * @var string   $content    The block inner HTML (if allowed).
 * @var WP_Block $block      The block instance.
 */

// Get the path to the blade file in this same directory
$template = __DIR__ . '/hero.blade.php';

// We use Sage's view() helper to render the Blade file
echo \Roots\view( $template, [
    'attributes' => (object) $attributes,
    'block'      => $block,
] )->render();
