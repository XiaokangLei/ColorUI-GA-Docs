(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-component-home-home"],{"1a1d":function(t,i,e){"use strict";e.r(i);var a=e("7fa2"),n=e("b68f");for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);e("fb9b");var o,r=e("f0c5"),l=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"74561a90",null,!1,a["a"],o);i["default"]=l.exports},"3de8":function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,"/* pages/index/component/home/home.wxss */.image-bg[data-v-74561a90]{position:absolute;height:100%;opacity:.5}",""]),t.exports=i},"7fa2":function(t,i,e){"use strict";var a;e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return a}));var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-image",{staticClass:"bg-img-new",attrs:{src:"/static/images/bg.png",mode:"widthFix"}}),e("v-uni-scroll-view",{staticClass:"scrollPage cu-timeline",attrs:{"scroll-y":!0}},[e("v-uni-swiper",{staticClass:"card-swiper square-dot",style:"margin-top: "+(t.StatusBar+t.CustomBar)+"rpx;",attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:"5000",duration:"500",previousMargin:"0.01rpx","indicator-color":"#8799a3","indicator-active-color":"#0081ff"},on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.cardSwiper.apply(void 0,arguments)}}},t._l(t.swiperList,(function(i,a){return e("v-uni-swiper-item",{key:a,class:t.cardCur==a?"cur":""},[e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"bg-img radius-lg",style:"background-image: url("+i.url+");height: 360rpx;"},[e("v-uni-view",{staticClass:"padding-xl text-white"},[e("v-uni-view",{staticClass:"padding-xs text-xl"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"padding-xs"},[t._v(t._s(i.des))])],1)],1),"video"==i.type?e("v-uni-video",{attrs:{src:i.url,autoplay:!0,loop:!0,muted:!0,"show-play-btn":!1,controls:!1,objectFit:"cover"}}):t._e()],1)],1)})),1),e("v-uni-view",{staticClass:"nav-list margin-top"},t._l(t.elementsComponents,(function(i,a){return e("v-uni-navigator",{key:a,class:"nav-li bg-"+i.color,attrs:{"hover-class":"none",url:"/pages/index/component/"+i.name+"/"+i.name}},[e("v-uni-image",{staticClass:"image-bg",staticStyle:{"z-index":"-2",margin:"-8rpx 0rpx 0rpx -32rpx"},attrs:{src:"/static/images/0004.svg",mode:"widthFix"}}),e("v-uni-view",{staticClass:"nav-title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"flex"},[e("v-uni-view",{staticClass:"flex-sub nav-name"},[t._v(t._s(i.name))]),e("v-uni-view",{staticClass:"flex-twice nav-des text-right align-end"},[t._v("组件")])],1),e("v-uni-text",{class:"cuIcon-"+i.icon})],1)})),1),[e("v-uni-view",{staticClass:"text-center padding-tb"},[e("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],e("v-uni-view",{staticClass:"cu-tabbar-height"})],2)],1)},s=[]},a00b:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),n={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,cardCur:0,swiperList:[{id:0,type:"image",title:"操作条",des:"顶部、底部操作条",url:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx"},{id:1,type:"image",title:"导航栏",des:"滑动、静态Tab样式",url:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3"},{id:2,type:"image",title:"列表",des:"宫格列表、菜单列表、消息列表",url:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc"}],elementsComponents:[{title:"操作条",name:"bar",color:"purple light",icon:"vipcard"},{title:"导航栏 ",name:"nav",color:"mauve light",icon:"formfill"},{title:"列表",name:"list",color:"pink light",icon:"list"},{title:"卡片",name:"card",color:"brown light",icon:"newsfill"},{title:"表单",name:"form",color:"red light",icon:"formfill"},{title:"时间轴",name:"timeline",color:"orange light",icon:"timefill"},{title:"聊天",name:"chat",color:"green light",icon:"messagefill"},{title:"轮播",name:"swiper",color:"olive light",icon:"album"},{title:"模态框",name:"modal",color:"grey light",icon:"squarecheckfill"},{title:"步骤条",name:"steps",color:"cyan light",icon:"roundcheckfill"}]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{cardSwiper:function(t){this.setData({cardCur:t.detail.current})}}};i.default=n},b68f:function(t,i,e){"use strict";e.r(i);var a=e("a00b"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,(function(){return a[t]}))}(s);i["default"]=n.a},dbf2:function(t,i,e){var a=e("3de8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("0a07e899",a,!0,{sourceMap:!1,shadowMode:!1})},fb9b:function(t,i,e){"use strict";var a=e("dbf2"),n=e.n(a);n.a}}]);