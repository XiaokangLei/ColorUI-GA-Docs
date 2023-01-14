<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:44:47
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:54:38
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/component/nav/nav" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 📰导航栏Nav

***示例代码：`/pages/index/component/nav/nav.wxml`***

## 默认导航栏样式

```html
<scroll-view scroll-x class="bg-white nav" scroll-with-animation scroll-left="{{scrollLeft}}">
  <view class="cu-item {{index==TabCur?'text-blue cur':''}}" wx:for="{{10}}" wx:key="index" bindtap="tabSelect" data-id="{{index}}">
    Tab{{index}}
  </view>
</scroll-view>
```

## 居中导航栏样式

- 文字居中

```html
<scroll-view scroll-x class="bg-white nav text-center">
  <view class="cu-item {{index==TabCur?'text-blue cur':''}}" wx:for="{{3}}" wx:key="index" bindtap="tabSelect" data-id="{{index}}">
    Tab{{index}}
  </view>
</scroll-view>
```

## 平分导航栏样式

- 文字平分宽度

```html
<scroll-view scroll-x class="bg-white nav">
  <view class="flex text-center">
    <view class="cu-item flex-sub {{index==TabCur?'text-blue cur':''}}" wx:for="{{4}}" wx:key="index" bindtap="tabSelect" data-id="{{index}}">
      Tab{{index}}
    </view>
  </view>
</scroll-view>
```

## 背景

- 可设置不同背景

```html
<scroll-view scroll-x class="bg-red nav text-center">
  <view class="cu-item {{index==TabCur?'text-white cur':''}}" wx:for="{{3}}" wx:key="index" bindtap="tabSelect" data-id="{{index}}">
    Tab{{index}}
  </view>
</scroll-view>
```

## 图标导航栏

- 带有图标与文字

```html
<scroll-view scroll-x class="bg-blue nav text-center">
  <view class="cu-item {{0==TabCur?'text-white cur':''}}" bindtap="tabSelect" data-id="0">
    <text class="cuIcon-camerafill"></text> 数码
  </view>
  <view class="cu-item {{1==TabCur?'text-white cur':''}}" bindtap="tabSelect" data-id="1">
    <text class="cuIcon-upstagefill"></text> 排行榜
  </view>
  <view class="cu-item {{2==TabCur?'text-white cur':''}}" bindtap="tabSelect" data-id="2">
    <text class="cuIcon-clothesfill"></text> 皮肤
  </view>
</scroll-view>
```
