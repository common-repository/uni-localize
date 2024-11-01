import { h } from '@stencil/core';
export const UniTranslateTemplate = function ({ props }, template) {
  const { inactive, activate, top, feature, type, path, separator, bindstart, bindend } = props;
  return (h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: path, prop: 'state' },
    h("uni-replace", { activate: activate, inactive: inactive, bindstart: bindstart, bindend: bindend }, template)));
};
