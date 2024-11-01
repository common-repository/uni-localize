<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;
?>
<!-- AGREE -->
<p style="margin: 0;" class="uni-loc-agree">
    <uni-event-store-get listen="click" path="loc.form.agree" prop="state">
        <uni-modify action="toggle" prop="state">
            <uni-store-set path="loc.form.agree"></uni-store-set>

            <input
                    type="checkbox"
                    id="<?php echo esc_attr($this->get_field_id('agree')); ?>"
                    name="<?php echo esc_attr($this->get_field_name('agree')); ?>"
                <?php checked($instance['agree'] == '1'); ?>
                    value="1"
                    class="widefat">
        </uni-modify>
    </uni-event-store-get>

    <label for="<?php echo esc_attr($this->get_field_id('agree')); ?>">
        <?php esc_attr_e('I agree using for FREE with «Powered by U» (see in the lower right corner)', 'uni_domain'); ?>
    </label>
</p>

<p style="font-size: 14px; margin: 0;">
    <a href='mailto:contact@uiwebkit.com?subject=Remove "Powered By U" for UI Dev Kit and Material Design Kit&body=Hello, my domain name is [your_domain]. Please generate and send me a special code for it. Thank you!' style="font-size: 14px">
        <?php esc_attr_e('Contact us', 'uni_domain'); ?>
    </a>

    <?php esc_attr_e('if you want to remove it forever', 'uni_domain'); ?>
</p>

<uni-store-set path="loc.form.agree" state="<?php echo esc_attr($agree) ?>"></uni-store-set>

<style>
    .uni-loc-agree uni-event,
    .uni-loc-agree uni-store-get,
    .uni-loc-agree uni-modify {
        display: inline-block;
        height: 0;
    }
</style>
