(this["webpackJsonpreact-npm"]=this["webpackJsonpreact-npm"]||[]).push([[1,10],{18:function(t,e,n){"use strict";n.r(e);var i=n(8),o=n(1),r=n(0),s=n(74),a=n.n(s),c=n(59),l=n.n(c);e.default=function(){var t=Object(r.useState)("\u7947\u5712\u7cbe\u820e\u306e\u9418\u306e\u58f0\u3001\u8af8\u884c\u7121\u5e38\u306e\u97ff\u304d\u3042\u308a\u3002\u6c99\u7f85\u53cc\u6a39\u306e\u82b1\u306e\u8272\u3001\u76db\u8005\u5fc5\u8870\u306e\u7406\u3092\u3042\u3089\u306f\u3059\u3002\u5962\u308c\u308b\u4eba\u3082\u4e45\u304b\u3089\u305a\u3001\u305f\u3060\u6625\u306e\u591c\u306e\u5922\u306e\u3054\u3068\u3057\u3002\u731b\u304d\u8005\u3082\u9042\u306b\u306f\u307b\u308d\u3073\u306c\u3001\u504f\u306b\u98a8\u306e\u524d\u306e\u5875\u306b\u304a\u306a\u3058\u3002"),e=Object(i.a)(t,2),n=e[0],s=e[1],c=Object(r.useCallback)((function(t){var e=t.currentTarget.value;s(e)}),[]);return Object(o.jsxs)("div",{className:l.a.wrapper,children:[Object(o.jsx)(a.a,{basedOn:"letters",ellipsis:"...",maxLine:"3",text:n,trimRight:!0}),Object(o.jsx)("textarea",{className:l.a.textarea,onChange:c,value:n})]})}},59:function(t,e,n){t.exports={wrapper:"style_wrapper__3xIAq",textarea:"style_textarea__3ZNv_"}},74:function(t,e,n){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function r(t,e){if(null==t)return{};var n,i,o=function(t,e){if(null==t)return{};var n,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t,e,n){return(c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=n(0),f=n(75),h=f.canvasStyle,y=f.mirrorProps,m=n(76).omit;function d(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}var v={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow:function(){},text:"",trimRight:!0,winWidth:void 0},b=Object.keys(v),w=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=a(this,l(e).call(this,t))).state={text:t.text,clamped:!1},n.units=[],n.maxLine=0,n.canvas=null,n}var n,i,f;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),n=e,(i=[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==t&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"setState",value:function(t,n){return"undefined"!==typeof t.clamped&&(this.clamped=t.clamped),c(l(e.prototype),"setState",this).call(this,t,n)}},{key:"initCanvas",value:function(){if(!this.canvas){var t=this.canvas=document.createElement("div");t.className="LinesEllipsis-canvas ".concat(this.props.className),t.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(h).forEach((function(e){t.style[e]=h[e]})),document.body.appendChild(t)}}},{key:"copyStyleToCanvas",value:function(){var t=this,e=window.getComputedStyle(this.target);y.forEach((function(n){t.canvas.style[n]=e[n]}))}},{key:"reflow",value:function(t){var e=t.basedOn||(/^[\x00-\x7F]+$/.test(t.text)?"words":"letters");switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error("Unsupported options basedOn: ".concat(e))}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map((function(t){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("");var n=this.putEllipsis(this.calcIndexes()),i=n>-1,o={clamped:i,text:i?this.units.slice(0,n).join(""):t.text};this.setState(o,t.onReflow.bind(this,o))}},{key:"calcIndexes",value:function(){var t=[0],e=this.canvas.firstElementChild;if(!e)return t;for(var n=0,i=1,o=e.offsetTop;(e=e.nextElementSibling)&&(e.offsetTop>o&&(i++,t.push(n),o=e.offsetTop),n++,!(i>this.maxLine)););return t}},{key:"putEllipsis",value:function(t){if(t.length<=this.maxLine)return-1;var e=t[this.maxLine],n=this.units.slice(0,e),i=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map((function(t,e){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>".concat(this.props.ellipsis,"</span>");for(var o=this.canvas.lastElementChild,r=d(o,2);r&&(o.offsetTop>i||o.offsetHeight>r.offsetHeight||o.offsetTop>r.offsetTop);)this.canvas.removeChild(r),r=d(o,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var t=this,e=this.state,n=e.text,i=e.clamped,s=this.props,a=s.component,c=s.ellipsis,l=s.trimRight,u=s.className,f=r(s,["component","ellipsis","trimRight","className"]);return p.createElement(a,o({className:"LinesEllipsis ".concat(i?"LinesEllipsis--clamped":""," ").concat(u),ref:function(e){return t.target=e}},m(f,b)),i&&l?n.replace(/[\s\uFEFF\xA0]+$/,""):n,p.createElement("wbr",null),i&&p.createElement("span",{className:"LinesEllipsis-ellipsis"},c))}}])&&s(n.prototype,i),f&&s(n,f),e}(p.Component);w.defaultProps=v,t.exports=w},75:function(t,e,n){"use strict";t.exports={canvasStyle:{position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},mirrorProps:["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"]}},76:function(t,e,n){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports={omit:function(t,e){if(!t||"object"!==i(t))return t;var n={};return Object.keys(t).forEach((function(i){e.indexOf(i)>-1||(n[i]=t[i])})),n}}}}]);
//# sourceMappingURL=1.a298f802.chunk.js.map