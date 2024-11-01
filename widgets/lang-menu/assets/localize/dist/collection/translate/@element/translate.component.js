import { Component, h, Prop } from '@stencil/core';
import { UniTranslateTemplate } from '../utils/translate.template';
import { UniTranslateRenderedTemplate } from '../utils/translate-rendered.template';
export class UniTranslateComponent {
  constructor() {
    this.inactive = false;
    this.activate = false;
    this.rendered = false;
    this.top = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.path = 'loc.translate';
    this.bindstart = '((';
    this.bindend = '))';
  }
  render() {
    const { inactive, activate, top, feature, separator, type, path, bindstart, bindend } = this;
    const props = { inactive, activate, top, feature, separator, type, path, bindstart, bindend };
    return this.rendered
      ? UniTranslateRenderedTemplate({ props }, h("slot", null))
      : UniTranslateTemplate({ props }, h("slot", null));
  }
  componentDidRender() {
    setTimeout(() => this.activate = false);
  }
  static get is() { return "uni-translate"; }
  static get properties() { return {
    "inactive": {
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
      "attribute": "inactive",
      "reflect": true,
      "defaultValue": "false"
    },
    "activate": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "activate",
      "reflect": false,
      "defaultValue": "false"
    },
    "rendered": {
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
      "attribute": "rendered",
      "reflect": true,
      "defaultValue": "false"
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
            "path": "../../lang-menu"
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
    "path": {
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
      "attribute": "path",
      "reflect": true,
      "defaultValue": "'loc.translate'"
    },
    "bindstart": {
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
      "attribute": "bindstart",
      "reflect": true,
      "defaultValue": "'(('"
    },
    "bindend": {
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
      "attribute": "bindend",
      "reflect": true,
      "defaultValue": "'))'"
    }
  }; }
}
