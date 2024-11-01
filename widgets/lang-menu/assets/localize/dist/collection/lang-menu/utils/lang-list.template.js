import { Fragment, h } from '@stencil/core';
import { uniLangItemRoutingLiteral } from './routing.literal';
import { uniLangItemStoreLiteral } from './store.literal';
export const UniLangListTemplate = function (data, storeData) {
  const { url, linear, mini, round, routing, route, mode, languagesPath, activePath, translatePath, isShadow } = data;
  const { top, shadow, frame, type, feature, separator } = storeData;
  return (h(Fragment, null,
    h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: languagesPath, prop: 'state' },
      h("uni-repeat", { strict: true, class: 'uni-lang-list', value: routing
          ? uniLangItemRoutingLiteral({ linear, mini, round, route, mode, activePath, isShadow }, storeData)
          : uniLangItemStoreLiteral({ linear, mini, round, mode, activePath, isShadow }, storeData) })),
    h("uni-lang-load", { url: url, top: top, shadow: shadow, isShadow: isShadow, frame: frame, type: type, feature: feature, separator: separator, languagesPath: languagesPath, activePath: activePath, translatePath: translatePath })));
};
