<?php
// Exit if accessed directly
if (!defined('ABSPATH')) exit;

function uiwebkit_map_default_attrs($attrs)
{
    return array_merge($attrs, array(
            'id' => array(),
            'class' => array(),
            'style' => array(),
        )
    );
}

function uiwebkit_escape_html()
{
    return array_map('uiwebkit_map_default_attrs', array(
        'ul' => array(),
        'ol' => array(),
        'li' => array(),
        'button' => array(),
        'template' => array(),
        'i' => array(),

        'uni-router' => array(
            'shadow' => array(),
            'frame' => array(),
            'listen' => array(),
            'dispatch' => array(),
            'selector' => array(),
            'tag-prevent' => array(),
        ),
        'uni-route' => array(
            'inactive' => array(),
            'any' => array(),
            'exact' => array(),
            'path' => array(),
            'no-path' => array(),
            'params' => array(),
            'no-params' => array(),
            'all' => array(),
            'select' => array(),
            'prop' => array(),
            'value' => array(),
        ),
        'uni-router-link' => array(
            'activate' => array(),
            'ext' => array(),
            'path' => array(),
            'params' => array(),
            'no-params' => array(),
            'prevent' => array(),
            'reload' => array(),
        ),
        'uni-modify' => array(
            'inactive' => array(),
            'activate' => array(),
            'activate-next' => array(),
            'state' => array(),
            'action' => array(),
            'value' => array(),
            'all' => array(),
            'selector' => array(),
            'prop' => array(),
            'bindstart' => array(),
            'bindend' => array(),
        ),
        'uni-store-set' => array(
            'inactive' => array(),
            'activate' => array(),
            'top' => array(),
            'shadow' => array(),
            'frame' => array(),
            'mode' => array(),
            'type' => array(),
            'feature' => array(),
            'path' => array(),
            'state' => array(),
            'dispatch' => array(),
        ),
        'uni-event-store-get' => array(
            'type' => array(),
            'path' => array(),
            'equal' => array(),
            'selector' => array(),
            'prop' => array(),
        ),
        'uni-load-store' => array(
            'multi' => array(),
            'mode' => array(),
            'path' => array(),
        ),
        'uni-load-repeat' => array(
            'strict' => array(),
            'url' => array(),
        ),
		'uni-repeat' => array(
            'strict' => array(),
			'state' => array(),
			'value' => array(),
        ),
        'uni-render' => array(
            'text' => array(),
        ),

        'uni-lang-menu' => array(
            'only' => array(),
			'url' => array(),
			'linear' => array(),
        ),
        'uni-menu' => array(),
        'uni-menu-surface' => array(),

        'uni-button' => array(
            'pro' => array(),
			'mode' => array(),
        ),
        'uni-button-icon' => array(
            'only' => array(),
            'name' => array(),
        ),
        'uni-button-label' => array(),

        'uni-flag' => array(
            'round' => array(),
			'name' => array(),
        ),

        'uni-list-wrap' => array(
            'pro' => array(),
        ),
        'uni-list-item' => array(),
        'uni-list-item-graphic' => array(
            'only' => array(),
        ),
        'uni-list-item-text' => array(),
        'uni-select-dropdown-icon' => array(),
        'uni-drop-down' => array(),
		'uni-selection' => array(
            'inactive' => array(),
        ),
		'uni-lang-load' => array(
            'url' => array(),
			'top' => array(),
			'shadow' => array(),
			'frame' => array(),
			'type' => array(),
			'feature' => array(),
			'separator' => array(),
        ),
        'uni-license' => array(
            'ui-dev-kit' => array(),
            'material-design-kit' => array(),
        ),
    ));
}
