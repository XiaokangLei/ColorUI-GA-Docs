(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-component-list-list"],{1549:function(t,i,a){"use strict";var s=a("4f9f"),e=a.n(s);e.a},"2b10":function(t,i,a){"use strict";a.r(i);var s=a("94be"),e=a("f64a");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);a("424a");var c,u=a("f0c5"),o=Object(u["a"])(e["default"],s["b"],s["c"],!1,null,"30c88d06",null,!1,s["a"],c);i["default"]=o.exports},"424a":function(t,i,a){"use strict";var s=a("e077"),e=a.n(s);e.a},"4da4":function(t,i,a){"use strict";a.r(i);var s=a("d8cf"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},"4f9f":function(t,i,a){var s=a("511d");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=a("4f06").default;e("0b453371",s,!0,{sourceMap:!1,shadowMode:!1})},"511d":function(t,i,a){var s=a("24fb");i=s(!1),i.push([t.i,'/* pages/index/component/list/list.wxss */.page[data-v-09bb5dae]{height:100vh;width:100vw}.page.show[data-v-09bb5dae]{overflow:hidden}.switch-sex[data-v-09bb5dae]::after{content:"\\e716"}.switch-sex[data-v-09bb5dae]::before{content:"\\e7a9"}.switch-music[data-v-09bb5dae]::after{content:"\\e66a"}.switch-music[data-v-09bb5dae]::before{content:"\\e6db"}',""]),t.exports=i},5862:function(t,i,a){"use strict";a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var s={cuCustom:a("2b10").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",[a("v-uni-scroll-view",{class:"page "+(null!=t.modalName?"show":""),attrs:{"scroll-y":null==t.modalName}},[a("cu-custom",{attrs:{bgColor:"bg-gradual-pink",isBack:!0}},[a("v-uni-view",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),a("v-uni-view",{attrs:{slot:"content"},slot:"content"},[t._v("列表")])],1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("宫格列表")],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"gridModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("设置")])],1)],1),a("v-uni-view",{class:"cu-modal "+("gridModal"==t.modalName?"show":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",attrs:{catchtap:!0}},[a("v-uni-radio-group",{staticClass:"block",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.gridchange.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(3,(function(i,s){return a("v-uni-view",{key:s,staticClass:"cu-item"},[a("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[a("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(s+3)+" 列")]),a("v-uni-radio",{staticClass:"round",attrs:{value:s+3,checked:t.gridCol==s+3}})],1)],1)})),1)],1),a("v-uni-view",{staticClass:"cu-list menu text-left solid-top"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("边框")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.gridswitch.apply(void 0,arguments)}}})],1)],1)],1)],1)],1),a("v-uni-view",{class:"cu-list grid col-"+t.gridCol+" "+(t.gridBorder?"":"no-border")},t._l(t.iconList,(function(i,s){return s<2*t.gridCol?a("v-uni-view",{key:s,staticClass:"cu-item"},[a("v-uni-view",{class:"cuIcon-"+i.icon+" text-"+i.color},[0!=i.badge?a("v-uni-view",{staticClass:"cu-tag badge"},[1!=i.badge?[t._v(t._s(i.badge>99?"99+":i.badge))]:t._e()],2):t._e()],1),a("v-uni-text",[t._v(t._s(i.name))])],1):t._e()})),1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("菜单列表")],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn bg-green shadow",attrs:{"data-target":"menuModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("设置")])],1)],1),a("v-uni-view",{class:"cu-modal "+("menuModal"==t.modalName?"show":""),on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-dialog",attrs:{catchtap:!0}},[a("v-uni-scroll-view",{staticStyle:{height:"300rpx"},attrs:{"scroll-y":!0}},[a("v-uni-view",{staticClass:"cu-list menu text-left solid-top"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("短边框")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuBorderFun.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("箭头")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuArrowFun.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("卡片")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuCardFun.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("短边框")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuBorderFun.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("箭头")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuArrowFun.apply(void 0,arguments)}}})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"text-grey"},[t._v("卡片")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.menuCardFun.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)],1),a("v-uni-view",{class:"cu-list menu "+(t.menuBorder?"sm-border":"")+" "+(t.menuCard?"card-menu margin-top":"")},[a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cuIcon-circlefill text-grey"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("图标 + 标题")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-image",{staticClass:"png",attrs:{src:"/static/images/logo.png",mode:"aspectFit"}}),a("v-uni-text",{staticClass:"text-grey"},[t._v("图片 + 标题")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-button",{staticClass:"cu-btn content",attrs:{"open-type":"contact"}},[a("v-uni-text",{staticClass:"cuIcon-btn text-olive"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("Open-type 按钮")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-navigator",{staticClass:"content",attrs:{"hover-class":"none",url:"../list/list","open-type":"redirect"}},[a("v-uni-text",{staticClass:"cuIcon-discoverfill text-orange"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("Navigator 跳转")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cuIcon-emojiflashfill text-pink"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("头像组")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"cu-avatar-group"},[a("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10004.jpg)"}}),a("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10003.jpg)"}}),a("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10002.jpg)"}}),a("v-uni-view",{staticClass:"cu-avatar round sm",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}})],1),a("v-uni-text",{staticClass:"text-grey text-sm"},[t._v("4 人")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cuIcon-btn text-green"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("按钮")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-button",{staticClass:"cu-btn round bg-green shadow"},[a("v-uni-text",{staticClass:"cuIcon-upload"}),t._v("上传")],1)],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cuIcon-tagfill text-red"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("标签")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"cu-tag round bg-orange light"},[t._v("音乐")]),a("v-uni-view",{staticClass:"cu-tag round bg-olive light"},[t._v("电影")]),a("v-uni-view",{staticClass:"cu-tag round bg-blue light"},[t._v("旅行")])],1)],1),a("v-uni-view",{class:"cu-item "+(t.menuArrow?"arrow":"")},[a("v-uni-view",{staticClass:"content"},[a("v-uni-text",{staticClass:"cuIcon-warn text-green"}),a("v-uni-text",{staticClass:"text-grey"},[t._v("文本")])],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"text-grey text-sm"},[t._v("小目标还没有实现！")])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"content padding-tb-sm"},[a("v-uni-view",[a("v-uni-text",{staticClass:"cuIcon-clothesfill text-blue margin-right-xs"}),t._v("多行Item")],1),a("v-uni-view",{staticClass:"text-gray text-sm"},[a("v-uni-text",{staticClass:"cuIcon-infofill margin-right-xs"}),t._v("小目标还没有实现！")],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-switch",{staticClass:"switch-sex sm",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.switchSex.apply(void 0,arguments)}}})],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("消息列表")],1)],1),a("v-uni-view",{staticClass:"cu-list menu-avatar"},[a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[t._v("凯尔")]),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[a("v-uni-text",{staticClass:"cuIcon-infofill text-red margin-right-xs"}),t._v("我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。")],1)],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png)"}},[a("v-uni-view",{staticClass:"cu-tag badge"},[t._v("99+")])],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("瓦洛兰之盾-塔里克")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("战士")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-pink"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("莫甘娜")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("凯尔，你被自己的光芒变的盲目！")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item grayscale"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg)"}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[a("v-uni-text",{staticClass:"text-cut"},[t._v("伊泽瑞尔")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("断开连接...")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("等我回来一个打十个")])],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("5")])],1)],1),a("v-uni-view",{staticClass:"cu-item cur"},[a("v-uni-view",{staticClass:"cu-avatar radius lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg)"}},[a("v-uni-view",{staticClass:"cu-tag badge"})],1),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",[a("v-uni-text",{staticClass:"text-cut"},[t._v("瓦罗兰大陆-睡衣守护者-新手保护营")]),a("v-uni-view",{staticClass:"cu-tag round bg-orange sm"},[t._v("6人")])],1),a("v-uni-view",{staticClass:"text-gray text-sm flex"},[a("v-uni-text",{staticClass:"text-cut"},[t._v("伊泽瑞尔："),a("v-uni-text",{staticClass:"cuIcon-locationfill text-orange margin-right-xs"}),t._v("传送中...")],1)],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cuIcon-notice_forbid_fill text-gray"})],1)],1)],1),a("v-uni-view",{staticClass:"cu-bar bg-white solid-bottom margin-top"},[a("v-uni-view",{staticClass:"action"},[a("v-uni-text",{staticClass:"cuIcon-titles text-blue"}),t._v("列表左滑")],1)],1),a("v-uni-view",{staticClass:"cu-list menu-avatar"},t._l(4,(function(i,s){return a("v-uni-view",{key:s,class:"cu-item "+(t.modalName=="move-box-"+s?"move-cur":""),attrs:{"data-target":"move-box-"+s},on:{touchstart:function(i){arguments[0]=i=t.$handleEvent(i),t.ListTouchStartFun.apply(void 0,arguments)},touchmove:function(i){arguments[0]=i=t.$handleEvent(i),t.ListTouchMove.apply(void 0,arguments)},touchend:function(i){arguments[0]=i=t.$handleEvent(i),t.ListTouchEnd.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100"+(s+1)+".jpg);"}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"text-grey"},[t._v("小黄人")]),a("v-uni-view",{staticClass:"text-gray text-sm"},[a("v-uni-text",{staticClass:"cuIcon-infofill text-red"}),t._v("消息未送达")],1)],1),a("v-uni-view",{staticClass:"action"},[a("v-uni-view",{staticClass:"text-grey text-xs"},[t._v("22:20")]),a("v-uni-view",{staticClass:"cu-tag round bg-grey sm"},[t._v("5")])],1),a("v-uni-view",{staticClass:"move"},[a("v-uni-view",{staticClass:"bg-grey"},[t._v("置顶")]),a("v-uni-view",{staticClass:"bg-red"},[t._v("删除")])],1)],1)})),1)],1)],1)},n=[]},"897f":function(t,i,a){"use strict";a.r(i);var s=a("5862"),e=a("4da4");for(var n in e)"default"!==n&&function(t){a.d(i,t,(function(){return e[t]}))}(n);a("1549");var c,u=a("f0c5"),o=Object(u["a"])(e["default"],s["b"],s["c"],!1,null,"09bb5dae",null,!1,s["a"],c);i["default"]=o.exports},"91b6":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=getApp(),e={data:function(){return{StatusBar:s.globalData.StatusBar,CustomBar:s.globalData.CustomBar,Custom:s.globalData.Custom}},options:{addGlobalClass:!0,multipleSlots:!0},props:{bgColor:{type:String,default:""},isCustom:{type:Boolean,default:!1},isBack:{type:Boolean,default:!1},bgImage:{type:String,default:""}},methods:{BackPage:function(){uni.navigateBack({delta:1})},toHome:function(){uni.reLaunch({url:"/pages/index/index"})}}};i.default=e},"94be":function(t,i,a){"use strict";var s;a.d(i,"b",(function(){return e})),a.d(i,"c",(function(){return n})),a.d(i,"a",(function(){return s}));var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"cu-custom",style:"height:"+t.CustomBar+"px"},[a("v-uni-view",{class:"cu-bar fixed "+(""!=t.bgImage?"none-bg text-white bg-img":"")+" "+t.bgColor,style:"height:"+t.CustomBar+"px;padding-top:"+t.StatusBar+"px;"+(t.bgImage?"background-image:url( + bgImage+)":"")},[t.isBack?a("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"}),t._t("backText")],2):t._e(),t.isCustom?a("v-uni-view",{staticClass:"action border-custom",style:"width:"+t.Custom.width+"px;height:"+t.Custom.height+"px;margin-left:calc(750rpx - "+t.Custom.right+"px)"},[a("v-uni-text",{staticClass:"cuIcon-back",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.BackPage.apply(void 0,arguments)}}}),a("v-uni-text",{staticClass:"cuIcon-homefill",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toHome.apply(void 0,arguments)}}})],1):t._e(),a("v-uni-view",{staticClass:"content",style:"top:"+t.StatusBar+"px"},[t._t("content")],2),t._t("right")],2)],1)},n=[]},d8cf:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=getApp(),e={data:function(){return{StatusBar:s.globalData.StatusBar,CustomBar:s.globalData.CustomBar,iconList:[{icon:"cardboardfill",color:"red",badge:120,name:"VR"},{icon:"recordfill",color:"orange",badge:1,name:"录像"},{icon:"picfill",color:"yellow",badge:0,name:"图像"},{icon:"noticefill",color:"olive",badge:22,name:"通知"},{icon:"upstagefill",color:"cyan",badge:0,name:"排行榜"},{icon:"clothesfill",color:"blue",badge:0,name:"皮肤"},{icon:"discoverfill",color:"purple",badge:0,name:"发现"},{icon:"questionfill",color:"mauve",badge:0,name:"帮助"},{icon:"commandfill",color:"purple",badge:0,name:"问答"},{icon:"brandfill",color:"mauve",badge:0,name:"版权"}],gridCol:3,skin:!1,modalName:"",gridBorder:"",menuBorder:"",menuArrow:"",menuCard:"",ListTouchStart:"",ListTouchDirection:""}},onLoad:function(t){},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){},methods:{showModal:function(t){this.setData({modalName:t.currentTarget.dataset.target})},hideModal:function(t){this.setData({modalName:null})},gridchange:function(t){this.setData({gridCol:t.detail.value})},gridswitch:function(t){this.setData({gridBorder:t.detail.value})},menuBorderFun:function(t){this.setData({menuBorder:t.detail.value})},menuArrowFun:function(t){this.setData({menuArrow:t.detail.value})},menuCardFun:function(t){this.setData({menuCard:t.detail.value})},switchSex:function(t){this.setData({skin:t.detail.value})},ListTouchStartFun:function(t){this.setData({ListTouchStart:t.touches[0].pageX})},ListTouchMove:function(t){this.setData({ListTouchDirection:t.touches[0].pageX-this.ListTouchStart>0?"right":"left"})},ListTouchEnd:function(t){"left"==this.ListTouchDirection?this.setData({modalName:t.currentTarget.dataset.target}):this.setData({modalName:null}),this.setData({ListTouchDirection:null})}}};i.default=e},e077:function(t,i,a){var s=a("fe09");s.__esModule&&(s=s.default),"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=a("4f06").default;e("023547a5",s,!0,{sourceMap:!1,shadowMode:!1})},f64a:function(t,i,a){"use strict";a.r(i);var s=a("91b6"),e=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(i,t,(function(){return s[t]}))}(n);i["default"]=e.a},fe09:function(t,i,a){var s=a("24fb");i=s(!1),i.push([t.i,"/* colorui/components/cu-custom.wxss */",""]),t.exports=i}}]);