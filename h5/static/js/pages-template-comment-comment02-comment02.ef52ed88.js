(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-comment-comment02-comment02"],{"28be":function(t,a,i){"use strict";var s=i("4a63"),e=i.n(s);e.a},"2b10":function(t,a,i){"use strict";i.r(a);var s=i("94be"),e=i("f64a");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("424a");var c,u=i("f0c5"),l=Object(u["a"])(e["default"],s["b"],s["c"],!1,null,"30c88d06",null,!1,s["a"],c);a["default"]=l.exports},"424a":function(t,a,i){"use strict";var s=i("e077"),e=i.n(s);e.a},"4a63":function(t,a,i){var s=i("c4e0");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("a84f9caa",s,!0,{sourceMap:!1,shadowMode:!1})},"88ab":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{InputBottom:0}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{InputFocus:function(t){this.setData({InputBottom:t.detail.height})},InputBlur:function(t){this.setData({InputBottom:0})}}};a.default=s},"91b6":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=getApp(),e={data:function(){return{StatusBar:s.globalData.StatusBar,CustomBar:s.globalData.CustomBar,Custom:s.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=e},9273:function(t,a,i){"use strict";i.r(a);var s=i("c6a7"),e=i("963f");for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);i("28be");var c,u=i("f0c5"),l=Object(u["a"])(e["default"],s["b"],s["c"],!1,null,"8b1f75ae",null,!1,s["a"],c);a["default"]=l.exports},"94be":function(t,a,i){"use strict";var s;i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[i("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?i("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?i("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[i("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),i("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),i("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},"963f":function(t,a,i){"use strict";i.r(a);var s=i("88ab"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},c4e0:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,"/* pages/template/comment/comment02/comment02.wxss */",""]),t.exports=a},c6a7:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return s}));var s={cuCustom:i("2b10").default},e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("评论页02模板")])],1),i("v-uni-view",{staticClass:"scrollPage"},[i("v-uni-view",{staticClass:"bg-white margin-xs radius-lg"},[i("v-uni-view",{staticClass:"flex padding-sm justify-between"},[i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"padding-right-sm text-xl padding-top-xs"},[i("v-uni-text",{staticClass:"cuIcon-back text-black"})],1)],1),i("v-uni-view",{staticClass:"flex"},[i("v-uni-view",{staticClass:"padding-tb-xs text-lg text-black"},[i("v-uni-view",[t._v("怪物猎人：崛起")])],1)],1),i("v-uni-view",{staticClass:"flex text-xxl"},[i("v-uni-view",{staticClass:"cuIcon-forward text-black padding-top-xs"})],1)],1),i("v-uni-view",{staticClass:"flex margin-lr padding-tb justify-between"},[i("v-uni-text",{staticClass:"text-xl text-black"},[t._v("回复"),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("12")])],1),i("v-uni-text",{staticClass:"text-lg text-gray"},[t._v("默认排序"),i("v-uni-text",{staticClass:"cuIcon-sort"})],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar no-padding"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("蓝冰雪")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("8小时前")])],1),i("v-uni-view",{staticClass:"action text-xxl"},[i("v-uni-view",{staticClass:"cuIcon-more"})],1)],1),i("v-uni-view",{staticClass:"margin-left padding-left-xl text-black"},[i("v-uni-view",{staticClass:"margin-lr padding-left"},[i("v-uni-text",[t._v("不错，你还得研发一个可以让怪站着给你打的连招")])],1),i("v-uni-view",{staticClass:"margin-left-xl margin-right padding-lr bg-gray radius"},[i("v-uni-view",{staticClass:"margin-tb-xs padding-tb-sm bg-gray"},[i("v-uni-text",{staticClass:"text-blue"},[t._v("Amini：")]),i("v-uni-text",{staticClass:"text-black"},[t._v("这不是?")])],1)],1)],1),i("v-uni-view",{staticClass:"flex solid-bottom padding justify-end"},[i("v-uni-view",{staticClass:"action text-xxl text-black"},[i("v-uni-view",{staticClass:"cuIcon-comment"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("回复")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-appreciate"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("赞")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-footprint"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("踩")])],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar no-padding"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("wendy")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("7-31")])],1),i("v-uni-view",{staticClass:"action text-xxl"},[i("v-uni-view",{staticClass:"cuIcon-more"})],1)],1),i("v-uni-view",{staticClass:"margin-left padding-left-xl text-black"},[i("v-uni-view",{staticClass:"margin-lr padding-left"},[i("v-uni-text",[t._v("我崛起原版太刀开荒打到毕业就是用的你说的大连招樱花。一般就是起手拔刀二连斩-纳刀-大居合(小居合)\n                            -樱花-纳刀-大居合-樱花-纳刀-小居合-体操-纳刀-大居合-体操...这套最好打的是蛮鄂龙，我樱花开荒第一只无伤过的就是蛮鄂龙。")])],1),i("v-uni-view",{staticClass:"margin-left-xl margin-right padding-lr bg-gray radius-lg"},[i("v-uni-view",{staticClass:"margin-tb-xs padding-tb-sm bg-gray"},[i("v-uni-text",{staticClass:"text-blue"},[t._v("L.")]),i("v-uni-view",{staticClass:"cu-tag bg-blue light round sm"},[t._v("作者")]),i("v-uni-text",{staticClass:"text-blue"},[t._v("：")]),i("v-uni-text",{staticClass:"text-black"},[t._v("冷却太长")])],1)],1),i("v-uni-view",{staticClass:"flex solid-bottom padding justify-end"},[i("v-uni-view",{staticClass:"action text-xxl text-black"},[i("v-uni-view",{staticClass:"cuIcon-comment"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("回复")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-appreciate"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("赞")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-footprint"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("踩")])],1)],1)],1),i("v-uni-view",{staticClass:"cu-list menu-avatar no-padding"},[i("v-uni-view",{staticClass:"cu-item"},[i("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P)"}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"text-lg text-bold"},[t._v("Kenny Lee")]),i("v-uni-view",{staticClass:"text-gray text-sm"},[t._v("7-29")])],1),i("v-uni-view",{staticClass:"action text-xxl"},[i("v-uni-view",{staticClass:"cuIcon-more"})],1)],1),i("v-uni-view",{staticClass:"margin-left padding-left-xl text-black"},[i("v-uni-view",{staticClass:"margin-lr padding-left"},[i("v-uni-text",[t._v("虽然但是，不如来个一丝呵成")])],1)],1),i("v-uni-view",{staticClass:"flex solid-bottom padding justify-end"},[i("v-uni-view",{staticClass:"action text-xxl text-black"},[i("v-uni-view",{staticClass:"cuIcon-comment"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("回复")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-appreciate"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("赞")]),i("v-uni-view",{staticClass:"action text-xxl text-black margin-left"},[i("v-uni-view",{staticClass:"cuIcon-footprint"})],1),i("v-uni-text",{staticClass:"text-gray text-lg"},[t._v("踩")])],1)],1),i("v-uni-view",{staticClass:"margin-top"},[[i("v-uni-view",{staticClass:"text-center padding-tb"},[i("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],i("v-uni-ad",{attrs:{"unit-id":"adunit-51e2e8351a3c07a2"}})],2)],1)],1),i("v-uni-view",{class:"cu-bar foot input "+(0!=t.InputBottom?"cur":""),style:"bottom:"+t.InputBottom+"px"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-write text-gray"})],1),i("v-uni-input",{staticClass:"solid-bottom",attrs:{placeholder:"回复TA","adjust-position":!1,focus:!1,maxlength:"300","cursor-spacing":"10"},on:{focus:function(a){arguments[0]=a=t.$handleEvent(a),t.InputFocus.apply(void 0,arguments)},blur:function(a){arguments[0]=a=t.$handleEvent(a),t.InputBlur.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"cuIcon-emoji text-black"}),i("v-uni-text",{staticClass:"text-lg padding-right-sm"},[t._v("Fun")]),i("v-uni-text",{staticClass:"cuIcon-appreciate text-black"}),i("v-uni-text",{staticClass:"text-lg padding-right-sm"},[t._v("赞")]),i("v-uni-text",{staticClass:"cuIcon-footprint text-black"}),i("v-uni-text",{staticClass:"text-lg padding-right-sm"},[t._v("踩")]),i("v-uni-text",{staticClass:"cuIcon-favor text-black"}),i("v-uni-text",{staticClass:"text-lg"},[t._v("3")])],1)],1)],1)},n=[]},e077:function(t,a,i){var s=i("fe09");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("023547a5",s,!0,{sourceMap:!1,shadowMode:!1})},f64a:function(t,a,i){"use strict";i.r(a);var s=i("91b6"),e=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(a,t,(function(){return s[t]}))}(n);a["default"]=e.a},fe09:function(t,a,i){var s=i("24fb");a=s(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=a}}]);