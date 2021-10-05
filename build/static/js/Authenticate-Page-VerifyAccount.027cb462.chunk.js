/*! For license information please see Authenticate-Page-VerifyAccount.027cb462.chunk.js.LICENSE.txt */
(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[81,77,87,88,94,183],{293:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return o})),n.d(t,"formSubmitLoadingSelector",(function(){return c})),n.d(t,"formSubmitSuccessSelector",(function(){return i})),n.d(t,"formSubmitErrorSelector",(function(){return a})),n.d(t,"formSubmitDataResponseSelector",(function(){return u}));var r=n(37),o=function(e){return e.formForgotPassword},c=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordLoading)||!1})),i=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordSuccess)||!1})),a=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordError)||!1})),u=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordDataResponse)||null}))},312:function(e,t,n){"use strict";n.r(t);n(442);var r=n(5),o=n.n(r),c=n(18),i=n(34),a=n(264),u=n.n(a),l=n(530),s=n.n(l),d=n(531),f={tag:d.o,inverse:u.a.bool,color:u.a.string,body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},b=function(e){var t=e.className,n=e.cssModule,r=e.color,a=e.body,u=e.inverse,l=e.outline,f=e.tag,b=e.innerRef,p=Object(i.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(d.k)(s()(t,"card",!!u&&"text-white",!!a&&"card-body",!!r&&(l?"border":"bg")+"-"+r),n);return o.a.createElement(f,Object(c.a)({},p,{className:m,ref:b}))};b.propTypes=f,b.defaultProps={tag:"div"};var p=b,m={tag:d.o,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},j=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,a=e.tag,u=Object(i.a)(e,["className","cssModule","innerRef","tag"]),l=Object(d.k)(s()(t,"card-body"),n);return o.a.createElement(a,Object(c.a)({},u,{className:l,ref:r}))};j.propTypes=m,j.defaultProps={tag:"div"};var v=j,h={tag:d.o,className:u.a.string,cssModule:u.a.object},O=function(e){var t=e.className,n=e.cssModule,r=e.tag,a=Object(i.a)(e,["className","cssModule","tag"]),u=Object(d.k)(s()(t,"card-title"),n);return o.a.createElement(r,Object(c.a)({},a,{className:u}))};O.propTypes=h,O.defaultProps={tag:"div"};var g=O,y=n(608);function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,a=w(e,["color","size"]);return o.a.createElement("svg",x({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),o.a.createElement("polyline",{points:"15 18 9 12 15 6"}))}));S.propTypes={color:u.a.string,size:u.a.oneOfType([u.a.string,u.a.number])},S.displayName="ChevronLeft";var N=S,E=n(537),k=n(14);t.default=function(e){var t=e.children,n=e.title,r=e.extra,o=Object(E.f)();return Object(k.jsxs)("div",{className:"auth-page",children:[Object(k.jsxs)("div",{className:"background-auth row",children:[Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("div",{className:"wrap-cloud-auth",children:Object(k.jsx)("div",{className:"cloud-auth"})})}),Object(k.jsx)("div",{className:"col-md-6",children:Object(k.jsx)("div",{className:"right-img"})}),Object(k.jsx)("div",{className:"cloud-bottom"}),Object(k.jsx)("div",{className:"bottom-background"})]}),Object(k.jsxs)("div",{className:"auth-wrapper",children:[Object(k.jsx)("div",{className:"auth-arrow",onClick:function(){return o.goBack()},children:Object(k.jsx)(y.a,{bordered:!0,size:"lg",rounded:!0,color:"primary",className:"bg-white mb-1",Icon:N})}),Object(k.jsx)("div",{className:"auth-form",children:Object(k.jsx)(p,{children:Object(k.jsxs)(v,{children:[Object(k.jsx)(g,{className:"card-head-title pt-2",children:n}),Object(k.jsx)("div",{className:"card-head-extra",children:r}),t]})})})]})]})}},321:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return o})),n.d(t,"formSubmitLoadingSelector",(function(){return c})),n.d(t,"formSubmitSuccessSelector",(function(){return i})),n.d(t,"formSubmitErrorSelector",(function(){return a})),n.d(t,"formSubmitDataResponseSelector",(function(){return u}));var r=n(37),o=function(e){return e.formForgotUsername},c=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameLoading)||!1})),i=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameSuccess)||!1})),a=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameError)||!1})),u=Object(r.a)(o,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameDataResponse)||null}))},322:function(e,t,n){"use strict";n.r(t),n.d(t,"getValueForm",(function(){return i})),n.d(t,"validationSchema",(function(){return a}));var r=n(0),o=n(549),c=n(539),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r.a)({otp:null},e)},a=function(e){return o.a().shape({otp:o.c().nullable().required(Object(c.d)(e.t("validation:required"),e.t("FormVerifyAccount:field:otp")))})}},358:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(5),c=n(604),i=n(668),a=n(567),u=n(559),l=n(312),s=n(537),d=n(529),f=n(76),b=n(88),p=n(293),m=n(321),j=n(565),v=n(322),h=n(60),O=n(539),g=n(14);t.default=function(){var e=Object(s.h)(),t=Object(d.a)().i18n,n=Object(s.f)(),y=Object(f.b)(),x=Object(f.c)((function(e){return Object(b.formSubmitErrorSelector)(e)})),w=Object(f.c)((function(e){return Object(b.formSubmitDataResponseSelector)(e)})),S=Object(f.c)((function(e){return Object(b.formSubmitLoadingSelector)(e)})),N=Object(f.c)((function(e){return Object(b.formSubmitSuccessSelector)(e)})),E=Object(f.c)((function(e){return Object(p.formSubmitDataResponseSelector)(e)})),k=(Object(f.c)((function(e){return Object(m.formSubmitDataResponseSelector)(e)})),null===e||void 0===e?void 0:e.type),C=Object(f.c)((function(e){var t;null===E||void 0===E||E.userName;return 0===k?{phone:null===E||void 0===E?void 0:E.phone,type:"forgotPassword",userName:null===E||void 0===E?void 0:E.userName}:{phone:null===(t=Object(m.formSubmitDataResponseSelector)(e))||void 0===t?void 0:t.phone,type:"forgotUsername"}})),R=O.b.test(C);return Object(o.useEffect)((function(){var e;return x?(j.b.error(null===(e=w.error)||void 0===e?void 0:e.retText,{position:"top-center",autoClose:3e3}),y(h.actions.formVerifyAccountFnReset()),function(){y(h.actions.formVerifyAccountFnReset())}):N?(j.b.dismiss(),n.push("/accounts/list"),function(){y(h.actions.formVerifyAccountFnReset({keepDataResponse:!0}))}):void 0}),[N,x]),Object(g.jsx)(l.default,{title:t.t("FormVerifyAccount:title"),extra:R?Object(O.e)(t.t("FormVerifyAccount:title_description_email"),{"{_Email_}":Object(O.g)(C.phone)}):Object(O.e)(t.t("FormVerifyAccount:title_description_phone"),{"{_Phone_}":Object(O.g)(C.phone)}),children:Object(g.jsx)(a.a,{onSubmit:function(e){C?y(h.actions.formVerifyAccountFnMethod(Object(r.a)({otp:e.otp},C))):n.goBack()},validationSchema:Object(v.validationSchema)(t),initialValues:Object(v.getValueForm)({}),children:function(e){return Object(g.jsxs)(c.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)(u.a,Object(r.a)(Object(r.a)({field:"otp"},e),{},{className:"mb-2",innerClass:"text-center",placeholder:t.t("FormVerifyAccount:field:otp")})),Object(g.jsx)(i.a,{color:"primary",size:"lg",block:!0,className:"mb-2",loading:S,onClick:e.handleSubmit,children:t.t("FormVerifyAccount:btn_verify")})]})}})})}},442:function(e,t,n){},530:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===c)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},531:function(e,t,n){"use strict";n.d(t,"n",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return s})),n.d(t,"m",(function(){return d})),n.d(t,"q",(function(){return b})),n.d(t,"p",(function(){return m})),n.d(t,"o",(function(){return j})),n.d(t,"c",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"j",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"i",(function(){return w})),n.d(t,"h",(function(){return E})),n.d(t,"f",(function(){return k}));var r,o=n(264),c=n.n(o);function i(e){document.body.style.paddingRight=e>0?e+"px":null}function a(){var e=window.getComputedStyle(document.body,null);return parseInt(e&&e.getPropertyValue("padding-right")||0,10)}function u(){var e=function(){var e=document.createElement("div");e.style.position="absolute",e.style.top="-9999px",e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}(),t=document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0],n=t?parseInt(t.style.paddingRight||0,10):0;document.body.clientWidth<window.innerWidth&&i(n+e)}function l(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function s(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function d(e,t){for(var n,r=Array.isArray(t)?t:[t],o=r.length,c={};o>0;)c[n=r[o-=1]]=e[n];return c}var f={};function b(e){f[e]||("undefined"!==typeof console&&console.error(e),f[e]=!0)}var p="object"===typeof window&&window.Element||function(){};var m=c.a.oneOfType([c.a.string,c.a.func,function(e,t,n){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},c.a.shape({current:c.a.any})]),j=c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func}),c.a.arrayOf(c.a.oneOfType([c.a.func,c.a.string,c.a.shape({$$typeof:c.a.symbol,render:c.a.func})]))]),v={Fade:150,Collapse:350,Modal:300,Carousel:600},h=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],O={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"},g={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},y=!("undefined"===typeof window||!window.document||!window.document.createElement);function x(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function w(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function S(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!w(e))return!1;var t=x(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&y){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function N(e){return null!==e&&(Array.isArray(e)||y&&"number"===typeof e.length)}function E(e,t){var n=S(e);return t?N(n)?n:null===n?[]:[n]:N(n)?n[0]:n}var k=["a[href]","area[href]","input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","object","embed","[tabindex]:not(.modal)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])']},539:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return l}));n(0);var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e;for(var o in r=r.replace(/{_field_}/gi,t),n){var c=n[o];r=r.replace(new RegExp(o,"gi"),c)}return r},o=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,c=/((84|0[3|5|7|8|9])+([0-9]{8})\b)|(^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$)/,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(e.substring(4,6),"***")},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;for(var r in t){var o=t[r];n=n.replace(new RegExp(r,"gi"),o)}return n},u=/^[a-zA-Z\xc0\xc1\xc2\xc3\xc8\xc9\xca\u1ebe\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\u1ebf\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6" +"\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3"+"\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\xfd\u1ef5\u1ef7\u1ef9\s]{1,50}$/,l=/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/},559:function(e,t,n){"use strict";var r=n(8),o=(n(5),n(560),n(598)),c=n(599),i=n(600),a=n(601),u=n(602),l=n(584),s=n(530),d=n.n(s),f=n(14),b=function(e){var t,n=e.field,s=e.label,b=e.borderless,p=e.placeholder,m=e.required,j=e.prepend,v=e.children,h=e.append,O=e.type,g=e.handleChange,y=e.handleBlur,x=e.className,w=e.touched,S=void 0===w?{}:w,N=e.errors,E=void 0===N?{}:N,k=e.values,C=void 0===k?{}:k,R=e.innerClass,F=e.handleSubmit,A=e.submitOnEnter,T=e.disabled,P=void 0!==T&&T,V=e.multiline,M=void 0!==V&&V,D=e.onBlurCustom,z=S[n],_=E[n],I=C[n]||"",q=Object(f.jsx)(o.a,{disabled:P,className:"form-field-rounded "+R,invalid:Boolean(_&&z),onBlur:D||y(n),onChange:g(n),value:I,placeholder:p,required:m,type:O,multiple:M,onKeyUp:function(e){return("Enter"===e.key||13===e.keyCode)&&A&&"function"===typeof F&&F()}}),L=z&&Object(f.jsx)("p",{className:"field-error",children:_});return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(c.a,{className:d()((t={},Object(r.a)(t,x,!0),Object(r.a)(t,"borderless",b),t)),style:{position:"relative"},children:[s&&Object(f.jsx)(i.a,{className:"form-label",children:s}),h||j?Object(f.jsxs)(a.a,{children:[j&&Object(f.jsx)(u.a,{addonType:"prepend",children:Object(f.jsx)(l.a,{children:j})}),q,h&&Object(f.jsx)(u.a,{addonType:"append",children:Object(f.jsx)(l.a,{children:h})}),L]}):Object(f.jsxs)(f.Fragment,{children:[q,L]}),v]})})};b.defaultProps={className:"",innerclass:"",submitOnEnter:!0},t.a=b},560:function(e,t,n){},608:function(e,t,n){"use strict";var r=n(8),o=n(0),c=(n(5),n(530)),i=n.n(c),a=(n(609),n(14)),u={sm:17,md:20,lg:36};t.a=function(e){var t,n=e.size,c=e.bordered,l=e.rounded,s=e.Icon,d=e.onClick,f=e.className,b=void 0===f?"":f,p=e.color,m=e.width,j=e.height,v=e.marginRight,h=e.iconSize,O=e.style,g=e.centered;return Object(a.jsx)("span",{style:Object(o.a)(Object(o.a)({},O),{},{width:n?u[n]:m,height:n?u[n]:j}),className:i()((t={},Object(r.a)(t,b,!0),Object(r.a)(t,"flex-center justify-content-center",g),Object(r.a)(t,"custom-icon",!0),Object(r.a)(t,"custom-icon-btn",c&&l),Object(r.a)(t,"text-".concat(p),p),Object(r.a)(t,"rounded-circle",l),Object(r.a)(t,"mr-1",v),Object(r.a)(t,"rounded-circle",l),Object(r.a)(t,"bordered",c),t)),onClick:function(){return"function"===typeof d&&d()},children:Object(a.jsx)(s,{size:h||void 0})})}},609:function(e,t,n){},668:function(e,t,n){"use strict";var r=n(18),o=n(34),c=n(35),i=n(534),a=n(5),u=n.n(a),l=n(264),s=n.n(l),d=n(530),f=n.n(d),b=n(531),p={active:s.a.bool,"aria-label":s.a.string,block:s.a.bool,color:s.a.string,disabled:s.a.bool,outline:s.a.bool,tag:b.o,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),onClick:s.a.func,size:s.a.string,children:s.a.node,className:s.a.string,cssModule:s.a.object,close:s.a.bool},m=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(c.a)(n)),n}Object(i.a)(t,e);var n=t.prototype;return n.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},n.render=function(){var e=this.props,t=e.active,n=e["aria-label"],c=e.block,i=e.className,a=e.close,l=e.cssModule,s=e.color,d=e.outline,p=e.size,m=e.tag,j=e.innerRef,v=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);a&&"undefined"===typeof v.children&&(v.children=u.a.createElement("span",{"aria-hidden":!0},"\xd7"));var h="btn"+(d?"-outline":"")+"-"+s,O=Object(b.k)(f()(i,{close:a},a||"btn",a||h,!!p&&"btn-"+p,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),l);v.href&&"button"===m&&(m="a");var g=a?"Close":null;return u.a.createElement(m,Object(r.a)({type:"button"===m&&v.onClick?"button":void 0},v,{className:O,ref:j,onClick:this.onClick,"aria-label":n||g}))},t}(u.a.Component);m.propTypes=p,m.defaultProps={color:"secondary",tag:"button"},t.a=m}}]);
//# sourceMappingURL=Authenticate-Page-VerifyAccount.027cb462.chunk.js.map