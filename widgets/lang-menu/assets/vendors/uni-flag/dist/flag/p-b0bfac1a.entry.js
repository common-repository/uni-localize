import{r as s,h as t,g as r}from"./p-348807c8.js";import{i}from"./p-25c9bb4c.js";import{u as a,U as p}from"./p-51f92673.js";let o=class{constructor(t){s(this,t),this.square=!1,this.round=!1}render(){const s=this.name||a(this.el),r=i(s)?null:`uni-flag-${s}`;return p(t(r,{square:this.square||this.round,round:this.round,class:"uni-flag"},t("slot",null)))}get el(){return r(this)}};o.style=".uni-flag svg{height:20px;box-shadow:0 6px 6px -3px rgba(0,0,0,.2), 0 10px 14px 1px rgba(0,0,0,.14), 0 4px 18px 3px rgba(0,0,0,.12)}";export{o as uni_flag}