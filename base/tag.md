<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 16:46:17
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:04:19
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/tag/tag" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 标签Tag

***代码位置：`/pages/index/basics/tag/tag.wxml`***

## 形状

```html
<view class="cu-tag margin-right">默认</view>
<view class="cu-tag round margin-right">椭圆</view>
<view class="cu-tag radius margin-right">圆角</view>
```

## 大小

```html
<view class="cu-tag radius sm margin-right">小尺寸</view>
<view class="cu-tag radius margin-right">普通尺寸</view>
```

## 颜色

- 颜色同【背景】颜色

```html
<view class="padding-xs" wx:for="{{ColorList}}" wx:key="item" wx:if="{{item.name!='gray'}}">
  <view class="cu-tag bg-{{item.name}} radius">{{item.title}}</view>
  </view>
  <view class="padding-xs" wx:for="{{ColorList}}" wx:key="item" wx:if="{{item.name!='gray' && item.name!='black' && item.name!='white'}}">
  <view class="cu-tag bg-{{item.name}} light radius">{{item.title}}</view>
</view>
```

## 镂空

```html
<view class="padding-xs" wx:for="{{ColorList}}" wx:key="item" wx:if="{{item.name!='white'}}">
  <view class="cu-tag line-{{item.name}}">{{item.title}}</view>
</view>
```

## 胶囊样式

```html
<view class="cu-capsule margin-right-sm">
  <view class="cu-tag bg-red">
    <text class="cuIcon-likefill"></text>
  </view>
  <view class="cu-tag line-red">
    12
  </view>
</view>
<view class="cu-capsule round margin-right-sm">
  <view class="cu-tag bg-blue ">
    <text class="cuIcon-likefill"></text>
  </view>
  <view class="cu-tag line-blue">
    23
  </view>
</view>
<view class="cu-capsule round margin-right-sm">
  <view class="cu-tag bg-blue ">
    说明
  </view>
  <view class="cu-tag line-blue">
    123
  </view>
</view>
<view class="cu-capsule radius margin-right-sm">
  <view class="cu-tag bg-grey ">
    <text class="cuIcon-likefill"></text>
  </view>
  <view class="cu-tag line-grey">
    23
  </view>
</view>
<view class="cu-capsule radius">
  <view class="cu-tag bg-brown sm">
    <text class="cuIcon-likefill"></text>
  </view>
  <view class="cu-tag line-brown sm">
    23
  </view>
</view>
```

## 数字标签

```html
<view class="cu-avatar xl radius">
  L
  <view class="cu-tag badge">99+</view>
</view>
<view class="cu-avatar xl radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310skin/big10001.jpg);">
  <view class="cu-tag badge">9</view>
</view>
<view class="cu-avatar xl radius">
  <view class="cu-tag badge"></view>
  <text class="cuIcon-people"></text>
</view>
<view class="cu-avatar xl radius">
  <view class="cu-tag badge">99+</view>
</view>
```

<br>


