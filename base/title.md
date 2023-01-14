<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-15 20:16:33
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:32:59
-->
<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/title/title" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# ☂️标题Title

***示例代码：`/pages/index/basics/title/title.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/title/title.wxml)

## 标题样式

- 7种基本标题样式

```html
<view class="cu-bar">
  <view class="action border-title">
    <text class="text-xl text-bold">示例标题1</text>
    <text class="bg-grey" style="width:2rem"></text>
  </view>
</view>
<view class="cu-bar">
  <view class="action border-title">
    <text class="text-xl text-bold text-blue">示例标题2</text>
    <text class="bg-gradual-blue" style="width:3rem"></text>
  </view>
</view>
<view class="cu-bar">
  <view class="action sub-title">
    <text class="text-xl text-bold text-green">示例标题3</text>
    <text class="bg-green"></text>
  </view>
</view>
<view class="cu-bar">
  <view class="action sub-title">
    <text class="text-xl text-bold text-blue">示例标题4</text>
    <text class="text-ABC text-blue">about</text>
  </view>
</view>
<view class="cu-bar">
  <view class="action">
    <text class="text-xl text-bold">示例标题5</text>
    <text class="text-Abc text-gray self-end margin-left-sm">about</text>
  </view>
</view>
<view class="cu-bar">
  <view class="action">
    <text class="cuIcon-titles text-blue"></text>
    <text class="text-xl text-bold">示例标题6</text>
  </view>
</view>
<view class="cu-bar">
  <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-xl text-bold">示例标题7</text>
  </view>
</view>
```

## 标题级别

- 依照字体大小可自行确定标题级别

```html
<view class="cu-bar">
  <view class="action">
    <text class="cuIcon-title text-blue"></text>
    <text class="text-xl text-bold">示例标题7</text>
  </view>
</view>
```

## 标题居中

- 依据flex布局实现标题居中样式

```html
<view class="margin-sm radius-lg bg-white">
  <view class="cu-bar radius-lg-top flex justify-center">
    <view class="action border-title">
      <text class="text-xl text-bold">示例标题1</text>
      <text class="bg-grey" style="width:2rem"></text>
    </view>
  </view>
  <view class="cu-bar flex justify-center">
    <view class="action border-title">
      <text class="text-xl text-bold text-blue">示例标题2</text>
      <text class="bg-gradual-blue" style="width:3rem"></text>
    </view>
  </view>
  <view class="cu-bar flex justify-center">
    <view class="action sub-title">
      <text class="text-xl text-bold text-green">示例标题3</text>
      <text class="bg-green"></text>
    </view>
  </view>
</view>
```
