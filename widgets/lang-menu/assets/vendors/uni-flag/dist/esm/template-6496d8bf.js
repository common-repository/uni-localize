import { a as isDefined } from './is-0e9864e2.js';

function uniClearContent(el) {
  if (isDefined(el)) {
    el.textContent = '';
  }
}

function uniGetContent(el) {
  return el === null || el === void 0 ? void 0 : el.textContent.trim();
}

function uniGetCleanContent(el) {
  const content = uniGetContent(el);
  uniClearContent(el);
  return content || null;
}

const UniTemplate = function (template) {
  return template;
};

export { UniTemplate as U, uniGetCleanContent as u };
