import { Fragment, h } from '@stencil/core';
import { uniLangItemRoutingLiteral } from './routing.literal';
import { uniLangItemStoreLiteral } from './store.literal';
export const UniLangMenuTemplate = function (data, storeData) {
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
