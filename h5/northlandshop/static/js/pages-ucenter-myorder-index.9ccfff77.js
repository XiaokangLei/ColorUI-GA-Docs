(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-myorder-index"],{"02bc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i},"0521":function(t,e,a){"use strict";a.r(e);var n=a("f23e"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"11f3":function(t,e,a){var n=a("5d19");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("51b8e420",n,!0,{sourceMap:!1,shadowMode:!1})},"4cd6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},"52b3":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={cuCustom:a("eadb").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("全部订单")])],1),a("v-uni-view",{staticClass:"box",style:"top: "+t.CustomBar+"px; min-height: 100vh;"},[a("v-uni-scroll-view",{staticClass:"bg-white nav",attrs:{"scroll-x":!0}},[a("v-uni-view",{staticClass:"flex text-center"},t._l(t.SortMenu,(function(e,n){return a("v-uni-view",{key:n,class:"cu-item flex-sub "+(n==t.TabCur?"text-orange cur":""),attrs:{"data-id":n},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabSelect.apply(void 0,arguments)}}},[t._v(t._s(e.name))])})),1)],1),a("v-uni-view",{staticClass:"margin-sm bg-white radius-lg padding-xs"},[a("v-uni-view",{staticClass:"padding-top-sm"},[a("v-uni-text",{staticClass:"padding-lr-sm text-lg text-black text-bold"},[t._v("北岛自营店")]),a("v-uni-navigator",{attrs:{"open-type":"navigate","hover-class":"none",url:"/pages/goods/index"}},[a("v-uni-view",{staticClass:"flex padding-sm justify-between bg-white"},[a("v-uni-view",{staticClass:"flex justify-center"},[a("v-uni-view",{staticClass:"bg-img radius margin-lr-xs",staticStyle:{"background-image":"url(http://yanxuan.nosdn.127.net/9331158a10c79a0663e53865cd1689ec.jpg)",height:"140rpx",width:"120rpx"}}),a("v-uni-view",{staticClass:"text-black margin-left-sm"},[a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-black text-lg"},[t._v("简约风小台灯")])],1),a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-sm"},[t._v("共 1 件")])],1),a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-red text-price"},[t._v("10.00")])],1)],1)],1),a("v-uni-view",{staticClass:"margin-left-sm text-xl flex justify-center align-center",staticStyle:{width:"40rpx"}},[a("v-uni-view",{staticClass:"cuIcon-right"})],1)],1)],1),a("v-uni-navigator",{attrs:{"open-type":"navigate","hover-class":"none",url:"/pages/goods/index"}},[a("v-uni-view",{staticClass:"flex padding-sm justify-between bg-white"},[a("v-uni-view",{staticClass:"flex justify-center"},[a("v-uni-view",{staticClass:"bg-img radius margin-lr-xs",staticStyle:{"background-image":"url(http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png)",height:"140rpx",width:"120rpx"}}),a("v-uni-view",{staticClass:"text-black margin-left-sm"},[a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-black text-lg"},[t._v("日式和风懒人沙发")])],1),a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-sm"},[t._v("共 2 件")])],1),a("v-uni-view",{staticClass:"text-left margin-top-xs"},[a("v-uni-text",{staticClass:"text-red text-price"},[t._v("20.00")])],1)],1)],1),a("v-uni-view",{staticClass:"margin-left-sm text-xl flex justify-center align-center",staticStyle:{width:"40rpx"}},[a("v-uni-view",{staticClass:"cuIcon-right"})],1)],1)],1),a("v-uni-view",{staticClass:"padding-lr padding-tb-xs"},[t._v("共 3 件商品 合计："),a("v-uni-text",{staticClass:"text-red text-price"},[t._v("30.00")])],1),a("v-uni-view",{staticClass:"grid col-4 flex justify-end"},[a("v-uni-view",{staticClass:"margin-tb-sm text-center margin-right-sm"},[a("v-uni-button",{staticClass:"cu-btn round line-gray shadow",attrs:{"data-url":"/pages/ucenter/myorderdetails/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpPage.apply(void 0,arguments)}}},[t._v("查看物流")])],1),a("v-uni-view",{staticClass:"margin-tb-sm text-center margin-right-xs"},[a("v-uni-button",{staticClass:"cu-btn round line-red shadow",attrs:{"data-url":"/pages/ucenter/myorderdetails/index"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpPage.apply(void 0,arguments)}}},[t._v("确认收货")])],1)],1)],1)],1)],1)],1)},s=[]},"5d19":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* pages/ucenter/myorder/index.wxss */",""]),t.exports=e},"5d8e":function(t,e,a){"use strict";a.r(e);var n=a("02bc"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},7264:function(t,e,a){"use strict";var n=a("11f3"),i=a.n(n);i.a},"76bb":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},s=[]},"84f8":function(t,e,a){"use strict";a.r(e);var n=a("52b3"),i=a("0521");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("7264");var u,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"8f348f84",null,!1,n["a"],u);e["default"]=o.exports},e284:function(t,e,a){var n=a("4cd6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("69fcddd4",n,!0,{sourceMap:!1,shadowMode:!1})},eadb:function(t,e,a){"use strict";a.r(e);var n=a("76bb"),i=a("5d8e");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("f655");var u,c=a("f0c5"),o=Object(c["a"])(i["default"],n["b"],n["c"],!1,null,"a1a1f87a",null,!1,n["a"],u);e["default"]=o.exports},f23e:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,TabbarBot:n.globalData.tabbar_bottom,TabCur:0,scrollLeft:0,SortMenu:[{id:0,name:"全部订单"},{id:1,name:"待付款"},{id:2,name:"待发货"},{id:3,name:"待收货"},{id:4,name:"已完成"}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{tabSelect:function(t){this.setData({TabCur:t.currentTarget.dataset.id,scrollLeft:60*(t.currentTarget.dataset.id-1)})},jumpPage:function(t){uni.navigateTo({url:t.currentTarget.dataset.url})}}};e.default=i},f655:function(t,e,a){"use strict";var n=a("e284"),i=a.n(n);i.a}}]);