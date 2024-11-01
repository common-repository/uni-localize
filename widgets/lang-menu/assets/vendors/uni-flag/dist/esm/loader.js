import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-b3cca1dd.js';

/*
 Stencil Client Patch Esm v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-aea0f6cc.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["uni-flag",[[4,"uni-flag",{"name":[513],"square":[516],"round":[516]}]]],["uni-flag-cn",[[0,"uni-flag-cn",{"square":[516],"round":[516]}]]],["uni-flag-de",[[0,"uni-flag-de",{"square":[516],"round":[516]}]]],["uni-flag-es",[[0,"uni-flag-es",{"square":[516],"round":[516]}]]],["uni-flag-fr",[[0,"uni-flag-fr",{"square":[516],"round":[516]}]]],["uni-flag-gb",[[0,"uni-flag-gb",{"square":[516],"round":[516]}]]],["uni-flag-it",[[0,"uni-flag-it",{"square":[516],"round":[516]}]]],["uni-flag-jp",[[0,"uni-flag-jp",{"square":[516],"round":[516]}]]],["uni-flag-kr",[[0,"uni-flag-kr",{"square":[516],"round":[516]}]]],["uni-flag-pt",[[0,"uni-flag-pt",{"square":[516],"round":[516]}]]],["uni-flag-ru",[[0,"uni-flag-ru",{"square":[516],"round":[516]}]]],["uni-flag-shadow",[[1,"uni-flag-shadow",{"name":[513],"square":[516],"round":[516]}]]],["uni-flag-us",[[0,"uni-flag-us",{"square":[516],"round":[516]}]]]], options);
  });
};

export { defineCustomElements };
