(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-plugin-design-design"],{"0400":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var n={cuCustom:a("ceb0").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("cu-custom",{attrs:{bgColor:"bg-gradual-blue",isBack:!0}},[a("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("卡片设计")])],1),a("v-uni-view",{staticClass:"container_index"},[a("v-uni-view",{staticClass:"grid col-1 padding-sm"},[a("v-uni-view",{staticClass:"padding-sm"},[a("v-uni-view",{class:"bg-"+t.bg_color+" padding-sm radius-lg text-center light"},[a("v-uni-view",{staticClass:"flex padding-sm justify-between"},[a("v-uni-view",{staticClass:"padding-xs radius text-xsl"},[t._v(t._s(t.emoji))]),a("v-uni-view",[a("v-uni-view",{staticClass:"padding-xs radius text-right",staticStyle:{"margin-top":"-20rpx"}},[a("v-uni-text",[t._v(t._s(t.date))])],1),a("v-uni-view",{staticClass:"padding-xs radius text-xxxl text-right text-cut padding-tb"},[a("v-uni-text",{staticClass:"text-cut"},[t._v(t._s(t.title||"在下方输入标题"))])],1),a("v-uni-view",{staticClass:"padding-xs radius text-right text-cut",staticStyle:{"margin-bottom":"-20rpx"}},[t.m2.format(t.date)[0]?a("v-uni-text",{staticClass:"text-xl"},[t._v("还有")]):a("v-uni-text",{staticClass:"text-bold text-lg"},[t._v("已经")]),a("v-uni-text",{staticClass:"text-sl"},[t._v(t._s(t.m2.format(t.date)[1]))]),a("v-uni-text",{staticClass:"text-xl"},[t._v("天")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"padding"},[a("v-uni-view",{staticClass:"grid col-1 margin-bottom text-center"},[a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",[a("v-uni-view",{staticClass:"text-sm padding-top-xs"},[t._v("浅色")]),a("v-uni-view",{staticClass:"text-sm padding-top"},[t._v("深色")])],1),a("v-uni-checkbox-group",{staticClass:"flex-sub radius",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.checkboxChange.apply(void 0,arguments)}}},t._l(t.checkboxItems,(function(t,e){return a("v-uni-label",{key:t.value,staticClass:"margin-xs"},[a("v-uni-checkbox",{class:"round "+t.name,attrs:{value:t.value,checked:t.checked}})],1)})),1)],1)],1),a("v-uni-view",{staticClass:"flex p-xs margin-bottom-sm mb-sm"},[a("v-uni-view",{staticClass:"flex-sub padding-xs margin-xs radius text-xl"},[t._v("📄"),a("v-uni-text",{staticClass:"text-gray"},[t._v("标题")])],1),a("v-uni-view",{staticClass:"flex-treble bg-grey light padding-xs margin-xs radius"},[a("v-uni-input",{staticClass:"text-grey",attrs:{"placeholder-style":"color:grey;",maxlength:"7",placeholder:"请输入标题(8字以内)"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.bindKeyInput.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"flex"},[a("v-uni-view",{staticClass:"flex-treble bg-grey light padding-sm margin-xs radius-lg text-xxl"},[a("v-uni-picker",{attrs:{mode:"date",value:t.date},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.DateChange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"picker"},[t._v("📆"),a("v-uni-text",{staticClass:"text-xxl",staticStyle:{color:"grey"}},[t._v(t._s(t.date))])],1)],1)],1),a("v-uni-view",{staticClass:"flex-sub bg-grey light margin-xs radius-lg text-sl",staticStyle:{display:"flex","justify-content":"center","text-align":"center","align-items":"center"},attrs:{"data-page":"choiseEmoji","hover-class":"item-hover","hover-stay-time":"100"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jumpPageChoise.apply(void 0,arguments)}}},[t._v(t._s(t.emoji))])],1)],1),a("v-uni-view",{staticClass:"margin-lr padding bg-white radius-lg"},[a("v-uni-view",{staticClass:"flex justify-between"},[a("v-uni-view",{staticClass:"text-black"},[t._v("操作说明")])],1),a("v-uni-view",{staticClass:"padding-top"},[a("v-uni-view",{staticClass:"text-sm"},[t._v("1、单选框选择背景颜色")]),a("v-uni-view",{staticClass:"text-sm padding-tb-xs"},[t._v("2、输入标题，当前显示最大输入7个字")]),a("v-uni-view",{staticClass:"text-sm"},[t._v("3、选择时间及Emoji图标")]),a("v-uni-view",{staticClass:"text-sm padding-tb-xs"},[t._v("4、生成对应的卡片，可应用于倒数日、名片等场景")])],1)],1)],1),a("v-uni-view",{staticClass:"margin-top"},[[a("v-uni-view",{staticClass:"text-center padding-tb"},[a("v-uni-view",{staticClass:"colorui-text"},[t._v("Copyright © ColorUI GA. All Rights Reserved.")])],1)],a("v-uni-ad",{attrs:{"unit-id":"adunit-7e063c3c010456be"}})],2)],1)},s=[]},"0ffa":function(t,e,a){"use strict";a.r(e);var n=a("0400"),i=a("49b9");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("2dd8");var o,u=a("f0c5"),c=a("8efa"),l=a("9b56"),r=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"289bee66",null,!1,n["a"],o);"function"===typeof c["a"]&&Object(c["a"])(r),"function"===typeof l["a"]&&Object(l["a"])(r),e["default"]=r.exports},"24c0":function(t,e,a){var n=a("8dc4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("128679f5",n,!0,{sourceMap:!1,shadowMode:!1})},"2dd8":function(t,e,a){"use strict";var n=a("a600"),i=a.n(n);i.a},4895:function(t,e,a){"use strict";(function(t){e["a"]=function(e){(e.options.wxs||(e.options.wxs={}))["m1"]=function(e){function a(e){var a=t(e);t();return[a.getFullYear(),a.getMonth()+1,a.getDate()].map(n).join("-")}function n(t){return t=t.toString(),t[1]?t:"0"+t}return e.exports.format=a,e.exports}({exports:{}})}}).call(this,a("5fff")["getDate"])},"49b9":function(t,e,a){"use strict";a.r(e);var n=a("a114"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"5fff":function(t,e,a){"use strict";function n(){var t=Array.prototype.slice.call(arguments);return t.unshift(RegExp),new(Function.prototype.bind.apply(RegExp,t))}function i(){var t=Array.prototype.slice.call(arguments);return t.unshift(Date),new(Function.prototype.bind.apply(Date,t))}a("fb6a"),a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.getDate=i,e.getRegExp=n},6710:function(t,e,a){"use strict";a.r(e);var n=a("ea2b"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,(function(){return n[t]}))}(s);e["default"]=i.a},"7f51":function(t,e,a){"use strict";(function(t){e["a"]=function(e){(e.options.wxs||(e.options.wxs={}))["m2"]=function(e){function a(e){var a=t(e),n=t(),i=a-n,s=0,o=0,u=0;return i>60?(s=parseInt(i/60/1e3),i=parseInt(i%60),s>60&&(o=parseInt(s/60)),o>24?u=parseInt(o/24+1):o>0&&(u=1),console.log(u),[1,u]):(i=n-a,s=parseInt(i/60/1e3),i=parseInt(i%60),s>60&&(o=parseInt(s/60)),o>24?u=parseInt(o/24+1):o>0&&(u=0),console.log(u),[0,u])}return e.exports.format=a,e.exports}({exports:{}})}}).call(this,a("5fff")["getDate"])},"8dc4":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* colorui/components/cu-custom.wxss */.lucency[data-v-a1a1f87a]{\n    /* position: absolute;\n  z-index: 1; */background-color:initial!important}",""]),t.exports=e},"8efa":function(t,e,a){"use strict";var n=a("4895");e["a"]=n["a"]},"9b56":function(t,e,a){"use strict";var n=a("7f51");e["a"]=n["a"]},a114:function(t,e,a){"use strict";a("99af"),a("4d63"),a("ac1f"),a("25f0"),a("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{bg_color:"gradual-pinknew",title:"在下方输入标题",date:"",emoji:n.globalData.emoji,checkboxItems:[{name:"red",value:"red"},{name:"yellow",value:"yellow"},{name:"olive",value:"olive"},{name:"blue",value:"blue"},{name:"cyan",value:"cyan"},{name:"purple",value:"purple"},{name:"mauve",value:"mauve"},{name:"pink",value:"pink"},{name:"red",value:"gradual-red"},{name:"orange",value:"gradual-orange"},{name:"green",value:"gradual-green"},{name:"blue",value:"gradual-blue"},{name:"cyan",value:"gradual-cyan"},{name:"purple",value:"gradual-purple"},{name:"mauve",value:"gradual-pinknew"},{name:"pink",value:"gradual-pink"}],type:"",weather:"",clone_id:"",checkboxValues:"",m2:{}}},onLoad:function(t){var e=new Date;this.setData({date:e.toLocaleDateString().replace(new RegExp("/","gm"),"-")});try{uni.setStorageSync("bg_color",this.bg_color),uni.setStorageSync("title",this.title),uni.setStorageSync("date",this.date),uni.setStorageSync("emoji",this.emoji),uni.setStorageSync("type",this.type),uni.setStorageSync("weather",this.weather)}catch(a){}t.emoji&&this.setData({emoji:t.emoji})},onReady:function(){},onShow:function(){try{uni.setStorageSync("isFrash",!1),this.setData({bg_color:uni.getStorageSync("bg_color"),title:uni.getStorageSync("title"),date:uni.getStorageSync("date"),emoji:uni.getStorageSync("emoji"),type:uni.getStorageSync("type"),weather:uni.getStorageSync("weather"),clone_id:uni.getStorageSync("_id")})}catch(t){}},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{checkboxChange:function(t){for(var e=this,a=null,n=this.checkboxItems,i=t.detail.value,s=0,o=n.length;s<o;++s)n[s].value==i[i.length-1]?(n[s].checked=!0,a=n[s].value):n[s].checked=!1;e.setData({checkboxItems:n,checkboxValues:a,bg_color:a})},bindKeyInput:function(t){this.setData({title:t.detail.value})},jumpPageChoise:function(t){try{uni.setStorageSync("emoji",this.emoji),uni.setStorageSync("date",this.date),uni.setStorageSync("title",this.title),uni.setStorageSync("bg_color",this.bg_color),uni.setStorageSync("isFrash",!0)}catch(t){}uni.navigateTo({url:"/pages/index/plugin/design/".concat(t.currentTarget.dataset.page,"/").concat(t.currentTarget.dataset.page)})},DateChange:function(t){this.setData({date:t.detail.value})}},watch:{_id:{handler:function(t,e){this.clone_id=t},immediate:!0}}};e.default=i},a600:function(t,e,a){var n=a("f393");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("12b4ac7c",n,!0,{sourceMap:!1,shadowMode:!1})},ade9:function(t,e,a){"use strict";var n=a("24c0"),i=a.n(n);i.a},ceb0:function(t,e,a){"use strict";a.r(e);var n=a("e339"),i=a("6710");for(var s in i)"default"!==s&&function(t){a.d(e,t,(function(){return i[t]}))}(s);a("ade9");var o,u=a("f0c5"),c=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"a1a1f87a",null,!1,n["a"],o);e["default"]=c.exports},e339:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{class:"cu-custom "+(1==t.isLucency?"lucency":""),style:"height:"+(1==t.isLucency?0:t.CustomBar)+"px"},[a("v-uni-view",{class:"cu-bar "+(t.noFixed?"":"fixed")+" "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},s=[]},ea2b:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=getApp(),i={data:function(){return{StatusBar:n.globalData.StatusBar,CustomBar:n.globalData.CustomBar,Custom:n.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""},isLucency:{type:Boolean,default:!1},noFixed:{type:Boolean,default:!1}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};e.default=i},f393:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,"/* pages/index/plugin/design/design.wxss */uni-page-body[data-v-289bee66]{width:100%;height:100%}.cu-form-group .title[data-v-289bee66]{min-width:calc(4em + %?30?%)}.button_type[data-v-289bee66]{height:%?100?%;line-height:%?100?%;margin-left:6%;bottom:%?360?%;font-size:large;position:fixed;width:88%;text-align:center;border-radius:%?25?%}",""]),t.exports=e}}]);