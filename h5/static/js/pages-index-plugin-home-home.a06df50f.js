(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-plugin-home-home"],{2154:function(t,e,a){var i=a("a73c");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("06fad1e6",i,!0,{sourceMap:!1,shadowMode:!1})},"24c0":function(t,e,a){var i=a("8dc4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("128679f5",i,!0,{sourceMap:!1,shadowMode:!1})},6710:function(t,e,a){"use strict";a.r(e);var i=a("ea2b"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},6741:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),n={data:function(){return{StatusBar:i.globalData.StatusBar,CustomBar:i.globalData.CustomBar,cardCur:0,swiperList:[{id:0,type:"image",title:"索引列表",des:"索引跳转列表样式",url:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1",page:"/pages/index/plugin/indexes/indexes"},{id:1,type:"image",title:"瀑布流",des:"图片瀑布流样式",url:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1",page:"/pages/index/plugin/waterfall/waterfall"},{id:2,type:"image",title:"全屏抽屉",des:"侧边展示抽屉",url:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1",page:"/pages/index/plugin/drawer/drawer"}],elementsPlugins:[{title:"索引列表",name:"indexes",color:"purple light",icon:"vipcard"},{title:"微动画 ",name:"animation",color:"mauve light",icon:"form"},{title:"全屏抽屉",name:"drawer",color:"pink light",icon:"list"},{title:"垂直导航",name:"verticalnav",color:"brown light",icon:"news"},{title:"聊天",name:"chat",color:"green light",icon:"message"},{title:"瀑布流",name:"waterfall",color:"blue light",icon:"pic"},{title:"卡片翻转",name:"overturn",color:"red light",icon:"camerarotate"},{title:"骨架屏",name:"skeleton",color:"pink light",icon:"news"},{title:"抽奖",name:"draw",color:"pink light",icon:"present"},{title:"历史搜索",name:"search",color:"mauve light",icon:"search"},{title:"打卡",name:"clockin",color:"cyan light",icon:"mobile"},{title:"卡券",name:"coupon",color:"brown light",icon:"news"},{title:"商品滑动",name:"goods",color:"green light",icon:"shop"},{title:"卡片设计",name:"design",color:"blue light",icon:"pic"}]}},options:{addGlobalClass:!0},props:{},methods:{cardSwiper:function(t){this.setData({cardCur:t.detail.current})},jumpTo:function(t){return uni.navigateTo({url:t.currentTarget.dataset.page})}}};e.default=n},"75c2":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var i={cuCustom:a("ceb0").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{noFixed:!0,isLucency:!0}},[a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[a("v-uni-text",{},[t._v("扩展样式")])],1)],1),a("v-uni-image",{staticClass:"bg-img-new",attrs:{src:"/static/images/bg.png",mode:"widthFix"}}),a("v-uni-scroll-view",{staticClass:"scrollPage cu-timeline",attrs:{"scroll-y":!0}},[a("v-uni-swiper",{staticClass:"card-swiper square-dot",style:"margin-top: "+(t.StatusBar+t.CustomBar)+"rpx;",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500",previousMargin:"0.01rpx","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,i){return a("v-uni-swiper-item",{key:i,class:t.cardCur==i?"cur":"",attrs:{"data-page":e.page},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpTo.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"swiper-item"},[a("v-uni-view",{staticClass:"bg-img radius-lg",style:"background-image: url("+e.url+");height: 360rpx;"},[a("v-uni-view",{staticClass:"padding-xl text-white"},[a("v-uni-view",{staticClass:"padding-xs text-xl"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"padding-xs"},[t._v(t._s(e.des))])],1)],1),"video"==e.type?a("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),a("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.elementsPlugins,(function(e,i){return a("v-uni-navigator",{key:i,class:"nav-li bg-"+e.color,attrs:{"hover-class":"none",url:"/pages/index/plugin/"+e.name+"/"+e.name}},[a("v-uni-image",{staticClass:"image-bg",staticStyle:{"z-index":"-2",margin:"-8rpx 0rpx 0rpx -32rpx"},attrs:{src:"/static/images/0004.svg",mode:"widthFix"}}),a("v-uni-view",{staticClass:"nav-title"},[t._v(t._s(e.title))]),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"flex-sub nav-name"},[t._v(t._s(e.name))]),a("v-uni-view",{staticClass:"flex-sub nav-des text-right align-end"},[t._v("扩展")])],1),a("v-uni-text",{class:"cuIcon-"+e.icon})],1)})),1),[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © 2023 ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-view",{staticClass:"cu-tabbar-height"})],2)],1)},o=[]},"8dc4":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},a6db:function(t,e,a){"use strict";a.r(e);var i=a("75c2"),n=a("f5e6");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ba0f");var s,l=a("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"7f6c2b60",null,!1,i["a"],s);e["default"]=r.exports},a73c:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"/* pages/index/plugin/home/home.wxss */.image-bg[data-v-7f6c2b60]{position:absolute;height:100%;opacity:.5}",""]),t.exports=e},ade9:function(t,e,a){"use strict";var i=a("24c0"),n=a.n(i);n.a},ba0f:function(t,e,a){"use strict";var i=a("2154"),n=a.n(i);n.a},ceb0:function(t,e,a){"use strict";a.r(e);var i=a("e339"),n=a("6710");for(var o in n)"default"!==o&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("ade9");var s,l=a("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"a1a1f87a",null,!1,i["a"],s);e["default"]=r.exports},e339:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},o=[]},ea2b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=getApp(),n={data:function(){return{StatusBar:i.globalData.StatusBar,CustomBar:i.globalData.CustomBar,Custom:i.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},f5e6:function(t,e,a){"use strict";a.r(e);var i=a("6741"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a}}]);