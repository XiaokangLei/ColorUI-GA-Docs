(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-about-log-log"],{"1c9a":function(t,n,a){var e=a("9ad5");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("e02bb984",e,!0,{sourceMap:!1,shadowMode:!1})},"24c0":function(t,n,a){var e=a("8dc4");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var o=a("4f06").default;o("128679f5",e,!0,{sourceMap:!1,shadowMode:!1})},"396e":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{logData:[{version:"v2.1.0",data:"2023/1/12",info:["1.新增完整UI模板《北岛小店》","2.新增倒计时样式","3.新增进步器样式","4.样式库代码调整"]},{version:"v2.0.9",data:"2023/1/5",info:["1.新增书籍学习模板+2","2.新增登录注册模板+2","3.新增日历农历、常用公司logo图标","4.部分样式调整"]},{version:"v2.0.8",data:"2022/12/15",info:["1.新增骨架屏、日历、表格样式","2.新增历史搜索、卡券、商品滑动样式","3.新增轻提示、抽奖、卡片设计样式","4.部分样式调整"]},{version:"v2.0.7",data:"2022/12/12",info:["1.UI模板+4","2.新增评分样式","3.新增手风琴样式","4.新增滚动提示样式","5.部分样式调整"]},{version:"v2.0.6",data:"2022/12/09",info:["1.用户列表UI模板+2","2.评论页UI模板+2","3.新增瀑布流样式","4.新增背景色样式","5.轮播图样式+1","6.部分样式调整"]},{version:"v2.0.5",data:"2022/11/27",info:["1.首页UI模板+2","2.个人中心UI模板+2","3.部分样式更新"]},{version:"v2.0.4",data:"2022/10/24",info:["1.优化darkmodel样式","2.新增背景浅色渐变高亮样式","3.部分样式更新"]},{version:"v2.0.3",data:"2022/10/18",info:["1.去除模板页","2.新增黑色模式","3.部分样式更新"]},{version:"v2.0.2",data:"2022/10/16",info:["1.新增模板页、关于页","2.去除悬浮按钮，新增关于页面","3.新增日志更新页面","4.代码开源"]},{version:"v2.0.1",data:"2022/10/14",info:["1.ColorUI 2.0基础代码结构重构","2.临时修复swiper左侧消失bug","3.基础页面开发"]}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};n.default=e},"3d81":function(t,n,a){"use strict";var e=a("1c9a"),o=a.n(e);o.a},6710:function(t,n,a){"use strict";a.r(n);var e=a("ea2b"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"7a93":function(t,n,a){"use strict";a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var e={cuCustom:a("ceb0").default},o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("更新日志")])],1),a("v-uni-view",{staticClass:"cu-timeline"},[t._l(t.logData,(function(n,e){return[a("v-uni-view",{key:e+"_0",staticClass:"cu-item text-blue"},[a("v-uni-view",{staticClass:"bg-blue light content shadow"},[a("v-uni-view",{staticClass:"cu-capsule radius"},[a("v-uni-view",{staticClass:"cu-tag bg-white text-blue"},[t._v(t._s(n.version))]),a("v-uni-view",{staticClass:"cu-tag line-blue"},[t._v(t._s(n.data))])],1),t._l(n.info,(function(n,e){return a("v-uni-view",{key:e,staticClass:"margin-top-sm text-content"},[a("v-uni-view",[t._v(t._s(n))])],1)}))],2)],1)]})),a("v-uni-view",{staticClass:"margin-top"},[[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)]],2)],2)],1)},i=[]},"81f3":function(t,n,a){"use strict";a.r(n);var e=a("396e"),o=a.n(e);for(var i in e)"default"!==i&&function(t){a.d(n,t,(function(){return e[t]}))}(i);n["default"]=o.a},"85ea":function(t,n,a){"use strict";a.r(n);var e=a("7a93"),o=a("81f3");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("3d81");var u,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"769b9c2c",null,!1,e["a"],u);n["default"]=c.exports},"8dc4":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=n},"9ad5":function(t,n,a){var e=a("24fb");n=e(!1),n.push([t.i,"/* pages/about/log/log.wxss */",""]),t.exports=n},ade9:function(t,n,a){"use strict";var e=a("24c0"),o=a.n(e);o.a},ceb0:function(t,n,a){"use strict";a.r(n);var e=a("e339"),o=a("6710");for(var i in o)"default"!==i&&function(t){a.d(n,t,(function(){return o[t]}))}(i);a("ade9");var u,s=a("f0c5"),c=Object(s["a"])(o["default"],e["b"],e["c"],!1,null,"a1a1f87a",null,!1,e["a"],u);n["default"]=c.exports},e339:function(t,n,a){"use strict";var e;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return e}));var o=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},i=[]},ea2b:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=getApp(),o={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};n.default=o}}]);