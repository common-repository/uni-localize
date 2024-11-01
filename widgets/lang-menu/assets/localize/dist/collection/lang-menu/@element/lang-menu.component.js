import { Component, Prop, h, Host } from '@stencil/core';
import { UniLangMenuTemplate } from '../utils/lang-menu.template';
import { UniLangListTemplate } from '../utils/lang-list.template';
export class UniLangMenuComponent {
  constructor() {
    this.linear = false;
    this.mini = false;
    this.round = false;
    this.routing = false;
    this.route = 'lang';
    this.top = false;
    this.shadow = false;
    this.frame = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.languagesPath = 'loc.languages';
    this.activePath = 'loc.active';
    this.translatePath = 'loc.translate';
    this.only = false;
  }
  render() {
    if (this.only) {
      const classes = {
        'uni-lang-menu': !this.linear,
        'uni-lang-list': this.linear
      };
      return h(Host, { class: classes });
    }
    else {
      const { url, linear, mini, round, routing, route, mode, top, shadow, frame, type, feature, separator, languagesPath, activePath, translatePath, } = this;
      const data = { url, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath };
      const storeData = { top, shadow, frame, type, feature, separator };
      return this.linear ? UniLangListTemplate(data, storeData) : UniLangMenuTemplate(data, storeData);
    }
  }
  static get is() { return "uni-lang-menu"; }
  static get originalStyleUrls() { return {
    "$": ["../styles/lang-menu.css"]
  }; }
  static get styleUrls() { return {
    "$": ["../styles/lang-menu.css"]
  }; }
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
    "linear": {
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
      "attribute": "linear",
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
    "routing": {
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
      "attribute": "routing",
      "reflect": true,
      "defaultValue": "false"
    },
    "route": {
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
      "attribute": "route",
      "reflect": true,
      "defaultValue": "'lang'"
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
            "path": "../models"
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
            "path": "../models"
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
    },
    "only": {
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
      "attribute": "only",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
