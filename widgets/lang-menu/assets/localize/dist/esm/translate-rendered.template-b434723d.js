import { h } from './index-9e85ced9.js';

const UniTranslateTemplate = function ({ props }, template) {
  const { inactive, activate, top, feature, type, path, separator, bindstart, bindend } = props;
  return (h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: path, prop: 'state' },
    h("uni-replace", { activate: activate, inactive: inactive, bindstart: bindstart, bindend: bindend }, template)));
};

const UniTranslateRenderedTemplate = function ({ props }, template) {
  return (h("uni-event", { listen: 'uniRendered', selector: 'uni-replace', prop: 'activate', value: true },
    h(UniTranslateTemplate, { props: props }, template)));
};

export { UniTranslateRenderedTemplate as U, UniTranslateTemplate as a };
