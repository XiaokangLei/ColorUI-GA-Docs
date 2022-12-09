<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:50:09
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:05:20
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/component/timeline/timeline" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 时间轴Timeline

***代码位置：`/pages/index/component/timeline/timeline.wxml`***

## 基本轴样式

```html
<view class="cu-timeline">
  <view class="cu-time">昨天</view>
  <view class="cu-item cur cuIcon-noticefill">
    <view class="content bg-green shadow-blur">
      <text>22:22</text> 【广州市】快件已到达地球
    </view>
  </view>
  <view class="cu-item text-red cuIcon-attentionforbidfill">
    <view class="content bg-red shadow-blur">
      这是第一次，我家的铲屎官走了这么久。久到足足有三天！！
    </view>
  </view>
  <view class="cu-item text-grey cuIcon-evaluate_fill">
    <view class="content bg-grey shadow-blur">
      这是第一次，我家的铲屎官走了这么久。
    </view>
  </view>
  <view class="cu-item text-blue">
    <view class="bg-blue content">
      <text>20:00</text> 【月球】快件已到达月球，准备发往地球
    </view>
    <view class="bg-cyan content">
      <text>10:00</text> 【银河系】快件已到达银河系，准备发往月球
    </view>
  </view>
</view>
```

## 其他样式

```html
<view class="cu-timeline">
  <view class="cu-time">06-17</view>
  <view class="cu-item">
    <view class="content">
      <text>01:30</text> 【喵星】 MX-12138 已揽收，准备发往银河系
    </view>
  </view>
</view>
<view class="cu-timeline">
  <view class="cu-time">06-17</view>
  <view class="cu-item">
    <view class="content">
      <view class="cu-capsule radius">
        <view class="cu-tag bg-cyan">上午</view>
        <view class="cu-tag line-cyan">10:00</view>
      </view>
      <view class="margin-top">这是第一次，我家的铲屎官走了这么久。久到足足有三天！！ 在听到他的脚步声响在楼梯间的那一刻，我简直想要破门而出，对着他狠狠地吼上10分钟，然后再看心情要不要他进门。</view>
    </view>
  </view>
  <view class="cu-item text-blue">
    <view class="bg-blue shadow-blur content">
      <view class="cu-list menu-avatar radius">
        <view class="cu-item">
          <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
          <view class="content">
            <view class="text-grey">小黄人</view>
            <view class="text-gray text-sm">
              <text class="cuIcon-infofill text-red"></text> 消息未送达
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <view class="cu-tag round bg-grey sm">5</view>
          </view>
        </view>
        <view class="cu-item">
          <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);">
            <view class="cu-tag badge">99+</view>
          </view>
          <view class="content">
            <view class="text-grey">小黄人
              <view class="cu-tag round orange sm">SVIP</view>
            </view>
            <view class="text-gray text-sm">
              <text class="cuIcon-redpacket_fill text-red"></text> 收到红包
            </view>
          </view>
          <view class="action">
            <view class="text-grey text-xs">22:20</view>
            <text class="cuIcon-notice_forbid_fill text-gray"></text>
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
```

<br>

本文总阅读量：<span id="busuanzi_value_page_pv"></span> 次
