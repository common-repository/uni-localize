<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;
?>
<style>
    .uni-lang-menu .uni-list {
        margin: 0!important;
    }
</style>

<!-- PREVIEW -->
<div>
    <span style="font-size: 16px">
        <?php esc_attr_e('Live preview:', 'uni_domain'); ?>
    </span>

    <uni-store-display path="loc.form.choice" equal="element">
        <uni-router frame shadow></uni-router>

        <uni-event-store-get type="session" path="loc.form.list" all selector=".uni-demo-lang-menu" prop="url">
            <uni-event-store-get path="loc.form.mini" all selector=".uni-demo-lang-menu" prop="mini">
                <uni-event-store-get path="loc.form.round" all selector=".uni-demo-lang-menu" prop="round">
                    <uni-event-store-get path="loc.form.routing" all selector=".uni-demo-lang-menu" prop="routing">
                        <uni-event-store-get type="session" path="loc.form.route" all selector=".uni-demo-lang-menu"
                                             prop="route">
							<uni-event-store-get path="loc.form.linear" all selector=".uni-demo-lang-menu" prop="linear">
								<uni-store-display path="loc.form.isolated" equal="false">
									<uni-lang-menu class="uni-demo-lang-menu" type="<?php echo esc_attr($type); ?>">
									</uni-lang-menu>
								</uni-store-display>

								<uni-store-display path="loc.form.isolated">
									<uni-lang-menu-shadow class="uni-demo-lang-menu" type="<?php echo esc_attr($type); ?>">
									</uni-lang-menu-shadow>
								</uni-store-display>
							</uni-event-store-get>
                        </uni-event-store-get>
                    </uni-event-store-get>
                </uni-event-store-get>
            </uni-event-store-get>
        </uni-event-store-get>
    </uni-store-display>

    <uni-store-display path="loc.form.choice" equal="custom">
        <uni-render-store multi scripts="true" type="session" path="loc.form.custom"></uni-render-store>
    </uni-store-display>

    <uni-translate style="font-size: 14px">This content is localized</uni-translate>
</div>

<uni-store-set type="session" path="loc.form.list" state="<?php echo esc_attr($list) ?>"></uni-store-set>
<uni-store-set path="loc.form.isolated" state="<?php echo esc_attr($shadowed) ?>"></uni-store-set>
<uni-store-set path="loc.form.linear" state="<?php echo esc_attr($linear) ?>"></uni-store-set>
<uni-store-set path="loc.form.mini" state="<?php echo esc_attr($mini) ?>"></uni-store-set>
<uni-store-set path="loc.form.round" state="<?php echo esc_attr($round) ?>"></uni-store-set>
<uni-store-set path="loc.form.routing" state="<?php echo esc_attr($routing) ?>"></uni-store-set>
<uni-store-set type="session" path="loc.form.route" state="<?php echo esc_attr($route) ?>"></uni-store-set>
<uni-store-set path="loc.form.type" state="<?php echo esc_attr($type) ?>"></uni-store-set>

<uni-store-set type="session" path="loc.form.custom" state="<?php echo esc_attr($custom) ?>"></uni-store-set>