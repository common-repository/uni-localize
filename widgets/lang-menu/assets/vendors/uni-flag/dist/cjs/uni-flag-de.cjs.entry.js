'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-5ea73259.js');
const setRound = require('./set-round-8110e4fb.js');
require('./is-3d628bd6.js');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 640 480">
  <path fill="#ffce00" d="M0 320h640v160H0z"/>
  <path d="M0 0h640v160H0z"/>
  <path fill="#d00" d="M0 160h640v160H0z"/>
</svg>
`;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
  <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
  <path d="M0 0h512v170.7H0z"/>
  <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
</svg>
`;

let UniFlagDeComponent = class {
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

exports.uni_flag_de = UniFlagDeComponent;
