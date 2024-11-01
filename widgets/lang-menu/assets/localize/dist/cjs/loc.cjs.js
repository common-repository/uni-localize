'use strict';

const index = require('./index-56216c78.js');

/*
 Stencil Client Patch Browser v2.11.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    {
        // shim css vars
        index.plt.$cssShim$ = index.win.__cssshim;
    }
    {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(index.H.prototype);
    }
    // @ts-ignore
    const scriptElm = Array.from(index.doc.querySelectorAll('script')).find((s) => new RegExp(`\/${index.NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === index.NAMESPACE)
        ;
    const opts = {};
    if ('onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, index.win.location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (!index.win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-dom" */ './dom-ba87b185.js'); }).then(() => opts);
        }
    }
    return index.promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(index.NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        index.win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        index.win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = index.doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(index.win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                index.doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["uni-lang-list-button.cjs",[[0,"uni-lang-list-button",{"selected":[516],"mini":[516],"round":[516],"mode":[513],"flag":[513],"name":[513]}]]],["uni-lang-menu-list-item.cjs",[[0,"uni-lang-menu-list-item",{"selected":[516],"round":[516],"flag":[513],"name":[513]}]]],["uni-translate-shadow.cjs",[[1,"uni-translate-shadow",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}]]],["uni-lang-load_5.cjs",[[0,"uni-lang-menu",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"],"only":[516]}],[1,"uni-lang-menu-shadow",{"url":[513],"linear":[516],"mini":[516],"round":[516],"routing":[516],"route":[513],"mode":[513],"top":[516],"shadow":[516],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}],[4,"uni-translate",{"inactive":[516],"activate":[1028],"rendered":[516],"top":[516],"type":[513],"feature":[513],"separator":[513],"path":[513],"bindstart":[513],"bindend":[513]}],[0,"uni-lang-load",{"url":[513],"top":[516],"shadow":[516],"isShadow":[516,"is-shadow"],"frame":[516],"type":[513],"feature":[513],"separator":[513],"languagesPath":[513,"languages-path"],"activePath":[513,"active-path"],"translatePath":[513,"translate-path"]}],[0,"uni-lang-menu-button",{"mini":[516],"round":[516],"mode":[513],"top":[516],"type":[513],"feature":[513],"separator":[513],"activePath":[513,"active-path"]}]]]], options);
});
