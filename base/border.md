<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-15 20:17:15
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:24:23
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/border/border" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 边框Border

***示例代码：`/pages/index/basics/border/border.wxml`***

## 基本边框

- 上、下、左、右及四周边框样式。

```html
<view class="padding bg-white text-center">
  <view class="padding solid">四周</view>
  <view class="padding solid-top margin-top">上</view>
  <view class="padding solid-right margin-top">右</view>
  <view class="padding solid-bottom margin-top">下</view>
  <view class="padding solid-left margin-top">左</view>
</view>
```

## 边框粗细

- 边框粗细样式`solids`

```html
<view class="padding bg-white text-center">
  <view class="padding solids">四周</view>
  <view class="padding solids-top margin-top">上</view>
  <view class="padding solids-right margin-top">右</view>
  <view class="padding solids-bottom margin-top">下</view>
  <view class="padding solids-left margin-top">左</view>
</view>
```

## 虚线边框

- 虚线边框基本样式参数`dashed`

```html
<view class="padding bg-white text-center margin-sm radius-lg">
  <view class="padding dashed">四周</view>
  <view class="padding dashed-top margin-top">上</view>
  <view class="padding dashed-right margin-top">右</view>
  <view class="padding dashed-bottom margin-top">下</view>
  <view class="padding dashed-left margin-top">左</view>
</view>
```

## 边框颜色

```html
<view class="padding bg-white text-center margin-sm radius-lg">
  <view class="padding solid-blue">四周</view>
  <view class="padding solid-top-blue margin-top">上</view>
  <view class="padding solid-right-blue margin-top">右</view>
  <view class="padding solid-bottom-blue margin-top">下</view>
  <view class="padding solid-left-blue margin-top">左</view>
</view>
```
