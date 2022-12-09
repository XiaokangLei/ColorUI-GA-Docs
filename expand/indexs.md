<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:56:12
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 15:52:13
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/plugin/indexes/indexes" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 索引列表Indexs

***代码位置：`/pages/index/plugin/indexes/indexes.wxml`***

## 列表

```html
<scroll-view scroll-y class="indexes" scroll-into-view="indexes-{{listCurID}}" style="height:calc(100vh - {{CustomBar}}px - 50px)" scroll-with-animation="true" enable-back-to-top="true">
  <block wx:for="{{list}}" wx:key="item">
    <view class="padding indexItem-{{list[index]}}" id="indexes-{{list[index]}}" data-index="{{list[index]}}">{{list[index]}}</view>
    <view class="cu-list menu-avatar no-padding">
      <view class="cu-item" wx:for="{{2}}" wx:key="item" wx:for-index="sub">
        <view class="cu-avatar round lg">{{list[index]}}</view>
        <view class="content">
          <view class="text-grey">{{list[index]}}
            <text class="text-abc">{{list[sub]}}</text>君
          </view>
          <view class="text-gray text-sm">
            有{{sub+2}}个主子需要伺候
          </view>
        </view>
      </view>
    </view>
  </block>
</scroll-view>
```

## 右侧快速导航栏

```html
<view class="indexBar" style="height:calc(100vh - {{CustomBar}}px - 50px)">
  <view class="indexBar-box" bindtouchstart="tStart" bindtouchend="tEnd" catchtouchmove="tMove">
    <view class="indexBar-item" wx:for="{{list}}" wx:key="item" id="{{index}}" bindtouchstart="getCur" bindtouchend="setCur">{{list[index]}}</view>
  </view>
</view>

<!--选择显示-->
<view hidden="{{hidden}}" class="indexToast">
  {{listCur}}
</view>
```
