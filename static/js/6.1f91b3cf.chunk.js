(this["webpackJsonpreact-npm"]=this["webpackJsonpreact-npm"]||[]).push([[6,16],{148:function(t,e,n){t.exports={wrapper:"style_wrapper__2LnTa",textarea:"style_textarea__149U5"}},38:function(t,e,n){"use strict";n.r(e);var i=n(8),r=n(0),o=n.n(r);function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e,n){return(c="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=a(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=a(t);if(e){var r=a(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return p(this,n)}}function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var d={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},v=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function y(t,e){for(;t&&e--;)t=t.previousElementSibling;return t}var m={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow:function(){},text:"",trimRight:!0,winWidth:void 0},b=Object.keys(m),w=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(u,t);var e,n,i,r=f(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=r.call(this,t)).state={text:t.text,clamped:!1},e.units=[],e.maxLine=0,e.canvas=null,e}return e=u,(n=[{key:"componentDidMount",value:function(){this.initCanvas(),this.reflow(this.props)}},{key:"componentDidUpdate",value:function(t){t.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==t&&this.reflow(this.props)}},{key:"componentWillUnmount",value:function(){this.canvas.parentNode.removeChild(this.canvas)}},{key:"setState",value:function(t,e){return"undefined"!==typeof t.clamped&&(this.clamped=t.clamped),c(a(u.prototype),"setState",this).call(this,t,e)}},{key:"initCanvas",value:function(){if(!this.canvas){var t=this.canvas=document.createElement("div");t.className="LinesEllipsis-canvas ".concat(this.props.className),t.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(d).forEach((function(e){t.style[e]=d[e]})),document.body.appendChild(t)}}},{key:"copyStyleToCanvas",value:function(){var t=this,e=window.getComputedStyle(this.target);v.forEach((function(n){t.canvas.style[n]=e[n]}))}},{key:"reflow",value:function(t){var e=t.basedOn||(/^[\x00-\x7F]+$/.test(t.text)?"words":"letters");switch(e){case"words":this.units=t.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(t.text);break;default:throw new Error("Unsupported options basedOn: ".concat(e))}this.maxLine=+t.maxLine||1,this.canvas.innerHTML=this.units.map((function(t){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("");var n=this.putEllipsis(this.calcIndexes()),i=n>-1,r={clamped:i,text:i?this.units.slice(0,n).join(""):t.text};this.setState(r,t.onReflow.bind(this,r))}},{key:"calcIndexes",value:function(){var t=[0],e=this.canvas.firstElementChild;if(!e)return t;for(var n=0,i=1,r=e.offsetTop;(e=e.nextElementSibling)&&(e.offsetTop>r&&(i++,t.push(n),r=e.offsetTop),n++,!(i>this.maxLine)););return t}},{key:"putEllipsis",value:function(t){if(t.length<=this.maxLine)return-1;var e=t[this.maxLine],n=this.units.slice(0,e),i=this.canvas.children[e].offsetTop;this.canvas.innerHTML=n.map((function(t,e){return"<span class='LinesEllipsis-unit'>".concat(t,"</span>")})).join("")+"<wbr><span class='LinesEllipsis-ellipsis'>".concat(this.props.ellipsis,"</span>");for(var r=this.canvas.lastElementChild,o=y(r,2);o&&(r.offsetTop>i||r.offsetHeight>o.offsetHeight||r.offsetTop>o.offsetTop);)this.canvas.removeChild(o),o=y(r,2),n.pop();return n.length}},{key:"isClamped",value:function(){return this.clamped}},{key:"render",value:function(){var t=this,e=this.state,n=e.text,i=e.clamped,r=this.props,s=r.component,a=r.ellipsis,c=r.trimRight,l=r.className,u=function(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(r,["component","ellipsis","trimRight","className"]);return o.a.createElement(s,h({className:"LinesEllipsis ".concat(i?"LinesEllipsis--clamped":""," ").concat(l),ref:function(e){return t.target=e}},function(t,e){if(!t||"object"!==typeof t)return t;var n={};return Object.keys(t).forEach((function(i){e.indexOf(i)>-1||(n[i]=t[i])})),n}(u,b)),i&&c?n.replace(/[\s\uFEFF\xA0]+$/,""):n,o.a.createElement("wbr",null),i&&o.a.createElement("span",{className:"LinesEllipsis-ellipsis"},a))}}])&&s(e.prototype,n),i&&s(e,i),u}(o.a.Component);w.defaultProps=m;var g=w,x=n(148),O=n.n(x),j=n(1);e.default=function(){var t=Object(r.useState)("\u7947\u5712\u7cbe\u820e\u306e\u9418\u306e\u58f0\u3001\u8af8\u884c\u7121\u5e38\u306e\u97ff\u304d\u3042\u308a\u3002\u6c99\u7f85\u53cc\u6a39\u306e\u82b1\u306e\u8272\u3001\u76db\u8005\u5fc5\u8870\u306e\u7406\u3092\u3042\u3089\u306f\u3059\u3002\u5962\u308c\u308b\u4eba\u3082\u4e45\u304b\u3089\u305a\u3001\u305f\u3060\u6625\u306e\u591c\u306e\u5922\u306e\u3054\u3068\u3057\u3002\u731b\u304d\u8005\u3082\u9042\u306b\u306f\u307b\u308d\u3073\u306c\u3001\u504f\u306b\u98a8\u306e\u524d\u306e\u5875\u306b\u304a\u306a\u3058\u3002"),e=Object(i.a)(t,2),n=e[0],o=e[1],s=Object(r.useCallback)((function(t){var e=t.currentTarget.value;o(e)}),[]);return Object(j.jsxs)("div",{className:O.a.wrapper,children:[Object(j.jsx)(g,{basedOn:"letters",ellipsis:"...",maxLine:"3",text:n,trimRight:!0}),Object(j.jsx)("textarea",{className:O.a.textarea,onChange:s,value:n})]})}}}]);
//# sourceMappingURL=6.1f91b3cf.chunk.js.map