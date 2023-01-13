<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-30 15:17:24
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 10:48:31
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/button/button" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🎛️按钮Button

***示例代码：`/pages/index/basics/button/button.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/button/button.wxml)

## 形状

```html
<button class="cu-btn">默认</button>
<button class="cu-btn round">圆角</button>
<button class="cu-btn icon">
  <text class="cuIcon-emojifill text-blue"></text>
</button>
```

## 大小

```html
<button class="cu-btn round sm">小尺寸</button>
<button class="cu-btn round">默认</button>
<button class="cu-btn round lg">大尺寸</button>
<button class="cu-btn round lg">超大尺寸</button>
```

## 颜色/阴影

- 颜色同【背景】颜色，阴影样式为shadow，需要搭配bg-{{color}}

```html
<view class="">
  <button class="cu-btn round bg-red shadow">按钮阴影</button>
</view>
```

## 镂空

- 边框颜色同【背景】颜色，边框粗细，粗边框样式为 `lines`

```html
<view class="">
  <button class="cu-btn round line-red shadow">细边框</button>
  <button class="cu-btn round lines-red shadow">细边框</button>
</view>
```

## 块状按钮

```html
<button class="cu-btn bg-grey lg">玄灰</button>
<button class="cu-btn bg-red lg">嫣红</button>
```

## 无效状态

```html
<button class="cu-btn block bg-blue lg" disabled type="">无效状态</button>
<button class="cu-btn block line-blue lg" disabled>无效状态</button>
```

## 按钮加图标

```html
<button class="cu-btn block line-orange lg">
  <text class="cuIcon-upload"></text> 图标</button>
<button class="cu-btn block bg-blue lg">
  <text class="cuIcon-loading2 iconfont-spin"></text> 加载</button>
<button class="cu-btn block bg-black lg" loading> 微信加载</button>
```
