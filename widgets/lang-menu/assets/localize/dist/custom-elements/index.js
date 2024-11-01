import { h, Fragment, HTMLElement, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath, setPlatformOptions } from '@stencil/core/internal/client';

function uniLangItemRoutingLiteral(data, storeData) {
  const { linear, mini, round, route, mode, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;
  return `<uni-router-link params='${route}=(( lang ))'>
         <uni-event-store-get
           top='${top}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}.lang'
           equal='(( lang ))'
           selector='${linear ? 'uni-lang-list-button' : 'uni-lang-menu-list-item'}'
           prop='selected'
         >
           ${linear
    ? `<uni-lang-list-button mode='${mode}' mini='${mini}' round='${round}' flag='(( flag ))' name='(( name ))'/>`
    : `<uni-lang-menu-list-item round='${round}' flag='(( flag ))' name='(( name ))'/>`}
         </uni-event-store-get>
       </uni-router-link>

       <uni-route params='${route}=(( lang ))' prop='activate'>
         <uni-store-set
           inactive
           top='${top}'
           shadow='${isShadow}'
           frame='${frame}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}'
           state='(( uniself ))'
         />
       </uni-route>`;
}

function uniLangItemStoreLiteral(data, storeData) {
  const { linear, mini, round, mode, activePath, isShadow } = data;
  const { top, frame, type, feature, separator } = storeData;
  return `<uni-event-store-set
         listen='click'
         top='${top}'
         shadow='${isShadow}'
         frame='${frame}'
         type='${type}'
         feature='${feature}'
         separator='${separator}'
         path='${activePath}'
         state='(( uniself ))'
       >
         <uni-event-store-get
           top='${top}'
           type='${type}'
           feature='${feature}'
           separator='${separator}'
           path='${activePath}.lang'
           equal='(( lang ))'
           selector='${linear ? 'uni-lang-list-button' : 'uni-lang-menu-list-item'}'
           prop='selected'
         >
           ${linear
    ? `<uni-lang-list-button mode='${mode}' mini='${mini}' round='${round}' flag='(( flag ))' name='(( name ))'/>`
    : `<uni-lang-menu-list-item round='${round}' flag='(( flag ))' name='(( name ))'/>`}
         </uni-event-store-get>
       </uni-event-store-set>`;
}

const UniLangMenuTemplate = function (data, storeData) {
  const { url, mini, round, mode, routing, route, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;
  return (h(Fragment, null,
    h("uni-menu", { selector: 'uni-menu-surface', class: 'uni-lang-menu' },
      h("uni-lang-menu-button", { mini: mini, round: round, mode: mode, top: top, type: type, feature: feature, separator: separator, activePath: activePath }),
      h("uni-menu-surface", null,
        h("uni-list-wrap", { pro: true },
          h("ul", null,
            h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: languagesPath, prop: 'state' },
              h("uni-repeat", { strict: true, value: routing
                  ? uniLangItemRoutingLiteral({ route, round, activePath, isShadow }, storeData)
                  : uniLangItemStoreLiteral({ round, activePath, isShadow }, storeData) })))))),
    h("uni-lang-load", { url: url, top: top, shadow: shadow, isShadow: isShadow, frame: frame, type: type, feature: feature, separator: separator, languagesPath: languagesPath, activePath: activePath, translatePath: translatePath })));
};

const UniLangListTemplate = function (data, storeData) {
  const { url, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;
  return (h(Fragment, null,
    h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: languagesPath, prop: 'state' },
      h("uni-repeat", { strict: true, class: 'uni-lang-list', value: routing
          ? uniLangItemRoutingLiteral({ linear, mini, round, route, mode, activePath, isShadow }, storeData)
          : uniLangItemStoreLiteral({ linear, mini, round, mode, activePath, isShadow }, storeData) })),
    h("uni-lang-load", { url: url, top: top, shadow: shadow, isShadow: isShadow, frame: frame, type: type, feature: feature, separator: separator, languagesPath: languagesPath, activePath: activePath, translatePath: translatePath })));
};

