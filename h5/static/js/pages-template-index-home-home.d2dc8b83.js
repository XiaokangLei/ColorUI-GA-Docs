(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-index-home-home"],{"24c0":function(t,e,n){var a=n("8dc4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("128679f5",a,!0,{sourceMap:!1,shadowMode:!1})},"4e22":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"/* pages/template/index/home/home.wxss */",""]),t.exports=e},5017:function(t,e,n){"use strict";n.r(e);var a=n("f3fc"),i=n("5f09");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("69e3");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"27a4119e",null,!1,a["a"],u);e["default"]=s.exports},"5f09":function(t,e,n){"use strict";n.r(e);var a=n("af33"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},6710:function(t,e,n){"use strict";n.r(e);var a=n("ea2b"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"69e3":function(t,e,n){"use strict";var a=n("8899"),i=n.n(a);i.a},8899:function(t,e,n){var a=n("4e22");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("c7ddb356",a,!0,{sourceMap:!1,shadowMode:!1})},"8dc4":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},ade9:function(t,e,n){"use strict";var a=n("24c0"),i=n.n(a);i.a},af33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{elements:[{title:"首页",name:"index01",color:"purple light",url:"https://image.meiye.art/pic_OErySANY88_5sgwYg_0zF?imageMogr2/thumbnail/450x/interlace/1"},{title:"首页",name:"index02",color:"purple light",url:"https://image.meiye.art/pic_fqsdojCiT71c1eVDCcs3v?imageMogr2/thumbnail/450x/interlace/1"}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};e.default=a},ceb0:function(t,e,n){"use strict";n.r(e);var a=n("e339"),i=n("6710");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("ade9");var u,c=n("f0c5"),s=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"a1a1f87a",null,!1,a["a"],u);e["default"]=s.exports},e339:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[n("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?n("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[n("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),n("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),n("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},o=[]},ea2b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),i={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i},f3fc:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={cuCustom:n("ceb0").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[n("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),n("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("首页UI设计")])],1),n("v-uni-scroll-view",{staticClass:"scrollPage cu-timeline bg-gray",attrs:{"scroll-y":!0}},[n("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.elements,(function(e,a){return n("v-uni-navigator",{key:a,staticClass:"nav-lie",attrs:{"open-type":"navigate","hover-class":"none",url:"/pages/template/index/"+e.name+"/"+e.name}},[n("v-uni-image",{staticClass:"image-bg-ui radius-lg",attrs:{src:e.url,mode:"widthFix"}}),n("v-uni-view",{staticClass:"flex justify-center"},[n("v-uni-button",{staticClass:"cu-btn bg-blue light sm margin-top-xs"},[t._v("查 看")])],1)],1)})),1),[n("v-uni-view",{staticClass:"text-center padding-tb"},[n("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],n("v-uni-view",{staticClass:"cu-tabbar-height"})],2)],1)},o=[]}}]);