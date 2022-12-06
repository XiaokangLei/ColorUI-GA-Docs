<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-30 15:17:24
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-06 18:22:26
-->

<div style="width:320px; height:680px; float:right; position:fixed; right:3%;top: 40px;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/basics/button/button" width="320" height="680" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 按钮Button

***代码位置：`/pages/index/basics/button/button.wxml`***

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

- 颜色同【背景】颜色，阴影样式为shadow

```html
<view class="margin-tb-sm text-center" wx:for="{{ColorList}}" wx:key="item">
  <button class="cu-btn round bg-{{item.name}} {{shadow?'shadow':''}}">{{item.title}}</button>
</view>
```

## 镂空

- 边框颜色同【背景】颜色，边框粗细，【粗】样式为 `s`

```html
<view class="margin-tb-sm text-center" wx:for="{{ColorList}}" wx:key="item" wx:if="{{item.name!='white'}}">
  <button class="cu-btn round line{{bordersize?bordersize:''}}-{{item.name}} {{shadow?'shadow':''}}">{{item.title}}</button>
</view>
```

## 块状按钮

```html
<button class="cu-btn bg-grey lg">玄灰</button>
<button class="cu-btn bg-red margin-tb-sm lg">嫣红</button>
```

## 无效状态

```html
<button class="cu-btn block bg-blue margin-tb-sm lg" disabled type="">无效状态</button>
<button class="cu-btn block line-blue margin-tb-sm lg" disabled>无效状态</button>
```

## 按钮加图标

```html
<button class="cu-btn block line-orange lg">
  <text class="cuIcon-upload"></text> 图标</button>
<button class="cu-btn block bg-blue margin-tb-sm lg">
  <text class="cuIcon-loading2 iconfont-spin"></text> 加载</button>
<button class="cu-btn block bg-black margin-tb-sm lg" loading> 微信加载</button>
```
