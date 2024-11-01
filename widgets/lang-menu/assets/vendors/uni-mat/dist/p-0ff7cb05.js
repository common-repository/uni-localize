import{_ as t,a as n}from"./p-66181af4.js";import{M as i,a as e}from"./p-7176408e.js";import{M as r}from"./p-a228c569.js";var s={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},u={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"},o=function(i){function e(t){var r=i.call(this,n(n({},e.defaultAdapter),t))||this;return r.hasToggledAriaLabel=!1,r}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return s},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return u},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(u.DATA_ARIA_LABEL_ON),n=this.adapter.getAttr(u.DATA_ARIA_LABEL_OFF);if(t&&n){if(null!==this.adapter.getAttr(u.ARIA_PRESSED))throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(u.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(s.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(void 0===t&&(t=!this.isOn()),t?this.adapter.addClass(s.ICON_BUTTON_ON):this.adapter.removeClass(s.ICON_BUTTON_ON),this.hasToggledAriaLabel){var n=this.adapter.getAttr(t?u.DATA_ARIA_LABEL_ON:u.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(u.ARIA_LABEL,n||"")}else this.adapter.setAttr(u.ARIA_PRESSED,""+t)},e}(i),a=o.strings,c=function(n){function i(){var t=null!==n&&n.apply(this,arguments)||this;return t.rippleComponent=t.createRipple(),t}return t(i,n),i.attachTo=function(t){return new i(t)},i.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},i.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),n.prototype.destroy.call(this)},i.prototype.getDefaultFoundation=function(){var t=this;return new o({addClass:function(n){return t.root.classList.add(n)},hasClass:function(n){return t.root.classList.contains(n)},notifyChange:function(n){t.emit(a.CHANGE_EVENT,n)},removeClass:function(n){return t.root.classList.remove(n)},getAttr:function(n){return t.root.getAttribute(n)},setAttr:function(n,i){return t.root.setAttribute(n,i)}})},Object.defineProperty(i.prototype,"ripple",{get:function(){return this.rippleComponent},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"on",{get:function(){return this.foundation.isOn()},set:function(t){this.foundation.toggle(t)},enumerable:!1,configurable:!0}),i.prototype.createRipple=function(){var t=new r(this.root);return t.unbounded=!0,t},i}(e);function f(t){return new c(t)}export{f as u}