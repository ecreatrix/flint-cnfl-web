<?php
/**
 * Plugin Name: PHP 8.5 Compatibility Bridge
 * Description: Fixes deprecation warnings for PDO constants in Roots Acorn.
 */

// We define a proxy constant or silence the specific file if we can't edit it.
// However, the cleanest way in Bedrock is to use the actual driver subclass
// introduced in PHP 8.4/8.5.

if ( PHP_VERSION_ID >= 80500 ) {
    // This tells PHP to ignore the specific deprecation message for this request
    set_error_handler( function ( $errno, $errstr ) {
        if ( str_contains( $errstr, 'PDO::MYSQL_ATTR_SSL_CA' ) ) {
            return true; // Silence this specific error
        }
        return false; // Let everything else through
    }, E_DEPRECATED );
}
