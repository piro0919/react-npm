(this["webpackJsonpreact-npm"]=this["webpackJsonpreact-npm"]||[]).push([[11],{144:function(e,t,n){},145:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n(10),s=function(e){e&&e instanceof Function&&n.e(18).then(n.bind(null,199)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},i=n(2),o=function(e){var t=e.children;return Object(c.jsx)("h2",{children:t})},p=function(e){var t=e.children;return Object(c.jsx)("h3",{children:t})},l=n(4),d=n.n(l),j=n(13),u=n(59),b=n(55),h=n.n(b),x=n(8),m=n(74),O=Object(m.a)("nodePackageManager"),f=Object(r.createContext)({nodePackageManager:"npm",toggleNodePackageManager:function(){}}),y=f.Consumer,g=f.Provider,v=y,_=function(e){var t=e.children,n=O("npm"),a=Object(x.a)(n,2),s=a[0],i=a[1],o=Object(r.useCallback)((function(){i((function(e){return"npm"===e?"yarn":"npm"}))}),[i]);return Object(c.jsx)(g,{value:{nodePackageManager:s,toggleNodePackageManager:o},children:t})},k=function(e){var t=e.handleCopy,a=e.name,s=e.nodePackageManager,i=e.typesVersion,l=e.version,b=Object(r.useMemo)((function(){return Object(u.a)(a)}),[a]),x=Object(r.useMemo)((function(){return Object(r.lazy)((function(){return n(92)("./".concat(b))}))}),[b]),m=Object(r.useMemo)((function(){return"npm"===s?"npm install --save ".concat(a):"yarn add ".concat(a)}),[a,s]),O=Object(r.useMemo)((function(){return"npm"===s?"npm install --save-dev @types/".concat(a):"yarn add --dev @types/".concat(a)}),[a,s]);return Object(c.jsxs)("div",{className:d.a.wrapper,children:[Object(c.jsxs)("header",{className:d.a.headerWrapper,children:[Object(c.jsx)("a",{href:"https://www.npmjs.com/package/".concat(a),rel:"noreferrer",target:"_blank",children:Object(c.jsx)(o,{children:a})}),Object(c.jsx)("a",{href:"https://www.npmjs.com/package/".concat(a),rel:"noreferrer",target:"_blank",children:Object(c.jsx)(j.c,{className:d.a.npmIcon})})]}),Object(c.jsxs)("div",{className:d.a.contentWrapper,children:[Object(c.jsxs)("article",{children:[Object(c.jsx)("div",{className:d.a.headingWrapper,children:Object(c.jsx)(p,{children:"Version"})}),Object(c.jsxs)("div",{className:"".concat(d.a.articleContentWrapper," ").concat(d.a.versionsWrapper),children:[Object(c.jsx)("div",{children:"v".concat(l)}),i?Object(c.jsx)("div",{className:d.a.types,children:"(v".concat(i,")")}):null]})]}),Object(c.jsxs)("article",{children:[Object(c.jsxs)("div",{className:d.a.headingWrapper,children:[Object(c.jsx)(p,{children:"Install"}),Object(c.jsxs)("div",{className:d.a.copyToClipboardWrapper,children:[Object(c.jsx)(h.a,{onCopy:t,text:m,children:Object(c.jsx)("button",{children:Object(c.jsx)(j.d,{className:d.a.copyIcon})})}),i?Object(c.jsx)(h.a,{onCopy:t,text:O,children:Object(c.jsx)("button",{children:Object(c.jsx)(j.d,{className:d.a.copyIcon})})}):null]})]}),Object(c.jsxs)("div",{className:d.a.articleContentWrapper,children:[Object(c.jsx)("div",{children:m}),i?Object(c.jsx)("div",{children:O}):null]})]}),Object(c.jsxs)("article",{children:[Object(c.jsxs)("div",{className:d.a.headingWrapper,children:[Object(c.jsx)(p,{children:"Demo"}),Object(c.jsx)("a",{href:"https://github.com/piro0919/react-npm/blob/master/src/components/packages/".concat(Object(u.a)(a),"/index.tsx"),rel:"noreferrer",target:"_blank",children:Object(c.jsx)(j.b,{className:d.a.githubIcon})})]}),Object(c.jsx)("div",{className:d.a.articleContentWrapper,children:Object(c.jsx)(r.Suspense,{fallback:null,children:Object(c.jsx)(x,{})})})]})]})]})},w=function(e){var t=e.handleCopy,n=e.name,r=e.typesVersion,a=e.version;return Object(c.jsx)(v,{children:function(e){var s=e.nodePackageManager;return Object(c.jsx)(k,{handleCopy:t,name:n,nodePackageManager:s,typesVersion:r,version:a})}})},C=n(76),R=n.n(C),W=function(e){var t=e.items,n=Object(r.useMemo)((function(){return t.map((function(e){var t=e.handleCopy,n=e.key,r=e.name,a=e.typesVersion,s=e.version;return Object(c.jsx)("li",{children:Object(c.jsx)(w,{handleCopy:t,name:r,typesVersion:a,version:s})},n)}))}),[t]);return Object(c.jsx)("ul",{className:R.a.list,children:n})},N=n(77),M=n.n(N),I=function(){return Object(c.jsxs)("footer",{className:M.a.footer,children:[Object(c.jsx)("p",{children:"\xa9 2020 React npm"}),Object(c.jsx)("nav",{children:Object(c.jsx)("a",{href:"https://github.com/piro0919/react-npm",rel:"noreferrer",target:"_blank",children:"GitHub"})})]})},P=function(){return Object(c.jsx)("h1",{children:"React npm"})},S=n(78),E=n.n(S),A=n(26),L=n.n(A),T=function(e){var t=e.handleChange,n=e.nodePackageManager,a=Object(r.useState)("npm"===n),s=Object(x.a)(a,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){o("npm"===n)}),[n]),Object(c.jsx)(E.a,{checked:i,checkedIcon:Object(c.jsx)("div",{className:L.a.iconWrapper,children:Object(c.jsx)(j.c,{className:L.a.icon})}),handleDiameter:24,height:28,offColor:"#2c8ebb",onChange:t,onColor:"#c53635",uncheckedIcon:Object(c.jsx)("div",{className:L.a.iconWrapper,children:Object(c.jsx)(j.e,{className:L.a.icon})}),width:56})},H=function(){return Object(c.jsx)(v,{children:function(e){var t=e.nodePackageManager,n=e.toggleNodePackageManager;return Object(c.jsx)(T,{handleChange:n,nodePackageManager:t})}})},V=n(25),D=n(79),F=n.n(D),z=function(){return Object(c.jsxs)("header",{className:F.a.header,children:[Object(c.jsx)(V.b,{to:"/",children:Object(c.jsx)(P,{})}),Object(c.jsx)(H,{})]})},B=function(){var e=Object(r.useState)({windowHeight:0,windowWidth:0}),t=Object(x.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c({windowHeight:window.innerHeight,windowWidth:window.innerWidth})};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},q=n(58),G=n.n(q),J=n(81),U=n.n(J),Z=function(e){var t=e.children,n=B().windowHeight,a=Object(r.useMemo)((function(){return{minHeight:n}}),[n]);return Object(c.jsx)(U.a,{children:Object(c.jsxs)("div",{className:G.a.wrapper,style:a,children:[Object(c.jsx)(z,{}),Object(c.jsx)("div",{className:G.a.contentWrapper,children:t}),Object(c.jsx)(I,{})]})})},K=n(73),X=n(54),Q=function(){var e=Object(K.a)(),t=Object(r.useCallback)((function(){return X.b.success("Copied to clipboard!",{containerId:"pages"})}),[]),n=Object(r.useMemo)((function(){return e.map((function(e){var n=e.name,c=e.typesVersion,r=e.version;return{handleCopy:t,name:n,typesVersion:c,version:r,key:n}}))}),[t,e]);return Object(c.jsxs)(Z,{children:[Object(c.jsx)(W,{items:n}),Object(c.jsx)(X.a,{containerId:"pages",enableMultiContainer:!0,position:"bottom-right"})]})},Y=function(){return Object(c.jsx)(i.c,{children:Object(c.jsx)(i.a,{exact:!0,path:"/",children:Object(c.jsx)(Q,{})})})},$=(n(143),n(144),n(83),document.getElementById("root"));if($){var ee=Object(c.jsx)(r.StrictMode,{children:Object(c.jsx)(_,{children:Object(c.jsx)(V.a,{basename:"",children:Object(c.jsx)(Y,{})})})});$.hasChildNodes()?Object(a.hydrate)(ee,$):Object(a.render)(ee,$),s()}},26:function(e,t,n){e.exports={iconWrapper:"style_iconWrapper__3foGp",icon:"style_icon__3_9y5"}},4:function(e,t,n){e.exports={wrapper:"style_wrapper__hE0sK",headerWrapper:"style_headerWrapper__dwB0-",npmIcon:"style_npmIcon__2eFtn",copyIcon:"style_copyIcon__x6zO6",githubIcon:"style_githubIcon__3o0Iw",contentWrapper:"style_contentWrapper__3PAkP",headingWrapper:"style_headingWrapper__IUrOc",articleContentWrapper:"style_articleContentWrapper__3Cdfx",versionsWrapper:"style_versionsWrapper__3G7xk",types:"style_types__2D467",copyToClipboardWrapper:"style_copyToClipboardWrapper__3BZwW"}},58:function(e,t,n){e.exports={wrapper:"style_wrapper__523ZX",contentWrapper:"style_contentWrapper__H-PHy"}},73:function(e,t,n){"use strict";var c=n(8),r=n(0),a=n(82);t.a=function(){var e=Object(r.useMemo)((function(){return["concurrently","gh-pages","node-sass","npm-run-all","pascal-case","react","react-copy-to-clipboard","react-dom","react-no-ssr","react-router-dom","react-scripts","react-snap","react-switch","read-package-json","ress","sass-mq","typescript","use-persisted-state","web-vitals"]}),[]);return Object(r.useMemo)((function(){var t=a.dependencies;return Object.entries(t).filter((function(e){return-1===Object(c.a)(e,1)[0].indexOf("@")})).filter((function(t){var n=Object(c.a)(t,1)[0];return!e.includes(n)})).map((function(e){var n=Object(c.a)(e,2),r=n[0];return{name:r,version:n[1],typesVersion:"@types/".concat(r)in t?t["@types/".concat(r)]:""}}))}),[e])}},76:function(e,t,n){e.exports={list:"style_list__uHw0z"}},77:function(e,t,n){e.exports={footer:"style_footer__2ccSq"}},79:function(e,t,n){e.exports={header:"style_header__3O4WM"}},82:function(e){e.exports=JSON.parse('{"browserslist":{"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"],"production":[">0.2%","not dead","not op_mini all"]},"dependencies":{"@testing-library/jest-dom":"5.11.6","@testing-library/react":"11.2.2","@testing-library/user-event":"12.2.2","@types/jest":"26.0.15","@types/node":"12.19.7","@types/react":"16.14.2","@types/react-aria-modal":"4.0.2","@types/react-autosuggest":"10.0.1","@types/react-copy-to-clipboard":"4.3.0","@types/react-dom":"16.9.10","@types/react-no-ssr":"1.1.1","@types/react-router-dom":"5.1.6","@types/react-spinkit":"3.0.6","@types/use-persisted-state":"0.3.0","gh-pages":"3.1.0","node-sass":"4.14.1","pascal-case":"3.1.1","react":"17.0.1","react-aria-modal":"4.0.0","react-autosuggest":"10.0.4","react-copy-to-clipboard":"5.0.2","react-dom":"17.0.1","react-icons":"4.1.0","react-lines-ellipsis":"0.14.1","react-no-ssr":"1.1.0","react-router-dom":"5.2.0","react-scripts":"4.0.1","react-snap":"1.23.0","react-spinkit":"3.0.0","react-spinners":"0.9.0","react-switch":"5.0.1","react-toastify":"6.1.0","ress":"3.0.0","sass-mq":"5.0.1","typescript":"4.1.2","use-persisted-state":"0.3.3","web-vitals":"0.2.4"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"homepage":"https://react-npm.kk-web.link","name":"react-npm","private":true,"scripts":{"build":"react-scripts build","copy":"cp package.json ./src/hooks/usePackages/jsons/package.json","deploy":"gh-pages -d build","eject":"react-scripts eject","postbuild":"react-snap","prebuild":"npm run copy","predeploy":"npm run build","prestart":"npm run copy","reactsnap":"react-snap","serve":"serve -s build","start":"react-scripts start","test":"react-scripts test"},"version":"0.1.0"}')},92:function(e,t,n){var c={"./ReactAriaModal":[32,9,3,5],"./ReactAriaModal/":[32,9,3,5],"./ReactAriaModal/index":[32,9,3,5],"./ReactAriaModal/index.tsx":[32,9,3,5],"./ReactAriaModal/style.module.scss":[146,7,14],"./ReactAutosuggest":[33,9,1,6],"./ReactAutosuggest/":[33,9,1,6],"./ReactAutosuggest/index":[33,9,1,6],"./ReactAutosuggest/index.tsx":[33,9,1,6],"./ReactAutosuggest/style.module.scss":[147,7,15],"./ReactIcons":[34,9,8],"./ReactIcons/":[34,9,8],"./ReactIcons/index":[34,9,8],"./ReactIcons/index.tsx":[34,9,8],"./ReactLinesEllipsis":[35,9,4],"./ReactLinesEllipsis/":[35,9,4],"./ReactLinesEllipsis/index":[35,9,4],"./ReactLinesEllipsis/index.tsx":[35,9,4],"./ReactLinesEllipsis/style.module.scss":[148,7,16],"./ReactSpinkit":[36,9,0,7],"./ReactSpinkit/":[36,9,0,7],"./ReactSpinkit/index":[36,9,0,7],"./ReactSpinkit/index.tsx":[36,9,0,7],"./ReactSpinkit/style.module.scss":[149,7,17],"./ReactSpinners":[37,9,2,9],"./ReactSpinners/":[37,9,2,9],"./ReactSpinners/index":[37,9,2,9],"./ReactSpinners/index.tsx":[37,9,2,9],"./ReactToastify":[38,9,10],"./ReactToastify/":[38,9,10],"./ReactToastify/index":[38,9,10],"./ReactToastify/index.tsx":[38,9,10]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return Promise.all(t.slice(2).map(n.e)).then((function(){return n.t(r,t[1])}))}r.keys=function(){return Object.keys(c)},r.id=92,e.exports=r}},[[145,12,13]]]);
//# sourceMappingURL=main.6043046f.chunk.js.map