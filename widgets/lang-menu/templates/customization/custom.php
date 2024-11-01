<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;
?>
<uni-store-display path="loc.form.choice" equal="custom">
    <p>
        <a href="https://uiwebkit.com/wgt/loc/2/menu/?type=custom" target="_blank" class="widefat"
           style="font-size: 16px; color: blue">
            <?php esc_attr_e('Open customization docs', 'uni_domain'); ?>
        </a>
    </p>

    <!-- LANGUAGE MENU -->
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('custom')); ?>">
            <?php esc_attr_e('Customize language menu', 'uni_domain'); ?>
        </label>

        <uni-event-store-set listen='input' path='loc.form.custom'>
        <textarea
                id="<?php echo esc_attr($this->get_field_id('custom')); ?>"
                name="<?php echo esc_attr($this->get_field_name('custom')); ?>"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                rows="12"
                cols="50"
                class="widefat"><?php echo esc_textarea($custom); ?></textarea>
        </uni-event-store-set>

        <uni-event listen='click' prop='activate'>
            <uni-store-get inactive path='loc.form.custom' prop='state'>
                <uni-store-set type='session' path='loc.form.custom'></uni-store-set>
            </uni-store-get>

            <uni-button pro mode='outlined' color="primary">
                <?php esc_attr_e('Save to Preview', 'uni_domain'); ?>
            </uni-button>
        </uni-event>
    </p>

    <!-- TRANSLATE -->
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('translate')); ?>">
            <?php esc_attr_e('Customize uni-translate', 'uni_domain'); ?>
        </label>

        <textarea
                id="<?php echo esc_attr($this->get_field_id('translate')); ?>"
                name="<?php echo esc_attr($this->get_field_name('translate')); ?>"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
                rows="4"
                cols="50"
                class="widefat"><?php echo esc_textarea($translate); ?></textarea>
    </p>
</uni-store-display>
