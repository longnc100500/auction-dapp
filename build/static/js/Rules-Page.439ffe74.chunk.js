(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[55,125,162,164,279,280,281,282,284,285],{218:function(e,t,n){"use strict";n.r(t);var o=n(57),a=(n(530),n(531),n(5)),i=n.n(a),s=n(344),l=n(345),c=n(853),r=n.n(c),u=n(14);t.default=function(){var e=i.a.useState(!1),t=Object(o.a)(e,2),n=t[0],a=t[1];return i.a.useEffect((function(){window.scrollTo(0,0)}),[]),Object(u.jsxs)("div",{className:"rules__page",children:[Object(u.jsx)(s.default,{}),Object(u.jsx)(l.default,{setIsOpen:a}),Object(u.jsx)(r.a,{channel:"youtube",isOpen:n,videoId:"W8Yo9xbcdcU",onClose:function(){return a(!1)}})]})}},277:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return a})),n.d(t,"getListLoadingSelector",(function(){return i})),n.d(t,"getListSelector",(function(){return s})),n.d(t,"getLoadListMoreLoading",(function(){return l})),n.d(t,"getHasLoadMoreSelector",(function(){return c})),n.d(t,"getPageSelector",(function(){return r}));var o=n(37),a=function(e){return e.HomeRules},i=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.loading)||!1})),s=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.list)||null})),l=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.listMoreLoading)||!1})),c=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.hasLoadMore)||!1})),r=Object(o.a)(a,(function(e){return null===e||void 0===e?void 0:e.page}))},316:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return a})),n.d(t,"getListLoadingSelector",(function(){return i})),n.d(t,"getListSelector",(function(){return s})),n.d(t,"getLoadListMoreLoading",(function(){return l})),n.d(t,"getHasLoadMoreSelector",(function(){return c})),n.d(t,"getPageSelector",(function(){return r}));var o=n(37),a=function(e){return e.EventCalendar},i=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.loading)||!1})),s=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.list)||null})),l=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.listMoreLoading)||!1})),c=Object(o.a)(a,(function(e){return(null===e||void 0===e?void 0:e.hasLoadMore)||!1})),r=Object(o.a)(a,(function(e){return null===e||void 0===e?void 0:e.page}))},344:function(e,t,n){"use strict";n.r(t);n(5);var o=n(577),a=n(511),i=n(512),s=n(14);t.default=function(){var e=Object(o.useMediaQuery)({maxWidth:767}),t=Object(o.useMediaQuery)({minWidth:768,maxWidth:1199});return Object(s.jsx)("div",{className:"inviter-banner",children:Object(s.jsx)("img",{src:e||t?a.default:i.default,width:"100%",height:"auto"})})}},345:function(e,t,n){"use strict";n.r(t);var o=n(5),a=n.n(o),i=n(634),s=n(666),l=n(346),c=n(513),r=n(277),u=n(41),d=n(76),b=n(52),m=n(316),h=n(577),p=n(514),f=n(624),j=n.n(f),g=n(14),v=function(){for(var e=j()().endOf("month");4!==e.day();)e.subtract(1,"day");return e};t.default=function(e){var t=e.setIsOpen,n=Object(d.b)(),o=Object(h.useMediaQuery)({maxWidth:767}),f=Object(d.c)(r.getListSelector),j=(Object(d.c)(r.getListLoadingSelector),Object(d.c)(m.getListSelector));Object(d.c)(m.getListLoadingSelector);return a.a.useEffect((function(){n(u.actions.getList()),n(b.actions.getList())}),[]),Object(g.jsx)("div",{className:"rules-area",children:Object(g.jsx)(i.a,{children:o?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.a,{xl:"5",lg:"5",md:"5",children:Object(g.jsxs)("div",{className:"event-calendar-container",children:[Object(g.jsxs)(i.a,{children:[Object(g.jsx)(s.a,{sm:"6",xs:"6",children:Object(g.jsxs)("div",{className:"calendar-icon__container",children:[Object(g.jsxs)("div",{style:{position:"relative"},children:[Object(g.jsx)("img",{src:p.default,style:{width:"70%",height:"auto",marginLeft:"15%"}}),Object(g.jsx)("p",{className:"calendar-date",children:v().date()}),Object(g.jsx)("p",{className:"calendar-month",children:v().month()+1})]}),Object(g.jsx)("img",{src:c.default,alt:"img",className:"calender-coin-icon"})]})}),Object(g.jsxs)(s.a,{sm:"6",xs:"6",children:[Object(g.jsx)("h1",{className:"calendar-title",children:"L\u1ecbch S\u1ef1 Ki\xean"}),Object(g.jsxs)("p",{className:"calendar-text-black",children:["T\u1ea5t c\u1ea3 \u0111i\u1ec3m c\u1ee7a c\xe1c b\u1ea1n",Object(g.jsx)("br",{})," \u0111\u01b0\u1ee3c t\xednh \u0111\u1ebfn"]})]})]}),Object(g.jsx)("span",{className:"notic-text-black",children:null===j||void 0===j?void 0:j.value}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/tamtriluc/","_blank")},children:[Object(g.jsx)(l.FacebookIcon,{size:14}),Object(g.jsx)("p",{children:"Fanpage T\xe2m Tr\xed L\u1ef1c"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/nguyenphungphongvn","_blank")},children:[Object(g.jsx)(l.FacebookIcon,{size:14}),Object(g.jsx)("p",{children:"Facebook Nguy\u1ec5n T\xf9ng Phong"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ","_blank")},children:[Object(g.jsx)(l.YoutubeIcon,{size:14}),Object(g.jsx)("p",{children:"Youtube Nguy\u1ec5n Ph\xf9ng Phong"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A","_blank")},children:[Object(g.jsx)(l.YoutubeIcon,{size:14}),Object(g.jsx)("p",{children:"Youtube Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng"})]})]})}),Object(g.jsx)(s.a,{xl:"7",lg:"7",md:"7",children:Object(g.jsxs)("div",{className:"rules-detail-container",children:[Object(g.jsx)("div",{className:"rules-detail__title-container",children:Object(g.jsx)(l.RulesTopBannerTitle,{})}),Object(g.jsx)("div",{className:"rules-detail__content",dangerouslySetInnerHTML:{__html:null===f||void 0===f?void 0:f.value}}),Object(g.jsxs)("div",{className:"rules-details-button-wrapper",onClick:function(){return t(!0)},children:[Object(g.jsx)(l.DetailButton,{}),Object(g.jsx)("span",{className:"rules-details-button-text",children:"Xem Video h\u01b0\u1edbng d\u1eabn"})]})]})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.a,{xl:"7",lg:"7",md:"7",children:Object(g.jsxs)("div",{className:"rules-detail-container",children:[Object(g.jsx)("div",{className:"rules-detail__title-container",children:Object(g.jsx)(l.RulesTopBannerTitle,{})}),Object(g.jsx)("div",{className:"rules-detail__content",dangerouslySetInnerHTML:{__html:null===f||void 0===f?void 0:f.value}}),Object(g.jsxs)("div",{className:"rules-details-button-wrapper",onClick:function(){return t(!0)},children:[Object(g.jsx)(l.DetailButton,{}),Object(g.jsx)("span",{className:"rules-details-button-text",children:"Xem Video h\u01b0\u1edbng d\u1eabn"})]})]})}),Object(g.jsx)(s.a,{xl:"5",lg:"5",md:"5",children:Object(g.jsxs)("div",{className:"event-calendar-container",children:[Object(g.jsx)("h1",{className:"calendar-title",children:"L\u1ecbch S\u1ef1 Ki\xean"}),Object(g.jsxs)("p",{className:"calendar-text-black",children:["V\xd2NG QUAY MAY M\u1eaeN",Object(g.jsx)("br",{})," \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c v\xe0o"]}),Object(g.jsxs)("div",{className:"calendar-icon__container",children:[Object(g.jsxs)("div",{style:{position:"relative"},children:[Object(g.jsx)("img",{src:p.default,style:{width:"70%",height:"auto",marginLeft:"15%"}}),Object(g.jsx)("p",{className:"calendar-date",children:v().date()}),Object(g.jsx)("p",{className:"calendar-month",children:v().month()+1})]}),Object(g.jsx)("img",{src:c.default,alt:"img",className:"calender-coin-icon"})]}),Object(g.jsx)("span",{className:"notic-text-black",children:null===j||void 0===j?void 0:j.value}),Object(g.jsx)("div",{className:"my-3"}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/tamtriluc/","_blank")},children:[Object(g.jsx)(l.FacebookIcon,{size:32}),Object(g.jsx)("p",{children:"Fanpage T\xe2m Tr\xed L\u1ef1c"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.facebook.com/nguyenphungphongvn","_blank")},children:[Object(g.jsx)(l.FacebookIcon,{size:32}),Object(g.jsx)("p",{children:"Facebook Nguy\u1ec5n T\xf9ng Phong"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UCM0bv1L91C8-z71gAzrLBCQ","_blank")},children:[Object(g.jsx)(l.YoutubeIcon,{size:32}),Object(g.jsx)("p",{children:"Youtube Nguy\u1ec5n Ph\xf9ng Phong"})]}),Object(g.jsxs)("span",{className:"social-link",onClick:function(){window.open("https://www.youtube.com/channel/UC-VY_kqMNBaTvMmDYFdUt-A","_blank")},children:[Object(g.jsx)(l.YoutubeIcon,{size:32}),Object(g.jsx)("p",{children:"Youtube Si\xeau Tr\xed Nh\u1edb H\u1ecdc \u0110\u01b0\u1eddng"})]})]})})]})})})}},511:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner-rules.b54cc7df.png"},512:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/banner-desktop.a179af64.png"},513:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/coin-icon.bf40c1b9.png"},514:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/calendar.7d878cf9.png"},530:function(e,t,n){},531:function(e,t,n){},609:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},634:function(e,t,n){"use strict";var o=n(18),a=n(34),i=n(5),s=n.n(i),l=n(264),c=n.n(l),r=n(568),u=n.n(r),d=n(569),b=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.o,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var t=e.className,n=e.cssModule,i=e.noGutters,l=e.tag,c=e.form,r=e.widths,b=Object(a.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];r.forEach((function(t,n){var o=e[t];if(delete b[t],o){var a=!n;m.push(a?"row-cols-"+o:"row-cols-"+t+"-"+o)}}));var h=Object(d.k)(u()(t,i?"no-gutters":null,c?"form-row":"row",m),n);return s.a.createElement(l,Object(o.a)({},b,{className:h}))};p.propTypes=m,p.defaultProps=h,t.a=p},666:function(e,t,n){"use strict";var o=n(18),a=n(34),i=n(5),s=n.n(i),l=n(264),c=n.n(l),r=n(568),u=n.n(r),d=n(569),b=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),h={tag:d.o,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,i=e.widths,l=e.tag,c=Object(a.a)(e,["className","cssModule","widths","tag"]),r=[];i.forEach((function(t,o){var a=e[t];if(delete c[t],a||""===a){var i=!o;if(Object(d.i)(a)){var s,l=i?"-":"-"+t+"-",b=f(i,t,a.size);r.push(Object(d.k)(u()(((s={})[b]=a.size||""===a.size,s["order"+l+a.order]=a.order||0===a.order,s["offset"+l+a.offset]=a.offset||0===a.offset,s)),n))}else{var m=f(i,t,a);r.push(m)}}})),r.length||r.push("col");var b=Object(d.k)(u()(t,r),n);return s.a.createElement(l,Object(o.a)({},c,{className:b}))};j.propTypes=h,j.defaultProps=p,t.a=j},853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=s(n(5)),i=s(n(806));function s(e){return e&&e.__esModule?e:{default:e}}var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1,modalVideoWidth:n.getWidthFulfillAspectRatio(n.props.ratio,window.innerHeight,window.innerWidth)},n.closeModal=n.closeModal.bind(n),n.updateFocus=n.updateFocus.bind(n),n.timeout,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"openModal",value:function(){this.setState({isOpen:!0})}},{key:"closeModal",value:function(){this.setState({isOpen:!1}),"function"===typeof this.props.onClose&&this.props.onClose()}},{key:"keydownHandler",value:function(e){27===e.keyCode&&this.closeModal()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),window.addEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler.bind(this)),window.removeEventListener("resize",this.resizeModalVideoWhenHeightGreaterThanWindowHeight.bind(this))}},{key:"componentDidUpdate",value:function(){this.state.isOpen&&this.modal&&this.modal.focus()}},{key:"updateFocus",value:function(e){9===e.keyCode&&(e.preventDefault(),e.stopPropagation(),this.modal===document.activeElement?this.modalbtn.focus():this.modal.focus())}},{key:"resizeModalVideoWhenHeightGreaterThanWindowHeight",value:function(){var e=this;clearTimeout(this.timeout),this.timeout=setTimeout((function(){var t=e.getWidthFulfillAspectRatio(e.props.ratio,window.innerHeight,window.innerWidth);e.state.modalVideoWidth!=t&&e.setState({modalVideoWidth:t})}),10)}},{key:"getQueryString",value:function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&null!==e[n]&&(t+=n+"="+e[n]+"&");return t.substr(0,t.length-1)}},{key:"getYoutubeUrl",value:function(e,t){return"//www.youtube.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVimeoUrl",value:function(e,t){return"//player.vimeo.com/video/"+t+"?"+this.getQueryString(e)}},{key:"getYoukuUrl",value:function(e,t){return"//player.youku.com/embed/"+t+"?"+this.getQueryString(e)}},{key:"getVideoUrl",value:function(e,t){return"youtube"===e.channel?this.getYoutubeUrl(e.youtube,t):"vimeo"===e.channel?this.getVimeoUrl(e.vimeo,t):"youku"===e.channel?this.getYoukuUrl(e.youku,t):"custom"===e.channel?e.url:void 0}},{key:"getPadding",value:function(e){var t=e.split(":"),n=Number(t[0]);return 100*Number(t[1])/n+"%"}},{key:"getWidthFulfillAspectRatio",value:function(e,t,n){var o=e.split(":"),a=Number(o[0]),i=Number(o[1]);return t<n*(i/a)?Math.floor(a/i*t):"100%"}},{key:"render",value:function(){var e=this,t={width:this.state.modalVideoWidth},n={paddingBottom:this.getPadding(this.props.ratio)};return a.default.createElement(i.default,{classNames:this.props.classNames.modalVideoEffect,timeout:this.props.animationSpeed},(function(){return e.state.isOpen?a.default.createElement("div",{className:e.props.classNames.modalVideo,tabIndex:"-1",role:"dialog","aria-label":e.props.aria.openMessage,onClick:e.closeModal,ref:function(t){e.modal=t},onKeyDown:e.updateFocus},a.default.createElement("div",{className:e.props.classNames.modalVideoBody},a.default.createElement("div",{className:e.props.classNames.modalVideoInner,style:t},a.default.createElement("div",{className:e.props.classNames.modalVideoIframeWrap,style:n},a.default.createElement("button",{className:e.props.classNames.modalVideoCloseBtn,"aria-label":e.props.aria.dismissBtnMessage,ref:function(t){e.modalbtn=t},onKeyDown:e.updateFocus}),e.props.children||a.default.createElement("iframe",{width:"460",height:"230",src:e.getVideoUrl(e.props,e.props.videoId),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:e.props.allowFullScreen,tabIndex:"-1"}))))):null}))}}],[{key:"getDerivedStateFromProps",value:function(e){return{isOpen:e.isOpen}}}]),t}(a.default.Component);t.default=l,l.defaultProps={channel:"youtube",isOpen:!1,youtube:{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark",mute:0},ratio:"16:9",vimeo:{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1},youku:{autoplay:1,show_related:0},allowFullScreen:!0,animationSpeed:300,classNames:{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"},aria:{openMessage:"You just opened the modal video",dismissBtnMessage:"Close the modal by clicking here"}}}}]);
//# sourceMappingURL=Rules-Page.439ffe74.chunk.js.map