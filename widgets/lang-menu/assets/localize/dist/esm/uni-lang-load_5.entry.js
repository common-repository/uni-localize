import { r as registerInstance, h, c as Host } from './index-9e85ced9.js';
export { U as uni_lang_menu, b as uni_lang_menu_button, a as uni_lang_menu_shadow, f as uni_translate } from './translate.component-d30d62fc.js';
import './translate-rendered.template-b434723d.js';

let UniLangLoadComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    return (h(Host, null, h("uni-load-store", { multi: true, top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, path: this.languagesPath, url: this.url }), h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.languagesPath}[0]`, prop: 'state' }, h("uni-store-set", { top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, mode: 'init', path: this.activePath })), h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.translation`, prop: 'url' }, h("uni-load-store", { multi: true, top: this.top, shadow: this.shadow, frame: this.frame, mode: 'set', feature: this.feature, separator: this.separator, path: this.translatePath }))));
  }
};

export { UniLangLoadComponent as uni_lang_load };
