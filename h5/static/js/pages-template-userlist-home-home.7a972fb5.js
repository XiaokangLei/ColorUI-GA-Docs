(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-userlist-home-home"],{"1ae9":function(t,e,a){"use strict";a.r(e);var n=a("48c3"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"23ed":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* pages/template/userlist/home/home.wxss */.image-bg[data-v-ee359b6a]{width:100%}",""]),t.exports=e},"2b10":function(t,e,a){"use strict";a.r(e);var n=a("94be"),i=a("f64a");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("424a");var u,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"30c88d06",null,!1,n["a"],u);e["default"]=c.exports},"424a":function(t,e,a){"use strict";var n=a("e077"),i=a.n(n);i.a},"48c3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{elements:[{title:"未知",name:"userlist01",url:"https://image.meiye.art/FkaecKbfz38Iif_8d7X9nSuOShY4"},{title:"未知",name:"userlist02",url:"https://image.meiye.art/FtxJNlV5aj0hCFnMevbzlfrlGrL-"}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};e.default=n},"513d":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={cuCustom:a("2b10").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[a("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("用户列表UI设计")])],1),a("v-uni-scroll-view",{staticClass:"scrollPage cu-timeline bg-gray",attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.elements,(function(e,n){return a("v-uni-navigator",{key:n,staticClass:"nav-lie",attrs:{"open-type":"navigate","hover-class":"none",url:"/pages/template/userlist/"+e.name+"/"+e.name}},[a("v-uni-image",{staticClass:"image-bg radius-lg",attrs:{src:e.url,mode:"widthFix"}}),a("v-uni-view",{staticClass:"flex justify-center"},[a("v-uni-button",{staticClass:"cu-btn bg-blue light sm margin-top-xs"},[t._v("查 看")])],1)],1)})),1),[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-view",{staticClass:"cu-tabbar-height"})],2)],1)},s=[]},"637e":function(t,e,a){var n=a("23ed");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("e9fc90f0",n,!0,{sourceMap:!1,shadowMode:!1})},"91b6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i},"94be":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[a("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},s=[]},a861:function(t,e,a){"use strict";a.r(e);var n=a("513d"),i=a("1ae9");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("e206");var u,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"ee359b6a",null,!1,n["a"],u);e["default"]=c.exports},e077:function(t,e,a){var n=a("fe09");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("023547a5",n,!0,{sourceMap:!1,shadowMode:!1})},e206:function(t,e,a){"use strict";var n=a("637e"),i=a.n(n);i.a},f64a:function(t,e,a){"use strict";a.r(e);var n=a("91b6"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},fe09:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=e}}]);