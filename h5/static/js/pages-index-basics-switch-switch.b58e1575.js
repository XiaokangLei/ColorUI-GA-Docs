(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-switch-switch"],{"24c0":function(t,a,e){var i=e("8dc4");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("128679f5",i,!0,{sourceMap:!1,shadowMode:!1})},"626d":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{sex:"女",ischecked:void 0,undefined:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{switchSex:function(t){t.detail.value?this.setData({sex:"男"}):this.setData({sex:"女"})},click:function(){this.setData({ischecked:!this.ischecked})}}};a.default=i},6710:function(t,a,e){"use strict";e.r(a);var i=e("ea2b"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},"8dc4":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=a},"9aa0":function(t,a,e){"use strict";e.r(a);var i=e("626d"),s=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,(function(){return i[t]}))}(n);a["default"]=s.a},aaf6:function(t,a,e){var i=e("d344");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("4f06").default;s("7326af9a",i,!0,{sourceMap:!1,shadowMode:!1})},ade9:function(t,a,e){"use strict";var i=e("24c0"),s=e.n(i);s.a},ceb0:function(t,a,e){"use strict";e.r(a);var i=e("e339"),s=e("6710");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("ade9");var r,o=e("f0c5"),u=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"a1a1f87a",null,!1,i["a"],r);a["default"]=u.exports},d344:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'/* pages/index/basics/switch/switch.wxss */uni-input[data-v-6030b0e9]{display:none}uni-input + uni-label[data-v-6030b0e9]{display:flex;align-items:center;width:%?180?%;height:%?90?%;border-radius:%?50?%;background:#0081ff;padding:0 %?5?%}uni-input:checked + uni-label[data-v-6030b0e9]{-webkit-animation:shake-data-v-6030b0e9 1s forwards 1;animation:shake-data-v-6030b0e9 1s forwards 1}uni-label > span[data-v-6030b0e9]{display:flex;align-items:center;justify-content:center;width:%?80?%;height:%?80?%;border-radius:50%;background:var(--white)}uni-label > span[data-v-6030b0e9],\nuni-label > span[data-v-6030b0e9]::before{transition:all .4s ease;transition-delay:.1s}uni-label > span[data-v-6030b0e9]::before{display:block;width:%?40?%;height:%?40?%;border-radius:50%;background:radial-gradient(circle at top left,#ffbc00 10%,#ff8239);content:"";-webkit-animation:eggy-data-v-6030b0e9 15s linear infinite;animation:eggy-data-v-6030b0e9 15s linear infinite}uni-label > span[data-v-6030b0e9]::after{width:%?15?%;height:%?16?%;border-top:%?3?% solid #fff;content:"";display:block;border-radius:50%;position:absolute;-webkit-transform:translate(-35%,-25%) rotate(-45deg);transform:translate(-35%,-25%) rotate(-45deg)}.flip[data-v-6030b0e9]{background:#b7b7b7;-webkit-animation:flip-data-v-6030b0e9 1s forwards 1;animation:flip-data-v-6030b0e9 1s forwards 1}.flip[data-v-6030b0e9]::before{opacity:.3}.flip[data-v-6030b0e9]::after{opacity:0}.unflip[data-v-6030b0e9]{-webkit-animation:unflip-data-v-6030b0e9 1s forwards 1;animation:unflip-data-v-6030b0e9 1s forwards 1}@-webkit-keyframes flip-data-v-6030b0e9{from{-webkit-transform:rotateY(0) translateX(0);transform:rotateY(0) translateX(0)}to{-webkit-transform:rotateY(180deg) translateX(%?-100?%);transform:rotateY(180deg) translateX(%?-100?%)}}@keyframes flip-data-v-6030b0e9{from{-webkit-transform:rotateY(0) translateX(0);transform:rotateY(0) translateX(0)}to{-webkit-transform:rotateY(180deg) translateX(%?-100?%);transform:rotateY(180deg) translateX(%?-100?%)}}@-webkit-keyframes unflip-data-v-6030b0e9{from{-webkit-transform:translateX(%?90?%);transform:translateX(%?90?%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes unflip-data-v-6030b0e9{from{-webkit-transform:translateX(%?90?%);transform:translateX(%?90?%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes shake-data-v-6030b0e9{0%,\n    20%{-webkit-transform:translateX(-8px);transform:translateX(-8px)}10%,\n    30%,\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes shake-data-v-6030b0e9{0%,\n    20%{-webkit-transform:translateX(-8px);transform:translateX(-8px)}10%,\n    30%,\n    100%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes eggy-data-v-6030b0e9{0%{border-radius:51% 49% 34% 66%/39% 66% 34% 61%}10%{border-radius:39% 61% 38% 62%/53% 54% 46% 47%}20%{border-radius:56% 44% 52% 48%/57% 35% 65% 43%}30%{border-radius:41% 59% 45% 55%/33% 56% 44% 67%}40%{border-radius:46% 54% 60% 40%/55% 74% 26% 45%}50%{border-radius:44% 56% 22% 78%/31% 74% 26% 69%}60%{border-radius:31% 69% 32% 68%/31% 71% 29% 69%}70%{border-radius:44% 56% 60% 40%/63% 36% 64% 37%}80%{border-radius:46% 54% 38% 62%/44% 48% 52% 56%}90%{border-radius:66% 34% 57% 43%/49% 51% 49% 51%}100%{border-radius:51% 49% 34% 66%/39% 66% 34% 61%}}@keyframes eggy-data-v-6030b0e9{0%{border-radius:51% 49% 34% 66%/39% 66% 34% 61%}10%{border-radius:39% 61% 38% 62%/53% 54% 46% 47%}20%{border-radius:56% 44% 52% 48%/57% 35% 65% 43%}30%{border-radius:41% 59% 45% 55%/33% 56% 44% 67%}40%{border-radius:46% 54% 60% 40%/55% 74% 26% 45%}50%{border-radius:44% 56% 22% 78%/31% 74% 26% 69%}60%{border-radius:31% 69% 32% 68%/31% 71% 29% 69%}70%{border-radius:44% 56% 60% 40%/63% 36% 64% 37%}80%{border-radius:46% 54% 38% 62%/44% 48% 52% 56%}90%{border-radius:66% 34% 57% 43%/49% 51% 49% 51%}100%{border-radius:51% 49% 34% 66%/39% 66% 34% 61%}}',""]),t.exports=a},db43:function(t,a,e){"use strict";var i=e("aaf6"),s=e.n(i);s.a},e339:function(t,a,e){"use strict";var i;e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[e("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?e("v-uni-view",{staticClass:"action",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}},[e("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?e("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[e("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.BackPage.apply(void 0,arguments)}}}),e("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.toHome.apply(void 0,arguments)}}})],1):t._e(),e("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},e8f1:function(t,a,e){"use strict";e.r(a);var i=e("f1df"),s=e("9aa0");for(var n in s)"default"!==n&&function(t){e.d(a,t,(function(){return s[t]}))}(n);e("db43");var r,o=e("f0c5"),u=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"6030b0e9",null,!1,i["a"],r);a["default"]=u.exports},ea2b:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=getApp(),s={data:function(){return{StatusBar:i.globalData.StatusBar,CustomBar:i.globalData.CustomBar,Custom:i.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};a.default=s},f1df:function(t,a,e){"use strict";e.d(a,"b",(function(){return s})),e.d(a,"c",(function(){return n})),e.d(a,"a",(function(){return i}));var i={cuCustom:e("ceb0").default},s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[e("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("开关")])],1),e("v-uni-view",{staticClass:"cu-bar bg-white"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("基本样式")],1)],1),e("v-uni-view",{staticClass:"margin-tb margin-lr-sm"},[e("v-uni-view",{staticClass:"cu-form-group radius-lg-top"},[e("v-uni-view",{staticClass:"title"},[t._v("未启用")]),e("v-uni-switch")],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("已启用")]),e("v-uni-switch",{attrs:{checked:!0}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("禁用-默认未启用")]),e("v-uni-switch",{attrs:{disabled:!0}})],1),e("v-uni-view",{staticClass:"cu-form-group radius-lg-bottom"},[e("v-uni-view",{staticClass:"title"},[t._v("禁用-默认已启用")]),e("v-uni-switch",{attrs:{checked:!0,disabled:!0}})],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("自定义")],1)],1),e("v-uni-view",{staticClass:"margin-tb margin-lr-sm"},[e("v-uni-view",{staticClass:"cu-form-group margin-top radius-lg-top"},[e("v-uni-view",{staticClass:"title"},[t._v("定义颜色")]),e("v-uni-switch",{staticClass:"red",attrs:{checked:!0}}),e("v-uni-switch",{staticClass:"blue",attrs:{checked:!0}})],1),e("v-uni-view",{staticClass:"cu-form-group"},[e("v-uni-view",{staticClass:"title"},[t._v("定义图标")]),e("v-uni-switch",{staticClass:"switch-sex",attrs:{checked:!0}}),e("v-uni-switch",{staticClass:"switch-music",attrs:{checked:!0}})],1),e("v-uni-view",{staticClass:"cu-form-group radius-lg-bottom"},[e("v-uni-view",{staticClass:"title"},[t._v("方形开关")]),e("v-uni-switch",{staticClass:"orange radius",attrs:{checked:!0}})],1)],1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("绑定事件")],1)],1),e("v-uni-view",{staticClass:"cu-form-group margin-top margin-lr-sm radius-df"},[e("v-uni-view",{staticClass:"title"},[t._v("当前值："+t._s(t.sex))]),e("v-uni-switch",{staticClass:"switch-sex",on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.switchSex.apply(void 0,arguments)}}})],1),e("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[e("v-uni-view",{staticClass:"action"},[e("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("扩展样式")],1)],1),e("v-uni-view",{staticClass:"flex justify-center margin-sm bg-white padding-sm radius-df"},[e("v-uni-view",{on:{click:function(a){a.stopPropagation(),a.preventDefault(),arguments[0]=a=t.$handleEvent(a),t.click.apply(void 0,arguments)}}},[e("v-uni-input",{attrs:{id:"egg-toggle",type:"checkbox"}}),e("v-uni-label",{attrs:{for:"egg-toggle"}},[void 0==t.ischecked?e("span",{attrs:{id:"egg"}}):e("span",{class:t.ischecked?"flip":"unflip",attrs:{id:"egg"}})])],1)],1),e("v-uni-view",{staticClass:"margin-top"},[[e("v-uni-view",{staticClass:"text-center padding-tb"},[e("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],e("v-uni-ad",{attrs:{"unit-id":"adunit-51e2e8351a3c07a2"}})],2)],1)},n=[]}}]);