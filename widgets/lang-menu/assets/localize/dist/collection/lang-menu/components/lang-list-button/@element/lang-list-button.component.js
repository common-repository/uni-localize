import { Component, h, Prop } from '@stencil/core';
import { UniTemplate } from '@uiwebkit/common';
export class UniLangListButtonComponent {
  constructor() {
    this.selected = false;
    this.mini = false;
    this.round = false;
  }
  render() {
    return UniTemplate(h("uni-selection", { inactive: !this.selected },
      h("uni-button", { pro: true, mode: this.mode },
        h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' },
          h("uni-display", { inactive: true },
            h("uni-button-icon", { only: true },
              h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' },
                h("uni-flag", { round: this.round }))))),
        h("uni-display", { inactive: this.mini },
          h("uni-button-label", null, this.name)))));
  }
  static get is() { return "uni-lang-list-button"; }
  static get properties() { return {
    "selected": {
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
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "mini": {
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
      "attribute": "mini",
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
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UniButtonMode",
        "resolved": "\"flat\" | \"outlined\" | \"raised\"",
        "references": {
          "UniButtonMode": {
            "location": "import",
            "path": "../../../models"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mode",
      "reflect": true
    },
    "flag": {
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
      "attribute": "flag",
      "reflect": true
    },
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
    }
  }; }
}
