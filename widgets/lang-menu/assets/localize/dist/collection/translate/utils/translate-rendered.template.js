import { h } from '@stencil/core';
import { UniTranslateTemplate } from './translate.template';
export const UniTranslateRenderedTemplate = function ({ props }, template) {
  return (h("uni-event", { listen: 'uniRendered', selector: 'uni-replace', prop: 'activate', value: true },
    h(UniTranslateTemplate, { props: props }, template)));
};
