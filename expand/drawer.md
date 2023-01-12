<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:58:24
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:05:32
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/plugin/drawer/drawer" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 全屏抽屉

***样式代码：`/pages/index/plugin/drawer/drawer.wxml`***

## 基本样式

```html
<view class='padding margin text-center'>
    <view class='cu-btn bg-green lg block shadow radius margin-xl' bindtap="showModal" data-target="viewModal">
      打开抽屉
    </view>
  </view>

  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
    <view class="cu-item arrow" wx:for="{{20}}" wx:key="index">
      <view class="content">
        <text class="cuIcon-github text-grey"></text>
        <text class="text-grey">{{index +1}}</text>
      </view>
    </view>
  </view>

  <view class='padding margin text-center'>
    <view class='cu-btn bg-green lg block shadow radius margin-xl' bindtap="showModal" data-target="viewModal">
      打开抽屉
    </view>
  </view>

</scroll-view>

<view class="DrawerClose {{modalName=='viewModal'?'show':''}}" bindtap="hideModal">
  <text class="cuIcon-pullright"></text>
</view>

<scroll-view scroll-y class="DrawerWindow {{modalName=='viewModal'?'show':''}}">
  <view class="cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg">
    <view class="cu-item arrow" wx:for="{{20}}" wx:key="index">
      <view class="content">
        <text class="cuIcon-github text-grey"></text>
        <text class="text-grey">{{index +1}}</text>
      </view>
    </view>
  </view>
</scroll-view>
```

<br>