const langMenuCss$1 = ".uni-lang-menu .mdc-button{min-width:0;padding:0 5px}.uni-lang-menu .mdc-button__icon{margin:0 !important;margin-right:3px !important;width:auto !important}.uni-lang-menu uni-drop-down{width:10px;padding-bottom:3px}.uni-lang-menu uni-flag svg{width:auto !important}.uni-lang-menu .mdc-list-item__graphic{margin-right:0 !important}.uni-lang-menu uni-list-item-text{margin-left:5px}.uni-lang-list .mdc-button{min-width:0;padding:0 5px}.uni-lang-list .mdc-button__icon{margin:0 !important;width:auto !important}.uni-lang-list uni-flag svg{width:auto !important}.uni-lang-list .mdc-button__label{margin-left:5px}.uni-lang-list .uni-selection{padding:0}";

let UniLangMenuComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return langMenuCss$1; }
};

const langMenuCss = ".uni-lang-menu .mdc-button{min-width:0;padding:0 5px}.uni-lang-menu .mdc-button__icon{margin:0 !important;margin-right:3px !important;width:auto !important}.uni-lang-menu uni-drop-down{width:10px;padding-bottom:3px}.uni-lang-menu uni-flag svg{width:auto !important}.uni-lang-menu .mdc-list-item__graphic{margin-right:0 !important}.uni-lang-menu uni-list-item-text{margin-left:5px}.uni-lang-list .mdc-button{min-width:0;padding:0 5px}.uni-lang-list .mdc-button__icon{margin:0 !important;width:auto !important}.uni-lang-list uni-flag svg{width:auto !important}.uni-lang-list .mdc-button__label{margin-left:5px}.uni-lang-list .uni-selection{padding:0}";

let UniLangMenuShadowComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
  }
  render() {
    const { url, linear, mini, round, routing, route, mode, top, shadow, frame, type, feature, separator, languagesPath, activePath, translatePath, } = this;
    const data = { url, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath, isShadow: true };
    const storeData = { top, shadow, frame, type, feature, separator };
    return this.linear ? UniLangListTemplate(data, storeData) : UniLangMenuTemplate(data, storeData);
  }
  static get style() { return langMenuCss; }
};

const UniTemplate = function (template) {
  return template;
};

let UniLangListButtonComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.selected = false;
    this.mini = false;
    this.round = false;
  }
  render() {
    return UniTemplate(h("uni-selection", { inactive: !this.selected }, h("uni-button", { pro: true, mode: this.mode }, h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, h("uni-display", { inactive: true }, h("uni-button-icon", { only: true }, h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, h("uni-flag", { round: this.round }))))), h("uni-display", { inactive: this.mini }, h("uni-button-label", null, this.name)))));
  }
};

let UniLangMenuButtonComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.mini = false;
    this.round = false;
    this.top = false;
    this.type = 'memory';
    this.feature = 'uni.store';
    this.separator = '.';
    this.activePath = 'loc.active';
  }
  render() {
    return (h("uni-button", { pro: true, mode: this.mode }, h("uni-button-icon", { only: true }, h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.flag`, selector: 'uni-flag', prop: 'name' }, h("uni-flag", { round: this.round }))), h("uni-display", { inactive: this.mini }, h("uni-button-label", null, h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.name`, selector: 'uni-render', prop: 'value' }, h("uni-render", { text: true })))), h("uni-drop-down", null)));
  }
};

let UniLangMenuListItemComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.selected = false;
    this.round = false;
  }
  render() {
    return (h("uni-list-item", { selected: this.selected, index: '-1' }, h("uni-modify", { state: this.flag, action: 'isBind', prop: 'inactive' }, h("uni-display", { inactive: true }, h("uni-list-item-graphic", { only: true }, h("uni-modify", { state: this.flag, action: 'unbind', prop: 'name' }, h("uni-flag", { round: this.round }))))), h("uni-list-item-text", null, this.name)));
  }
};

