import { Component, Prop, h } from '@stencil/core';
export class UniLangMenuListItemComponent {
  constructor() {
    this.selected = false;
    this.round = false;
  }
  render() {
    return (h("uni-list-item", { selected: this.selected, index: '-1' },
      h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' },
        h("uni-display", { inactive: true },
          h("uni-list-item-graphic", { only: true },
            h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' },
              h("uni-flag", { round: this.round }))))),
      h("uni-list-item-text", null, this.name)));
  }
  static get is() { return "uni-lang-menu-list-item"; }
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
