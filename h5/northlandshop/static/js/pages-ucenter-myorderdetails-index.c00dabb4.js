(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ucenter-myorderdetails-index"],{"02bc":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=n},"1c7d":function(t,a,i){var e=i("378b");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("d881448c",e,!0,{sourceMap:!1,shadowMode:!1})},"378b":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* pages/ucenter/myorderdetails/index.wxss */\n\n/* 自定义顶部导航栏颜色 */.cu-custom[data-v-0c40072c]{position:absolute;top:0;width:100%}.cu-custom .cu-bar[data-v-0c40072c]{padding-right:inherit;background-image:linear-gradient(90deg,#fa9c05,#f36302)}.box[data-v-0c40072c]{position:absolute;top:64px;width:100%;padding-bottom:%?170?%}.canui-order-details-head[data-v-0c40072c]{background-image:linear-gradient(90deg,#fa9c05,#f36302);color:#f1f1f6;height:%?230?%}.canui-order-details-head .cu-list.menu > .cu-item[data-v-0c40072c]{background:initial}.canui-order-details-head .cu-list .cu-item .action[data-v-0c40072c]{background-repeat:no-repeat;background-size:100%;width:%?142?%;height:%?92?%}\n\n/*待付款*/.canui-order-details-head .cu-list .cu-item .canui-status-1[data-v-0c40072c]{background-image:url(https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206281-assets/web-upload/97a88c75-0177-4409-9756-d3d93527391f.png)}\n\n/*待发货*/.canui-order-details-head .cu-list .cu-item .canui-status-2[data-v-0c40072c]{background-image:url(https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206281-assets/web-upload/12edf711-8c22-44e0-898b-2b7e6a6fc23d.png)}\n\n/*待收货*/.canui-order-details-head .cu-list .cu-item .canui-status-3[data-v-0c40072c]{background-image:url(https://cdn.nlark.com/yuque/0/2019/png/285274/1553229207224-assets/web-upload/82196039-e8e9-4a6b-b889-e8ca614cd030.png)}\n\n/*已完成*/.canui-order-details-head .cu-list .cu-item .canui-status-4[data-v-0c40072c]{background-image:url(https://cdn.nlark.com/yuque/0/2019/png/285274/1553229206282-assets/web-upload/1b6678c7-8cf3-4a4b-9cd5-50109e2f724f.png);width:%?112?%}\n\n/*已取消*/.canui-order-details-head .cu-list .cu-item .canui-status-5[data-v-0c40072c]{background-image:url(https://cdn.nlark.com/yuque/0/2019/png/285274/1553229207158-assets/web-upload/f6ae0024-dde8-45cc-aaec-70b8a841701f.png);width:%?112?%}.canui-card-fiex-radius-box[data-v-0c40072c]{position:absolute;top:%?125?%;width:100%;z-index:9}.canui-card-fiex-radius-box .cu-list[data-v-0c40072c]{border-radius:%?18?%;box-shadow:0 %?3?% %?6?% rgba(0,0,0,.1)}.canui-card-fiex-radius-box .cu-list.menu > .cu-item[data-v-0c40072c]{padding:%?30?%}.canui-foor-fixed[data-v-0c40072c]{position:fixed;bottom:0;width:100%;z-index:99999}.canui-tabbar-bottom[data-v-0c40072c]{padding-bottom:%?20?%;min-height:%?150?%}",""]),t.exports=a},"4cd6":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=a},"5d8e":function(t,a,i){"use strict";i.r(a);var e=i("02bc"),n=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(a,t,(function(){return e[t]}))}(c);a["default"]=n.a},"6f14":function(t,a,i){"use strict";i.r(a);var e=i("deb8"),n=i.n(e);for(var c in e)"default"!==c&&function(t){i.d(a,t,(function(){return e[t]}))}(c);a["default"]=n.a},"76bb":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return c})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[i("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},c=[]},8690:function(t,a,i){"use strict";var e=i("1c7d"),n=i.n(e);n.a},bd5a:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return c})),i.d(a,"a",(function(){return e}));var e={cuCustom:i("eadb").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-orange",isBack:!0}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("全部订单")])],1),i("v-uni-view",{staticStyle:{"min-height":"100vh"}},[i("v-uni-view",{staticClass:"box",style:"top:"+t.CustomBar+"px;"},[i("v-uni-view",{staticClass:"canui-order-details-head padding-top"},[i("v-uni-view",{staticClass:"cu-list menu"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-df"},[t._v("包裹正在运送路上")]),i("v-uni-view",{staticClass:"text-sm"},[t._v("2019-03-21 18:00:00")])],1),i("v-uni-view",{staticClass:"action canui-status-3"})],1)],1)],1),i("v-uni-view",{staticClass:"padding canui-card-fiex-radius-box"},[i("v-uni-view",{staticClass:"cu-list menu radius-lg shadow-lg"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"canui-xzwz text-df"},[t._v("包裹正在运送路上")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("2023-01-10 18:00:00")])],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey icon-right"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"bg-white margin-xs padding-xs radius-lg",staticStyle:{"margin-top":"100rpx"}},[i("v-uni-view",{staticClass:"cu-timeline"},[i("v-uni-view",{staticClass:"cu-time"},[t._v("昨天")]),i("v-uni-view",{staticClass:"cu-item cur cuIcon-noticefill"},[i("v-uni-view",{staticClass:"content bg-gray shadow-blur"},[i("v-uni-text",[t._v("22:22")]),t._v("【广州市】快件已到达地球")],1)],1),i("v-uni-view",{staticClass:"cu-time"},[t._v("01/09")]),i("v-uni-view",{staticClass:"cu-item cuIcon-noticefill"},[i("v-uni-view",{staticClass:"content bg-gray shadow-blur"},[t._v("12:30【深圳市】已到达和平村")])],1),i("v-uni-view",{staticClass:"cu-item cuIcon-noticefill"},[i("v-uni-view",{staticClass:"content bg-gray shadow-blur"},[t._v("9:56【佛山市】已到达中转站")])],1),i("v-uni-view",{staticClass:"cu-item text-gray"},[i("v-uni-view",{staticClass:"bg-gray content"},[i("v-uni-text",[t._v("9:00")]),t._v("已发货")],1),i("v-uni-view",{staticClass:"bg-gray content"},[i("v-uni-text",[t._v("7:40")]),t._v("已接到订单")],1)],1)],1),i("v-uni-view",{staticClass:"flex bg-white justify-around padding text-lg"},[i("v-uni-view",{staticClass:"contact-table"},[i("v-uni-text",{staticClass:"cuIcon-service text-blue"}),t._v("联系客服")],1),i("v-uni-view",{staticClass:"contact-table"},[i("v-uni-text",{staticClass:"cuIcon-phone text-blue"}),t._v("电话联系")],1)],1)],1)],1),i("v-uni-view",{class:"canui-foor-fixed bg-white solid-top "+("y"==t.TabbarBot?"canui-tabbar-bottom":"")},[i("v-uni-view",{staticClass:"grid col-4 flex justify-end padding-bottom-xs"},[i("v-uni-view",{staticClass:"margin-tb-sm text-center"},[i("v-uni-button",{staticClass:"cu-btn round line-gray shadow"},[t._v("删除订单")])],1),i("v-uni-view",{staticClass:"margin-sm text-center"},[i("v-uni-button",{staticClass:"cu-btn round line-gray shadow"},[t._v("查看物流")])],1),i("v-uni-view",{staticClass:"margin-tb-sm text-center"},[i("v-uni-button",{staticClass:"cu-btn round line-red shadow"},[t._v("确认收货")])],1)],1)],1)],1)],1)},c=[]},c67e:function(t,a,i){"use strict";i.r(a);var e=i("bd5a"),n=i("6f14");for(var c in n)"default"!==c&&function(t){i.d(a,t,(function(){return n[t]}))}(c);i("8690");var s,u=i("f0c5"),o=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"0c40072c",null,!1,e["a"],s);a["default"]=o.exports},deb8:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,TabbarBot:e.globalData.tabbar_bottom}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};a.default=n},e284:function(t,a,i){var e=i("4cd6");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("69fcddd4",e,!0,{sourceMap:!1,shadowMode:!1})},eadb:function(t,a,i){"use strict";i.r(a);var e=i("76bb"),n=i("5d8e");for(var c in n)"default"!==c&&function(t){i.d(a,t,(function(){return n[t]}))}(c);i("f655");var s,u=i("f0c5"),o=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"a1a1f87a",null,!1,e["a"],s);a["default"]=o.exports},f655:function(t,a,i){"use strict";var e=i("e284"),n=i.n(e);n.a}}]);