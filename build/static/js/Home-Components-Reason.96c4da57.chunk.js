/*! For license information please see Home-Components-Reason.96c4da57.chunk.js.LICENSE.txt */
(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[118,207,208,209,211],{331:function(e,t,n){"use strict";n.r(t);n(5);var r=n(564),o=n(580),a=n(470),i=n(471),s=n(472),c=n(473),u=n(14);t.default=function(){return Object(u.jsx)("div",{className:"py-5 reason-area",children:Object(u.jsx)("div",{className:"reason-container",children:Object(u.jsxs)(r.a,{className:"p-0",children:[Object(u.jsx)(o.a,{xl:"6",lg:"6",md:"6",className:"p-0",children:Object(u.jsx)("div",{className:"reason-title",children:Object(u.jsx)("img",{alt:"three-reason",src:a.default})})}),Object(u.jsx)(o.a,{xl:"6",lg:"6",md:"6",className:"p-0",children:Object(u.jsxs)("div",{className:"list-reason-item-container",children:[Object(u.jsxs)("div",{className:"reason-item-container",children:[Object(u.jsx)("img",{src:i.default,className:"reason-item__image",alt:"img"}),Object(u.jsxs)("span",{children:["Tr\u1ea3i nghi\u1ec7m",Object(u.jsx)("br",{}),"h\u1ecdc t\u1eadp b\u1ed5 \xedch"]})]}),Object(u.jsxs)("div",{className:"reason-item-container",children:[Object(u.jsx)("img",{className:"reason-item__image",alt:"img",src:s.default}),Object(u.jsxs)("span",{children:["Lan to\u1ea3",Object(u.jsx)("br",{}),"gi\xe1 tr\u1ecb"]})]}),Object(u.jsxs)("div",{className:"reason-item-container",children:[Object(u.jsx)("img",{className:"reason-item__image",alt:"img",src:c.default}),Object(u.jsxs)("span",{children:["Nh\u1eadn qu\xe0",Object(u.jsx)("br",{}),"kh\xf4ng gi\u1edbi h\u1ea1n"]})]})]})})]})})})}},470:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/three-reason.bfea56e7.png"},471:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/reason1.480e4f62.png"},472:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/reason2.1dfdb324.png"},473:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/reason3.23d206b0.png"},530:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},531:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"q",(function(){return p})),n.d(t,"p",(function(){return b})),n.d(t,"o",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return y})),n.d(t,"j",(function(){return v})),n.d(t,"d",(function(){return x})),n.d(t,"i",(function(){return w})),n.d(t,"h",(function(){return T})),n.d(t,"f",(function(){return k}));var r,o=n(264),a=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function s(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function c(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function u(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function l(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function d(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,a={};o>0;)a[n=r[o-=1]]=e[n];return a}var f={};function p(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var m="object"===typeof window&&window.Element||function(){};var b=a.a.oneOfType([a.a.string,a.a.func,function(e,t,n){if(!(e[t]instanceof m))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},a.a.shape({current:a.a.any})]),h=a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func}),a.a.arrayOf(a.a.oneOfType([a.a.func,a.a.string,a.a.shape({$$typeof:a.a.symbol,render:a.a.func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},j=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],y={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},v={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},x=!("undefined"===typeof window||!window.document||!window.document.createElement);function O(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function E(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!w(e))return!1;var t=O(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&x){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||x&&"number"===typeof e.length)}function T(e,t){var n=E(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},564:function(e,t,n){"use strict";var r=n(18),o=n(34),a=n(5),i=n.n(a),s=n(264),c=n.n(s),u=n(530),l=n.n(u),d=n(531),f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:d.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},m={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var t=e.className,n=e.cssModule,a=e.noGutters,s=e.tag,c=e.form,u=e.widths,f=Object(o.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];u.forEach((function(t,n){var r=e[t];if(delete f[t],r){var o=!n;p.push(o?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var m=Object(d.k)(l()(t,a?"no-gutters":null,c?"form-row":"row",p),n);return i.a.createElement(s,Object(r.a)({},f,{className:m}))};b.propTypes=p,b.defaultProps=m,t.a=b},580:function(e,t,n){"use strict";var r=n(18),o=n(34),a=n(5),i=n.n(a),s=n(264),c=n.n(s),u=n(530),l=n.n(u),d=n(531),f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),m={tag:d.o,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},g=function(e){var t=e.className,n=e.cssModule,a=e.widths,s=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),u=[];a.forEach((function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(Object(d.i)(o)){var i,s=a?"-":"-"+t+"-",f=h(a,t,o.size);u.push(Object(d.k)(l()(((i={})[f]=o.size||""===o.size,i["order"+s+o.order]=o.order||0===o.order,i["offset"+s+o.offset]=o.offset||0===o.offset,i)),n))}else{var p=h(a,t,o);u.push(p)}}})),u.length||u.push("col");var f=Object(d.k)(l()(t,u),n);return i.a.createElement(s,Object(r.a)({},c,{className:f}))};g.propTypes=m,g.defaultProps=b,t.a=g}}]);
//# sourceMappingURL=Home-Components-Reason.96c4da57.chunk.js.map