(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-component-card-card"],{"0226":function(t,a,i){"use strict";i.r(a);var e=i("9d7f"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=s.a},"24c0":function(t,a,i){var e=i("8dc4");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("128679f5",e,!0,{sourceMap:!1,shadowMode:!1})},"36bb":function(t,a,i){"use strict";var e=i("4e46"),s=i.n(e);s.a},"4e46":function(t,a,i){var e=i("6374");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("009d140f",e,!0,{sourceMap:!1,shadowMode:!1})},6374:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* pages/index/component/card/card.wxss */",""]),t.exports=a},6710:function(t,a,i){"use strict";i.r(a);var e=i("ea2b"),s=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=s.a},"7f55":function(t,a,i){"use strict";i.r(a);var e=i("f1aa"),s=i("0226");for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);i("36bb");var c,u=i("f0c5"),l=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"18b0a932",null,!1,e["a"],c);a["default"]=l.exports},"8dc4":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=a},"9d7f":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),s={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,isCard:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{isCardFun:function(t){this.setData({isCard:t.detail.value})}}};a.default=s},ade9:function(t,a,i){"use strict";var e=i("24c0"),s=i.n(e);s.a},ceb0:function(t,a,i){"use strict";i.r(a);var e=i("e339"),s=i("6710");for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);i("ade9");var c,u=i("f0c5"),l=Object(u["a"])(s["default"],e["b"],e["c"],!1,null,"a1a1f87a",null,!1,e["a"],c);a["default"]=l.exports},e339:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}));var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[i("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},ea2b:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),s={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=s},f1aa:function(t,a,i){"use strict";i.d(a,"b",(function(){return s})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}));var e={cuCustom:i("ceb0").default},s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("卡片")])],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("案例类卡片")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-switch",{staticClass:"sm",attrs:{checked:t.isCard},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.isCardFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{class:"cu-card case "+(t.isCard?"no-card":"margin")},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"image"},[i("v-uni-image",{staticStyle:{"max-height":"360rpx"},attrs:{src:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1",mode:"widthFix"}}),i("v-uni-view",{staticClass:"cu-tag bg-blue"},[t._v("史诗")]),i("v-uni-view",{staticClass:"cu-bar bg-shadeBottom"},[i("v-uni-text",{staticClass:"text-cut"},[t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content flex-sub"},[i("v-uni-view",{staticClass:"text-grey"},[t._v("正义天使 格鲁")]),i("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("十天前"),i("v-uni-view",{staticClass:"text-gray text-sm"},[i("v-uni-text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),i("v-uni-text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),i("v-uni-text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{class:"cu-bar bg-white solid-bottom "+(t.isCard?"margin-top":"")},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("动态类卡片")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-switch",{staticClass:"sm",attrs:{checked:t.isCard},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.isCardFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{class:"cu-card dynamic "+(t.isCard?"no-card":"margin")},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content flex-sub"},[i("v-uni-view",[t._v("格鲁")]),i("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("2022年12月3日")])],1)],1)],1),i("v-uni-view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！")]),i("v-uni-view",{class:"grid flex-sub padding-lr "+(t.isCard?"col-3 grid-square":"col-1")},t._l(t.isCard?9:1,(function(a,e){return i("v-uni-view",{key:e,class:"bg-img "+(t.isCard?"":"only-img"),staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}})})),1),i("v-uni-view",{staticClass:"text-gray text-sm text-right padding"},[i("v-uni-text",{staticClass:"cuIcon-attentionfill margin-lr-xs"}),t._v("10"),i("v-uni-text",{staticClass:"cuIcon-appreciatefill margin-lr-xs"}),t._v("20"),i("v-uni-text",{staticClass:"cuIcon-messagefill margin-lr-xs"}),t._v("30")],1),i("v-uni-view",{staticClass:"cu-list menu-avatar comment solids-top"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v("斯图尔特")]),i("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("格鲁，你被自己的光芒变的盲目。")]),i("v-uni-view",{staticClass:"bg-gray padding-sm radius margin-top-sm text-sm"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("格鲁：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v("妹妹，你在帮他们给黑暗找借口吗?")])],1)],1),i("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-df"},[t._v("2022年12月4日")]),i("v-uni-view",[i("v-uni-text",{staticClass:"cuIcon-appreciatefill text-red"}),i("v-uni-text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v("格鲁")]),i("v-uni-view",{staticClass:"text-gray text-content text-df"},[t._v("妹妹，如果不是为了飞翔，我们要这翅膀有什么用?")]),i("v-uni-view",{staticClass:"bg-gray padding-sm radius margin-top-sm text-sm"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",[t._v("斯图尔特：")]),i("v-uni-view",{staticClass:"flex-sub"},[t._v("如果不能立足于大地，要这双脚又有何用?")])],1)],1),i("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[i("v-uni-view",{staticClass:"text-gray text-df"},[t._v("2022年12月4日")]),i("v-uni-view",[i("v-uni-text",{staticClass:"cuIcon-appreciate text-gray"}),i("v-uni-text",{staticClass:"cuIcon-messagefill text-gray margin-left-sm"})],1)],1)],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("文章类卡片")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-switch",{staticClass:"sm",attrs:{checked:t.isCard},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.isCardFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{class:"cu-card article "+(t.isCard?"no-card":"margin")+" margin-top"},[i("v-uni-view",{staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-view",{staticClass:"text-cut"},[t._v("无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。")])],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-image",{attrs:{src:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[t._v("折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！")]),i("v-uni-view",[i("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v("正义天使")]),i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v("史诗")])],1)],1)],1)],1)],1),i("v-uni-view",{staticClass:"margin-top"},[[i("v-uni-view",{staticClass:"text-center padding-tb"},[i("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)],i("v-uni-ad",{attrs:{"unit-id":"adunit-548518d3cd8c2bc3"}})],2)],1)},n=[]}}]);