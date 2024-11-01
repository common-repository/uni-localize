'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ea73259.js');
const setRound = require('./set-round-8110e4fb.js');
require('./is-3d628bd6.js');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 640 480">
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <path fill="#0039a6" d="M0 160h640v320H0z"/>
    <path fill="#d52b1e" d="M0 320h640v160H0z"/>
  </g>
</svg>
`;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 512 512">
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fff" d="M0 0h512v512H0z"/>
    <path fill="#0039a6" d="M0 170.7h512V512H0z"/>
    <path fill="#d52b1e" d="M0 341.3h512V512H0z"/>
  </g>
</svg>
`;

let UniFlagRuComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.square = false;
    this.round = false;
  }
  onSquare(newValue) {
    this.el.innerHTML = newValue ? squareSvg : svg;
  }
  onRound(newValue) {
    setRound.uniSetRound(this.el, newValue);
  }
  componentWillLoad() {
    this.el.innerHTML = this.square ? squareSvg : svg;
    setRound.uniSetDefaultStyles(this.el);
    setRound.uniSetRound(this.el, this.round);
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "square": ["onSquare"],
    "round": ["onRound"]
  }; }
};

exports.uni_flag_ru = UniFlagRuComponent;
