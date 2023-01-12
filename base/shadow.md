<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:39:32
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-15 20:15:54
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/shadow/shadow" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 阴影Shadow

***样式代码：`/pages/index/basics/shadow/shadow.wxml`***

## 基本边框

- 上、下、左、右及四周边框样式，边框粗细样式`solids`。

```html
<view class="padding bg-white text-center">
  <view class="padding solid{{size?'s':''}}">四周</view>
  <view class="padding solid{{size?'s':''}}-top margin-top">上</view>
  <view class="padding solid{{size?'s':''}}-right margin-top">右</view>
  <view class="padding solid{{size?'s':''}}-bottom margin-top">下</view>
  <view class="padding solid{{size?'s':''}}-left margin-top">左</view>
</view>
```

## 边框阴影

- 一般阴影`shadow`、长阴影`shadow-lg`、翘边阴影`shadow-warp`、图片背景阴影`shadow-blur`

```html
<view class="padding text-center">
  <view class="padding-xl radius shadow bg-white radius-df">默认阴影</view>
  <view class="padding-xl radius shadow bg-blue margin-top radius-df">根据背景颜色而改变的阴影</view>
  <view class="padding-xl radius shadow bg-green margin-top radius-df">根据背景颜色而改变的阴影</view>
  <view class="padding-xl radius shadow bg-red margin-top radius-df">根据背景颜色而改变的阴影</view>
  <view class="padding-xl radius shadow shadow-lg bg-white margin-top radius-df">长阴影</view>
  <view class="padding-xl radius shadow shadow-lg bg-blue margin-top radius-df">长阴影</view>
  <view class="padding-xl radius shadow-warp bg-white margin-top radius-df">翘边阴影</view>
  <view class="padding-xl radius shadow-blur bg-red margin-top bg-img radius-df" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
    <view>根据背景图而改变的阴影</view>
  </view>
</view>
```

<br>


