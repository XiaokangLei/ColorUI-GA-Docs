(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-login-home-home"],{"17c20":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* pages/template/login/home/home.wxss */",""]),t.exports=e},"1dac":function(t,e,a){"use strict";a.r(e);var n=a("a26b"),i=a("8c06");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("8bae");var u,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"500e152c",null,!1,n["a"],u);e["default"]=s.exports},"24c0":function(t,e,a){var n=a("8dc4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("128679f5",n,!0,{sourceMap:!1,shadowMode:!1})},5718:function(t,e,a){var n=a("17c20");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6b4eaf8b",n,!0,{sourceMap:!1,shadowMode:!1})},6710:function(t,e,a){"use strict";a.r(e);var n=a("ea2b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"8bae":function(t,e,a){"use strict";var n=a("5718"),i=a.n(n);i.a},"8c06":function(t,e,a){"use strict";a.r(e);var n=a("ce1b"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);e["default"]=i.a},"8dc4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},a26b:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var n={cuCustom:a("ceb0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("登录注册UI设计")])],1),a("v-uni-scroll-view",{staticClass:"scrollPage cu-timeline bg-gray",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.elements,(function(e,n){return a("v-uni-navigator",{key:n,staticClass:"nav-lie",attrs:{"open-type":"navigate","hover-class":"none",url:"/pages/template/login/"+e.name+"/"+e.name}},[a("v-uni-image",{staticClass:"image-bg-ui radius-lg",attrs:{src:e.url,mode:"widthFix"}}),a("v-uni-view",{staticClass:"flex justify-center"},[a("v-uni-button",{staticClass:"cu-btn bg-blue light sm margin-top-xs"},[t._v("查 看")])],1)],1)})),1),[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-view",{staticClass:"cu-tabbar-height"})],2)],1)},o=[]},ade9:function(t,e,a){"use strict";var n=a("24c0"),i=a.n(n);i.a},ce1b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{elements:[{title:"未知",name:"login01",url:"https://image.meiye.art/Fv_O73hw9yJYuEihQIN0lWD5fWS8?imageMogr2/thumbnail/450x/interlace/1"},{title:"未知",name:"login02",url:"https://image.meiye.art/FhQOTLhaPo1ACuYB3ZytJOLCF9R3?imageMogr2/thumbnail/450x/interlace/1"}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};e.default=n},ceb0:function(t,e,a){"use strict";a.r(e);var n=a("e339"),i=a("6710");for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);a("ade9");var u,c=a("f0c5"),s=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a1a1f87a",null,!1,n["a"],u);e["default"]=s.exports},e339:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},o=[]},ea2b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i}}]);