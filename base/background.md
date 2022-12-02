<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-29 16:56:47
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-02 15:49:50
-->

<div style="width:380px; height:750px; float:right; padding-left:3%;">
    <iframe src="./h5/index.html#/pages/index/basics/background/background" width="360" height="720" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 背景Background

<div align=center>
  <img width="160px" style="border-radius: 5%;" src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

## 使用方法

<!-- <div align=center>
    <img width="19%" src="https://s1.ax1x.com/2022/11/30/zwKAaD.png">
    <img width="19%" src="https://s1.ax1x.com/2022/11/30/zwKkVO.png">
    <img width="19%" src="https://s1.ax1x.com/2022/11/30/zwKiqK.png">
    <img width="19%" src="https://s1.ax1x.com/2022/11/30/zwKPr6.png">
    <img width="19%" src="https://s1.ax1x.com/2022/11/30/zwKQqf.png">
</div> -->

```html
<view class="bg-red"></view>
<view class="bg-white"></view>
```

## 标准色

```css
page {
  /* Color 可以自定义相关配色 */
  /* var属性兼容性 --> https://www.caniuse.com/#feat=css-variables */
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

  background-color: var(--ghostWhite);
  font-size: 28rpx;
  color: var(--black);
  font-family: Helvetica Neue, Helvetica, sans-serif;
}
```
