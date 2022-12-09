<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:59:35
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 15:52:57
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/plugin/verticalnav/verticalnav" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 垂直导航Verticalnav

***代码位置：`/pages/index/plugin/verticalnav/verticalnav.wxml`***

## 基本样式

```html
<view class="VerticalBox">
  <scroll-view class="VerticalNav nav cu-timeline" scroll-y scroll-with-animation scroll-top="{{VerticalNavTop}}" style="height:calc(100vh - 375rpx)">
    <view class="cu-item {{index==TabCur?'text-green cur':''}}" wx:for="{{list}}" wx:key="item" bindtap='tabSelect' data-id="{{index}}">
      Tab-{{item.name}}
    </view>
  </scroll-view>
  <scroll-view class="VerticalMain" scroll-y scroll-with-animation style="height:calc(100vh - 375rpx)" scroll-into-view="main-{{MainCur}}" bindscroll="VerticalMain">
    <view class="padding-top padding-lr" wx:for="{{list}}" wx:key="item" id="main-{{index}}">
      <view class='cu-bar solid-bottom bg-white'>
        <view class='action'>
          <text class='cuIcon-title text-green'></text> Tab-{{item.name}}
        </view>
      </view>
      <view class="cu-list menu-avatar">
        <view class="cu-item">
          <view class="cu-avatar round lg" style="background-image:url(https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW);"></view>
          <view class="content">
            <view class="text-grey">格鲁</view>
            <view class="text-gray text-sm flex">
              <text class="text-cut">
                <text class="cuIcon-infofill text-red  margin-right-xs"></text> 我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
              </text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cu-tag round bg-grey sm">5</view>
          </view>
        </view>
        <view class="cu-item">
          <view class="cu-avatar round lg" style="background-image:url(https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx);">
            <view class="cu-tag badge">99+</view>
          </view>
          <view class="content">
            <view class="text-grey">
              <text class="text-cut">马克</text>
              <view class="cu-tag round bg-orange sm">战士</view>
            </view>
            <view class="text-gray text-sm flex">
              <text class="text-cut">
                塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
              </text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cuIcon-notice_forbid_fill text-gray"></view>
          </view>
        </view>
        <view class="cu-item ">
          <view class="cu-avatar radius lg" style="background-image:url(https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc);"></view>
          <view class="content">
            <view class="text-pink">
              <text class="text-cut">斯图尔特</text>
            </view>
            <view class="text-gray text-sm flex">
              <text class="text-cut">格鲁，你被自己的光芒变的盲目！</text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cu-tag round bg-red sm">5</view>
          </view>
        </view>
        <view class="cu-item grayscale">
          <view class="cu-avatar radius lg" style="background-image:url(https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3);"></view>
          <view class="content">
            <view>
              <text class="text-cut">蒂姆</text>
              <view class="cu-tag round bg-orange sm">断开连接...</view>
            </view>
            <view class="text-gray text-sm flex">
              <text class="text-cut"> 等我回来一个打十个</text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cu-tag round bg-red sm">5</view>
          </view>
        </view>
        <view class="cu-item cur">
          <view class="cu-avatar radius lg" style="background-image:url(https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R);">
            <view class="cu-tag badge"></view>
          </view>
          <view class="content">
            <view>
              <text class="text-cut">鲍勃</text>
              <view class="cu-tag round bg-orange sm">6人</view>
            </view>
            <view class="text-gray text-sm flex">
              <text class="text-cut"> 蒂姆：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</text>
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cuIcon-notice_forbid_fill text-gray"></view>
          </view>
        </view>
      </view>

    </view>
  </scroll-view>
</view>
```
