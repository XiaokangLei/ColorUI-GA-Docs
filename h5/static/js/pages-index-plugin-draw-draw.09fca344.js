(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-plugin-draw-draw"],{"07da":function(t,e,i){"use strict";i.r(e);var a=i("a368"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"24c0":function(t,e,i){var a=i("8dc4");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("128679f5",a,!0,{sourceMap:!1,shadowMode:!1})},"417f":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'/* pages/index/plugin/draw/draw.wxss */.flex-column[data-v-25c45220]{display:flex;flex-direction:column;align-items:center}.flex-row[data-v-25c45220]{display:flex;flex-direction:row;align-items:center}.con[data-v-25c45220]{margin:%?30?% auto;width:%?704?%;border-radius:%?30?%;background:linear-gradient(0deg,pink,#e95c74);box-shadow:0 14px 4px 0 #e95c74;box-sizing:border-box;padding:%?20?%}.draw_sc[data-v-25c45220]{width:%?637?%;height:%?69?%;background:rgba(236,215,219,.53);border-radius:%?34?%;padding:0 %?30?%;box-sizing:border-box;margin-bottom:%?20?%}.swiper[data-v-25c45220]{height:100%;font-size:%?28?%;color:#fff;flex:1;line-height:%?69?%}.box[data-v-25c45220]{width:%?632?%;box-shadow:-6px 8px 81px 0 rgba(255,192,203,.73),0 0 24px 0 #fff inset;border-radius:%?30?%;box-sizing:border-box;padding:%?9?%;margin-bottom:%?25?%}.b_box[data-v-25c45220]{width:%?614?%;border-radius:%?30?%;box-shadow:0 0 10px 0 rgba(255,192,203,.53),0 0 27px 0 #fff inset;box-sizing:border-box;padding:%?19?% %?15?%}.prize_box[data-v-25c45220]{flex-wrap:wrap;position:relative;z-index:99}.prize_item[data-v-25c45220]{width:%?175?%;height:%?164?%;margin-bottom:%?14?%;font-size:%?24?%;font-weight:700;box-sizing:border-box;padding-top:%?10?%}.prize_start[data-v-25c45220]{padding-top:0!important}.prize_img uni-image[data-v-25c45220]{width:%?100?%;height:%?100?%}.ative[data-v-25c45220]{position:relative;border:%?2?% solid transparent;box-shadow:none}.ative[data-v-25c45220]::after{content:"";position:absolute;background-image:linear-gradient(0deg,#f77062 0,#fe5196);z-index:-1}',""]),t.exports=e},6710:function(t,e,i){"use strict";i.r(e);var a=i("ea2b"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"7dbb":function(t,e,i){"use strict";i.r(e);var a=i("f1cb"),n=i("07da");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("930c");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"25c45220",null,!1,a["a"],r);e["default"]=c.exports},"8dc4":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},"930c":function(t,e,i){"use strict";var a=i("e960"),n=i.n(a);n.a},a368:function(t,e,i){"use strict";i("4de4"),i("d81d"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{remian_num:5,prize_list:[{icon:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1",name:"钻石会员",active:!1},{icon:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1",name:"谢谢惠顾",active:!1},{icon:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1",name:"10元话费",active:!1},{icon:"https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1",name:"20元话费",active:!1},{icon:"https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1",name:"50元话费",active:!1},{icon:"https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1",name:"黄金会员",active:!1},{icon:"https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1",name:"铂金会员",active:!1},{icon:"https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1",name:"白银会员",active:!1}],lock:!1,prizeListIndex:[0,1,2,4,7,6,5,3],Timer:null,LotteryEnd:!1,nowRunIndex:0,active:!1}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{catchTouchMove:function(){return!1},randomRange:function(t,e){return Math.floor(Math.random()*(e-t))+t},lottery:function(){this.lock||(this.setData({lock:!0}),this.luckChose(this.randomRange(0,7)).then((function(t){uni.showToast({title:"成抽中了"+t[0].name,icon:"none"})})))},luckChose:function(t){var e=this;return new Promise((function(i,a){var n=e,o=e.randomRange(2500,4e3),r=.01;function s(e){n.Timer=setTimeout((function(){var a=n.prize_list;++n.nowRunIndex,n.nowRunIndex>=n.prizeListIndex.length&&(n.nowRunIndex=0);var o=n.prizeListIndex[n.nowRunIndex];a.map((function(t,e){t.active=o==e})),n.setData({prize_list:a}),n.LotteryEnd&&t==n.nowRunIndex?(clearTimeout(n.Timer),n.LotteryEnd=!1,n.setData({lock:!1}),i(a.filter((function(t){return t.active})))):(r+=.5,s(e+r))}),e)}0==e.nowRunIndex&&e.setData({"prize_list[0].active":!0}),s(80),setTimeout((function(){e.LotteryEnd=!0}),o)}))}}};e.default=a},ade9:function(t,e,i){"use strict";var a=i("24c0"),n=i.n(a);n.a},ceb0:function(t,e,i){"use strict";i.r(e);var a=i("e339"),n=i("6710");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("ade9");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"a1a1f87a",null,!1,a["a"],r);e["default"]=c.exports},e339:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[i("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},o=[]},e960:function(t,e,i){var a=i("417f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("6cf9a0a2",a,!0,{sourceMap:!1,shadowMode:!1})},ea2b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=getApp(),n={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=n},f1cb:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={cuCustom:i("ceb0").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("抽奖")])],1),i("v-uni-view",{staticClass:"con flex-column"},[i("v-uni-view",{staticClass:"draw_sc flex-row"},[i("v-uni-swiper",{staticClass:"swiper",attrs:{vertical:!0,autoplay:!0,circular:!0,interval:"3000","display-multiple-items":"1"}},[t._l(2,(function(e,a){return[i("v-uni-swiper-item",[i("v-uni-view",{staticClass:"padding-left"},[i("v-uni-text",[t._v("恭喜用户")]),i("v-uni-text",{staticClass:"text-blue"},[t._v("135XXXX5678")]),i("v-uni-text",[t._v("抽中10元话费")])],1)],1)]}))],2)],1),i("v-uni-view",{staticClass:"box"},[i("v-uni-view",{staticClass:"b_box"},[i("v-uni-view",{staticClass:"flex-row j_b prize_box"},[t._l(t.prize_list,(function(e,a){return[4==a?[i("v-uni-view",{staticClass:"prize_start prize_item margin-lr-xs solids radius-lg"},[i("v-uni-view",{staticClass:"flex justify-center padding-sm padding-lr align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.lottery.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"flex align-center text-xxl text-white"},[t._v("开 始 抽 奖")])],1)],1)]:t._e(),i("v-uni-view",{key:a+"_1",class:"prize_item flex-column margin-lr-xs solids radius-lg "+(e.active?"ative":"")},[i("v-uni-view",{staticClass:"prize_img"},[i("v-uni-image",{staticClass:"radius-lg",attrs:{src:e.icon,mode:"aspectFill"}})],1),i("v-uni-text",{staticClass:"text-white"},[t._v(t._s(e.name))])],1)]}))],2)],1)],1),i("v-uni-view",{staticClass:"text-white"},[t._v("您还有"),i("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t.remian_num)+"次")]),t._v("抽奖机会")],1)],1),i("v-uni-view",{staticClass:"margin padding-top"},[i("v-uni-view",{staticClass:"margin-top bg-white padding radius-lg"},[i("v-uni-view",{staticClass:"text-black text-sm"},[t._v("操作说明：")]),i("v-uni-view",{staticClass:"text-gray text-sm padding-top-xs"},[t._v("点击开始抽奖按钮，等待滚动停止，将会弹出抽奖结果。")])],1)],1),i("v-uni-view",{staticClass:"margin-top"},[[i("v-uni-view",{staticClass:"text-center padding-tb"},[i("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],i("v-uni-ad",{attrs:{"unit-id":"adunit-7e063c3c010456be"}})],2)],1)},o=[]}}]);