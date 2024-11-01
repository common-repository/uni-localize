import { Component, h, Prop } from '@stencil/core';
export class UniLangMenuButtonComponent {
  constructor() {
    this.mini = false;
    this.round = false;
    this.top = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.activePath = 'loc.active';
  }
  render() {
    return (h("uni-button", { pro: true, mode: this.mode },
      h("uni-button-icon", { only: true },
        h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.flag`, selector: 'uni-flag', prop: 'name' },
          h("uni-flag", { round: this.round }))),
      h("uni-display", { inactive: this.mini },
        h("uni-button-label", null,
          h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.name`, selector: 'uni-render', prop: 'value' },
            h("uni-render", { text: true })))),
      h("uni-drop-down", null)));
  }
  static get is() { return "uni-lang-menu-button"; }
  static get properties() { return {
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
    "top": {
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
      "attribute": "top",
      "reflect": true,
      "defaultValue": "false"
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "UniStoreType",
        "resolved": "\"local\" | \"memory\" | \"session\"",
        "references": {
          "UniStoreType": {
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
      "attribute": "type",
      "reflect": true,
      "defaultValue": "'memory'"
    },
    "feature": {
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
      "attribute": "feature",
      "reflect": true,
      "defaultValue": "'uni.store'"
    },
    "separator": {
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
      "attribute": "separator",
      "reflect": true,
      "defaultValue": "'.'"
    },
    "activePath": {
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
      "attribute": "active-path",
      "reflect": true,
      "defaultValue": "'loc.active'"
    }
  }; }
}
