(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-default-default"],{1860:function(t,n,e){"use strict";e.r(n);var a=e("89a9"),o=e("b6e2");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("b809");var i,c=e("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"068e0adf",null,!1,a["a"],i);n["default"]=s.exports},"24c0":function(t,n,e){var a=e("8dc4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("128679f5",a,!0,{sourceMap:!1,shadowMode:!1})},"622d":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"/* pages/template/default/default.wxss */",""]),t.exports=n},6710:function(t,n,e){"use strict";e.r(n);var a=e("ea2b"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=o.a},"89a9":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var a={cuCustom:e("ceb0").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("敬请期待")])],1),[e("v-uni-view",{staticClass:"nodata"},[e("v-uni-view",{staticClass:"icon"}),e("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.nodata_str||"— — 敬请期待 — —"))])],1)]],2)},u=[]},"8d57":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{nodata_str:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};n.default=a},"8dc4":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=n},ade9:function(t,n,e){"use strict";var a=e("24c0"),o=e.n(a);o.a},b6e2:function(t,n,e){"use strict";e.r(n);var a=e("8d57"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=o.a},b809:function(t,n,e){"use strict";var a=e("cb42"),o=e.n(a);o.a},cb42:function(t,n,e){var a=e("622d");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=e("4f06").default;o("ebc5977e",a,!0,{sourceMap:!1,shadowMode:!1})},ceb0:function(t,n,e){"use strict";e.r(n);var a=e("e339"),o=e("6710");for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);e("ade9");var i,c=e("f0c5"),s=Object(c["a"])(o["default"],a["b"],a["c"],!1,null,"a1a1f87a",null,!1,a["a"],i);n["default"]=s.exports},e339:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[e("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?e("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[e("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.BackPage.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toHome.apply(void 0,arguments)}}})],1):t._e(),e("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},u=[]},ea2b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=getApp(),o={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};n.default=o}}]);