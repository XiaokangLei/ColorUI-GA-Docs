<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 16:56:21
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 15:40:53
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
  <iframe src="./h5/index.html#/pages/index/basics/avatar/avatar" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# ⛱️头像Avatar

***示例代码：`/pages/index/basics/avatar/avatar.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/avatar/avatar.wxml)

## 头像形状

```html
<view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
<view class="cu-avatar radius" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
```

## 头像大小

```html
<view class="cu-avatar sm round" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
<view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
<view class="cu-avatar lg round" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
<view class="cu-avatar xl round" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
```

## 内嵌文字/图标

```html
<view class="cu-avatar radius">
  <text class="cuIcon-people"></text>
</view>
<view class="cu-avatar radius  margin-left">
  <text>新</text>
</view>
```

## 头像颜色

```html
<view class="cu-avatar round lg bg-red margin-xs">
  <text class="avatar-text">红色头像</text>
</view>
```

## 头像组

```html
<view class="cu-avatar-group">
  <view class="cu-avatar round lg" wx:for="{{4}}" wx:key="item" style="background-image:url(https://image.meiye.art/pic_1628404025424);"></view>
</view>
```

## 头像标签

```html
<view class="cu-avatar round lg" wx:for="{{4}}" wx:key="item" style="background-image:url(https://image.meiye.art/pic_1628404025424);">
  <view class="cu-tag badge {{index%2==0?'cuIcon-female bg-pink':'cuIcon-male bg-blue'}}"></view>
</view>
```
