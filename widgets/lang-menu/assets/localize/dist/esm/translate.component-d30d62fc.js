import { h, F as Fragment, r as registerInstance, c as Host } from './index-9e85ced9.js';
import { U as UniTranslateRenderedTemplate, a as UniTranslateTemplate } from './translate-rendered.template-b434723d.js';

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

let UniLangMenuComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
UniLangMenuComponent.style = langMenuCss$1;

const langMenuCss = ".uni-lang-menu .mdc-button{min-width:0;padding:0 5px}.uni-lang-menu .mdc-button__icon{margin:0 !important;margin-right:3px !important;width:auto !important}.uni-lang-menu uni-drop-down{width:10px;padding-bottom:3px}.uni-lang-menu uni-flag svg{width:auto !important}.uni-lang-menu .mdc-list-item__graphic{margin-right:0 !important}.uni-lang-menu uni-list-item-text{margin-left:5px}.uni-lang-list .mdc-button{min-width:0;padding:0 5px}.uni-lang-list .mdc-button__icon{margin:0 !important;width:auto !important}.uni-lang-list uni-flag svg{width:auto !important}.uni-lang-list .mdc-button__label{margin-left:5px}.uni-lang-list .uni-selection{padding:0}";

let UniLangMenuShadowComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
UniLangMenuShadowComponent.style = langMenuCss;

let UniLangMenuButtonComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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

let UniTranslateComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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

export { UniLangMenuComponent as U, UniLangMenuShadowComponent as a, UniLangMenuButtonComponent as b, UniLangListTemplate as c, UniLangMenuTemplate as d, uniLangItemStoreLiteral as e, UniTranslateComponent as f, uniLangItemRoutingLiteral as u };
