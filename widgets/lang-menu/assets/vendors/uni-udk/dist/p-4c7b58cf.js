import{r as t,h as r,g as s}from"./p-165e1107.js";import{U as n}from"./p-12df985d.js";import{u as o}from"./p-e282851d.js";import{i as e,d as i}from"./p-53fd397d.js";import{u as a}from"./p-35b900ab.js";function c(t){const{el:r,any:s,exact:n,path:o,noPath:i,params:c,noParams:u,all:p,selector:d,prop:m,value:f}=t,l=function(t,r,s,n){const o=window.top.location.pathname;return!(e(r)||e(s))||function(t,r,s,n){return!e(s)||(n?r===s:r.includes(s))||!!t&&h(r,s)}(t,o,r,n)&&function(t,r,s,n){return!(e(s)&&((n?r===s:r.includes(s))||t&&h(r,s)))}(t,o,s,n)}(s,o,i,n)&&function(t,r,s){const n=new URLSearchParams(window.top.location.search);return!(e(r)||e(s))||function(t,r,s){const n=new URLSearchParams(r);return t?(r?r.split("&"):[]).some((t=>{const r=t.split("=")||[];return s.has(r[0])&&(!s.get(r[1])||s.get(r[0])===r[1])})):Array.from(n.keys()||[]).every((t=>s.has(t)&&(!n.get(t)||s.get(t)===n.get(t))))}(t,r,n)&&function(t,r){const s=new URLSearchParams(t);return Array.from(s.keys()||[]).every((t=>!r.has(t)||!!s.get(t)&&r.get(t)!==s.get(t)))}(s,n)}(s,c,u);e(f)?l&&e(f)&&a(r,m,f,p,d):a(r,m,l,p,d)}function h(t,r){return(r||"").split("/").filter((t=>!i(t))).some((r=>t.includes(r)))}let u=class{constructor(r){t(this,r),this.inactive=!1,this.any=!1,this.exact=!1,this.all=!1,this.isConnected=!1}routeStart(){c(this),this.isConnected||(this.el.addEventListener("popstate",(()=>c(this))),this.isConnected=!0)}routeStop(){this.isConnected&&(this.el.removeEventListener("popstate",(()=>c(this))),this.isConnected=!1)}connectedCallback(){this.inactive||this.routeStart()}render(){return n(r("slot",null))}componentDidRender(){this.inactive?this.routeStop():this.routeStart()}componentDidLoad(){o("udk")}disconnectedCallback(){this.routeStop()}get el(){return s(this)}};export{u as U}