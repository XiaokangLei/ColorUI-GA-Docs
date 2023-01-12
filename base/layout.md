<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-28 19:17:36
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 00:18:32
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/layout/layout" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🧮布局Layout

***样式代码：`/pages/index/basics/layout/layout.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/layout/layout.wxml)

## 基础布局

- 内外边距相关介绍：[链接](https://www.zhihu.com/zvideo/1419071372585185280)
- 内外边距{size}的尺寸有 xs、sm、默认、lg、xl、xxl，对应大小分别为：10rpx、20rpx、30rpx、40rpx、50rpx、60rpx

```html
<view class="margin padding">上下左右四个方向</view>
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
<view class="bg-white">
    <view class="flex solid-bottom padding justify-start">
    <view class="bg-blue light padding-sm margin-xs radius">start</view>
    <view class="bg-blue light padding-sm margin-xs radius">start</view>
    </view>
    <view class="flex solid-bottom padding justify-end">
    <view class="bg-blue light padding-sm margin-xs radius">end</view>
    <view class="bg-blue light padding-sm margin-xs radius">end</view>
    </view>
    <view class="flex solid-bottom padding justify-center">
    <view class="bg-blue light padding-sm margin-xs radius">center</view>
    <view class="bg-blue light padding-sm margin-xs radius">center</view>
    </view>
    <view class="flex solid-bottom padding justify-between">
    <view class="bg-blue light padding-sm margin-xs radius">between</view>
    <view class="bg-blue light padding-sm margin-xs radius">between</view>
    </view>
    <view class="flex solid-bottom padding justify-around">
    <view class="bg-blue light padding-sm margin-xs radius">around</view>
    <view class="bg-blue light padding-sm margin-xs radius">around</view>
    </view>
</view>
```

### 垂直对齐

```html
<view class="bg-white">
    <view class="flex solid-bottom padding align-start">
    <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
    <view class="bg-blue light padding-sm margin-xs radius">start</view>
    </view>
    <view class="flex solid-bottom padding align-end">
    <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
    <view class="bg-blue light padding-sm margin-xs radius">end</view>
    </view>
    <view class="flex solid-bottom padding align-center">
    <view class="bg-blue light padding-lg margin-xs radius">ColorUI-GA</view>
    <view class="bg-blue light padding-sm margin-xs radius">center</view>
    </view>
</view>
```

## Grid布局

### 等分列

```html
<view class="bg-white padding">
    <view class="grid col-{{index+1}} margin-bottom text-center" wx:for="{{5}}" wx:key="item">
    <view class="{{index%2==0?'bg-green light':'bg-blue light'}} padding solid-bottom" wx:for="{{(index+1)*2}}" wx:key="item">{{index+1}}</view>
    </view>
</view>
```

### 等高

```html
<view class="bg-white padding">
    <view class="grid col-4 grid-square">
    <view class="bg-img" wx:for="{{4}}" wx:key="item" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000{{index+1}}.jpg);"></view>
    </view>
