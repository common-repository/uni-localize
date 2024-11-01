<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;

include 'esc-func/lang-menu.php';
include 'esc-func/translate.php';

/**
 * Widget Name: Uni Lang Menu
 * Description: Language selection dropdown menu with 100% customization.
 * Author: UiWebKit
 * Author URI: https://uiwebkit.com
 * Documentation: https://uiwebkit.com/wgt/loc/2/menu/
 */
class UiWebKit_Lang_Menu_Widget extends WP_Widget
{

    /**
     * Register widget with WordPress.
     */
    function __construct()
    {
        parent::__construct(
            'uni_lang_menu_widget', // Base ID
            __('Uni Lang Menu', 'uni_domain'), // Name
            array(
                'description' => __('UiWebKit Localization language selection menu on 100% customizable HTML Custom Elements & Web Components', 'uni_domain'),
                'help' => 'https://uiwebkit.com/wgt/loc/2/menu/',
            ) // Args
        );
    }

    /**
     * Front-end display of widget.
     *
     * @param array $args Widget arguments.
     * @param array $instance Saved values from database.
     * @see WP_Widget::widget()
     *
     */
    public function widget($args, $instance)
    {
        echo $args['before_widget'];

        $shadowed = !empty($instance['isolated']) && $instance['isolated'] == '1' ? '-shadow' : '';
		$linear = !empty($instance['linear']) && $instance['linear'] == '1' ? 'true' : 'false';
        $mini = !empty($instance['mini']) && $instance['mini'] == '1' ? 'true' : 'false';
        $round = !empty($instance['round']) && $instance['round'] == '1' ? 'true' : 'false';
        $routing = !empty($instance['routing']) && $instance['routing'] == '1' ? 'true' : 'false';
        $type = !empty($instance['type']) ? $instance['type'] : 'local';
        $selector = !empty($instance['selector']) ? $instance['selector'] : 'div';
        ?>

        <uni-render inactive="<?php echo esc_attr($instance['agree'] == '1' ? 'false' : 'true') ?>">
            <template>
                <uni-render inactive="<?php echo esc_attr($instance['choice'] != 'element' ? 'true' : 'false') ?>">
                    <template>
                    <!-- This script works only if Agree is true and choice is 'Options', so it is placed here instead of inline scripts  -->
                         <script>
                            var wrapper = document.createElement("uni-translate");
                            document.body.querySelector("<?php echo esc_attr($selector) ?>").parentNode.appendChild(wrapper);
                            wrapper.appendChild(document.body.querySelector("<?php echo esc_attr($selector) ?>"));
                        </script>

                        <uni-router frame shadow></uni-router>

                        <uni-lang-menu<?php echo esc_attr($shadowed) ?>
                                url="<?php echo esc_attr($instance['list']) ?>"
								linear="<?php echo esc_attr($linear) ?>"
                                mini="<?php echo esc_attr($mini) ?>"
                                round="<?php echo esc_attr($round) ?>"
                                routing="<?php echo esc_attr($routing) ?>"
                                route="<?php echo esc_attr($instance['route']) ?>"
                                type="<?php echo esc_attr($type) ?>"
                        ></uni-lang-menu<?php echo esc_attr($shadowed) ?>>
                    </template>
                </uni-render>

                <uni-render inactive="<?php echo esc_attr($instance['choice'] != 'custom' ? 'true' : 'false') ?>">
                    <template>
                        <?php echo wp_kses($instance['custom'], uiwebkit_escape_html()) ?>
                        <?php echo wp_kses($instance['translate'], uiwebkit_esc_translate()) ?>
                    </template>
                </uni-render>
            </template>
        </uni-render>

        <?php

        echo $args['after_widget'];
    }

    /**
     * Back-end widget form.
     *
     * @param array $instance Previously saved values from database.
     * @see WP_Widget::form()
     *
     */
    public function form($instance)
    {
        $agree = !empty($instance['agree']) && $instance['agree'] == '1' ? 'true' : 'false';
        $choice = !empty($instance['choice']) ? $instance['choice'] : 'element';

        $list = !empty($instance['list']) ? $instance['list'] : plugin_dir_url(__FILE__).'i18n/list.php';
        $shadowed = !empty($instance['isolated']) && $instance['isolated'] == '1' ? 'true' : 'false';
		$linear = !empty($instance['linear']) && $instance['linear'] == '1' ? 'true' : 'false';
        $mini = !empty($instance['mini']) && $instance['mini'] == '1' ? 'true' : 'false';
        $round = !empty($instance['round']) && $instance['round'] == '1' ? 'true' : 'false';
        $routing = !empty($instance['routing']) && $instance['routing'] == '1' ? 'true' : 'false';
        $route = !empty($instance['route']) ? $instance['route'] : 'lang';
        $type = !empty($instance['type']) ? $instance['type'] : 'local';
        $selector = !empty($instance['selector']) ? $instance['selector'] : 'div';

        $custom = !empty($instance['custom'])
            ? $instance['custom']
            : file_get_contents(plugin_dir_path(__FILE__).'/templates/customization/customize.php');

        $translate = !empty($instance['translate'])
            ? $instance['translate']
            : file_get_contents(plugin_dir_path(__FILE__).'/templates/customization/translate.php');

        include 'templates/common/preview.php';
        include 'templates/common/agree.php';
        ?>

        <uni-store-display path="loc.form.agree">

        <?php
        include 'templates/common/choice.php';
        include 'templates/options/element.php';
        include 'templates/customization/custom.php';
        ?>

        </uni-store-display>

        <?php
    }

    /**
     * Sanitize widget form values as they are saved.
     *
     * @param array $new_instance Values just sent to be saved.
     * @param array $old_instance Previously saved values from database.
     *
     * @return array Updated safe values to be saved.
     * @see WP_Widget::update()
     *
     */
    public function update($new_instance, $old_instance)
    {
        $instance = array();

        $instance['agree'] = (!empty($new_instance['agree'])) ? sanitize_text_field($new_instance['agree']) : '';
        $instance['choice'] = (!empty($new_instance['choice'])) ? sanitize_text_field($new_instance['choice']) : '';

        $instance['isolated'] = (!empty($new_instance['isolated'])) ? sanitize_text_field($new_instance['isolated']) : '';
        $instance['list'] = (!empty($new_instance['list'])) ? sanitize_text_field($new_instance['list']) : '';
		$instance['linear'] = (!empty($new_instance['linear'])) ? sanitize_text_field($new_instance['linear']) : '';
        $instance['mini'] = (!empty($new_instance['mini'])) ? sanitize_text_field($new_instance['mini']) : '';
        $instance['round'] = (!empty($new_instance['round'])) ? sanitize_text_field($new_instance['round']) : '';
        $instance['routing'] = (!empty($new_instance['routing'])) ? sanitize_text_field($new_instance['routing']) : '';
        $instance['route'] = (!empty($new_instance['route'])) ? sanitize_text_field($new_instance['route']) : '';
        $instance['type'] = (!empty($new_instance['type'])) ? sanitize_text_field($new_instance['type']) : '';
        $instance['selector'] = (!empty($new_instance['selector'])) ? sanitize_text_field($new_instance['selector']) : '';

        $instance['custom'] = (!empty($new_instance['custom'])) ? $new_instance['custom'] : '';
        $instance['translate'] = (!empty($new_instance['translate'])) ? $new_instance['translate'] : '';

        return $instance;
    }
}
