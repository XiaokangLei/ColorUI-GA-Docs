(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-loading-loading"],{"1fb4":function(t,a,s){var i=s("b1da");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=s("4f06").default;e("5487ad34",i,!0,{sourceMap:!1,shadowMode:!1})},"2b10":function(t,a,s){"use strict";s.r(a);var i=s("94be"),e=s("f64a");for(var n in e)"default"!==n&&function(t){s.d(a,t,(function(){return e[t]}))}(n);s("424a");var o,u=s("f0c5"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"30c88d06",null,!1,i["a"],o);a["default"]=c.exports},"424a":function(t,a,s){"use strict";var i=s("e077"),e=s.n(i);e.a},"91b6b":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),e={data:function(){return{StatusBar:i.globalData.StatusBar,CustomBar:i.globalData.CustomBar,Custom:i.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=e},"94be":function(t,a,s){"use strict";var i;s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return n})),s.d(a,"a",(function(){return i}));var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[s("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?s("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?s("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[s("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),s("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),s("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},b0e5:function(t,a,s){"use strict";s.r(a);var i=s("f3ba"),e=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(a,t,(function(){return i[t]}))}(n);a["default"]=e.a},b1da:function(t,a,s){var i=s("24fb");a=i(!1),a.push([t.i,"/* pages/index/basics/loading/loading.wxss */",""]),t.exports=a},c4e8:function(t,a,s){"use strict";var i=s("1fb4"),e=s.n(i);e.a},d9a6:function(t,a,s){"use strict";s.d(a,"b",(function(){return e})),s.d(a,"c",(function(){return n})),s.d(a,"a",(function(){return i}));var i={cuCustom:s("2b10").default},e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("加载")]),s("v-uni-view",{staticClass:"action",attrs:{slot:"right"},slot:"right"},[s("v-uni-view",{class:"cu-load load-icon "+(t.isLoad?"over":"loading")})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("背景")],1)],1),s("v-uni-view",{class:"cu-load bg-blue "+(t.isLoad?"over":"loading")}),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("加载状态")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"text-df margin-right-sm"},[t._v("加载完成")]),s("v-uni-switch",{staticClass:"sm",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.isLoading.apply(void 0,arguments)}}})],1)],1),s("v-uni-view",{class:"cu-load bg-grey "+(t.isLoad?"over":"loading")}),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("加载错误")],1)],1),s("v-uni-view",{staticClass:"cu-load bg-red erro"}),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("弹框加载")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.loadModalFun.apply(void 0,arguments)}}},[t._v("点我")])],1)],1),t.loadModal?s("v-uni-view",{staticClass:"cu-load load-modal"},[s("v-uni-image",{staticClass:"png",attrs:{src:"/static/images/tabbar/basics_cur.png",mode:"aspectFit"}}),s("v-uni-view",{staticClass:"gray-text"},[t._v("加载中...")])],1):t._e(),s("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("顶部进度条加载")],1),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn bg-green shadow",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.loadProgressFun.apply(void 0,arguments)}}},[t._v("点我")])],1)],1),s("v-uni-view",{class:"load-progress "+(0!=t.loadProgress?"show":"hide"),style:"top:"+t.CustomBar+"px;"},[s("v-uni-view",{staticClass:"load-progress-bar bg-green",style:"transform: translate3d(-"+t.loadProgressPer+", 0px, 0px);"}),s("v-uni-view",{staticClass:"load-progress-spinner text-green"})],1)],1)},n=[]},dd8d:function(t,a,s){"use strict";s.r(a);var i=s("d9a6"),e=s("b0e5");for(var n in e)"default"!==n&&function(t){s.d(a,t,(function(){return e[t]}))}(n);s("c4e8");var o,u=s("f0c5"),c=Object(u["a"])(e["default"],i["b"],i["c"],!1,null,"56d31a78",null,!1,i["a"],o);a["default"]=c.exports},e077:function(t,a,s){var i=s("fe09");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var e=s("4f06").default;e("023547a5",i,!0,{sourceMap:!1,shadowMode:!1})},f3ba:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),e={data:function(){return{CustomBar:i.globalData.CustomBar,loadProgress:0,isLoad:"",loadModal:!1,loadProgressPer:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{isLoading:function(t){this.setData({isLoad:t.detail.value})},loadModalFun:function(){var t=this;this.setData({loadModal:!0}),setTimeout((function(){t.setData({loadModal:!1})}),2e3)},loadProgressFun:function(){var t=this;this.setData({loadProgress:this.loadProgress+3,loadProgressPer:100-this.loadProgress+"%"}),this.loadProgress<100?setTimeout((function(){t.loadProgressFun()}),100):this.setData({loadProgress:0,loadProgressPer:"100%"})}}};a.default=e},f64a:function(t,a,s){"use strict";s.r(a);var i=s("91b6b"),e=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(a,t,(function(){return i[t]}))}(n);a["default"]=e.a},fe09:function(t,a,s){var i=s("24fb");a=i(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=a}}]);