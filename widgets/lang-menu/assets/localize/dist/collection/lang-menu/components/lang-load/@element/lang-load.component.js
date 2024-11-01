import { Component, h, Host, Prop } from '@stencil/core';
export class UniLangLoadComponent {
  constructor() {
    this.top = false;
    this.shadow = false;
    this.isShadow = false;
    this.frame = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.languagesPath = 'loc.languages';
    this.activePath = 'loc.active';
    this.translatePath = 'loc.translate';
  }
  render() {
    return (h(Host, null,
      h("uni-load-store", { multi: true, top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, path: this.languagesPath, url: this.url }),
      h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.languagesPath}[0]`, prop: 'state' },
        h("uni-store-set", { top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, mode: 'init', path: this.activePath })),
      h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.translation`, prop: 'url' },
        h("uni-load-store", { multi: true, top: this.top, shadow: this.shadow, frame: this.frame, mode: 'set', feature: this.feature, separator: this.separator, path: this.translatePath }))));
  }
  static get is() { return "uni-lang-load"; }
  static get properties() { return {
    "url": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "url",
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
    "shadow": {
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
      "attribute": "shadow",
      "reflect": true,
      "defaultValue": "false"
    },
    "isShadow": {
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
      "attribute": "is-shadow",
      "reflect": true,
      "defaultValue": "false"
    },
    "frame": {
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
      "attribute": "frame",
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
    "languagesPath": {
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
      "attribute": "languages-path",
      "reflect": true,
      "defaultValue": "'loc.languages'"
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
    },
    "translatePath": {
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
      "attribute": "translate-path",
      "reflect": true,
      "defaultValue": "'loc.translate'"
    }
  }; }
}