const UniTranslateTemplate = function ({ props }, template) {
  const { inactive, activate, top, feature, type, path, separator, bindstart, bindend } = props;
  return (h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: path, prop: 'state' },
    h("uni-replace", { activate: activate, inactive: inactive, bindstart: bindstart, bindend: bindend }, template)));
};

const UniTranslateRenderedTemplate = function ({ props }, template) {
  return (h("uni-event", { listen: 'uniRendered', selector: 'uni-replace', prop: 'activate', value: true },
    h(UniTranslateTemplate, { props: props }, template)));
};

let UniTranslateComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
};

let UniTranslateShadowComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
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
};

let UniLangLoadComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
    return (h(Host, null, h("uni-load-store", { multi: true, top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, path: this.languagesPath, url: this.url }), h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.languagesPath}[0]`, prop: 'state' }, h("uni-store-set", { top: this.top, shadow: this.isShadow, frame: this.frame, type: this.type, feature: this.feature, separator: this.separator, mode: 'init', path: this.activePath })), h("uni-event-store-get", { top: this.top, type: this.type, feature: this.feature, separator: this.separator, path: `${this.activePath}.translation`, prop: 'url' }, h("uni-load-store", { multi: true, top: this.top, shadow: this.shadow, frame: this.frame, mode: 'set', feature: this.feature, separator: this.separator, path: this.translatePath }))));
  }
};

const UniLangListButton = /*@__PURE__*/proxyCustomElement(UniLangListButtonComponent, [0,"uni-lang-list-button",{"selected":[516],"mini":[516],"round":[516],"mode":[513],"flag":[513],"name":[513]}]);
const UniLangLoad = /*@__PURE__*/proxyCustomElement(UniLangLoadComponent, [0,"uni-lang-load",{"url":[513],"top":[516],"shadow":[516],"isShadow":[516,"is-shadow"],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}]);
const UniLangMenu = /*@__PURE__*/proxyCustomElement(UniLangMenuComponent, [0,"uni-lang-menu",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"],"only":[516]}]);
const UniLangMenuButton = /*@__PURE__*/proxyCustomElement(UniLangMenuButtonComponent, [0,"uni-lang-menu-button",{"mini":[516],"round":[516],"mode":[513],"top":[516],"type":[513],"feature":[513],"separator":[513],"activePath":[513,"active-path"]}]);
const UniLangMenuListItem = /*@__PURE__*/proxyCustomElement(UniLangMenuListItemComponent, [0,"uni-lang-menu-list-item",{"selected":[516],"round":[516],"flag":[513],"name":[513]}]);
const UniLangMenuShadow = /*@__PURE__*/proxyCustomElement(UniLangMenuShadowComponent, [1,"uni-lang-menu-shadow",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}]);
const UniTranslate = /*@__PURE__*/proxyCustomElement(UniTranslateComponent, [4,"uni-translate",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}]);
const UniTranslateShadow = /*@__PURE__*/proxyCustomElement(UniTranslateShadowComponent, [1,"uni-translate-shadow",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      UniLangListButton,
  UniLangLoad,
  UniLangMenu,
  UniLangMenuButton,
  UniLangMenuListItem,
  UniLangMenuShadow,
  UniTranslate,
  UniTranslateShadow
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { UniLangListButton, UniLangListButtonComponent, UniLangListTemplate, UniLangLoad, UniLangMenu, UniLangMenuButton, UniLangMenuButtonComponent, UniLangMenuComponent, UniLangMenuListItem, UniLangMenuListItemComponent, UniLangMenuShadow, UniLangMenuShadowComponent, UniLangMenuTemplate, UniTranslate, UniTranslateComponent, UniTranslateShadow, UniTranslateShadowComponent, defineCustomElements, uniLangItemRoutingLiteral, uniLangItemStoreLiteral };
