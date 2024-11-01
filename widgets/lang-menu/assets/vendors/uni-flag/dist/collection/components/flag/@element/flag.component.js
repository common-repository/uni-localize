import { Component, Element, h, Prop } from '@stencil/core';
import { isEmptyString, uniGetCleanContent, UniTemplate } from '@uiwebkit/common';
export class UniFlagComponent {
  constructor() {
    this.square = false;
    this.round = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const UniFlagTag = !isEmptyString(name) ? `uni-flag-${name}` : null;
    return UniTemplate(h(UniFlagTag, { square: this.square || this.round, round: this.round, class: 'uni-flag' },
      h("slot", null)));
  }
  static get is() { return "uni-flag"; }
  static get originalStyleUrls() { return {
    "$": ["../styles/flag.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../styles/flag.css"]
  }; }
  static get properties() { return {
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": true
    },
    "square": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "square",
      "reflect": true,
      "defaultValue": "false"
    },
    "round": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "round",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "el"; }
}
