(this["webpackJsonpwebadmin-tam-tri-luc"]=this["webpackJsonpwebadmin-tam-tri-luc"]||[]).push([[52],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"getValueForm",(function(){return i})),n.d(t,"validationSchema",(function(){return u}));var l=n(0),r=n(549),a=n(539),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(l.a)({user_name:null,parent_fullname:null,phone_number:null,email:null,children_fullname:null,school_name:null,class:null,gender:null,city:null,district:null,street_address:null,date_active:null,account:null,duration:null},e)},u=function(e){return r.a().shape({parent_fullname:r.c().nullable().matches(a.c,Object(a.d)(e.t("validation:full_name"),e.t("FormUpdate:field:parent_fullname"))).required(Object(a.d)(e.t("validation:required"),e.t("FormUpdate:field:parent_fullname"))),email:r.c().nullable().email(Object(a.d)(e.t("validation:email"),e.t("activeAccount:email"))).required(Object(a.d)(e.t("validation:required"),e.t("activeAccount:email"))),phone_number:r.c().nullable().matches(a.f,Object(a.d)(e.t("validation:phone"),e.t("FormUpdate:field:phone_number"))).required(Object(a.d)(e.t("validation:required"),e.t("FormUpdate:field:phone_number"))),children_fullname:r.c().nullable().matches(a.c,Object(a.d)(e.t("validation:full_name"),e.t("activeLesson:children_fullname"))).required(Object(a.d)(e.t("validation:required"),e.t("activeLesson:children_fullname"))),school_name:r.c().nullable().required(Object(a.d)(e.t("validation:required"),e.t("activeAccount:school_name"))),class:r.c().nullable().required(Object(a.d)(e.t("validation:required"),e.t("activeAccount:class_name"))),street_address:r.c().nullable().required(Object(a.d)(e.t("validation:required"),e.t("activeAccount:full_address"))),city:r.c().nullable().required(Object(a.d)(e.t("validation:required"),e.t("FormUpdate:field:city"))),district:r.c().nullable().required(Object(a.d)(e.t("validation:required"),e.t("FormUpdate:field:district")))})}},539:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"g",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"f",(function(){return d}));n(0);var l=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=e;for(var r in l=l.replace(/{_field_}/gi,t),n){var a=n[r];l=l.replace(new RegExp(r,"gi"),a)}return l},r=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,a=/((84|0[3|5|7|8|9])+([0-9]{8})\b)|(^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$)/,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=e.replace(e.substring(4,6),"***")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e;for(var l in t){var r=t[l];n=n.replace(new RegExp(l,"gi"),r)}return n},c=/^[a-zA-Z\xc0\xc1\xc2\xc3\xc8\xc9\xca\u1ebe\xcc\xcd\xd2\xd3\xd4\xd5\xd9\xda\u0102\u0110\u0128\u0168\u01a0\xe0\xe1\xe2\xe3\xe8\xe9\xea\u1ebf\xec\xed\xf2\xf3\xf4\xf5\xf9\xfa\u0103\u0111\u0129\u0169\u01a1\u01af\u0102\u1ea0\u1ea2\u1ea4\u1ea6\u1ea8\u1eaa\u1eac\u1eae\u1eb0\u1eb2\u1eb4\u1eb6" +"\u1eb8\u1eba\u1ebc\u1ec0\u1ec0\u1ec2\u01b0\u0103\u1ea1\u1ea3\u1ea5\u1ea7\u1ea9\u1eab\u1ead\u1eaf\u1eb1\u1eb3\u1eb5\u1eb7\u1eb9\u1ebb\u1ebd\u1ec1\u1ec1\u1ec3\u1ec4\u1ec6\u1ec8\u1eca\u1ecc\u1ece\u1ed0\u1ed2\u1ed4\u1ed6\u1ed8\u1eda\u1edc\u1ede\u1ee0\u1ee2\u1ee4\u1ee6\u1ee8\u1eea\u1ec5\u1ec7\u1ec9\u1ecb\u1ecd\u1ecf\u1ed1\u1ed3\u1ed5\u1ed7\u1ed9\u1edb\u1edd\u1edf\u1ee1\u1ee3"+"\u1ee5\u1ee7\u1ee9\u1eeb\u1eec\u1eee\u1ef0\u1ef2\u1ef4\xdd\u1ef6\u1ef8\u1eed\u1eef\u1ef1\u1ef3\xfd\u1ef5\u1ef7\u1ef9\s]{1,50}$/,d=/([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/}}]);
//# sourceMappingURL=Profile-validation.8e3b7330.chunk.js.map