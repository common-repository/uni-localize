import { r as registerInstance, h } from './index-9e85ced9.js';

let UniLangMenuListItemComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.selected = false;
    this.round = false;
  }
  render() {
    return (h("uni-list-item", { selected: this.selected, index: '-1' }, h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, h("uni-display", { inactive: true }, h("uni-list-item-graphic", { only: true }, h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, h("uni-flag", { round: this.round }))))), h("uni-list-item-text", null, this.name)));
  }
};

export { UniLangMenuListItemComponent as U };
