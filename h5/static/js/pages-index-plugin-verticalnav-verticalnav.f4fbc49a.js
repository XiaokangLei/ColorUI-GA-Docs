(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-plugin-verticalnav-verticalnav"],{"23e3":function(t,a,i){var e=i("ffbc");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("096e2e59",e,!0,{sourceMap:!1,shadowMode:!1})},"24c0":function(t,a,i){var e=i("8dc4");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("128679f5",e,!0,{sourceMap:!1,shadowMode:!1})},6710:function(t,a,i){"use strict";i.r(a);var e=i("ea2b"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},"8dc4":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=a},ad51:function(t,a,i){"use strict";i("ac1f"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom,TabCur:0,MainCur:0,VerticalNavTop:0,list:[],load:!0,swiperList:[{url:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1"},{url:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"},{url:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"}],listCur:""}},onLoad:function(t){uni.showLoading({title:"加载中...",mask:!0});for(var a=[{}],i=0;i<26;i++)a[i]={},a[i].name=String.fromCharCode(65+i),a[i].id=i;this.setData({list:a,listCur:a[0]})},onReady:function(){uni.hideLoading()},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{tabSelect:function(t){this.setData({TabCur:t.currentTarget.dataset.id,MainCur:t.currentTarget.dataset.id,VerticalNavTop:50*(t.currentTarget.dataset.id-1)})},VerticalMain:function(t){var a=this,i=this.list,e=0;if(this.load){for(var n=function(t){var a=uni.createSelectorQuery().select("#main-"+i[t].id);a.fields({size:!0},(function(a){i[t].top=e,e+=a.height,i[t].bottom=e})).exec()},s=0;s<i.length;s++)n(s);a.setData({load:!1,list:i})}for(var c=t.detail.scrollTop+20,u=0;u<i.length;u++)if(c>i[u].top&&c<i[u].bottom)return a.setData({VerticalNavTop:50*(i[u].id-1),TabCur:i[u].id}),!1}}};a.default=n},ade9:function(t,a,i){"use strict";var e=i("24c0"),n=i.n(e);n.a},c098:function(t,a,i){"use strict";i.r(a);var e=i("ad51"),n=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(a,t,(function(){return e[t]}))}(s);a["default"]=n.a},c861:function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var e={cuCustom:i("ceb0").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("Tab索引")])],1),i("v-uni-swiper",{staticClass:"screen-swiper round-dot margin",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(t,a){return i("v-uni-swiper-item",{key:a},[i("v-uni-image",{staticClass:"radius",attrs:{src:t.url,mode:"aspectFill"}})],1)})),1),i("v-uni-view",{staticClass:"VerticalBox"},[i("v-uni-scroll-view",{staticClass:"VerticalNav nav cu-timeline",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-top":t.VerticalNavTop}},t._l(t.list,(function(a,e){return i("v-uni-view",{key:e,class:"cu-item "+(e==t.TabCur?"text-green cur":""),attrs:{"data-id":e},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabSelect.apply(void 0,arguments)}}},[t._v("Tab-"+t._s(a.name))])})),1),i("v-uni-scroll-view",{staticClass:"VerticalMain",staticStyle:{height:"calc(100vh - 375rpx)"},attrs:{"scroll-y":!0,"scroll-with-animation":!0,"scroll-into-view":"main-"+t.MainCur},on:{scroll:function(a){arguments[0]=a=t.$handleEvent(a),t.VerticalMain.apply(void 0,arguments)}}},t._l(t.list,(function(a,e){return i("v-uni-view",{key:e,staticClass:"padding-top padding-lr",attrs:{id:"main-"+e}},[i("v-uni-view",{staticClass:"cu-bar solid-bottom bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-green"}),t._v("Tab-"+t._s(a.name))],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-grey"},[t._v("《百年孤独》")]),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-text",{staticClass:"text-cut"},[i("v-uni-text",{staticClass:"cuIcon-infofill text-red margin-right-xs"}),t._v("生命从来不曾离开过孤独而独立存在")],1)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),i("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1)],1),i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-pink"},[i("v-uni-text",{staticClass:"text-cut"},[t._v("酸菜鱼")])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-text",{staticClass:"text-cut"},[t._v("人人都是酸菜鱼，又酸...")])],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),i("v-uni-view",{staticClass:"cu-item grayscale"},[i("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-text",{staticClass:"text-cut"},[t._v("《阿凡达》")]),i("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("下播")])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-text",{staticClass:"text-cut"},[t._v("即将重映")])],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),i("v-uni-view",{staticClass:"cu-item cur"},[i("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1)"}},[i("v-uni-view",{staticClass:"cu-tag badge"})],1),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-text",{staticClass:"text-cut"},[t._v("百香果")]),i("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("水果")])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-text",{staticClass:"text-cut"},[t._v("商家："),i("v-uni-text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("运输中...")],1)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),i("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1)],1)],1)})),1)],1),i("v-uni-view",{staticClass:"margin-top"},[[i("v-uni-view",{staticClass:"text-center padding-tb"},[i("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],i("v-uni-ad",{attrs:{"unit-id":"adunit-7e063c3c010456be"}})],2)],1)},s=[]},cc38:function(t,a,i){"use strict";i.r(a);var e=i("c861"),n=i("c098");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("dde5");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"9ccb760e",null,!1,e["a"],c);a["default"]=r.exports},ceb0:function(t,a,i){"use strict";i.r(a);var e=i("e339"),n=i("6710");for(var s in n)"default"!==s&&function(t){i.d(a,t,(function(){return n[t]}))}(s);i("ade9");var c,u=i("f0c5"),r=Object(u["a"])(n["default"],e["b"],e["c"],!1,null,"a1a1f87a",null,!1,e["a"],c);a["default"]=r.exports},dde5:function(t,a,i){"use strict";var e=i("23e3"),n=i.n(e);n.a},e339:function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[i("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},s=[]},ea2b:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=n},ffbc:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,'/* pages/index/plugin/verticalnav/verticalnav.wxss */.VerticalNav.nav[data-v-9ccb760e]{width:%?200?%;white-space:normal}.VerticalNav.nav .cu-item[data-v-9ccb760e]{width:100%;text-align:center;\n    /* background-color: #fff; */margin:0;border:none;height:50px;position:relative}.VerticalNav.nav .cu-item.cur[data-v-9ccb760e]{background-color:#f1f1f1}.VerticalNav.nav .cu-item.cur[data-v-9ccb760e]::after{content:"";width:%?8?%;height:%?30?%;border-radius:%?10?% 0 0 %?10?%;position:absolute;background-color:currentColor;top:0;right:%?0?%;bottom:0;margin:auto}.VerticalBox[data-v-9ccb760e]{display:flex}.VerticalMain[data-v-9ccb760e]{background-color:#f1f1f1}',""]),t.exports=a}}]);