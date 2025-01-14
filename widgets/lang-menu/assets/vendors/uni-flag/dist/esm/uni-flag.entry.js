import { r as registerInstance, h, g as getElement } from './index-b3cca1dd.js';
import { i as isEmptyString } from './is-0e9864e2.js';
import { u as uniGetCleanContent, U as UniTemplate } from './template-6496d8bf.js';

const flagCss = ".uni-flag svg{height:20px;box-shadow:0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12)}";

let UniFlagComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.square = false;
    this.round = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const UniFlagTag = !isEmptyString(name) ? `uni-flag-${name}` : null;
    return UniTemplate(h(UniFlagTag, { square: this.square || this.round, round: this.round, class: 'uni-flag' }, h("slot", null)));
  }
  get el() { return getElement(this); }
};
UniFlagComponent.style = flagCss;

export { UniFlagComponent as uni_flag };
