<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:40:33
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-05 17:00:37
-->

<div style="width:400px; height:700px; float:right; padding-left:3%;">
    <iframe src="./h5/index.html#/pages/index/basics/loading/loading" width="400" height="750" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 加载中Loading

<div align=center>
  <img width="160px" style="border-radius: 5%;" src="https://s1.ax1x.com/2022/11/30/zwKDdU.jpg">
</div>

***代码位置：`/pages/index/basics/loading/loading.wxml`***

## 背景

- 背景色与常规背景一致`bg-{{color}}`

```html
<view class="cu-load bg-blue loading"></view>
```

## 加载状态

- 加载中`loading`，加载完毕`over`

```html
<view class="cu-load bg-grey {{!isLoad?'loading':'over'}}"></view>
```

## 加载错误

- 样式`erro`

```html
<view class="cu-load bg-red erro"></view>
```

## 弹框加载

- 可设置背景图

```html
<view class='cu-load load-modal' wx:if="{{loadModal}}">
  <image src='/images/logo.png' class='png' mode='aspectFit'></image>
  <view class='gray-text'>加载中...</view>
</view>
```

## 顶部进度条加载

- 仿微信公众号文章顶部加载动画

```html
<view class='load-progress {{loadProgress!=0?"show":"hide"}}' style="top:{{CustomBar}}px;">
  <view class='load-progress-bar bg-green' style="transform: translate3d(-{{loadProgressPer}}, 0px, 0px);"></view>
  <view class='load-progress-spinner text-green'></view>
</view>
```