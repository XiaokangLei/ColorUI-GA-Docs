(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-button-button"],{"0500":function(t,i,a){var n=a("61b1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("5772b5f7",n,!0,{sourceMap:!1,shadowMode:!1})},1688:function(t,i,a){"use strict";a.r(i);var n=a("d035"),s=a("c969");for(var e in s)"default"!==e&&function(t){a.d(i,t,(function(){return s[t]}))}(e);a("7820");var u,c=a("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"618ec621",null,!1,n["a"],u);i["default"]=o.exports},"24c0":function(t,i,a){var n=a("8dc4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=a("4f06").default;s("128679f5",n,!0,{sourceMap:!1,shadowMode:!1})},"61b1":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,"/* pages/index/basics/button/button.wxss */",""]),t.exports=i},6710:function(t,i,a){"use strict";a.r(i);var n=a("ea2b"),s=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,(function(){return n[t]}))}(e);i["default"]=s.a},7820:function(t,i,a){"use strict";var n=a("0500"),s=a.n(n);s.a},"8dc4":function(t,i,a){var n=a("24fb");i=n(!1),i.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=i},ab6b:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=getApp(),s={data:function(){return{ColorList:n.globalData.ColorList,shadow:"",bordersize:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{SetShadow:function(t){this.setData({shadow:t.detail.value})},SetBorderSize:function(t){this.setData({bordersize:t.detail.value})}}};i.default=s},ade9:function(t,i,a){"use strict";var n=a("24c0"),s=a.n(n);s.a},c969:function(t,i,a){"use strict";a.r(i);var n=a("ab6b"),s=a.n(n);for(var e in n)"default"!==e&&function(t){a.d(i,t,(function(){return n[t]}))}(e);i["default"]=s.a},ceb0:function(t,i,a){"use strict";a.r(i);var n=a("e339"),s=a("6710");for(var e in s)"default"!==e&&function(t){a.d(i,t,(function(){return s[t]}))}(e);a("ade9");var u,c=a("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"a1a1f87a",null,!1,n["a"],u);i["default"]=o.exports},d035:function(t,i,a){"use strict";a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){return n}));var n={cuCustom:a("ceb0").default},s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("按钮")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("按钮形状")],1),a("v-uni-navigator",{staticClass:"action",attrs:{url:"design","hover-class":"none"}},[a("v-uni-text",{staticClass:"text-df text-orange margin-right-sm"},[t._v("自定义")]),a("v-uni-text",{staticClass:"cuIcon-skinfill text-orange"})],1)],1),a("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white margin-sm radius-df"},[a("v-uni-button",{staticClass:"cu-btn"},[t._v("默认")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("圆角")]),a("v-uni-button",{staticClass:"cu-btn icon"},[a("v-uni-text",{staticClass:"cuIcon-emojifill text-blue"})],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("按钮尺寸")],1)],1),a("v-uni-view",{staticClass:"padding flex flex-wrap justify-between align-center bg-white margin-sm radius-df"},[a("v-uni-button",{staticClass:"cu-btn round sm"},[t._v("小尺寸")]),a("v-uni-button",{staticClass:"cu-btn round"},[t._v("默认")]),a("v-uni-button",{staticClass:"cu-btn round lg"},[t._v("大尺寸")]),a("v-uni-button",{staticClass:"cu-btn round xxl"},[t._v("超大尺寸")])],1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("按钮颜色")],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-df margin-right-sm"},[t._v("阴影")]),a("v-uni-switch",{staticClass:"sm",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetShadow.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"grid col-5 bg-white padding-sm margin-sm radius-lg"},t._l(t.ColorList,(function(i,n){return a("v-uni-view",{key:n,staticClass:"margin-tb-sm text-center"},[a("v-uni-button",{class:"cu-btn round bg-"+i.name+" "+(t.shadow?"shadow":"")},[t._v(t._s(i.title))])],1)})),1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("镂空按钮")],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-radio-group",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.SetBorderSize.apply(void 0,arguments)}}},[a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue sm radio",attrs:{value:"",checked:!0}}),a("v-uni-text",[t._v("细")])],1),a("v-uni-label",{staticClass:"margin-left-sm"},[a("v-uni-radio",{staticClass:"blue sm radio",attrs:{value:"s"}}),a("v-uni-text",[t._v("粗")])],1)],1)],1)],1),a("v-uni-view",{staticClass:"grid col-5 bg-white padding-sm margin-sm radius-lg"},t._l(t.ColorList,(function(i,n){return"white"!=i.name?a("v-uni-view",{key:n,staticClass:"margin-tb-sm text-center"},[a("v-uni-button",{class:"cu-btn round line"+(t.bordersize?t.bordersize:"")+"-"+i.name+" "+(t.shadow?"shadow":"")},[t._v(t._s(i.title))])],1):t._e()})),1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("块状按钮")],1)],1),a("v-uni-view",{staticClass:"padding flex flex-direction bg-white margin-sm radius-lg"},[a("v-uni-button",{staticClass:"cu-btn bg-grey lg"},[t._v("玄灰")]),a("v-uni-button",{staticClass:"cu-btn bg-red margin-tb-sm lg"},[t._v("嫣红")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),a("v-uni-text",[t._v("操作条按钮组")])],1)],1),a("v-uni-view",{staticClass:"box bg-white margin-sm radius-lg"},[a("v-uni-view",{staticClass:"cu-bar btn-group"},[a("v-uni-button",{staticClass:"cu-btn bg-orange shadow-blur round lg"},[t._v("保存")])],1),a("v-uni-view",{staticClass:"cu-bar btn-group"},[a("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur"},[t._v("取消")]),a("v-uni-button",{staticClass:"cu-btn text-green line-green shadow"},[t._v("上传")])],1),a("v-uni-view",{staticClass:"cu-bar btn-group"},[a("v-uni-button",{staticClass:"cu-btn bg-green shadow-blur round"},[t._v("保存")]),a("v-uni-button",{staticClass:"cu-btn bg-blue shadow-blur round"},[t._v("提交")])],1)],1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("无效状态")],1)],1),a("v-uni-view",{staticClass:"padding bg-white margin-sm radius-lg"},[a("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg",attrs:{disabled:!0,type:""}},[t._v("无效状态")]),a("v-uni-button",{staticClass:"cu-btn block line-blue margin-tb-sm lg",attrs:{disabled:!0}},[t._v("无效状态")])],1),a("v-uni-view",{staticClass:"cu-bar margin-top bg-white"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("按钮加图标")],1)],1),a("v-uni-view",{staticClass:"padding-xl bg-white margin-sm radius-lg"},[a("v-uni-button",{staticClass:"cu-btn block line-orange lg"},[a("v-uni-text",{staticClass:"cuIcon-upload"}),t._v("上传")],1),a("v-uni-button",{staticClass:"cu-btn block bg-blue margin-tb-sm lg"},[a("v-uni-text",{staticClass:"cuIcon-loading2 iconfont-spin"}),t._v("加载")],1),a("v-uni-button",{staticClass:"cu-btn block bg-green light margin-tb-sm lg",attrs:{loading:!0}},[t._v("加载中")])],1),a("v-uni-view",{staticClass:"margin-top"},[[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-ad",{attrs:{"unit-id":"adunit-51e2e8351a3c07a2"}})],2)],1)},e=[]},e339:function(t,i,a){"use strict";var n;a.d(i,"b",(function(){return s})),a.d(i,"c",(function(){return e})),a.d(i,"a",(function(){return n}));var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},e=[]},ea2b:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=getApp(),s={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};i.default=s}}]);