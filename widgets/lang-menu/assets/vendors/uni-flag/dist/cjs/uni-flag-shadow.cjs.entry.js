'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ea73259.js');
const is = require('./is-3d628bd6.js');
const template = require('./template-447e4e4a.js');

const flagCss = ".uni-flag svg{height:20px;box-shadow:0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12)}";

let UniFlagComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.square = false;
    this.round = false;
  }
  render() {
    const name = this.name || template.uniGetCleanContent(this.el);
    const UniFlagTag = !is.isEmptyString(name) ? `uni-flag-${name}` : null;
    return template.UniTemplate(index.h(UniFlagTag, { square: this.square || this.round, round: this.round, class: 'uni-flag' }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
};
UniFlagComponent.style = flagCss;

exports.uni_flag_shadow = UniFlagComponent;
