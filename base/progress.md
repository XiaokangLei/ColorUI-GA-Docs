<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:30:18
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 15:58:07
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/progress/progress" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 📉进度条Progress

***示例代码：`/pages/index/basics/progress/progress.wxml`***

## 进度条形状

- 支持`默认矩形`、`radius`和`round`三种，支持自定义边缘形状，长度由`style`样式自行修改定义
- 【**注意**】：环形进度条H5暂不支持预览，请扫码查看小程序真机样式。
- 参数`loading`为初始过度动画，例如从0到61.8%的过度动画，需要配合`js`样式，需要注意。

```html
<view class="cu-progress">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
<view class="cu-progress radius">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
<view class="cu-progress round">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};">61.8%</view>
</view>
```

## 环形进度条

- 当前支持两种环形进度条，一种基于`canvas2d`,一种常规css，基于`canvas2d`的样式以组件的形式引入

```html
<canvas2d-ring type="2d" id="can{{index}}" canvasWidth="{{80}}" f_weight="bold" lineColor="{{item.lineColor}}" value="{{item.value}}" valueColor="#333" f_size="15" lineWidth="{{item.lineWidth}}" title="{{'GA'}}"></canvas2d-ring>
````

```html
<view class="padding">
  <view class="cu-progress__circle" style="background:{{curColor}}; height: {{circleDiam}}px; width: {{circleDiam}}px;">
    <view class="cu-progress__circle--left" style="transform:{{rotateLeft}}; width: {{circleDiam}}px; height: {{circleDiam}}px; clip:rect(0, {{circleDiam / 2}}px, auto, 0); background:{{bgColor}}; transition-duration:{{durationLeft}};"></view>
    <view class="cu-progress__circle--right" style="transform:{{rotateRight}}; width: {{circleDiam}}px; height: {{circleDiam}}px; clip:rect(0, auto, auto, {{circleDiam / 2}}px); background: {{backgroundRight}}; transition-duration:{{durationRight}};"></view>
    <!-- 内部圆环背景色、高宽、中心点 -->
    <view class="cu-progress__mask bg-white" style="width: {{cententDiam}}px; height: {{cententDiam}}px; left: {{(circleDiam - cententDiam) / 2}}px; top: {{(circleDiam - cententDiam) / 2}}px">
      <text class="cu-progress__circle__percent text-black">{{value}}%</text>
    </view>
  </view>
</view>
```

## 进度条尺寸

- 支持`默认尺寸`、`sm`、`xs`三种尺寸，可在css中自定义宽度，长度由`style`样式自行修改定义

```html
<view class="cu-progress round">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
<view class="cu-progress round sm">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
<view class="cu-progress round xs">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
```

## 进度条颜色

- 与背景基础色样式一致`bg-{{color}}`

```html
<view class="cu-progress round">
  <view class="bg-red" style="width:{{loading?'61.8%':''}};"></view>
</view>
```

## 进度条条纹

- 条纹样式`striped`，可设定为动态样式`active`

```html
<view class="cu-progress round sm striped active">
  <view class="bg-green" style="width:{{loading?'60%':''}};"></view>
</view>
```

## 进度条比例

- 长度由`style`样式自行修改定义

```html
<view class="cu-progress radius striped">
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
