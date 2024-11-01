'use strict';

const index = require('./index-56216c78.js');

const UniTranslateTemplate = function ({ props }, template) {
  const { inactive, activate, top, feature, type, path, separator, bindstart, bindend } = props;
  return (index.h("uni-event-store-get", { top: top, type: type, feature: feature, separator: separator, path: path, prop: 'state' },
    index.h("uni-replace", { activate: activate, inactive: inactive, bindstart: bindstart, bindend: bindend }, template)));
};

const UniTranslateRenderedTemplate = function ({ props }, template) {
  return (index.h("uni-event", { listen: 'uniRendered', selector: 'uni-replace', prop: 'activate', value: true },
    index.h(UniTranslateTemplate, { props: props }, template)));
};

exports.UniTranslateRenderedTemplate = UniTranslateRenderedTemplate;
exports.UniTranslateTemplate = UniTranslateTemplate;
