(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-avatar-avatar"],{"2b10":function(t,a,i){"use strict";i.r(a);var e=i("94be"),n=i("f64a");for(var u in n)"default"!==u&&function(t){i.d(a,t,(function(){return n[t]}))}(u);i("424a");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"30c88d06",null,!1,e["a"],s);a["default"]=r.exports},3599:function(t,a,i){"use strict";var e=i("7e96"),n=i.n(e);n.a},"424a":function(t,a,i){"use strict";var e=i("e077"),n=i.n(e);n.a},"7e96":function(t,a,i){var e=i("ad47");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("6188a464",e,!0,{sourceMap:!1,shadowMode:!1})},"91b6b":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{StatusBar:e.globalData.StatusBar,CustomBar:e.globalData.CustomBar,Custom:e.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=n},"94be":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return u})),i.d(a,"a",(function(){return e}));var n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[i("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},u=[]},"9de6":function(t,a,i){"use strict";i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return u})),i.d(a,"a",(function(){return e}));var e={cuCustom:i("2b10").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[i("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("头像")])],1),i("v-uni-view",{staticClass:"cu-bar bg-white"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("头像形状")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar radius margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("头像尺寸")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"}})],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left bg-red"},[t._v("A")]),i("v-uni-view",{staticClass:"cu-avatar round margin-left bg-red"},[t._v("B")]),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left bg-red"},[t._v("C")]),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left bg-red"},[t._v("D")])],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar sm round margin-left bg-blue"},[t._v("蔚")]),i("v-uni-view",{staticClass:"cu-avatar round margin-left bg-blue"},[t._v("蓝")]),i("v-uni-view",{staticClass:"cu-avatar lg round margin-left bg-blue"},[i("v-uni-text",[t._v("wl")])],1),i("v-uni-view",{staticClass:"cu-avatar xl round margin-left bg-blue"},[i("v-uni-text",{staticClass:"avatar-text"},[t._v("网络")])],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("内嵌文字(图标)")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar radius"},[i("v-uni-text",{staticClass:"cuIcon-people"})],1),i("v-uni-view",{staticClass:"cu-avatar radius margin-left"},[i("v-uni-text",[t._v("新")])],1),i("v-uni-view",{staticClass:"cu-avatar radius margin-left"},[i("v-uni-text",[t._v("年")])],1),i("v-uni-view",{staticClass:"cu-avatar radius margin-left"},[i("v-uni-text",[t._v("快")])],1),i("v-uni-view",{staticClass:"cu-avatar radius margin-left"},[i("v-uni-text",[t._v("乐")])],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("头像颜色")],1)],1),i("v-uni-view",{staticClass:"padding-sm"},t._l(t.ColorList,(function(a,e){return i("v-uni-view",{key:e,class:"cu-avatar round lg bg-"+a.name+" margin-xs"},[i("v-uni-text",{staticClass:"avatar-text"},[t._v(t._s(a.name))])],1)})),1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("头像组")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar-group"},[i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"}})],1),i("v-uni-view",{staticClass:"cu-avatar-group"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}}),i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"}})],1)],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("头像标签")],1)],1),i("v-uni-view",{staticClass:"padding"},[i("v-uni-view",{staticClass:"cu-avatar round lg margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1)"}},[i("v-uni-view",{staticClass:"cu-tag badge cuIcon-female bg-blue"})],1),i("v-uni-view",{staticClass:"cu-avatar round lg margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1)"}},[i("v-uni-view",{staticClass:"cu-tag badge cuIcon-female bg-pink"})],1),i("v-uni-view",{staticClass:"cu-avatar round lg margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1)"}},[i("v-uni-view",{staticClass:"cu-tag badge cuIcon-male bg-blue"})],1),i("v-uni-view",{staticClass:"cu-avatar round lg margin-left",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1)"}},[i("v-uni-view",{staticClass:"cu-tag badge cuIcon-male bg-pink"})],1)],1)],1)},u=[]},ad47:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* pages/index/basics/avatar/avatar.wxss */",""]),t.exports=a},c3d9:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=getApp(),n={data:function(){return{ColorList:e.globalData.ColorList,avatar:["https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1","https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1","https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1","https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1"]}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};a.default=n},d4d2:function(t,a,i){"use strict";i.r(a);var e=i("9de6"),n=i("f9e3");for(var u in n)"default"!==u&&function(t){i.d(a,t,(function(){return n[t]}))}(u);i("3599");var s,c=i("f0c5"),r=Object(c["a"])(n["default"],e["b"],e["c"],!1,null,"f6462510",null,!1,e["a"],s);a["default"]=r.exports},e077:function(t,a,i){var e=i("fe09");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("023547a5",e,!0,{sourceMap:!1,shadowMode:!1})},f64a:function(t,a,i){"use strict";i.r(a);var e=i("91b6b"),n=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(a,t,(function(){return e[t]}))}(u);a["default"]=n.a},f9e3:function(t,a,i){"use strict";i.r(a);var e=i("c3d9"),n=i.n(e);for(var u in e)"default"!==u&&function(t){i.d(a,t,(function(){return e[t]}))}(u);a["default"]=n.a},fe09:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=a}}]);