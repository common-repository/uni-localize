import{r as t,g as s}from"./p-348807c8.js";import{u as n,a as i}from"./p-9dd9a89f.js";import"./p-25c9bb4c.js";const o='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 640 480">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h640v480H0z"/>\n    <path fill="#00267f" d="M0 0h213.3v480H0z"/>\n    <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>\n  </g>\n</svg>\n',l='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 512 512">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h512v512H0z"/>\n    <path fill="#00267f" d="M0 0h170.7v512H0z"/>\n    <path fill="#f31830" d="M341.3 0H512v512H341.3z"/>\n  </g>\n</svg>\n';let f=class{constructor(s){t(this,s),this.square=!1,this.round=!1}onSquare(t){this.el.innerHTML=t?l:o}onRound(t){n(this.el,t)}componentWillLoad(){this.el.innerHTML=this.square?l:o,i(this.el),n(this.el,this.round)}get el(){return s(this)}static get watchers(){return{square:["onSquare"],round:["onRound"]}}};export{f as uni_flag_fr}