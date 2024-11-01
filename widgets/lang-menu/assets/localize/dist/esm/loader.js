import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-9e85ced9.js';

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
  return bootstrapLazy([["uni-lang-list-button",[[0,"uni-lang-list-button",{"selected":[516],"mini":[516],"round":[516],"mode":[513],"flag":[513],"name":[513]}]]],["uni-lang-menu-list-item",[[0,"uni-lang-menu-list-item",{"selected":[516],"round":[516],"flag":[513],"name":[513]}]]],["uni-translate-shadow",[[1,"uni-translate-shadow",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}]]],["uni-lang-load_5",[[0,"uni-lang-menu",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"],"only":[516]}],[1,"uni-lang-menu-shadow",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}],[4,"uni-translate",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}],[0,"uni-lang-load",{"url":[513],"top":[516],"shadow":[516],"isShadow":[516,"is-shadow"],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}],[0,"uni-lang-menu-button",{"mini":[516],"round":[516],"mode":[513],"top":[516],"type":[513],"feature":[513],"separator":[513],"activePath":[513,"active-path"]}]]]], options);
  });
};

export { defineCustomElements };
