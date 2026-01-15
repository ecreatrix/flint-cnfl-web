<?php
namespace WA\App;

use Illuminate\Support\Facades\Vite;

function fr_lang_selected()
{
    // Safety checks, make changes if not admin and on fr version
    if ( is_admin() || ! isset( $_GET['lang'] ) ) {
        return false;
    }

    if ( 'fr' === untrailingslashit( $_GET['lang'] ) ) {
        return true;
    }
}

function enqueue_single_file( $handle, $filename, $dependencies = [], $set_type = false, $add_module = false )
{
    $details = asset_details( $filename );

    if ( Vite::isRunningHot() && ! $details['is_external'] && false ) {
        foreach ( $dependencies as $dependency ) {
            if (  ! wp_script_is( $dependency ) ) {
                wp_enqueue_script( $dependency );
            }
        }

        echo Vite::withEntryPoints( [
            $filename,
        ] )->toHtml();
    } else {
        $is_style_extension = in_array( pathinfo( $filename, PATHINFO_EXTENSION ), ['css', 'scss'], true );
        $is_style           = $set_type ? 'css' === $set_type : $is_style_extension;

        $enqueue_function = $is_style ? 'wp_enqueue_style' : 'wp_enqueue_script';

        $filetime = $details['path'] ? filemtime( $details['path'] ) : false;

        $enqueue_function(
            $handle,
            $details['uri'],
            $dependencies,
            $filetime,
             ! $is_style // In footer for scripts
        );
    }

    if ( $add_module ) {
        // Add module to allow for modern jsx
        add_filter( 'script_loader_tag', function ( $tag, $handle_check ) use ( $handle ) {
            if ( $handle !== $handle_check ) {
                return $tag;
            }

            return str_replace( ' src', ' type="module" src', $tag );
        }, 10, 2 );
    }

    return ['uri' => $details['uri'], 'uri_static' => $details['uri_static'], 'uri_hot' => $details['uri_hot']];
}

function enqueue_multiple_files( $entry_points )
{
    $uris = [];
    foreach ( $entry_points as $handle => $asset ) {
        $dependencies = array_key_exists( 'dependencies', $asset ) ? $asset['dependencies'] : [];
        $set_type     = array_key_exists( 'set_type', $asset ) ? $asset['set_type'] : false;
        $add_module   = array_key_exists( 'add_module', $asset ) ? $asset['add_module'] : false;

        $uris[$handle] = enqueue_single_file( $handle, $asset['filename'], $dependencies, $set_type, $add_module );
    }

    return $uris;
}

function asset_details( $filename )
{
    $hot         = Vite::isRunningHot();
    $is_external = ( strpos( $filename, 'http://' ) !== false ) || ( strpos( $filename, 'https://' ) !== false );

    $details = [
        'asset'      => [],
        'uri'        => $filename,
        'uri_static' => $filename,
        'uri_hot'    => $filename,
        'path'       => false,
    ];

    //Can't use vite alone because it won't add dependencies
    if (  ! $is_external ) {
        $asset = Asset( $filename );

        $details = [
            'asset'      => $asset,
            'uri'        => $hot ? Vite::asset( $filename ) : $asset->uri(),
            'uri_static' => $asset->uri(),
            'uri_hot'    => Vite::asset( $filename ),
            'path'       => $hot ? get_template_directory() . '/' . $filename : $asset->path(),
        ];
    }

    $details['is_external'] = $is_external;

    return $details;
}

function get_attachment_id( $filename )
{
    global $wpdb;

    $attachment = $wpdb->get_results( "SELECT post_id FROM $wpdb->postmeta WHERE meta_key = '_wp_attached_file' AND meta_value like'%$filename'", OBJECT );

    if ( $attachment && is_array( $attachment ) && [$attachment[0]] ) {
        $id = reset( $attachment[0] );
        return $id;

    }

    return false;
}