</view>
```

## 辅助布局

- 基础数据：

```css
.margin-xs {margin: 10rpx;}
.margin-sm {margin: 20rpx;}
.margin {margin: 30rpx;}
.margin-lg {margin: 40rpx;}
.margin-xl {margin: 50rpx;}
.margin-top-xs {margin-top: 10rpx;}
.margin-top-sm {margin-top: 20rpx;}
.margin-top {margin-top: 30rpx;}
.margin-top-lg {margin-top: 40rpx;}
.margin-top-xl {margin-top: 50rpx;}
.margin-right-xs {margin-right: 10rpx;}
.margin-right-sm {margin-right: 20rpx;}
.margin-right {margin-right: 30rpx;}
.margin-right-lg {margin-right: 40rpx;}
.margin-right-xl {margin-right: 50rpx;}
.margin-bottom-xs {margin-bottom: 10rpx;}
.margin-bottom-sm {margin-bottom: 20rpx;}
.margin-bottom {margin-bottom: 30rpx;}
.margin-bottom-lg {margin-bottom: 40rpx;}
.margin-bottom-xl {margin-bottom: 50rpx;}
.margin-left-xs {margin-left: 10rpx;}
.margin-left-sm {margin-left: 20rpx;}
.margin-left {margin-left: 30rpx;}
.margin-left-lg {margin-left: 40rpx;}
.margin-left-xl {margin-left: 50rpx;}
.margin-lr-xs {margin-left: 10rpx;margin-right: 10rpx;}
.margin-lr-sm {margin-left: 20rpx;margin-right: 20rpx;}
.margin-lr {margin-left: 30rpx;margin-right: 30rpx;}
.margin-lr-lg {margin-left: 40rpx;margin-right: 40rpx;}
.margin-lr-xl {margin-left: 50rpx;margin-right: 50rpx;}
.margin-tb-xs {margin-top: 10rpx;margin-bottom: 10rpx;}
.margin-tb-sm {margin-top: 20rpx;margin-bottom: 20rpx;}
.margin-tb {margin-top: 30rpx;margin-bottom: 30rpx;}
.margin-tb-lg {margin-top: 40rpx;margin-bottom: 40rpx;}
.margin-tb-xl {margin-top: 50rpx;margin-bottom: 50rpx;}
.padding-0 {padding: 0;}
.padding-xs {padding: 10rpx;}
.padding-sm {padding: 20rpx;}
.padding {padding: 30rpx;}
.padding-lg {padding: 40rpx;}
.padding-xl {padding: 50rpx;}
.padding-top-xs {padding-top: 10rpx;}
.padding-top-sm {padding-top: 20rpx;}
.padding-top {padding-top: 30rpx;}
.padding-top-lg {padding-top: 40rpx;}
.padding-top-xl {padding-top: 50rpx;}
.padding-top-xxl {padding-top: 64rpx;}
.padding-top-sl {padding-top: 84rpx;}
.padding-right-xs {padding-right: 10rpx;}
.padding-right-sm {padding-right: 20rpx;}
.padding-right {padding-right: 30rpx;}
.padding-right-lg {padding-right: 40rpx;}
.padding-right-xl {padding-right: 50rpx;}
.padding-bottom-xs {padding-bottom: 10rpx;}
.padding-bottom-sm {padding-bottom: 20rpx;}
.padding-bottom {padding-bottom: 30rpx;}
.padding-bottom-lg {padding-bottom: 40rpx;}
.padding-bottom-xl {padding-bottom: 50rpx;}
.padding-left-xs {padding-left: 10rpx;}
.padding-left-sm {padding-left: 20rpx;}
.padding-left {padding-left: 30rpx;}
.padding-left-lg {padding-left: 40rpx;}
.padding-left-xl {padding-left: 50rpx;}
.padding-lr-xs {padding-left: 10rpx;padding-right: 10rpx;}
.padding-lr-sm {padding-left: 20rpx;padding-right: 20rpx;}
.padding-lr {padding-left: 30rpx;padding-right: 30rpx;}
.padding-lr-lg {padding-left: 40rpx;padding-right: 40rpx;}
.padding-lr-xl {padding-left: 50rpx;padding-right: 50rpx;}
.padding-tb-xs {padding-top: 10rpx;padding-bottom: 10rpx;}
.padding-tb-sm {padding-top: 20rpx;padding-bottom: 20rpx;}
.padding-tb {padding-top: 30rpx;padding-bottom: 30rpx;}
.padding-tb-lg {padding-top: 40rpx;padding-bottom: 40rpx;}
.padding-tb-xl {padding-top: 50rpx;padding-bottom: 50rpx;}
```

### 浮动

```html
<view class="bg-white padding">
    <view class=" cf padding-sm">
    <view class="bg-blue light radius fl padding-sm">ColorUi fl</view>
    <view class="bg-blue light radius fr padding-sm">ColorUi fr</view>
    </view>
</view>
```

### 基础内外边距

```html
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">外边距</view>
    <view class="basis-df padding-bottom-xs">内边距</view>
    <view class="basis-df">.margin-{size}</view>
    <view class="basis-df">.padding-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">水平方向外边距</view>
    <view class="basis-df padding-bottom-xs">水平方向内边距</view>
    <view class="basis-df">.margin-lr-{size}</view>
    <view class="basis-df">.padding-lr-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">垂直方向外边距</view>
    <view class="basis-df padding-bottom-xs">垂直方向内边距</view>
    <view class="basis-df">.margin-tb-{size}</view>
    <view class="basis-df">.padding-tb-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">上外边距</view>
    <view class="basis-df padding-bottom-xs">上内边距</view>
    <view class="basis-df">.margin-top-{size}</view>
    <view class="basis-df">.padding-top-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">右外边距</view>
    <view class="basis-df padding-bottom-xs">右内边距</view>
    <view class="basis-df">.margin-right-{size}</view>
    <view class="basis-df">.padding-right-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">下外边距</view>
    <view class="basis-df padding-bottom-xs">下内边距</view>
    <view class="basis-df">margin-bottom-{size}</view>
    <view class="basis-df">.padding-bottom-{size}</view>
</view>
<view class="flex flex-wrap padding solid-top">
    <view class="basis-df padding-bottom-xs">左外边距</view>
    <view class="basis-df padding-bottom-xs">左内边距</view>
    <view class="basis-df">.margin-left-{size}</view>
    <view class="basis-df">.padding-left-{size}</view>
</view>
```
