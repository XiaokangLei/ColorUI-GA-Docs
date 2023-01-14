<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-15 20:17:55
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:33:21
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/switch/switch" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🎛️开关Switch

***示例代码：`/pages/index/basics/switch/switch.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/switch/switch.wxml)

**【注意】H5预览样式与实际小程序样式有差异，请预览小程序查看实际样式**

## 基本样式

```html
<view class="cu-form-group radius-lg-top">
    <view class="title">未启用</view>
    <switch></switch>
</view>
<view class="cu-form-group">
    <view class="title">已启用</view>
    <switch checked></switch>
</view>
<view class="cu-form-group">
    <view class="title">禁用-默认未启用</view>
    <switch disabled></switch>
</view>
<view class="cu-form-group radius-lg-bottom">
    <view class="title">禁用-默认已启用</view>
    <switch checked disabled></switch>
</view>
```

## 自定义颜色/图标/形状

```html
<view class="cu-form-group margin-top radius-lg-top">
    <view class="title">定义颜色</view>
    <switch class="red" checked></switch>
    <switch class="blue" checked></switch>
</view>
<view class="cu-form-group">
    <view class="title">定义图标</view>
    <switch class="switch-sex" checked></switch>
    <switch class="switch-music" checked></switch>
</view>
<view class="cu-form-group radius-lg-bottom">
    <view class="title">方形开关</view>
    <switch class="orange radius" checked></switch>
</view>
```

## 扩展样式

- 蛋黄派开关样式请参考`colorui/main.wxss`中的css样式及js代码

```html
<view class="flex justify-center margin-sm bg-white padding-sm radius-df">
  <view catchtap="eggClick">
    <egg-input id="egg-toggle" type="checkbox" />
    <egg-label for="egg-toggle">
      <span id="egg" wx:if="{{ischecked==undefined}}"></span>
      <span id="egg" wx:else class="{{ischecked?'egg-flip':'unegg-flip'}}"></span>
    </egg-label>
  </view>
</view>
```
