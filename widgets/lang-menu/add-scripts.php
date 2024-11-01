<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;

function uiwebkit_add_scripts() {
    wp_enqueue_style('uni-localize-style', plugin_dir_url(__FILE__).'assets/styles.css');

	wp_enqueue_script('uni-flag', plugin_dir_url(__FILE__).'assets/vendors/uni-flag/dist/flag/flag.esm.js', [], '0.1.1');
	wp_enqueue_script('uni-pro', plugin_dir_url(__FILE__).'assets/vendors/uni-pro/dist/pro.esm.js', [], '1.0.4');
    wp_enqueue_script('uni-mat', plugin_dir_url(__FILE__).'assets/vendors/uni-mat/dist/mat.esm.js', [], '2.0.0-2');
    wp_enqueue_script('uni-udk', plugin_dir_url(__FILE__).'assets/vendors/uni-udk/dist/udk.esm.js', [], '2.0.0-13');
    wp_enqueue_script('uni-loc', plugin_dir_url(__FILE__).'assets/localize/dist/loc/loc.esm.js', [], '2.0.0-6');
}

function uiwebkit_add_type_module_to_script( $tag, $handle, $src ) {
    if ( 'uni-flag' === $handle || 'uni-pro' === $handle || 'uni-mat' === $handle || 'uni-udk' === $handle || 'uni-loc' === $handle ) {
        $tag = wp_get_script_tag(
             array(
                 'type' => 'module',
                 'src'  => esc_url( $src ),
             )
         );
    }

    return $tag;
}

add_filter( 'script_loader_tag', 'uiwebkit_add_type_module_to_script', 10, 3 );

add_action('admin_enqueue_scripts', 'uiwebkit_add_scripts');
add_action('wp_enqueue_scripts', 'uiwebkit_add_scripts');
