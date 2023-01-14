<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-15 20:18:41
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:46:39
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/checkbox/checkbox" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🎚️复选框Checkbox

***示例代码：`/pages/index/basics/checkbox/checkbox.wxml`***[GitHub链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/checkbox/checkbox.wxml)

**【注意】H5预览样式与实际小程序样式有差异，请预览小程序查看实际样式**

## 单选

- 只能选中一个，在`radio-group`内多个单选只能选中一个

### 基础样式

```html
<radio-group class="block margin-xs">
  <view class="cu-form-group">
    <radio checked></radio>
  </view>
  <view class="cu-form-group">
    <radio></radio>
  </view>
</radio-group>
```

### 形状

```html
<radio-group class="block margin-xs">
  <view class="cu-form-group">
    <radio class="radio"></radio>
  </view>
</radio-group>
```

### 颜色

```html
<radio-group class="block margin-xs">
  <view class="cu-form-group">
    <radio class="radio blue"></radio>
  </view>
</radio-group>
```

### 大小

```html
<radio-group class="block margin-xs">
  <view class="cu-form-group">
    <radio class="radio blue" style="transform: scale(0.5,0.5);"></radio>
    <radio class="radio blue" style="transform: scale(0.8,0.8);"></radio>
  </view>
</radio-group>
```

## 多选

- 基本形状、颜色、大小样式参数与单选一致

```html
<view class="bg-white">
  <view class="margin-xs">
    <view class="cu-form-group">
      <view class="title">复选(checkbox)</view>
      <checkbox></checkbox>
    </view>
    <view class="cu-form-group">
      <view class="title">定义形状</view>
      <checkbox class="round" checked></checkbox>
    </view>
    <view class="cu-form-group">
      <view class="title">定义颜色</view>
      <checkbox class="round blue" checked></checkbox>
    </view>
    <view class="cu-form-group">
      <view class="title">定义大小</view>
      <view>
        <checkbox class="red margin-left-sm" style="transform: scale(0.5,0.5);"></checkbox>
        <checkbox class="red margin-left-sm" style="transform: scale(0.7,0.7);"></checkbox>
      </view>
    </view>
  </view>
</view>
```

### 多选框颜色

```html
<view class="cu-form-group">
  <checkbox class="orange"></checkbox>
  <checkbox class="green"></checkbox>
  <checkbox class="blue"></checkbox>
  <checkbox class="yellow"></checkbox>
  <checkbox class="pink"></checkbox>
  <checkbox class="purple"></checkbox>
  <checkbox class="red"></checkbox>
</view>
```
