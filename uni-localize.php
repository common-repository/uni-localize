<?php
/**
 * Uni Localize
 *
 * @package     UniLocalize
 * @author      UiWebKit
 * @copyright   2021 UiWebKit
 * @license     GPL-2.0-or-later
 *
 * @wordpress-plugin
 * Plugin Name: @Uni Localize
 * Plugin URI:  https://uiwebkit.com/wgt/loc/1/
 * Description: UiWebKit Localization with the fully customizable Language Menu Widget and the custom translations, without any additional constant payments for automatic translations. You can customize it for the all 100% and absolutely legally by "Next Gen Customization" widget option!
 * Version:     2.0.0
 * Author:      UiWebKit
 * Author URI:  https://uiwebkit.com
 * License:     GPL v2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */
 
 // Exit if accessed directly
 if (!defined('ABSPATH')) exit;
 
// Load Scripts
require_once(plugin_dir_path(__FILE__).'/widgets/lang-menu/add-scripts.php');

// Load Class
require_once(plugin_dir_path(__FILE__).'/widgets/lang-menu/lang-menu.php');

// Register Widget
function uiwebkit_register_lang_menu() {
	register_widget('UiWebKit_Lang_Menu_Widget');
}

// Hook in function
add_action('widgets_init', 'uiwebkit_register_lang_menu');
