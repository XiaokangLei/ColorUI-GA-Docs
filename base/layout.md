<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-28 19:17:36
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-02 15:48:59
-->

<div style="width:380px; height:750px; float:right; padding-left:3%;">
    <iframe src="./h5/index.html#/pages/index/basics/layout/layout" width="360" height="720" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 布局Layout

<div align=center>
  <img width="160px" style="border-radius: 5%;" src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

## Flex布局

<!-- <div align=center>
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKMsP.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwK3dS.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwK1Z8.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKYGj.png">
</div> -->

### 固定尺寸

```html
<view class="padding bg-white">
    <view class="flex flex-wrap">
    <view class="basis-xs bg-blue light margin-xs padding-sm radius">xs(20%)</view>
    <view class="basis-df"></view>
    <view class="basis-sm bg-blue light margin-xs padding-sm radius">sm(40%)</view>
    <view class="basis-df"></view>
    <view class="basis-df bg-blue light margin-xs padding-sm radius">sub(50%)</view>
    <view class="basis-lg bg-blue light margin-xs padding-sm radius">lg(60%)</view>
    <view class="basis-xl bg-blue light margin-xs padding-sm radius">xl(80%)</view>
    <view class="basis-xxl bg-blue light margin-xs padding-sm radius">xxl(100%)</view>
    </view>
</view>
```

### 比例布局

```html
<view class="padding bg-white">
    <view class="flex">
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/2</view>
    </view>
    <view class="flex p-xs margin-bottom-sm mb-sm">
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
    <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
    </view>
    <view class="flex p-xs margin-bottom-sm mb-sm">
    <view class="flex-twice bg-blue light padding-sm margin-xs radius">2/3</view>
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/3</view>
    </view>
    <view class="flex p-xs margin-bottom-sm mb-sm">
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/6</view>
    <view class="flex-twice bg-blue light padding-sm margin-xs radius">1/3</view>
    <view class="flex-treble bg-blue light padding-sm margin-xs radius">1/2</view>
    </view>
    <view class="flex p-xs margin-bottom-sm mb-sm">
    <view class="flex-treble bg-blue light padding-sm margin-xs radius">3/4</view>
    <view class="flex-sub bg-blue light padding-sm margin-xs radius">1/4</view>
    </view>
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

<!-- <div align=center>
    <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwKJiQ.png">
    <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwK8Ig.png">
    <img width="30%" src="https://s1.ax1x.com/2022/11/30/zwKtRs.png">
</div> -->

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

<!-- <div align=center>
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKNzn.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKaMq.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKds0.png">
    <img width="24%" src="https://s1.ax1x.com/2022/11/30/zwKwLV.png">
</div> -->

基础数据：

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
