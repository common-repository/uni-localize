import { Component, Element, Prop, Watch } from '@stencil/core';
import { uniSetDefaultStyles, uniSetRound } from '@uiwebkit/common';
import svg from '../../../../assets/svg/4x3/kr.svg';
import squareSvg from '../../../../assets/svg/1x1/kr.svg';
export class UniFlagKrComponent {
  constructor() {
    this.square = false;
    this.round = false;
  }
  onSquare(newValue) {
    this.el.innerHTML = newValue ? squareSvg : svg;
  }
  onRound(newValue) {
    uniSetRound(this.el, newValue);
  }
  componentWillLoad() {
    this.el.innerHTML = this.square ? squareSvg : svg;
    uniSetDefaultStyles(this.el);
    uniSetRound(this.el, this.round);
  }
  static get is() { return "uni-flag-kr"; }
  static get properties() { return {
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
  static get watchers() { return [{
      "propName": "square",
      "methodName": "onSquare"
    }, {
      "propName": "round",
      "methodName": "onRound"
    }]; }
}
