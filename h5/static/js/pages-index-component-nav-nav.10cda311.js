(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-component-nav-nav"],{"24c0":function(t,e,a){var n=a("8dc4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("128679f5",n,!0,{sourceMap:!1,shadowMode:!1})},"2f0d":function(t,e,a){var n=a("b674");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("f815de6a",n,!0,{sourceMap:!1,shadowMode:!1})},"5c7e":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{TabCur:0,scrollLeft:0}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{tabSelect:function(t){this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})}}};e.default=n},6710:function(t,e,a){"use strict";a.r(e);var n=a("ea2b"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},"7c72":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var n={cuCustom:a("ceb0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("导航栏")])],1),t._l(10,(function(e,n){return n==t.TabCur?a("v-uni-view",{key:n,staticClass:"bg-grey padding margin text-center"},[t._v("Tab"+t._s(n))]):t._e()})),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("默认")],1)],1),a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0,"scroll-with-animation":!0,"scroll-left":t.scrollLeft}},t._l(10,(function(e,n){return a("v-uni-view",{key:n,class:"cu-item "+(n==t.TabCur?"text-blue cur":""),attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(n))])})),1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("居中")],1)],1),a("v-uni-scroll-view",{staticClass:"bg-white nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(e,n){return a("v-uni-view",{key:n,class:"cu-item "+(n==t.TabCur?"text-blue cur":""),attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(n))])})),1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("平分")],1)],1),a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},t._l(4,(function(e,n){return a("v-uni-view",{key:n,class:"cu-item flex-sub "+(n==t.TabCur?"text-blue cur":""),attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(n))])})),1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("背景")],1)],1),a("v-uni-scroll-view",{staticClass:"bg-red nav text-center",attrs:{"scroll-x":!0}},t._l(3,(function(e,n){return a("v-uni-view",{key:n,class:"cu-item "+(n==t.TabCur?"text-white cur":""),attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab"+t._s(n))])})),1),a("v-uni-view",{staticClass:"cu-bar bg-white margin-top solid-bottom"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("图标")],1)],1),a("v-uni-scroll-view",{staticClass:"bg-blue nav text-center",attrs:{"scroll-x":!0}},[a("v-uni-view",{class:"cu-item "+(0==t.TabCur?"text-white cur":""),attrs:{"data-id":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-camerafill"}),t._v("数码")],1),a("v-uni-view",{class:"cu-item "+(1==t.TabCur?"text-white cur":""),attrs:{"data-id":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-upstagefill"}),t._v("排行榜")],1),a("v-uni-view",{class:"cu-item "+(2==t.TabCur?"text-white cur":""),attrs:{"data-id":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-clothesfill"}),t._v("皮肤")],1)],1),a("v-uni-view",{staticClass:"margin-top"},[[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-ad",{attrs:{"unit-id":"adunit-548518d3cd8c2bc3"}})],2)],2)},c=[]},"8dc4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},9726:function(t,e,a){"use strict";a.r(e);var n=a("5c7e"),i=a.n(n);for(var c in n)"default"!==c&&function(t){a.d(e,t,(function(){return n[t]}))}(c);e["default"]=i.a},a411:function(t,e,a){"use strict";var n=a("2f0d"),i=a.n(n);i.a},ade9:function(t,e,a){"use strict";var n=a("24c0"),i=a.n(n);i.a},b674:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* pages/index/component/nav/nav.wxss */",""]),t.exports=e},be23:function(t,e,a){"use strict";a.r(e);var n=a("7c72"),i=a("9726");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("a411");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"33d74796",null,!1,n["a"],s);e["default"]=o.exports},ceb0:function(t,e,a){"use strict";a.r(e);var n=a("e339"),i=a("6710");for(var c in i)"default"!==c&&function(t){a.d(e,t,(function(){return i[t]}))}(c);a("ade9");var s,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"a1a1f87a",null,!1,n["a"],s);e["default"]=o.exports},e339:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},c=[]},ea2b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i}}]);