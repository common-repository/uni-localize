import{_ as t,a as n,c as r}from"./p-66181af4.js";import{M as i,a as e}from"./p-7176408e.js";import{a as o}from"./p-d97f9e70.js";import{m as s}from"./p-9579904e.js";var u,c={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},h={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},l=function(t){this.adapter=t},a=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges_().right;return Math.round(n-t)},r.prototype.scrollToRTL=function(t){var n=this.calculateScrollEdges_(),r=this.adapter.getScrollAreaScrollLeft(),i=this.clampScrollValue_(n.right-t);return{finalScrollPosition:i,scrollDelta:i-r}},r.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(n-t);return{finalScrollPosition:r,scrollDelta:r-n}},r.prototype.getAnimatingScrollPosition=function(t){return t},r.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},r.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.left,t),n.right)},r}(l),f=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(t-n)},r.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(-t);return{finalScrollPosition:r,scrollDelta:r-n}},r.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(n-t);return{finalScrollPosition:r,scrollDelta:r-n}},r.prototype.getAnimatingScrollPosition=function(t,n){return t-n},r.prototype.calculateScrollEdges_=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},r.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.max(Math.min(n.right,t),n.left)},r}(l),S=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.prototype.getScrollPositionRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-t)},r.prototype.scrollToRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(t);return{finalScrollPosition:r,scrollDelta:n-r}},r.prototype.incrementScrollRTL=function(t){var n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue_(n+t);return{finalScrollPosition:r,scrollDelta:n-r}},r.prototype.getAnimatingScrollPosition=function(t,n){return t+n},r.prototype.calculateScrollEdges_=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},r.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.right,t),n.left)},r}(l),v=function(i){function e(t){var r=i.call(this,n(n({},e.defaultAdapter),t))||this;return r.isAnimating_=!1,r}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return c},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL_())return this.computeCurrentScrollPositionRTL_();var t=this.calculateCurrentTranslateX_();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating_&&this.stopScrollAnimation_()},e.prototype.handleTransitionEnd=function(t){this.isAnimating_&&this.adapter.eventTargetMatchesSelector(t.target,e.strings.CONTENT_SELECTOR)&&(this.isAnimating_=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate_(this.getIncrementScrollOperation_(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var n=this.getIncrementScrollOperation_(t);0!==n.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},e.prototype.scrollTo=function(t){if(this.isRTL_())return this.scrollToRTL_(t);this.scrollTo_(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance_||(this.rtlScrollerInstance_=this.rtlScrollerFactory_()),this.rtlScrollerInstance_},e.prototype.calculateCurrentTranslateX_=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var n=/\((.+?)\)/.exec(t);if(!n)return 0;var i=r(n[1].split(","),6);return parseFloat(i[4])},e.prototype.clampScrollValue_=function(t){var n=this.calculateScrollEdges_();return Math.min(Math.max(n.left,t),n.right)},e.prototype.computeCurrentScrollPositionRTL_=function(){var t=this.calculateCurrentTranslateX_();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges_=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollTo_=function(t){var n=this.getScrollPosition(),r=this.clampScrollValue_(t);this.animate_({finalScrollPosition:r,scrollDelta:r-n})},e.prototype.scrollToRTL_=function(t){var n=this.getRTLScroller().scrollToRTL(t);this.animate_(n)},e.prototype.getIncrementScrollOperation_=function(t){if(this.isRTL_())return this.getRTLScroller().incrementScrollRTL(t);var n=this.getScrollPosition(),r=this.clampScrollValue_(t+n);return{finalScrollPosition:r,scrollDelta:r-n}},e.prototype.animate_=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation_(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating_=!0)},e.prototype.stopScrollAnimation_=function(){this.isAnimating_=!1;var t=this.getAnimatingScrollPosition_();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition_=function(){var t=this.calculateCurrentTranslateX_(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL_()?this.getRTLScroller().getAnimatingScrollPosition(n,t):n-t},e.prototype.rtlScrollerFactory_=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(t),new f(this.adapter);var r=this.adapter.computeScrollAreaClientRect(),i=this.adapter.computeScrollContentClientRect(),e=Math.round(i.right-r.right);return this.adapter.setScrollAreaScrollLeft(t),e===n?new S(this.adapter):new a(this.adapter)},e.prototype.isRTL_=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(i),m=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r.attachTo=function(t){return new r(t)},r.prototype.initialize=function(){this.area_=this.root.querySelector(v.strings.AREA_SELECTOR),this.content_=this.root.querySelector(v.strings.CONTENT_SELECTOR)},r.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction_=function(){return t.foundation.handleInteraction()},this.handleTransitionEnd_=function(n){return t.foundation.handleTransitionEnd(n)},this.area_.addEventListener("wheel",this.handleInteraction_,o()),this.area_.addEventListener("touchstart",this.handleInteraction_,o()),this.area_.addEventListener("pointerdown",this.handleInteraction_,o()),this.area_.addEventListener("mousedown",this.handleInteraction_,o()),this.area_.addEventListener("keydown",this.handleInteraction_,o()),this.content_.addEventListener("transitionend",this.handleTransitionEnd_)},r.prototype.destroy=function(){n.prototype.destroy.call(this),this.area_.removeEventListener("wheel",this.handleInteraction_,o()),this.area_.removeEventListener("touchstart",this.handleInteraction_,o()),this.area_.removeEventListener("pointerdown",this.handleInteraction_,o()),this.area_.removeEventListener("mousedown",this.handleInteraction_,o()),this.area_.removeEventListener("keydown",this.handleInteraction_,o()),this.content_.removeEventListener("transitionend",this.handleTransitionEnd_)},r.prototype.getDefaultFoundation=function(){var t=this;return new v({eventTargetMatchesSelector:function(t,n){return s(t,n)},addClass:function(n){return t.root.classList.add(n)},removeClass:function(n){return t.root.classList.remove(n)},addScrollAreaClass:function(n){return t.area_.classList.add(n)},setScrollAreaStyleProperty:function(n,r){return t.area_.style.setProperty(n,r)},setScrollContentStyleProperty:function(n,r){return t.content_.style.setProperty(n,r)},getScrollContentStyleValue:function(n){return window.getComputedStyle(t.content_).getPropertyValue(n)},setScrollAreaScrollLeft:function(n){return t.area_.scrollLeft=n},getScrollAreaScrollLeft:function(){return t.area_.scrollLeft},getScrollContentOffsetWidth:function(){return t.content_.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area_.offsetWidth},computeScrollAreaClientRect:function(){return t.area_.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content_.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return function(t,n){if(void 0===n&&(n=!0),n&&void 0!==u)return u;var r=t.createElement("div");r.classList.add(c.SCROLL_TEST),t.body.appendChild(r);var i=r.offsetHeight-r.clientHeight;return t.body.removeChild(r),n&&(u=i),i}(document)}})},r.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},r.prototype.getScrollContentWidth=function(){return this.content_.offsetWidth},r.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},r.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},r}(e);export{m as M}