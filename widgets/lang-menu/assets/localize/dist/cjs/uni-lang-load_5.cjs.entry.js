'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-56216c78.js');
const translate_component = require('./translate.component-4aeed24b.js');
require('./translate-rendered.template-2b23f384.js');

let UniLangLoadComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.top = false;
    this.shadow = false;
    this.isShadow = false;
    this.frame = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.languagesPath = 'loc.languages';
    this.activePath = 'loc.active';
    this.translatePath = 'loc.translate';
  }
  render() {
    return (index.h(index.Host, null, index.h("uni-load-store", { multi: true, top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, path: this.languagesPath, url: this.url }), index.h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.languagesPath}[0]`, prop: 'state' }, index.h("uni-store-set", { top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, mode: 'init', path: this.activePath })), index.h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.translation`, prop: 'url' }, index.h("uni-load-store", { multi: true, top: this.top, shadow: this.shadow, frame: this.frame, mode: 'set', feature: this.feature, separator: this.separator, path: this.translatePath }))));
  }
};

exports.uni_lang_menu = translate_component.UniLangMenuComponent;
exports.uni_lang_menu_button = translate_component.UniLangMenuButtonComponent;
exports.uni_lang_menu_shadow = translate_component.UniLangMenuShadowComponent;
exports.uni_translate = translate_component.UniTranslateComponent;
exports.uni_lang_load = UniLangLoadComponent;
