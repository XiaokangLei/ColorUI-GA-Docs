<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 16:56:21
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-30 14:39:21
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
  <iframe src="./h5/index.html#/pages/index/basics/avatar/avatar" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 头像Avatar

***样式代码：`/pages/index/basics/avatar/avatar.wxml`***

## 形状

```html
<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
<view class="cu-avatar radius margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
```

## 大小

```html
<view class="cu-avatar sm round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
<view class="cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
<view class="cu-avatar lg round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
<view class="cu-avatar xl round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"></view>
<view class="padding">
  <view class="cu-avatar sm round margin-left bg-red"> A</view>
  <view class="cu-avatar round margin-left bg-red">B</view>
  <view class="cu-avatar lg round margin-left bg-red">C</view>
  <view class="cu-avatar xl round margin-left bg-red">D</view>
</view>
<view class="padding">
  <view class="cu-avatar sm round margin-left bg-blue"> 蔚</view>
  <view class="cu-avatar round margin-left bg-blue">蓝</view>
  <view class="cu-avatar lg round margin-left bg-blue">
    <text>wl</text>
  </view>
  <view class="cu-avatar xl round margin-left bg-blue">
    <text class="avatar-text">网络</text>
  </view>
</view>
```

## 内嵌文字/图标

```html
<view class="padding">
  <view class="cu-avatar radius">
    <text class="cuIcon-people"></text>
  </view>
  <view class="cu-avatar radius  margin-left">
    <text>新</text>
  </view>
  <view class="cu-avatar radius  margin-left">
    <text>年</text>
  </view>
  <view class="cu-avatar radius  margin-left">
    <text>快</text>
  </view>
  <view class="cu-avatar radius  margin-left">
    <text>乐</text>
  </view>
</view>
```

## 头像颜色

```html
<view class="padding-sm">
  <view class="cu-avatar round lg bg-{{item.name}} margin-xs" wx:for="{{ColorList}}" wx:key="item">
    <text class="avatar-text">{{item.name}}</text>
  </view>
</view>
```

## 头像组

```html
<view class="cu-avatar-group">
  <view class="cu-avatar round lg" wx:for="{{4}}" wx:key="item" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000{{index+1}}.jpg);"></view>
</view>
```

## 头像标签

```html
<view class="cu-avatar round lg margin-left" wx:for="{{4}}" wx:key="item" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big1000{{index+1}}.jpg);">
  <view class="cu-tag badge {{index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'}}"></view>
</view>
```
