(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-basics-text-text"],{"2b10":function(t,i,s){"use strict";s.r(i);var a=s("94be"),e=s("f64a");for(var n in e)"default"!==n&&function(t){s.d(i,t,(function(){return e[t]}))}(n);s("424a");var c,u=s("f0c5"),l=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"30c88d06",null,!1,a["a"],c);i["default"]=l.exports},"424a":function(t,i,s){"use strict";var a=s("e077"),e=s.n(a);e.a},"5c37":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),e={data:function(){return{list:a.globalData.ColorList}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{}};i.default=e},7221:function(t,i,s){var a=s("24fb");i=a(!1),i.push([t.i,"/* pages/index/basics/text/text.wxss */.box[data-v-60461636]{margin:%?20?% 0}.box uni-view.cu-bar[data-v-60461636]{margin-top:%?20?%}",""]),t.exports=i},"880e":function(t,i,s){var a=s("7221");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=s("4f06").default;e("2cc59d30",a,!0,{sourceMap:!1,shadowMode:!1})},"91b6":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=getApp(),e={data:function(){return{StatusBar:a.globalData.StatusBar,CustomBar:a.globalData.CustomBar,Custom:a.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};i.default=e},9228:function(t,i,s){"use strict";s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){return a}));var a={cuCustom:s("2b10").default},e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",[s("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[s("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),s("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("文本")])],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("大小")],1)],1),s("v-uni-view",{staticClass:"padding"},[s("v-uni-view",{staticClass:"bg-white padding-xs flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-xsl padding"},[s("v-uni-text",{staticClass:"cuIcon-roundcheckfill text-green"},[t._v("文字")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：60，用于图标、数字等特大显示")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-sl padding"},[s("v-uni-text",{staticClass:"cuIcon-roundcheckfill text-green"},[t._v("文字")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：40，用于图标、数字等较大显示")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-xxl padding"},[s("v-uni-text",{staticClass:"text-price text-red"},[t._v("80.00")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：22，用于金额数字等信息")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-xl padding"},[s("v-uni-text",{staticClass:"text-black text-bold"},[t._v("您的订单已提交成功！")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：18，页面大标题，用于结果页等单一信息页")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-lg padding"},[s("v-uni-text",{staticClass:"text-black"},[t._v("ColorUI-GA组件库")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：16，页面小标题，首要层级显示内容")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-df padding"},[t._v("专注视觉的小程序组件库")]),s("v-uni-view",{staticClass:"padding"},[t._v("字号：14，页面默认字号，用于摘要或阅读文本")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-sm padding"},[s("v-uni-text",{staticClass:"text-grey"},[t._v("衬衫的价格是9磅15便士")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：12，页面辅助信息，次级内容等")])],1)],1),s("v-uni-view",{staticClass:"bg-white padding-xs margin-top flex align-center radius-df"},[s("v-uni-view",{staticClass:"flex-sub text-center"},[s("v-uni-view",{staticClass:"solid-bottom text-xs padding"},[s("v-uni-text",{staticClass:"text-gray"},[t._v("我于杀戮之中绽放 亦如黎明中的花朵")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("字号：10，说明文本，标签文字等关注度低的文字")])],1)],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("颜色")],1)],1),s("v-uni-view",{staticClass:"grid col-5 padding-sm"},t._l(t.list,(function(i,a){return"white"!=i.name?s("v-uni-view",{key:a,staticClass:"padding-sm"},[s("v-uni-view",{class:"text-"+i.name+" text-center"},[t._v(t._s(i.title))])],1):t._e()})),1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),s("v-uni-text",[t._v("标题操作条")])],1)],1),t._e(),s("v-uni-view",{staticClass:"box"},[s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action border-title"},[s("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),s("v-uni-text",{staticClass:"bg-grey",staticStyle:{width:"2rem"}})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action border-title"},[s("v-uni-text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),s("v-uni-text",{staticClass:"bg-gradual-blue",staticStyle:{width:"3rem"}})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action sub-title"},[s("v-uni-text",{staticClass:"text-xl text-bold text-green"},[t._v("关于我们")]),s("v-uni-text",{staticClass:"bg-green"})],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action sub-title"},[s("v-uni-text",{staticClass:"text-xl text-bold text-blue"},[t._v("关于我们")]),s("v-uni-text",{staticClass:"text-ABC text-blue"},[t._v("about")])],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action title-style-3"},[s("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("关于我们")]),s("v-uni-text",{staticClass:"text-Abc text-gray self-end margin-left-sm"},[t._v("about")])],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),s("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-green"}),s("v-uni-text",{staticClass:"text-xl text-bold"},[t._v("关于我们")])],1)],1)],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("阴影")],1)],1),s("v-uni-view",{staticClass:"grid col-5 padding-sm"},t._l(t.list,(function(i,a){return"white"!=i.name?s("v-uni-view",{key:a,staticClass:"padding-sm"},[s("v-uni-view",{class:"text-center text-shadow text-"+i.name},[s("v-uni-view",{staticClass:"cuIcon-ellipse text-xxl"})],1)],1):t._e()})),1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("截断")],1)],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"text-cut padding bg-blue light radius",staticStyle:{width:"220px"}},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("对齐")],1)],1),s("v-uni-view",{staticClass:"padding bg-white"},[s("v-uni-view",{staticClass:"text-left padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),s("v-uni-view",{staticClass:"text-center padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")]),s("v-uni-view",{staticClass:"text-right padding"},[t._v("我于杀戮之中绽放 ,亦如黎明中的花朵")])],1),s("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[s("v-uni-view",{staticClass:"action"},[s("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("特殊文字")],1)],1),s("v-uni-view",{staticClass:"padding text-center"},[s("v-uni-view",{staticClass:"padding-lr bg-white radius-df"},[s("v-uni-view",{staticClass:"solid-bottom padding"},[s("v-uni-text",{staticClass:"text-price"},[t._v("80.00")])],1),s("v-uni-view",{staticClass:"padding"},[t._v('价格文本，利用伪元素添加"¥"符号')])],1),s("v-uni-view",{staticClass:"padding-lr bg-white margin-top radius-df"},[s("v-uni-view",{staticClass:"solid-bottom padding"},[s("v-uni-text",{staticClass:"text-Abc"},[t._v("color Ui")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("英文单词首字母大写")])],1),s("v-uni-view",{staticClass:"padding-lr bg-white margin-top radius-df"},[s("v-uni-view",{staticClass:"solid-bottom padding"},[s("v-uni-text",{staticClass:"text-ABC"},[t._v("color Ui")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("全部字母大写")])],1),s("v-uni-view",{staticClass:"padding-lr bg-white margin-top radius-df"},[s("v-uni-view",{staticClass:"solid-bottom padding"},[s("v-uni-text",{staticClass:"text-abc"},[t._v("color Ui")])],1),s("v-uni-view",{staticClass:"padding"},[t._v("全部字母小写")])],1)],1)],1)},n=[]},"94be":function(t,i,s){"use strict";var a;s.d(i,"b",(function(){return e})),s.d(i,"c",(function(){return n})),s.d(i,"a",(function(){return a}));var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[s("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?s("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[s("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?s("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[s("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}}),s("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toHome.apply(void 0,arguments)}}})],1):t._e(),s("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},a212:function(t,i,s){"use strict";s.r(i);var a=s("9228"),e=s("c3e5");for(var n in e)"default"!==n&&function(t){s.d(i,t,(function(){return e[t]}))}(n);s("ffc9");var c,u=s("f0c5"),l=Object(u["a"])(e["default"],a["b"],a["c"],!1,null,"60461636",null,!1,a["a"],c);i["default"]=l.exports},c3e5:function(t,i,s){"use strict";s.r(i);var a=s("5c37"),e=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},e077:function(t,i,s){var a=s("fe09");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=s("4f06").default;e("023547a5",a,!0,{sourceMap:!1,shadowMode:!1})},f64a:function(t,i,s){"use strict";s.r(i);var a=s("91b6"),e=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(i,t,(function(){return a[t]}))}(n);i["default"]=e.a},fe09:function(t,i,s){var a=s("24fb");i=a(!1),i.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=i},ffc9:function(t,i,s){"use strict";var a=s("880e"),e=s.n(a);e.a}}]);