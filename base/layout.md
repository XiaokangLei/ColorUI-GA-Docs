<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-28 19:17:36
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 09:03:06
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/layout/layout" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🧮布局Layout

***示例代码：`/pages/index/basics/layout/layout.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/layout/layout.wxml)

## 基础布局

- 内外边距相关介绍：[链接](https://www.zhihu.com/zvideo/1419071372585185280)
- 内外边距{size}的尺寸有 xs、sm、默认、lg、xl、xxl，对应大小分别为：10rpx、20rpx、30rpx、40rpx、50rpx、60rpx

```html
<view class="margin padding">上下左右四个方向</view>
<view class="margin-top padding-top">上</view>
<view class="margin-bottom padding-bottom">下</view>
<view class="margin-left padding-left">左</view>
<view class="margin-right padding-right">右</view>
<view class="margin-lr padding-tb">左右外边距、上下内边距</view>
<view class="margin-tb-sm padding-lr-xl">边距大小</view>
```

- 圆角{size}的尺寸有 默认、df、lg、xl，对应大小分别为：8rpx、16rpx、24rpx、32rpx

```html
<view class="radius-xl">四角</view>
<view class="radius-top">顶部两角</view>
<view class="radius-bottom">底部两角</view>
<view class="radius-top-left">左上右下两角</view>
<view class="radius-top-right">右上坐下两角</view>
```

## Flex布局

- flex基础知识详解参考: [链接](https://zhuanlan.zhihu.com/p/52280195)

### 固定长度

```html
<view class="flex flex-wrap">
    <view class="basis-xs">xs(20%)</view>
    <view class="basis-sm">sm(40%)</view>
    <view class="basis-df">sub(50%)</view>
    <view class="basis-lg">lg(60%)</view>
    <view class="basis-xl">xl(80%)</view>
    <view class="basis-xxl">xxl(100%)</view>
</view>
```

### 比例布局

- `flex-sub`、`flex-twice`和`flex-treble`自行组合

```html
<view class="flex">
    <view class="flex-sub">1/2</view>
    <view class="flex-sub">1/2</view>
</view>
<view class="flex">
    <view class="flex-sub">1/3</view>
    <view class="flex-twice">2/3</view>
</view>
<view class="flex">
    <view class="flex-twice">2/3</view>
    <view class="flex-sub">1/3</view>
</view>
<view class="flex">
    <view class="flex-sub">1/6</view>
    <view class="flex-twice">1/3</view>
    <view class="flex-treble">1/2</view>
</view>
<view class="flex">
    <view class="flex-treble">3/4</view>
    <view class="flex-sub">1/4</view>
</view>
```

### 水平对齐

```html
<view class="flex justify-start">
    <view class="">start</view>
    <view class="">start</view>
</view>
<view class="flex justify-end">
    <view class="">end</view>
    <view class="">end</view>
</view>
<view class="flex justify-center">
    <view class="">center</view>
    <view class="">center</view>
</view>
<view class="flex justify-between">
    <view class="">between</view>
    <view class="">between</view>
</view>
<view class="flex justify-around">
    <view class="">around</view>
    <view class="">around</view>
</view>
```

### 垂直对齐

```html
<view class="flex align-start">
    <view class="">ColorUI-GA</view>
    <view class="">start</view>
</view>
<view class="flex align-end">
    <view class="">ColorUI-GA</view>
    <view class="">end</view>
</view>
<view class="flex align-center">
    <view class="">ColorUI-GA</view>
    <view class="">center</view>
</view>
```

## Grid布局

### 等分列

```html
<view class="grid col-3">
    <view class="">3等分列第一个元素</view>
    <view class="">3等分列第二个元素</view>
    <view class="">3等分列第三个元素</view>
</view>
```

### 等高

```html
<view class="grid col-4 grid-square">
    <view class="" style="background-image:url(https://image.meiye.art/pic_1628487627712);"></view>
    <view class="" style="background-image:url(https://image.meiye.art/pic_1628487627712);"></view>
    <view class="" style="background-image:url(https://image.meiye.art/pic_1628487627712);"></view>
    <view class="" style="background-image:url(https://image.meiye.art/pic_1628487627712);"></view>
</view>
```

### Float布局

- 基本示例代码：`display: table`; 以表格的方式进行显示。在宽度上会根据内容多少或设置来表现；在高度上，对齐最大的一个高度，因为在表格里面的一行，最大的一个高度会把这一行的高度给撑开。

```html
<view class="cf">
    <view class="fl">左侧</view>
    <view class="fr">右侧</view>
</view>
```
