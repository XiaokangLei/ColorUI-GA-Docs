(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-component-swiper-swiper"],{"145d":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={cuCustom:i("ceb0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("轮播图")])],1),i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-pink"}),t._v("全屏限高轮播")],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"margin-right-xs"},[t._v("SquareDot")]),i("v-uni-switch",{staticClass:"sm",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.DotStyleFun.apply(void 0,arguments)}}})],1)],1),i("v-uni-swiper",{class:"screen-swiper "+(t.DotStyle?"square-dot":"round-dot"),attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-pink"}),t._v("常规限高轮播")],1)],1),i("v-uni-swiper",{class:"margin screen-swiper "+(t.DotStyle?"square-dot":"round-dot"),attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500"}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"radius"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-pink"}),t._v("卡片式轮播")],1)],1),i("v-uni-swiper",{class:"card-swiper "+(t.DotStyle?"square-dot":"round-dot"),attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500",previousMargin:"0.01rpx","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},[i("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-pink"}),t._v("堆叠式轮播")],1)],1),i("v-uni-view",{staticClass:"tower-swiper",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.towerMove.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.towerStartFun.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.towerEnd.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-view",{key:a,class:"tower-item "+(1==e.zIndex?"none":""),style:"--index:"+e.zIndex+";--left:"+e.mLeft},[i("v-uni-view",{staticClass:"swiper-item"},["image"==e.type?i("v-uni-image",{attrs:{src:e.url,mode:"aspectFill"}}):t._e(),"video"==e.type?i("v-uni-video",{attrs:{src:e.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-title text-pink"}),t._v("3D轮播")],1)],1),i("v-uni-swiper",{staticClass:"swiper",attrs:{current:t.swiperCurrent,circular:!0,"previous-margin":"100","next-margin":"100",circular:!0,autoplay:!0,interval:"5000",duration:"500"},on:{animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.swiperList,(function(e,a){return i("v-uni-swiper-item",{key:e.list,staticClass:"item",attrs:{"wx:index":a}},[i("v-uni-image",{class:t.swiperCurrent==a?"active":"no-active",attrs:{src:e.url,modex:"heightFix"}})],1)})),1),i("v-uni-view",{staticClass:"margin-top"},[[i("v-uni-view",{staticClass:"text-center padding-tb"},[i("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],i("v-uni-ad",{attrs:{"unit-id":"adunit-548518d3cd8c2bc3"}})],2)],1)},r=[]},1792:function(t,e,i){"use strict";i.r(e);var a=i("145d"),n=i("71f6");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("aee0");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6c807bd8",null,!1,a["a"],s);e["default"]=c.exports},"24c0":function(t,e,i){var a=i("8dc4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("128679f5",a,!0,{sourceMap:!1,shadowMode:!1})},"29f4":function(t,e,i){var a=i("8b2e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("424f0f5f",a,!0,{sourceMap:!1,shadowMode:!1})},6710:function(t,e,i){"use strict";i.r(e);var a=i("ea2b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"71f6":function(t,e,i){"use strict";i.r(e);var a=i("fc8b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"8b2e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"/* pages/index/component/swiper/swiper.wxss */.tower-swiper .tower-item[data-v-6c807bd8]{-webkit-transform:scale(calc(.5 + var(--index) / 10));transform:scale(calc(.5 + var(--index) / 10));margin-left:calc(var(--left) * %?100?% - %?150?%);z-index:var(--index)}.swiper[data-v-6c807bd8]{width:100%;height:%?600?%;background-color:#eee}.swiper .item[data-v-6c807bd8]{display:flex;justify-content:center;align-items:center}.swiper .item uni-image[data-v-6c807bd8]{height:90%}.swiper .item .active[data-v-6c807bd8]{-webkit-transform:scale(1);transform:scale(1);transition:all .3s ease-in 0s;border-radius:%?15?%}.swiper .item .no-active[data-v-6c807bd8]{-webkit-transform:scale(.8);transform:scale(.8);transition:all .3s ease-in 0s;opacity:.3}",""]),t.exports=e},"8dc4":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},ade9:function(t,e,i){"use strict";var a=i("24c0"),n=i.n(a);n.a},aee0:function(t,e,i){"use strict";var a=i("29f4"),n=i.n(a);n.a},ceb0:function(t,e,i){"use strict";i.r(e);var a=i("e339"),n=i("6710");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ade9");var s,o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"a1a1f87a",null,!1,a["a"],s);e["default"]=c.exports},e339:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[i("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},r=[]},ea2b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},fc8b:function(t,e,i){"use strict";i("e25e"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{cardCur:0,swiperCurrent:0,swiperList:[{id:0,type:"image",url:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1"},{id:1,type:"image",url:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"},{id:2,type:"image",url:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"},{id:3,type:"image",url:"https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1"},{id:4,type:"image",url:"https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1"},{id:5,type:"image",url:"https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo?imageMogr2/thumbnail/450x/interlace/1"},{id:6,type:"image",url:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"}],DotStyle:"",towerStart:"",direction:""}},onLoad:function(t){this.towerSwiper("swiperList")},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{DotStyleFun:function(t){this.setData({DotStyle:t.detail.value})},cardSwiper:function(t){this.setData({cardCur:t.detail.current})},towerSwiper:function(t){for(var e=this[t],i=0;i<e.length;i++)e[i].zIndex=parseInt(e.length/2)+1-Math.abs(i-parseInt(e.length/2)),e[i].mLeft=i-parseInt(e.length/2);this.setData({swiperList:e})},towerStartFun:function(t){this.setData({towerStart:t.touches[0].pageX})},towerMove:function(t){this.setData({direction:t.touches[0].pageX-this.towerStart>0?"right":"left"})},towerEnd:function(t){var e=this.direction,i=this.swiperList;if("right"==e){for(var a=i[0].mLeft,n=i[0].zIndex,r=1;r<i.length;r++)i[r-1].mLeft=i[r].mLeft,i[r-1].zIndex=i[r].zIndex;i[i.length-1].mLeft=a,i[i.length-1].zIndex=n,this.setData({swiperList:i})}else{for(var s=i[i.length-1].mLeft,o=i[i.length-1].zIndex,c=i.length-1;c>0;c--)i[c].mLeft=i[c-1].mLeft,i[c].zIndex=i[c-1].zIndex;i[0].mLeft=s,i[0].zIndex=o,this.setData({swiperList:i})}},swiperChange:function(t){"touch"!=t.detail.source&&"autoplay"!=t.detail.source||this.setData({swiperCurrent:t.detail.current})}}};e.default=a}}]);