(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[113,121],{298:function(e,t,n){"use strict";n.r(t),n.d(t,"reducer",(function(){return i})),n.d(t,"getListLoadingSelector",(function(){return c})),n.d(t,"getListSelector",(function(){return a})),n.d(t,"getLoadListMoreLoading",(function(){return o})),n.d(t,"getHasLoadMoreSelector",(function(){return l})),n.d(t,"getPageSelector",(function(){return s}));var r=n(37),i=function(e){return e.HomeNews},c=Object(r.a)(i,(function(e){return(null===e||void 0===e?void 0:e.loading)||!1})),a=Object(r.a)(i,(function(e){return(null===e||void 0===e?void 0:e.list)||null})),o=Object(r.a)(i,(function(e){return(null===e||void 0===e?void 0:e.listMoreLoading)||!1})),l=Object(r.a)(i,(function(e){return(null===e||void 0===e?void 0:e.hasLoadMore)||!1})),s=Object(r.a)(i,(function(e){return null===e||void 0===e?void 0:e.page}))},326:function(e,t,n){"use strict";n.r(t);var r=n(5),i=n.n(r),c=n(625),a=n.n(c),o=n(76),l=n(537),s=n(547),u=n(10),d=n(283),f=n(45),b=n(298),j=n(14);t.default=function(){var e,t,n=Object(o.b)(),c=Object(l.f)(),O=Object(o.c)(b.getListSelector),m=(Object(o.c)(b.getListLoadingSelector),Object(r.useRef)());i.a.useEffect((function(){n(f.actions.getList({limit:u.e,page:1}))}),[]);return Object(j.jsx)("div",{className:"news-area",children:Object(j.jsxs)("div",{className:"news-container",children:[Object(j.jsx)("h1",{className:"news-container__title",children:"Tin t\u1ee9c n\u1ed5i b\u1eadt"}),Object(j.jsx)("h1",{className:"news-container__subtitle",children:"Theo d\xf5i \u0111\u1ec3 kh\xf4ng b\u1ecf l\u1ee1 c\u01a1 h\u1ed9i nh\u1eadn v\xe0 \u0111\u1ed5i h\xe0ng ngh\xecn qu\xe0 t\u1eb7ng h\u1ea5p d\u1eabn"}),Object(j.jsxs)("div",{style:{position:"relative"},children:[(null===O||void 0===O||null===(e=O.listData)||void 0===e?void 0:e.length)<5?null:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{onClick:function(){var e;null===m||void 0===m||null===(e=m.current)||void 0===e||e.prev()},className:"arrow-left",children:Object(j.jsx)(d.ArrowLeftIcon,{})}),Object(j.jsx)("div",{onClick:function(){var e;null===m||void 0===m||null===(e=m.current)||void 0===e||e.next()},className:"arrow-right",children:Object(j.jsx)(d.ArrowRightIcon,{})})]}),Object(j.jsx)(a.a,{ref:m,items:4,children:null===O||void 0===O||null===(t=O.listData)||void 0===t?void 0:t.map((function(e,t){return Object(j.jsxs)("div",{className:"news-item__container",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void c.push("/news/".concat(t,"/home"));var t},children:[Object(j.jsx)("div",{className:"news-item__image",children:Object(j.jsx)(s.a,{src:null===e||void 0===e?void 0:e.urlImage,alt:"news-image",placeholderClassName:"news-item__image-loading"})}),Object(j.jsx)("p",{className:"news-item__title",children:null===e||void 0===e?void 0:e.title}),Object(j.jsx)("span",{className:"news-item__subtitle",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.content}})]},null===e||void 0===e?void 0:e.id)}))})]})]})})}},547:function(e,t,n){"use strict";var r=n(0),i=n(57),c=n(553),a=n(5),o=n.n(a),l=n(561),s=(n(552),n(14)),u=["placeholderClassName"],d=function(){return Object(s.jsx)(l.a,{speed:2,width:800,height:860,viewBox:"0 0 800 860",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:Object(s.jsx)("rect",{x:"-38",y:"0",rx:"2",ry:"2",width:"860",height:"860"})})};t.a=function(e){var t=e.placeholderClassName,n=void 0===t?"":t,a=Object(c.a)(e,u),l=o.a.useState(null),f=Object(i.a)(l,2),b=f[0],j=f[1];return o.a.useEffect((function(){if(j(null),a.src){var e=function(){j(a.src)},t=new Image;return t.addEventListener("load",e),t.src=a.src,function(){t.removeEventListener("load",e)}}}),[a.src]),b===a.src?Object(s.jsx)("img",Object(r.a)({},a)):Object(s.jsx)("div",{className:"aync-image-loading "+n,children:Object(s.jsx)(d,{})})}},552:function(e,t,n){},553:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return r}))},561:function(e,t,n){"use strict";var r=n(5),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},i.apply(this,arguments)};var c=function(e){var t=e.animate,n=e.backgroundColor,c=e.backgroundOpacity,a=e.baseUrl,o=e.children,l=e.foregroundColor,s=e.foregroundOpacity,u=e.gradientRatio,d=e.uniqueKey,f=e.interval,b=e.rtl,j=e.speed,O=e.style,m=e.title,v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","interval","rtl","speed","style","title"]),g=d||Math.random().toString(36).substring(6),h=g+"-diff",p=g+"-animated-diff",y=g+"-aria",x=b?{transform:"scaleX(-1)"}:null,w="0; "+f+"; 1",E=j+"s";return Object(r.createElement)("svg",i({"aria-labelledby":y,role:"img",style:i(i({},O),x)},v),m?Object(r.createElement)("title",{id:y},m):null,Object(r.createElement)("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url("+a+"#"+h+")",style:{fill:"url("+a+"#"+p+")"}}),Object(r.createElement)("defs",null,Object(r.createElement)("clipPath",{id:h},o),Object(r.createElement)("linearGradient",{id:p},Object(r.createElement)("stop",{offset:"0%",stopColor:n,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u+"; "+-u+"; 1",keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"50%",stopColor:l,stopOpacity:s},t&&Object(r.createElement)("animate",{attributeName:"offset",values:-u/2+"; "+-u/2+"; "+(1+u/2),keyTimes:w,dur:E,repeatCount:"indefinite"})),Object(r.createElement)("stop",{offset:"100%",stopColor:n,stopOpacity:c},t&&Object(r.createElement)("animate",{attributeName:"offset",values:"0; 0; "+(1+u),keyTimes:w,dur:E,repeatCount:"indefinite"})))))};c.defaultProps={animate:!0,backgroundColor:"#f5f6f7",backgroundOpacity:1,baseUrl:"",foregroundColor:"#eee",foregroundOpacity:1,gradientRatio:2,id:null,interval:.25,rtl:!1,speed:1.2,style:{},title:"Loading..."};var a=function(e){return e.children?Object(r.createElement)(c,i({},e)):Object(r.createElement)(o,i({},e))},o=function(e){return Object(r.createElement)(a,i({viewBox:"0 0 476 124"},e),Object(r.createElement)("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),Object(r.createElement)("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),Object(r.createElement)("circle",{cx:"20",cy:"20",r:"20"}))};t.a=a}}]);
//# sourceMappingURL=Home-Components-News.0143def6.chunk.js.map