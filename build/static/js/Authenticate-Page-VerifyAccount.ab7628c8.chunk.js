(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[82,88,89,203],{295:function(e,t,r){"use strict";r.r(t);r(455),r(5);var n=r(822),c=r(823),o=r(824),i=r(792),a=r(821),u=r(583),s=r(14);t.default=function(e){var t=e.children,r=e.title,l=e.extra,d=Object(u.useHistory)();return Object(s.jsxs)("div",{className:"auth-page",children:[Object(s.jsxs)("div",{className:"background-auth row",children:[Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)("div",{className:"wrap-cloud-auth",children:Object(s.jsx)("div",{className:"cloud-auth"})})}),Object(s.jsx)("div",{className:"col-md-6",children:Object(s.jsx)("div",{className:"right-img"})}),Object(s.jsx)("div",{className:"cloud-bottom"}),Object(s.jsx)("div",{className:"bottom-background"})]}),Object(s.jsxs)("div",{className:"auth-wrapper",children:[Object(s.jsx)("div",{className:"auth-arrow",onClick:function(){return d.goBack()},children:Object(s.jsx)(i.a,{bordered:!0,size:"lg",rounded:!0,color:"primary",className:"bg-white mb-1",Icon:a.a})}),Object(s.jsx)("div",{className:"auth-form",children:Object(s.jsx)(n.a,{children:Object(s.jsxs)(c.a,{children:[Object(s.jsx)(o.a,{className:"card-head-title pt-2",children:r}),Object(s.jsx)("div",{className:"card-head-extra",children:l}),t]})})})]})]})}},297:function(e,t,r){"use strict";r.r(t),r.d(t,"reducer",(function(){return c})),r.d(t,"formSubmitLoadingSelector",(function(){return o})),r.d(t,"formSubmitSuccessSelector",(function(){return i})),r.d(t,"formSubmitErrorSelector",(function(){return a})),r.d(t,"formSubmitDataResponseSelector",(function(){return u}));var n=r(37),c=function(e){return e.formForgotPassword},o=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordLoading)||!1})),i=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordSuccess)||!1})),a=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordError)||!1})),u=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotPasswordDataResponse)||null}))},326:function(e,t,r){"use strict";r.r(t),r.d(t,"reducer",(function(){return c})),r.d(t,"formSubmitLoadingSelector",(function(){return o})),r.d(t,"formSubmitSuccessSelector",(function(){return i})),r.d(t,"formSubmitErrorSelector",(function(){return a})),r.d(t,"formSubmitDataResponseSelector",(function(){return u}));var n=r(37),c=function(e){return e.formForgotUsername},o=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameLoading)||!1})),i=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameSuccess)||!1})),a=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameError)||!1})),u=Object(n.a)(c,(function(e){return(null===e||void 0===e?void 0:e.formForgotUsernameDataResponse)||null}))},327:function(e,t,r){"use strict";r.r(t),r.d(t,"getValueForm",(function(){return i})),r.d(t,"validationSchema",(function(){return a}));var n=r(0),c=r(599),o=r(585),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(n.a)({otp:null},e)},a=function(e){return c.a().shape({otp:c.c().nullable().required(Object(o.d)(e.t("validation:required"),e.t("FormVerifyAccount:field:otp")))})}},359:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(5),o=r(786),i=r(802),a=r(632),u=r(629),s=r(295),l=r(583),d=r(567),b=r(76),f=r(89),m=r(297),j=r(326),O=r(589),v=r(327),h=r(60),p=r(585),g=r(14);t.default=function(){var e=Object(l.useParams)(),t=Object(d.a)().i18n,r=Object(l.useHistory)(),x=Object(b.b)(),S=Object(b.c)((function(e){return Object(f.formSubmitErrorSelector)(e)})),y=Object(b.c)((function(e){return Object(f.formSubmitDataResponseSelector)(e)})),w=Object(b.c)((function(e){return Object(f.formSubmitLoadingSelector)(e)})),N=Object(b.c)((function(e){return Object(f.formSubmitSuccessSelector)(e)})),F=Object(b.c)((function(e){return Object(m.formSubmitDataResponseSelector)(e)})),R=(Object(b.c)((function(e){return Object(j.formSubmitDataResponseSelector)(e)})),null===e||void 0===e?void 0:e.type),k=Object(b.c)((function(e){var t;null===F||void 0===F||F.userName;return 0===R?{phone:null===F||void 0===F?void 0:F.phone,type:"forgotPassword",userName:null===F||void 0===F?void 0:F.userName}:{phone:null===(t=Object(j.formSubmitDataResponseSelector)(e))||void 0===t?void 0:t.phone,type:"forgotUsername"}})),V=p.b.test(k);return Object(c.useEffect)((function(){var e;return S?(O.b.error(null===(e=y.error)||void 0===e?void 0:e.retText,{position:"top-center",autoClose:3e3}),x(h.actions.formVerifyAccountFnReset()),function(){x(h.actions.formVerifyAccountFnReset())}):N?(O.b.dismiss(),r.push("/accounts/list"),function(){x(h.actions.formVerifyAccountFnReset({keepDataResponse:!0}))}):void 0}),[N,S]),Object(g.jsx)(s.default,{title:t.t("FormVerifyAccount:title"),extra:V?Object(p.e)(t.t("FormVerifyAccount:title_description_email"),{"{_Email_}":Object(p.g)(k.phone)}):Object(p.e)(t.t("FormVerifyAccount:title_description_phone"),{"{_Phone_}":Object(p.g)(k.phone)}),children:Object(g.jsx)(a.a,{onSubmit:function(e){k?x(h.actions.formVerifyAccountFnMethod(Object(n.a)({otp:e.otp},k))):r.goBack()},validationSchema:Object(v.validationSchema)(t),initialValues:Object(v.getValueForm)({}),children:function(e){return Object(g.jsxs)(o.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(g.jsx)(u.a,Object(n.a)(Object(n.a)({field:"otp"},e),{},{className:"mb-2",innerClass:"text-center",placeholder:t.t("FormVerifyAccount:field:otp")})),Object(g.jsx)(i.a,{color:"primary",size:"lg",block:!0,className:"mb-2",loading:w,onClick:e.handleSubmit,children:t.t("FormVerifyAccount:btn_verify")})]})}})})}},455:function(e,t,r){},585:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"e",(function(){return a})),r.d(t,"c",(function(){return u})),r.d(t,"f",(function(){return s}));r(0);var n=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e;for(var c in n=n.replace(/{_field_}/gi,t),r){var o=r[c];n=n.replace(new RegExp(c,"gi"),o)}return n},c=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,o=/((84|0[3|5|7|8|9])+([0-9]{8})\b)|(^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$)/,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(e.substring(4,6),"***")},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e;for(var n in t){var c=t[n];r=r.replace(new RegExp(n,"gi"),c)}return r},u=/^[a-zA-Z\xc0\xc1\xc2\xc3\xc8\xc9\xca\u1ebe\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\u1ebf\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6" +"\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3"+"\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\xfd\u1ef5\u1ef7\u1ef9\s]{1,50}$/,s=/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/},629:function(e,t,r){"use strict";var n=r(8),c=(r(5),r(630),r(781)),o=r(782),i=r(783),a=r(784),u=r(785),s=r(631),l=r(568),d=r.n(l),b=r(14),f=function(e){var t,r=e.field,l=e.label,f=e.borderless,m=e.placeholder,j=e.required,O=e.prepend,v=e.children,h=e.append,p=e.type,g=e.handleChange,x=e.handleBlur,S=e.className,y=e.touched,w=void 0===y?{}:y,N=e.errors,F=void 0===N?{}:N,R=e.values,k=void 0===R?{}:R,V=e.innerClass,E=e.handleSubmit,A=e.submitOnEnter,C=e.disabled,_=void 0!==C&&C,D=e.multiline,P=void 0!==D&&D,U=e.onBlurCustom,z=w[r],B=F[r],L=k[r]||"",q=Object(b.jsx)(c.a,{disabled:_,className:"form-field-rounded "+V,invalid:Boolean(B&&z),onBlur:U||x(r),onChange:g(r),value:L,placeholder:m,required:j,type:p,multiple:P,onKeyUp:function(e){return("Enter"===e.key||13===e.keyCode)&&A&&"function"===typeof E&&E()}}),T=z&&Object(b.jsx)("p",{className:"field-error",children:B});return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(o.a,{className:d()((t={},Object(n.a)(t,S,!0),Object(n.a)(t,"borderless",f),t)),style:{position:"relative"},children:[l&&Object(b.jsx)(i.a,{className:"form-label",children:l}),h||O?Object(b.jsxs)(a.a,{children:[O&&Object(b.jsx)(u.a,{addonType:"prepend",children:Object(b.jsx)(s.a,{children:O})}),q,h&&Object(b.jsx)(u.a,{addonType:"append",children:Object(b.jsx)(s.a,{children:h})}),T]}):Object(b.jsxs)(b.Fragment,{children:[q,T]}),v]})})};f.defaultProps={className:"",innerclass:"",submitOnEnter:!0},t.a=f},630:function(e,t,r){},792:function(e,t,r){"use strict";var n=r(8),c=r(0),o=(r(5),r(568)),i=r.n(o),a=(r(796),r(14)),u={sm:17,md:20,lg:36};t.a=function(e){var t,r=e.size,o=e.bordered,s=e.rounded,l=e.Icon,d=e.onClick,b=e.className,f=void 0===b?"":b,m=e.color,j=e.width,O=e.height,v=e.marginRight,h=e.iconSize,p=e.style,g=e.centered;return Object(a.jsx)("span",{style:Object(c.a)(Object(c.a)({},p),{},{width:r?u[r]:j,height:r?u[r]:O}),className:i()((t={},Object(n.a)(t,f,!0),Object(n.a)(t,"flex-center justify-content-center",g),Object(n.a)(t,"custom-icon",!0),Object(n.a)(t,"custom-icon-btn",o&&s),Object(n.a)(t,"text-".concat(m),m),Object(n.a)(t,"rounded-circle",s),Object(n.a)(t,"mr-1",v),Object(n.a)(t,"rounded-circle",s),Object(n.a)(t,"bordered",o),t)),onClick:function(){return"function"===typeof d&&d()},children:Object(a.jsx)(l,{size:h||void 0})})}},796:function(e,t,r){}}]);
//# sourceMappingURL=Authenticate-Page-VerifyAccount.ab7628c8.chunk.js.map