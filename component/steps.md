<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:54:49
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-08 16:58:24
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/component/steps/steps" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 步骤条Steps

***代码位置：`/pages/index/component/steps/steps.wxml`***

## 步骤条样式

```html
<view class="cu-bar bg-white solid-bottom">
  <view class="action">
    <text class="cuIcon-titles text-blue"></text> 基本用法
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="basicsSteps">下一步</button>
  </view>
</view>
<view class="bg-white padding">
  <view class="cu-steps">
    <view class="cu-item {{index>basics?'':'text-red'}}" wx:for="{{basicsList}}" wx:key="item">
      <text class="cuIcon-{{item.icon}}"></text> {{item.name}}
    </view>
  </view>
</view>
<view class="bg-white padding margin-top-xs">
  <view class="cu-steps">
    <view class="cu-item {{index>basics?'':'text-orange'}}" wx:for="{{basicsList}}" wx:key="item">
      <text class="cuIcon-{{index>basics?'title':item.icon}}"></text> {{item.name}}
    </view>
  </view>
</view>
<view class="bg-white padding  margin-top-xs">
  <view class="cu-steps steps-arrow">
    <view class="cu-item {{index>basics?'':'text-blue'}}" wx:for="{{basicsList}}" wx:key="item">
      <text class="cuIcon-{{item.icon}}"></text> {{item.name}}
    </view>
  </view>
</view>
<view class="cu-bar bg-white solid-bottom margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue"></text> 数字完成
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="numSteps">下一步</button>
  </view>
</view>
<view class="bg-white padding">
  <view class="cu-steps">
    <view class="cu-item {{index>num?'':'text-blue'}}" wx:for="{{numList}}" wx:key="item">
      <text class="num {{index==2?'err':''}}" data-index="{{index + 1}}"></text> {{item.name}}
    </view>
  </view>
</view>
<view class="cu-bar bg-white solid-bottom margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue"></text> 多级显示
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="scrollSteps">下一步</button>
  </view>
</view>
<scroll-view scroll-x class="bg-white padding response cu-steps steps-bottom" scroll-into-view="scroll-{{scroll}}" scroll-with-animation>
  <view class="cu-item {{index>scroll?'':'text-blue'}} padding-lr-xl" wx:for="{{10}}" wx:key="item" id="scroll-{{index}}">
    Level {{index + 1}} <text class="num" data-index="{{index + 1}}"></text>
  </view>
</scroll-view>
```
