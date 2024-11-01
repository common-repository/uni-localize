'use strict';

const index = require('./index-56216c78.js');
const translateRendered_template = require('./translate-rendered.template-2b23f384.js');

let UniTranslateShadowComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
      ? translateRendered_template.UniTranslateRenderedTemplate({ props }, index.h("slot", null))
      : translateRendered_template.UniTranslateTemplate({ props }, index.h("slot", null));
  }
  componentDidRender() {
    setTimeout(() => this.activate = false);
  }
};

exports.UniTranslateShadowComponent = UniTranslateShadowComponent;
