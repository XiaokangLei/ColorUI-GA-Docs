<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:30:18
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-05 17:00:56
-->

<div style="width:400px; height:700px; float:right; padding-left:3%;">
    <iframe src="./h5/index.html#/pages/index/basics/progress/progress" width="400" height="750" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 进度条Progress

<div align=center>
  <img width="160px" style="border-radius: 5%;" src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

***代码位置：`/pages/index/basics/progress/progress.wxml`***

## 进度条形状

- 支持`默认矩形`、`radius`和`round`三种，支持自定义边缘形状

```html
<view class="cu-progress">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
<view class="cu-progress radius margin-top">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
<view class="cu-progress round margin-top">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
```

## 进度条尺寸

- 支持`默认尺寸`、`sm`、`xs`三种尺寸，可在css中自定义宽度，长度由`style`样式自行修改定义

```html
<view class="cu-progress round">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
<view class="cu-progress round margin-top sm">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
<view class="cu-progress round margin-top xs">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
```

## 进度条颜色

- 与背景色样式一致`bg-{{color}}`

```html
<view class="cu-progress round">
  <view class="bg-{{color}}" style="width:{{loading?'61.8%':''}};"></view>
</view>
```

## 进度条条纹

- 条纹样式`striped`，可设定为动态样式`active`

```html
<view class="cu-progress round sm striped {{active?'active':''}}">
  <view class="bg-green" style="width:{{loading?'60%':''}};"></view>
</view>
```

## 进度条比例

- 长度由`style`样式自行修改定义

```html
<view class="cu-progress radius striped active">
  <view class="bg-red" style="width:{{loading?'30%':''}};">30%</view>
  <view class="bg-olive" style="width:{{loading?'45%':''}};">45%</view>
  <view class="bg-cyan" style="width:{{loading?'25%':''}};">25%</view>
</view>
```

## 进度条布局

- 依据通用布局对进度条进行位置设计

```html
<view class="flex">
  <view class="cu-progress round">
    <view class="bg-green" style="width:{{loading?'100%':''}};"></view>
  </view>
  <text class="cuIcon-roundcheckfill text-green margin-left-sm"></text>
</view>
<view class="flex margin-top">
  <view class="cu-progress round">
    <view class="bg-green" style="width:{{loading?'80%':''}};"></view>
  </view>
  <text class="margin-left">80%</text>
</view>
```