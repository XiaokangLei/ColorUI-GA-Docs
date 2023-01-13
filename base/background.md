<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-29 16:56:47
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 09:25:45
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/background/background" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🖼️背景Background

***示例代码：`/pages/index/basics/background/background.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/background/background.wxml)

## 使用方法

- `class`引入即可

```html
<view class="bg-red"></view>
<view class="bg-oc-pink-5"></view>
```

## 十级纯色背景色

- 13*10种纯色背景参考地址：[链接](https://yeun.github.io/open-color/)

## 标准色

- 代码位置：`/colorui/main.wxss`, 修改该文件的配色值，可以自定义配色，部分配色参数如下：

```css
page {
  /* 标准色 */
  --red: #e54d42;
  --orange: #f37b1d;
  --yellow: #fbbd08;
  --olive: #8dc63f;
  --green: #3eb93b;
  --cyan: #37c0fe;
  --blue: #0081ff;
  --purple: #8044de;
  --mauve: #b745cb;
  --pink: #e03997;
  --brown: #a5673f;
  --grey: #8799a3;
  --black: #0a0a0a;
  --darkGray: #666666;
  --gray: #969696;
  --ghostWhite: #f1f1f1;
  --white: #ffffff;
  /* 浅色 */
  --redLight: #fadbd9;
  --orangeLight: #fde6d2;
  --yellowLight: #fef2ce;
  --oliveLight: #e8f4d9;
  --greenLight: #d7f0db;
  --cyanLight: #d2f1f0;
  --blueLight: #cce6ff;
  --purpleLight: #e1d7f0;
  --mauveLight: #ebd4ef;
  --pinkLight: #f9d7ea;
  --brownLight: #ede1d9;
  --greyLight: #e7ebed;
  /* 渐变色 */
  --gradualRed: linear-gradient(45deg, #f43f3b, #ec008c);
  --gradualOrange: linear-gradient(45deg, #ff9700, #ed1c24);
  --gradualGreen: linear-gradient(45deg, #39b54a, #8dc63f);
  --gradualPurple: linear-gradient(45deg, #9000ff, #5e00ff);
  --gradualPink: linear-gradient(45deg, #ec008c, #6739b6);
  --gradualBlue: linear-gradient(45deg, #0081ff, #1cbbb4);
  --gradualPinkNew: linear-gradient(45deg, #fea894, #ff1047);
  --gradualCyan: linear-gradient(45deg, #06edfe, #48b2fe);
  --gradualRedLight: linear-gradient(45deg, white, #f9d3d0);
  --gradualOrangeLight: linear-gradient(45deg, white, #fcdec7);
  --gradualGreenLight: linear-gradient(45deg, white, #cfeece);
  --gradualPurpleLight: linear-gradient(45deg, white, #dfd0f7);
  --gradualPinkLight: linear-gradient(45deg, white, #edd1f2);
  --gradualBlueLight: linear-gradient(45deg, white, #bfe0ff);
  --gradualPinkNewLight: linear-gradient(45deg, white, #f7cee5);
  --gradualCyanLight: linear-gradient(45deg, white, #cdefff);
  /* 阴影透明色 */
  --ShadowSize: 6rpx 6rpx 8rpx;
  --redShadow: rgba(204, 69, 59, 0.2);
  --orangeShadow: rgba(217, 109, 26, 0.2);
  --yellowShadow: rgba(224, 170, 7, 0.2);
  --oliveShadow: rgba(124, 173, 55, 0.2);
  --greenShadow: rgba(48, 156, 63, 0.2);
  --cyanShadow: rgba(28, 187, 180, 0.2);
  --blueShadow: rgba(0, 102, 204, 0.2);
  --purpleShadow: rgba(88, 48, 156, 0.2);
  --mauveShadow: rgba(133, 33, 150, 0.2);
  --pinkShadow: rgba(199, 50, 134, 0.2);
  --brownShadow: rgba(140, 88, 53, 0.2);
  --greyShadow: rgba(114, 130, 138, 0.2);
  --grayShadow: rgba(114, 130, 138, 0.2);
  --blackShadow: rgba(26, 26, 26, 0.2);
}
```
