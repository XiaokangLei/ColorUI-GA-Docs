(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-log-log"],{"2b10":function(t,e,n){"use strict";n.r(e);var a=n("94be"),o=n("f64a");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("424a");var u,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"30c88d06",null,!1,a["a"],u);e["default"]=c.exports},"396e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{logData:[{version:"v2.0.6",data:"2022/12/09",info:["1.用户列表UI模板+2","2.评论页UI模板+2","3.新增瀑布流样式","4.新增背景色样式","5.轮播图样式+1","6.部分样式调整"]},{version:"v2.0.5",data:"2022/11/27",info:["1.首页UI模板+2","2.个人中心UI模板+2","3.部分样式更新"]},{version:"v2.0.4",data:"2022/10/24",info:["1.优化darkmodel样式","2.新增背景浅色渐变高亮样式","3.部分样式更新"]},{version:"v2.0.3",data:"2022/10/18",info:["1.去除模板页","2.新增黑色模式","3.部分样式更新"]},{version:"v2.0.2",data:"2022/10/16",info:["1.新增模板页、关于页","2.去除悬浮按钮，新增关于页面","3.新增日志更新页面","4.代码开源"]},{version:"v2.0.1",data:"2022/10/14",info:["1.ColorUI 2.0基础代码结构重构","2.临时修复swiper左侧消失bug","3.基础页面开发"]}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};e.default=a},"3e2c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"/* pages/about/log/log.wxss */",""]),t.exports=e},"424a":function(t,e,n){"use strict";var a=n("e077"),o=n.n(a);o.a},"81f3":function(t,e,n){"use strict";n.r(e);var a=n("396e"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},"85ea":function(t,e,n){"use strict";n.r(e);var a=n("e988"),o=n("81f3");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("8e9b");var u,s=n("f0c5"),c=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,"43b5be94",null,!1,a["a"],u);e["default"]=c.exports},"8e9b":function(t,e,n){"use strict";var a=n("9448"),o=n.n(a);o.a},"91b6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),o={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=o},9448:function(t,e,n){var a=n("3e2c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("6f6e876a",a,!0,{sourceMap:!1,shadowMode:!1})},"94be":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[n("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?n("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[n("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),n("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},i=[]},e077:function(t,e,n){var a=n("fe09");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=n("4f06").default;o("023547a5",a,!0,{sourceMap:!1,shadowMode:!1})},e988:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a}));var a={cuCustom:n("2b10").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[n("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("日志")])],1),n("v-uni-view",{staticClass:"cu-timeline"},[t._l(t.logData,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"cu-item text-blue"},[n("v-uni-view",{staticClass:"bg-blue light content shadow"},[n("v-uni-view",{staticClass:"cu-capsule radius"},[n("v-uni-view",{staticClass:"cu-tag bg-white text-blue"},[t._v(t._s(e.version))]),n("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v(t._s(e.data))])],1),t._l(e.info,(function(e,a){return n("v-uni-view",{key:a,staticClass:"margin-top-sm text-content"},[n("v-uni-view",[t._v(t._s(e))])],1)}))],2)],1)]}))],2)],1)},i=[]},f64a:function(t,e,n){"use strict";n.r(e);var a=n("91b6"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);e["default"]=o.a},fe09:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=e}}]);