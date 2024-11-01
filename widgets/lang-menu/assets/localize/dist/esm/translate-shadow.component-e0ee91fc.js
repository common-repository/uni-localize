import { r as registerInstance, h } from './index-9e85ced9.js';
import { U as UniTranslateRenderedTemplate, a as UniTranslateTemplate } from './translate-rendered.template-b434723d.js';

let UniTranslateShadowComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inactive = false;
    this.activate = false;
    this.rendered = false;
    this.top = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.path = 'loc.translate';
    this.bindstart = '((';
    this.bindend = '))';
  }
  render() {
    const { inactive, activate, top, feature, separator, type, path, bindstart, bindend } = this;
    const props = { inactive, activate, top, feature, separator, type, path, bindstart, bindend };
    return this.rendered
      ? UniTranslateRenderedTemplate({ props }, h("slot", null))
      : UniTranslateTemplate({ props }, h("slot", null));
  }
  componentDidRender() {
    setTimeout(() => this.activate = false);
  }
};

export { UniTranslateShadowComponent as U };
