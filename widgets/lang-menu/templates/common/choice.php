<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;
?>
<!-- CHOICE -->
<p>
    <uni-event-store-set listen="click" path="loc.form.choice" state="element">
        <input
                type="radio"
                id="uni-lang-menu-element"
                name="<?php echo esc_attr($this->get_field_name('choice')); ?>"
            <?php checked($choice == 'element'); ?>
                value="element"
                class="widefat">
    </uni-event-store-set>

    <label for="uni-lang-menu-element">
        <?php esc_attr_e('Options', 'uni_domain'); ?>
    </label>

    <uni-event-store-set listen="click" path="loc.form.choice" state="custom">
        <input
                type="radio"
                id="uni-lang-menu-custom"
                name="<?php echo esc_attr($this->get_field_name('choice')); ?>"
            <?php checked($choice == 'custom'); ?>
                value="custom"
                class="widefat">
    </uni-event-store-set>

    <label for="uni-lang-menu-custom">
        <?php esc_attr_e('Next Gen Customization', 'uni_domain'); ?>
    </label>
</p>

<uni-store-set path="loc.form.choice" state="<?php echo esc_attr($choice) ?>"></uni-store-set>