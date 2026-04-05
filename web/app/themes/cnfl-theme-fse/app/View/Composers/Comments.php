<?php

namespace App\View\Composers;

use Roots\Acorn\View\Composer;

class Comments extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.comments',
    ];

    /**
     * Determine if the comments are closed.
     */
    public function closed(): bool
    {
        return  ! comments_open() && get_comments_number() != '0' && post_type_supports( get_post_type(), 'comments' );
    }

    /**
     * The next comments link.
     */
    public function next(): ?string
    {
        if (  ! get_next_comments_link() ) {
            return null;
        }

        return get_next_comments_link(
            __( 'Newer comments &rarr;', 'wa' )
        );
    }

    /**
     * Determine if the comments are paginated.
     */
    public function paginated(): bool
    {
        return get_comment_pages_count() > 1 && get_option( 'page_comments' );
    }

    /**
     * The previous comments link.
     */
    public function previous(): ?string
    {
        if (  ! get_previous_comments_link() ) {
            return null;
        }

        return get_previous_comments_link(
            __( '&larr; Older comments', 'wa' )
        );
    }

    /**
     * Retrieve the comments.
     */
    public function responses(): ?string
    {
        if (  ! have_comments() ) {
            return null;
        }

        return wp_list_comments( [
            'style'      => 'ol',
            'short_ping' => true,
            'echo'       => false,
        ] );
    }

    /**
     * The comment title.
     */
    public function title(): string
    {
        return sprintf(
            /* translators: %1$s is replaced with the number of comments and %2$s with the post title */
            _nx( '%1$s response to &ldquo;%2$s&rdquo;', '%1$s responses to &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'wa' ),
            get_comments_number() === 1 ? _x( 'One', 'comments title', 'wa' ) : number_format_i18n( get_comments_number() ),
            get_the_title()
        );
    }
}
