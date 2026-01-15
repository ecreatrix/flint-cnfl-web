<?php
/**
 * Title: WA Hero Section
 * Slug: cnfl/wa-hero
 * Categories: web-awesome
 */
?>
<section class="wp-block-group hero-banner">
    <wa-card>
        <h1 slot="header">Hello from Web Awesome!</h1>
        <p>This is a custom pattern registered via Sage and Sublime Text.</p>

        <wa-button slot="footer" variant="brand">
            <wa-icon slot="prefix" name="rocket" library="fa" class="fa-solid"></wa-icon>
            Explore Components
        </wa-button>
    </wa-card>
</section>
<style>
    .hero-banner {
        padding: var(--wa-spacing-2xl);
        background: var(--wa-color-neutral-50);
    }
</style>
