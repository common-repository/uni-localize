<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;
?>

<uni-store-display path="loc.form.choice" equal="element">
    <p>
        <a href="https://uiwebkit.com/wgt/loc/2/menu/?type=element&api=true" target="_blank" class="widefat"
           style="font-size: 16px; color: blue">
            <?php esc_attr_e('Open options docs', 'uni_domain'); ?>
        </a>
    </p>

    <!-- LIST -->
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('list')); ?>" style="display: block">
            <?php esc_attr_e('Languages menu list url', 'uni_domain'); ?>

            <span style="color: red">
                <?php esc_attr_e('(*required)', 'uni_domain'); ?>
            </span>
        </label>

        <uni-event-store-set listen='input' path='loc.form.list'>
            <input style="display: inline-block; width: 70%;"
                   type="text"
                   id="<?php echo esc_attr($this->get_field_id('list')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('list')); ?>"
                   value="<?php echo esc_attr($list); ?>"
                   class="widefat">
        </uni-event-store-set>

        <uni-event listen='click' prop='activate'>
            <uni-store-get inactive path='loc.form.list' prop='state'>
                <uni-store-set type='session' path='loc.form.list'></uni-store-set>
            </uni-store-get>

            <uni-button pro mode='outlined' color="primary">
                <?php esc_attr_e('Save to Preview', 'uni_domain'); ?>
            </uni-button>
        </uni-event>
    </p>

    <!-- ISOLATED -->
    <p>
        <uni-event-store-get listen="click" path="loc.form.isolated" prop="state">
            <uni-modify action="toggle" prop="state">
                <uni-store-set path="loc.form.isolated"></uni-store-set>
                <input
                        type="checkbox"
                        id="<?php echo esc_attr($this->get_field_id('isolated')); ?>"
                        name="<?php echo esc_attr($this->get_field_name('isolated')); ?>"
                    <?php checked($instance['isolated'] == '1'); ?>
                        value="1"
                        class="widefat">

                <label for="<?php echo esc_attr($this->get_field_id('isolated')); ?>">
                    <?php esc_attr_e('Isolated', 'uni_domain'); ?>
                    <?php esc_attr_e('(always renders correctly)', 'uni_domain'); ?>
                </label>
            </uni-modify>
        </uni-event-store-get>
    </p>
	
	<!-- LINEAR -->
    <p>
        <uni-event-store-get listen="click" path="loc.form.linear" prop="state">
            <uni-modify action="toggle" prop="state">
                <uni-store-set path="loc.form.linear"></uni-store-set>

                <input
                        type="checkbox"
                        id="<?php echo esc_attr($this->get_field_id('linear')); ?>"
                        name="<?php echo esc_attr($this->get_field_name('linear')); ?>"
                    <?php checked($instance['linear'] == '1'); ?>
                        value="1"
                        class="widefat">

                <label for="<?php echo esc_attr($this->get_field_id('linear')); ?>">
                    <?php esc_attr_e('Linear', 'uni_domain'); ?>
                </label>
            </uni-modify>
        </uni-event-store-get>
    </p>

    <!-- MINI -->
    <p>
        <uni-event-store-get listen="click" path="loc.form.mini" prop="state">
            <uni-modify action="toggle" prop="state">
                <uni-store-set path="loc.form.mini"></uni-store-set>

                <input
                        type="checkbox"
                        id="<?php echo esc_attr($this->get_field_id('mini')); ?>"
                        name="<?php echo esc_attr($this->get_field_name('mini')); ?>"
                    <?php checked($instance['mini'] == '1'); ?>
                        value="1"
                        class="widefat">

                <label for="<?php echo esc_attr($this->get_field_id('mini')); ?>">
                    <?php esc_attr_e('Mini', 'uni_domain'); ?>
                </label>
            </uni-modify>
        </uni-event-store-get>
    </p>

    <!-- ROUND -->
    <p>
        <uni-event-store-get listen="click" path="loc.form.round" prop="state">
            <uni-modify action="toggle" prop="state">
                <uni-store-set path="loc.form.round"></uni-store-set>
                <input
                        type="checkbox"
                        id="<?php echo esc_attr($this->get_field_id('round')); ?>"
                        name="<?php echo esc_attr($this->get_field_name('round')); ?>"
                    <?php checked($instance['round'] == '1'); ?>
                        value="1"
                        class="widefat">

                <label for="<?php echo esc_attr($this->get_field_id('round')); ?>">
                    <?php esc_attr_e('Round', 'uni_domain'); ?>
                </label>
            </uni-modify>
        </uni-event-store-get>
    </p>

    <!-- ROUTING -->
    <p>
        <uni-event-store-get listen="click" path="loc.form.routing" prop="state">
            <uni-modify action="toggle" prop="state">
                <uni-store-set path="loc.form.routing"></uni-store-set>
                <input
                        type="checkbox"
                        id="<?php echo esc_attr($this->get_field_id('routing')); ?>"
                        name="<?php echo esc_attr($this->get_field_name('routing')); ?>"
                    <?php checked($instance['routing'] == '1'); ?>
                        value="1"
                        class="widefat">

                <label for="<?php echo esc_attr($this->get_field_id('routing')); ?>">
                    <?php esc_attr_e('Routing', 'uni_domain'); ?>
                </label>
            </uni-modify>
        </uni-event-store-get>
    </p>

    <!-- ROUTE -->
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('route')); ?>" style="display: block">
            <?php esc_attr_e('Route search param name', 'uni_domain'); ?>
        </label>

        <uni-event-store-set listen='input' path='loc.form.route'>
            <input style="display: inline-block; width: 70%;"
                   type="text"
                   id="<?php echo esc_attr($this->get_field_id('route')); ?>"
                   name="<?php echo esc_attr($this->get_field_name('route')); ?>"
                   value="<?php echo esc_attr($route); ?>"
                   class="widefat">
        </uni-event-store-set>

        <uni-event listen='click' prop='activate'>
            <uni-store-get inactive path='loc.form.route' prop='state'>
                <uni-store-set type='session' path='loc.form.route'></uni-store-set>
            </uni-store-get>

            <uni-button pro mode='outlined' color="primary">
                <?php esc_attr_e('Save to Preview', 'uni_domain'); ?>
            </uni-button>
        </uni-event>
    </p>

    <!-- TYPE -->
    <p>
        <strong style="font-size: 14px">
            <?php esc_attr_e('Choose the Storage type:', 'uni_domain'); ?>
        </strong>

        <uni-event-store-set listen="click" path="loc.form.type" state="local">
            <input
                    type="radio"
                    id="uni-lang-menu-type-local"
                    name="<?php echo esc_attr($this->get_field_name('type')); ?>"
                <?php checked($type == 'local'); ?>
                    value="local"
                    class="widefat">

            <label for="uni-lang-menu-type-local">
                <?php esc_attr_e('local', 'uni_domain'); ?>
            </label>
        </uni-event-store-set>

        <uni-event-store-set listen="click" path="loc.form.type" state="session">
            <input
                    type="radio"
                    id="uni-lang-menu-type-session"
                    name="<?php echo esc_attr($this->get_field_name('type')); ?>"
                <?php checked($type == 'session'); ?>
                    value="session"
                    class="widefat">

            <label for="uni-lang-menu-type-session">
                <?php esc_attr_e('session', 'uni_domain'); ?>
            </label>
        </uni-event-store-set>

        <uni-event-store-set listen="click" path="loc.form.type" state="memory">
            <input
                    type="radio"
                    id="uni-lang-menu-type-memory"
                    name="<?php echo esc_attr($this->get_field_name('type')); ?>"
                <?php checked($type == 'memory'); ?>
                    value="memory"
                    class="widefat">

            <label for="uni-lang-menu-type-memory">
                <?php esc_attr_e('memory', 'uni_domain'); ?>
            </label>
        </uni-event-store-set>
    </p>

    <!-- TRANSLATE SELECTOR -->
    <p>
        <label for="<?php echo esc_attr($this->get_field_id('selector')); ?>">
            <?php esc_attr_e('Set CSS', 'uni_domain'); ?>
            <a href="https://www.w3schools.com/cssref/css_selectors.asp" target="_blank">selector</a>
            <?php esc_attr_e('for wrapping that element by uni-translate', 'uni_domain'); ?>
        </label>

        <input style="width: 50%;"
               type="text"
               id="<?php echo esc_attr($this->get_field_id('selector')); ?>"
               name="<?php echo esc_attr($this->get_field_name('selector')); ?>"
               value="<?php echo esc_attr($selector); ?>"
               class="widefat">
    </p>
</uni-store-display>
