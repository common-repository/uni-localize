/* flag custom elements bundle */

import type { Components, JSX } from "../types/components";

interface UniFlag extends Components.UniFlag, HTMLElement {}
export const UniFlag: {
  prototype: UniFlag;
  new (): UniFlag;
};

interface UniFlagCn extends Components.UniFlagCn, HTMLElement {}
export const UniFlagCn: {
  prototype: UniFlagCn;
  new (): UniFlagCn;
};

interface UniFlagDe extends Components.UniFlagDe, HTMLElement {}
export const UniFlagDe: {
  prototype: UniFlagDe;
  new (): UniFlagDe;
};

interface UniFlagEs extends Components.UniFlagEs, HTMLElement {}
export const UniFlagEs: {
  prototype: UniFlagEs;
  new (): UniFlagEs;
};

interface UniFlagFr extends Components.UniFlagFr, HTMLElement {}
export const UniFlagFr: {
  prototype: UniFlagFr;
  new (): UniFlagFr;
};

interface UniFlagGb extends Components.UniFlagGb, HTMLElement {}
export const UniFlagGb: {
  prototype: UniFlagGb;
  new (): UniFlagGb;
};

interface UniFlagIt extends Components.UniFlagIt, HTMLElement {}
export const UniFlagIt: {
  prototype: UniFlagIt;
  new (): UniFlagIt;
};

interface UniFlagJp extends Components.UniFlagJp, HTMLElement {}
export const UniFlagJp: {
  prototype: UniFlagJp;
  new (): UniFlagJp;
};

interface UniFlagKr extends Components.UniFlagKr, HTMLElement {}
export const UniFlagKr: {
  prototype: UniFlagKr;
  new (): UniFlagKr;
};

interface UniFlagPt extends Components.UniFlagPt, HTMLElement {}
export const UniFlagPt: {
  prototype: UniFlagPt;
  new (): UniFlagPt;
};

interface UniFlagRu extends Components.UniFlagRu, HTMLElement {}
export const UniFlagRu: {
  prototype: UniFlagRu;
  new (): UniFlagRu;
};

interface UniFlagShadow extends Components.UniFlagShadow, HTMLElement {}
export const UniFlagShadow: {
  prototype: UniFlagShadow;
  new (): UniFlagShadow;
};

interface UniFlagUs extends Components.UniFlagUs, HTMLElement {}
export const UniFlagUs: {
  prototype: UniFlagUs;
  new (): UniFlagUs;
};

/**
 * Utility to define all custom elements within this package using the tag name provided in the component's source. 
 * When defining each custom element, it will also check it's safe to define by:
 *
 * 1. Ensuring the "customElements" registry is available in the global context (window).
 * 2. The component tag name is not already defined.
 *
 * Use the standard [customElements.define()](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) 
 * method instead to define custom elements individually, or to provide a different tag name.
 */
export declare const defineCustomElements: (opts?: any) => void;

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bunding, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  ce?: (eventName: string, opts?: any) => CustomEvent;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;

export type { Components, JSX };

export * from '../types';
