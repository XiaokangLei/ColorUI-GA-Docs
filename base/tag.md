<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 16:46:17
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 15:21:58
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/tag/tag" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🏷️标签Tag

***示例代码：`/pages/index/basics/tag/tag.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/tag/tag.wxml)

## 标签形状

```html
<view class="cu-tag">默认</view>
<view class="cu-tag round">椭圆</view>
<view class="cu-tag radius">圆角</view>
```

## 标签大小

```html
<view class="cu-tag radius">普通尺寸</view>
<view class="cu-tag radius sm">小尺寸</view>
```

## 标签颜色

- 颜色同背景基础色

```html
<view class="cu-tag bg-red radius">红色标签</view>
<view class="cu-tag bg-red light radius">浅红色标签</view>
```

## 镂空标签

```html
<view class="cu-tag line-red">红色镂空标签</view>
```

## 胶囊样式标签

```html
<view class="cu-capsule margin-right-sm">
  <view class="cu-tag bg-red">
    <text class="cuIcon-likefill"></text>
  </view>
  <view class="cu-tag line-red">
    12
  </view>
</view>
```

## 提示标签

```html
<view class="cu-avatar xl radius">
  L
  <view class="cu-tag badge">99+</view>
</view>
<view class="cu-avatar xl radius">
  <view class="cu-tag badge"></view>
  <text class="cuIcon-people"></text>
</view>
```

## 图像标签

```html
<view class="cu-avatar xl radius" style="background-image:url(https://image.meiye.art/pic_1628404025424);">
  <view class="cu-tag badge">9</view>
</view>
```
