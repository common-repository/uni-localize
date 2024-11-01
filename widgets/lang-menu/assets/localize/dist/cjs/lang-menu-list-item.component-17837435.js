'use strict';

const index = require('./index-56216c78.js');

let UniLangMenuListItemComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selected = false;
    this.round = false;
  }
  render() {
    return (index.h("uni-list-item", { selected: this.selected, index: '-1' }, index.h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, index.h("uni-display", { inactive: true }, index.h("uni-list-item-graphic", { only: true }, index.h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, index.h("uni-flag", { round: this.round }))))), index.h("uni-list-item-text", null, this.name)));
  }
};

exports.UniLangMenuListItemComponent = UniLangMenuListItemComponent;
