'use strict';

const index = require('./index-56216c78.js');

const UniTemplate = function (template) {
  return template;
};

let UniLangListButtonComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selected = false;
    this.mini = false;
    this.round = false;
  }
  render() {
    return UniTemplate(index.h("uni-selection", { inactive: !this.selected }, index.h("uni-button", { pro: true, mode: this.mode }, index.h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, index.h("uni-display", { inactive: true }, index.h("uni-button-icon", { only: true }, index.h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, index.h("uni-flag", { round: this.round }))))), index.h("uni-display", { inactive: this.mini }, index.h("uni-button-label", null, this.name)))));
  }
};

exports.UniLangListButtonComponent = UniLangListButtonComponent;
