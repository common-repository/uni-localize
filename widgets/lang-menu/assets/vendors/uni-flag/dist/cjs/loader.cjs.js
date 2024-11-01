'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ea73259.js');

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-cf2d8057.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["uni-flag.cjs",[[4,"uni-flag",{"name":[513],"square":[516],"round":[516]}]]],["uni-flag-cn.cjs",[[0,"uni-flag-cn",{"square":[516],"round":[516]}]]],["uni-flag-de.cjs",[[0,"uni-flag-de",{"square":[516],"round":[516]}]]],["uni-flag-es.cjs",[[0,"uni-flag-es",{"square":[516],"round":[516]}]]],["uni-flag-fr.cjs",[[0,"uni-flag-fr",{"square":[516],"round":[516]}]]],["uni-flag-gb.cjs",[[0,"uni-flag-gb",{"square":[516],"round":[516]}]]],["uni-flag-it.cjs",[[0,"uni-flag-it",{"square":[516],"round":[516]}]]],["uni-flag-jp.cjs",[[0,"uni-flag-jp",{"square":[516],"round":[516]}]]],["uni-flag-kr.cjs",[[0,"uni-flag-kr",{"square":[516],"round":[516]}]]],["uni-flag-pt.cjs",[[0,"uni-flag-pt",{"square":[516],"round":[516]}]]],["uni-flag-ru.cjs",[[0,"uni-flag-ru",{"square":[516],"round":[516]}]]],["uni-flag-shadow.cjs",[[1,"uni-flag-shadow",{"name":[513],"square":[516],"round":[516]}]]],["uni-flag-us.cjs",[[0,"uni-flag-us",{"square":[516],"round":[516]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
