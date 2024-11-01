'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ea73259.js');
const setRound = require('./set-round-8110e4fb.js');
require('./is-3d628bd6.js');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-jp" viewBox="0 0 640 480">
  <defs>
    <clipPath id="jp-a">
      <path fill-opacity=".7" d="M-88 32h640v480H-88z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#jp-a)" transform="translate(88 -32)">
    <path fill="#fff" d="M-128 32h720v480h-720z"/>
    <circle cx="523.1" cy="344.1" r="194.9" fill="#d30000" transform="translate(-168.4 8.6) scale(.76554)"/>
  </g>
</svg>
`;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-jp" viewBox="0 0 512 512">
  <defs>
    <clipPath id="a">
      <path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z"/>
    </clipPath>
  </defs>
  <g fill-rule="evenodd" stroke-width="1pt" clip-path="url(#a)" transform="translate(-128) scale(.72249)">
    <path fill="#fff" d="M0 0h1063v708.7H0z"/>
    <circle cx="523.1" cy="344.1" r="194.9" fill="#d30000" transform="translate(-59.7 -34.5) scale(1.1302)"/>
  </g>
</svg>
`;

let UniFlagJpComponent = class {
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

exports.uni_flag_jp = UniFlagJpComponent;
