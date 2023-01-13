<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:57:27
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:05:27
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/plugin/animation/animation" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 微动画Animation

***示例代码：`/pages/index/plugin/animation/animation.wxml`***

## 默认效果

```html
<view class="padding-sm">
  <view class="flex flex-wrap justify-around">
    <button class="cu-btn bg-{{item.color}} animation-{{animation==item.name?item.name:''}} margin-sm basis-sm shadow" bindtap="toggle" data-class="{{item.name}}" wx:for="{{list}}" wx:key="item">{{item.name}}</button>
  </view>
</view>
```

## 反向动画

```html
<view class="padding-sm">
  <view class="flex flex-wrap justify-around">
    <button class="cu-btn bg-{{item.color}} animation-{{animation==item.name+'s'?item.name:''}} animation-reverse margin-sm basis-sm shadow" bindtap="toggle" data-class="{{item.name+'s'}}" wx:for="{{list}}" wx:key="item">{{item.name}}</button>
  </view>
</view>
```

## 延迟执行

```html
<view class="padding-sm">
  <view class="flex flex-wrap justify-around">
    <button class="bg-{{item.color}} cu-btn {{toggleDelay?'animation-slide-bottom':''}} margin-sm basis-sm shadow" style="animation-delay: {{(index+1)*0.1}}s;" wx:for="{{list}}" wx:key="item">0.{{index+1}}s</button>
  </view>
</view>
```

## Gif动画

```html
<view class="margin radius bg-gradual-green shadow-blur">
  <image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif" mode="scaleToFill" class="gif-black response" style="height:100rpx"></image>
</view>

<view class="margin flex">
  <view class="bg-black flex-sub margin-right radius shadow-lg">
    <image src="https://image.meiye.art/FtVzlE42mb4MfUkz9qcbCKq8Qv_a?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFit" class="gif-black response" style="height:240rpx"></image>
  </view>
  <view class="bg-white flex-sub radius shadow-lg">
    <image src="https://image.meiye.art/FpKQhWyO0YoE1kZPmT9c_m8C4vJZ" mode="aspectFit" class="gif-white response" style="height:240rpx"></image>
  </view>
</view>

<view class="margin flex">
  <view class="bg-gradual-blue flex-sub margin-right radius shadow-lg">
    <image src="https://image.meiye.art/Ftfhr4rPXzZM3Z8cBehxgQHH2Gj6?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFit" class="gif-black response" style="height:240rpx"></image>
  </view>
  <view class="bg-white flex-sub radius shadow-lg">
    <image src="https://image.meiye.art/Fv_9m3UnYTFOeiY79X01nBupGyKx?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFit" class="gif-white response" style="height:240rpx"></image>
  </view>
</view>

<view class="margin flex">
  <view class="bg-white flex-sub margin-right radius shadow-lg">
    <image src="https://image.meiye.art/FhSukauLzxBHoNQUq_YCqRN0CCKz?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFit" class="gif-white response" style="height:240rpx"></image>
  </view>
  <view class="bg-black flex-sub radius-df shadow-lg">
    <image src="https://image.meiye.art/Fg7PS0IesulBHFZwCvfx9-pj6fgs?imageMogr2/thumbnail/450x/interlace/1" mode="aspectFit" class="gif-black response" style="height:240rpx"></image>
  </view>
</view>
```

<br>



