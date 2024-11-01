import { r as registerInstance, h } from './index-9e85ced9.js';

const UniTemplate = function (template) {
  return template;
};

let UniLangListButtonComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = false;
    this.mini = false;
    this.round = false;
  }
  render() {
    return UniTemplate(h("uni-selection", { inactive: !this.selected }, h("uni-button", { pro: true, mode: this.mode }, h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, h("uni-display", { inactive: true }, h("uni-button-icon", { only: true }, h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, h("uni-flag", { round: this.round }))))), h("uni-display", { inactive: this.mini }, h("uni-button-label", null, this.name)))));
  }
};

export { UniLangListButtonComponent as U };
