(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-switch-switch"],{"24c0":function(t,i,a){var e=a("8dc4");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("128679f5",e,!0,{sourceMap:!1,shadowMode:!1})},"35b0":function(t,i,a){"use strict";a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var e={cuCustom:a("ceb0").default},s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("开关")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("基本样式")],1)],1),a("v-uni-view",{staticClass:"margin-tb margin-lr-sm"},[a("v-uni-view",{staticClass:"cu-form-group radius-lg-top"},[a("v-uni-view",{staticClass:"title"},[t._v("未启用")]),a("v-uni-switch")],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("已启用")]),a("v-uni-switch",{attrs:{checked:!0}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("禁用-默认未启用")]),a("v-uni-switch",{attrs:{disabled:!0}})],1),a("v-uni-view",{staticClass:"cu-form-group radius-lg-bottom"},[a("v-uni-view",{staticClass:"title"},[t._v("禁用-默认已启用")]),a("v-uni-switch",{attrs:{checked:!0,disabled:!0}})],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("自定义")],1)],1),a("v-uni-view",{staticClass:"margin-tb margin-lr-sm"},[a("v-uni-view",{staticClass:"cu-form-group margin-top radius-lg-top"},[a("v-uni-view",{staticClass:"title"},[t._v("定义颜色")]),a("v-uni-switch",{staticClass:"red",attrs:{checked:!0}}),a("v-uni-switch",{staticClass:"blue",attrs:{checked:!0}})],1),a("v-uni-view",{staticClass:"cu-form-group"},[a("v-uni-view",{staticClass:"title"},[t._v("定义图标")]),a("v-uni-switch",{staticClass:"switch-sex",attrs:{checked:!0}}),a("v-uni-switch",{staticClass:"switch-music",attrs:{checked:!0}})],1),a("v-uni-view",{staticClass:"cu-form-group radius-lg-bottom"},[a("v-uni-view",{staticClass:"title"},[t._v("方形开关")]),a("v-uni-switch",{staticClass:"orange radius",attrs:{checked:!0}})],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("绑定事件")],1)],1),a("v-uni-view",{staticClass:"cu-form-group margin-top margin-lr-sm radius-df"},[a("v-uni-view",{staticClass:"title"},[t._v("当前值："+t._s(t.sex))]),a("v-uni-switch",{staticClass:"switch-sex",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switchSex.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("扩展样式(蛋黄派开关)")],1)],1),a("v-uni-view",{staticClass:"flex justify-center margin-sm bg-white padding-sm radius-df"},[a("v-uni-view",{on:{click:function(i){i.stopPropagation(),i.preventDefault(),arguments[0]=i=t.$handleEvent(i),t.eggClick.apply(void 0,arguments)}}},[a("egg-input",{attrs:{id:"egg-toggle",type:"checkbox"}}),a("egg-label",{attrs:{for:"egg-toggle"}},[void 0==t.ischecked?a("span",{attrs:{id:"egg"}}):a("span",{class:t.ischecked?"egg-flip":"unegg-flip",attrs:{id:"egg"}})])],1)],1),a("v-uni-view",{staticClass:"margin-top"},[[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-ad",{attrs:{"unit-id":"adunit-51e2e8351a3c07a2"}})],2)],1)},n=[]},"626d":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{sex:"女",ischecked:void 0,undefined:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{switchSex:function(t){t.detail.value?this.setData({sex:"男"}):this.setData({sex:"女"})},eggClick:function(){this.setData({ischecked:!this.ischecked})}}};i.default=e},6710:function(t,i,a){"use strict";a.r(i);var e=a("ea2b"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},"8c5a":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"/* pages/index/basics/switch/switch.wxss */",""]),t.exports=i},"8dc4":function(t,i,a){var e=a("24fb");i=e(!1),i.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=i},"9aa0":function(t,i,a){"use strict";a.r(i);var e=a("626d"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);i["default"]=s.a},ade9:function(t,i,a){"use strict";var e=a("24c0"),s=a.n(e);s.a},b57a:function(t,i,a){var e=a("8c5a");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("b020d3fa",e,!0,{sourceMap:!1,shadowMode:!1})},ceb0:function(t,i,a){"use strict";a.r(i);var e=a("e339"),s=a("6710");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("ade9");var c,u=a("f0c5"),o=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"a1a1f87a",null,!1,e["a"],c);i["default"]=o.exports},e339:function(t,i,a){"use strict";var e;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return e}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},e8f1:function(t,i,a){"use strict";a.r(i);var e=a("35b0"),s=a("9aa0");for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);a("f394");var c,u=a("f0c5"),o=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"20cb1e32",null,!1,e["a"],c);i["default"]=o.exports},ea2b:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=getApp(),s={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};i.default=s},f394:function(t,i,a){"use strict";var e=a("b57a"),s=a.n(e);s.a}}]);