<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-28 16:30:51
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-30 14:37:26
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🌈ColorUI GA 简介

[![stars](https://badgen.net/github/stars/XiaokangLei/ColorUI-GA?icon=github&color=4ab8a1)](https://github.com/XiaokangLei/ColorUI-GA) [![forks](https://badgen.net/github/forks/XiaokangLei/ColorUI-GA?icon=github&color=4ab8a1)](https://github.com/XiaokangLei/ColorUI-GA) [<img src="https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1-%E5%85%AC%E4%BC%97%E5%8F%B7-brightgreen">](https://s1.ax1x.com/2022/11/30/zwKWsx.jpg)

[ColorUI GA](https://github.com/XiaokangLei/ColorUI-GA) 是基于ColorUI 2.0开发的轻量、可靠的小程序**原生**css组件库，理论上适用于其他支持css库的所有平台。

在原组件库的基础上会增加部分样式和模板，长期更新，如果您有好的想法或对本项目有任何建议、需求以及发现文中内容有误，请提交 [Github Issues](https://github.com/XiaokangLei/ColorUI-GA/issues)。

对于想要一起开发，补充CSS样式库的朋友，欢迎提交 PR。

## 快速开始(原生小程序)

- 1、下载 [源码](https://github.com/XiaokangLei/ColorUI-GA) 并解压，复制`/colorui`文件夹到项目根目录
- 2、`app.wxss`引入关键css：`main.wxss`,`icon.wxss`
- 3、【**注意**】部分样式需要page中的wxss样式及js代码一起使用才能看到完整效果，请注意查看源码

```js
// 根目录 app.wxss 文件
@import "colorui/main.wxss";
@import "colorui/icon.wxss";
// 若需要使用微动画，请引入 animation.wxss
@import "colorui/animation.wxss";
// 若使用暗色模式，请引入 dark.wxss，注意，当前版本暗色模式随系统切换，目前不支持手动切换
@import "colorui/dark.wxss";
```

### 自定义顶部导航栏(可选)

根据项目需要，决定是否自定义导航栏，示例导航栏代码在`/colorui/components/cu-custom`中，可自行修改相关参数进行配置。

- 1、`app.js`获得系统信息

```js
onLaunch: function() {
  wx.getSystemInfo({
    success: e => {
      this.globalData.StatusBar = e.statusBarHeight;
      let custom = wx.getMenuButtonBoundingClientRect();
      this.globalData.Custom = custom;  
      this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    }
  })
},
```

- 2、`app.json`配置取消系统默认导航栏,并全局引入组件

```js
"window": {
  "navigationStyle": "custom"
},
"usingComponents": {
  "cu-custom":"/colorui/components/cu-custom"
}
```

- 3、`xxx.wxml`页面调用

```html
<cu-custom bgColor="bg-gradual-pink" isBack="{{true}}">
  <view slot="backText">返回</view>
  <view slot="content">导航栏</view>
</cu-custom>
```

- 4、参数

| 参数     |       作用       |  类型   | 默认值 |
| -------- | :--------------: | :-----: | :----: |
| bgColor  |   背景颜色类名   | String  |   ''   |
| isBack   |   是否开启返回   | Boolean | false  |
| isCustom | 是否开启左侧胶囊 | Boolean | false  |
| bgImage  |   背景图片路径   | String  |   ''   |

| slot块   |                 作用                 |
| -------- | :----------------------------------: |
| backText |             返回时的文字             |
| content  |               中间区域               |
| right    | 右侧区域（胶囊占位可使用范围很窄！） |

- 5、示例

<div align=center>
  <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwKnxI.png">
  <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwKeGd.png">
  <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwKKMt.png">
</div>

## UniApp部署(仅供参考)

- 1、下载 [源码](https://github.com/XiaokangLei/ColorUI-GA) 并解压，复制`/colorui`文件夹到项目根目录
- 2、`app.vue`引入关键css：`main.wxss`,`icon.wxss`
- 3、【**注意**】部分样式需要仿照原生小程序page中的wxss样式及js代码一起使用才能看到完整效果，请注意查看源码，由于精力有限，暂不提供uniapp版本demo

```js
<style>
@import "colorui/main.css";
@import "colorui/icon.css";
// 若需要使用微动画，请引入 animation.wxss
@import "colorui/animation.wxss";
// 若使用暗色模式，请引入 dark.wxss，注意，当前版本暗色模式随系统切换，目前不支持手动切换
@import "colorui/dark.wxss";
</style>
```
