import{r as s,h as t,g as e}from"./p-165e1107.js";import{i,c as a}from"./p-53fd397d.js";import{u as r}from"./p-2780857d.js";import{u as o}from"./p-35b900ab.js";import{U as c}from"./p-12df985d.js";import{u as h}from"./p-e282851d.js";let n=class{constructor(t){s(this,t),this.inactive=!1,this.activate=!1,this.activateNext=!1,this.all=!1,this.bindstart="((",this.bindend="))"}render(){return c(t("slot",null))}componentDidRender(){const{el:s,inactive:t,activate:e,state:c,action:h,all:n,selector:p,prop:d}=this;let m;if(!t||e){if(i(c)){switch(h){case"currency":m=r(c).toFixed(2);break;case"decrement":m=(100*r(c)-100*(r(this.value)||1))/100;break;case"increment":m=(100*r(c)+100*(r(this.value)||1))/100;break;case"isBind":m=a(c,this.bindstart,this.bindend);break;case"isNotBind":m=!a(c,this.bindstart,this.bindend);break;case"prefix":m=this.value+c;break;case"push":m=[...r(c)||[],r(this.value)];break;case"stringify":m=JSON.stringify(c);break;case"suffix":m=c+this.value;break;case"toggle":m=!r(c);break;case"toUpperCase":m=null==c?void 0:c.toUpperCase();break;case"unbind":m=a(c,this.bindstart,this.bindend)?void 0:c}i(m)&&(o(s,d,m,n,p),this.activateNext&&o(s,"activate",!0,n,p))}setTimeout((()=>this.activate=!1))}}componentDidLoad(){h("udk")}get el(){return e(this)}};export{n as U}