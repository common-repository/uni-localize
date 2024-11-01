'use strict';

const is = require('./is-3d628bd6.js');

function uniClearContent(el) {
  if (is.isDefined(el)) {
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

exports.UniTemplate = UniTemplate;
exports.uniGetCleanContent = uniGetCleanContent;
