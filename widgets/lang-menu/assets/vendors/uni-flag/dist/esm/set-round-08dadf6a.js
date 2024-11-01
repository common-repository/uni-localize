import { b as isEmpty, a as isDefined } from './is-0e9864e2.js';

function isTargetElement(el, selector) {
  return selector ? selector === 'Host' || !!el.querySelector(selector) : !!el.firstElementChild;
}

function uniModify(context, data, cbFunction, observer) {
  if (!isEmpty(data)) {
    if (context.selector) {
      if (context.selector === 'Host') {
        cbFunction([context.el], data);
      }
      else {
        const targets = context.all
          ? context.el.querySelectorAll(context.selector)
          : [context.el.querySelector(context.selector)];
        if (targets[0]) {
          cbFunction(targets, data);
          observer === null || observer === void 0 ? void 0 : observer.disconnect();
        }
      }
    }
    else {
      const firstChildren = context.all ? [...context.el.children] : [context.el.firstElementChild];
      if (firstChildren && firstChildren[0]) {
        cbFunction(firstChildren, data);
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
      }
    }
  }
}

function uniModifyAsync(context, data, cbFunction) {
  if (isDefined(data) && !isEmpty(data)) {
    if (isTargetElement(context.el, context.selector)) {
      uniModify(context, data, cbFunction);
    }
    else {
      const observer = new MutationObserver(() => {
        uniModify(context, data, cbFunction, observer);
      });
      observer.observe(context.el, { childList: true, subtree: true });
    }
  }
}

function uniModifyStyle(targets, styles) {
  for (const [key, value] of Object.entries(styles)) {
    targets.forEach((target) => {
      target.style[key] = `${value}${isNaN(Number(value)) ? '' : 'px'}`;
    });
  }
}

function uniSetDefaultStyles(el) {
  el.style.display = 'inherit';
}

function uniSetRound(el, round) {
  if (round) {
    uniModifyAsync({ el, selector: 'svg' }, { 'border-radius': '50%' }, uniModifyStyle);
  }
}

export { uniSetDefaultStyles as a, uniSetRound as u };
