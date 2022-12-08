<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:53:22
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-08 16:53:56
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/component/swiper/swiper" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 轮播图Swiper

***代码位置：`/pages/index/component/swiper/swiper.wxml`***

## 全屏限高轮播图

- 可设置轮播点样式`square-dot`和`round-dot`

```html
<swiper class="screen-swiper {{DotStyle?'square-dot':'round-dot'}}" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500">
  <swiper-item wx:for="{{swiperList}}" wx:key="item">
    <image src="{{item.url}}" mode="aspectFill" wx:if="{{item.type=='image'}}"></image>
    <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video>
  </swiper-item>
</swiper>
```

## 卡片式轮播

```html
<swiper class="card-swiper {{DotStyle?'square-dot':'round-dot'}}" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" bindchange="cardSwiper" previousMargin="0.01rpx" indicator-color="#8799a3" indicator-active-color="#0081ff">
  <swiper-item wx:for="{{swiperList}}" wx:key="item" class="{{cardCur==index?'cur':''}}">
    <view class="swiper-item">
      <image src="{{item.url}}" mode="aspectFill" wx:if="{{item.type=='image'}}"></image>
      <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video>
    </view>
  </swiper-item>
</swiper>
```

## 堆叠式轮播

```html
<view class="tower-swiper" bindtouchmove="towerMove" bindtouchstart="towerStart" bindtouchend="towerEnd">
  <view class="tower-item {{item.zIndex==1?'none':''}}" wx:for="{{swiperList}}" wx:key="item" style="--index:{{item.zIndex}};--left:{{item.mLeft}}">
    <view class="swiper-item">
      <image src="{{item.url}}" mode="aspectFill" wx:if="{{item.type=='image'}}"></image>
      <video src="{{item.url}}" autoplay loop muted show-play-btn="{{false}}" controls="{{false}}" objectFit="cover" wx:if="{{item.type=='video'}}"></video>
    </view>
  </view>
</view>
```