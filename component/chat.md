<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:51:33
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-15 20:05:14
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/plugin/chat/chat" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 聊天框Chat

***示例代码：`/pages/index/component/chat/chat.wxml`***

## 基本样式

```html
<view class="cu-chat">
  <view class="cu-item self">
    <view class="main">
      <view class="content bg-green shadow">
        <text>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</text>
      </view>
    </view>
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
    <view class="date">2018年3月23日 13:23</view>
  </view>
  <view class="cu-info round">对方撤回一条消息!</view>
  <view class="cu-item">
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
    <view class="main">
      <view class="content shadow">
        <text>喵喵喵！喵喵喵！</text>
      </view>
    </view>
    <view class="date "> 13:23</view>
  </view>
  <view class="cu-info">
    <text class="cuIcon-roundclosefill text-red "></text> 对方拒绝了你的消息
  </view>
  <view class="cu-info">
    对方开启了好友验证，你还不是他(她)的好友。请先发送好友验证请求，对方验证通过后，才能聊天。
    <text class="text-blue">发送好友验证</text>
  </view>
  <view class="cu-item self">
    <view class="main">
      <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" class="radius" mode="widthFix"></image>
    </view>
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
    <view class="date"> 13:23</view>
  </view>
  <view class="cu-item self">
    <view class="main">
      <view class="action text-bold text-grey">
        3"
      </view>
      <view class="content shadow">
        <text class="cuIcon-sound text-xxl padding-right-xl"> </text>
      </view>
    </view>
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
    <view class="date">13:23</view>
  </view>
  <view class="cu-item self">
    <view class="main">
      <view class="action">
        <text class="cuIcon-locationfill text-orange text-xxl"></text>
      </view>
      <view class="content shadow">
        喵星球，喵喵市
      </view>
    </view>
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></view>
    <view class="date">13:23</view>
  </view>
  <view class="cu-item">
    <view class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);"></view>
    <view class="main">
      <view class="content shadow">
        @#$^&**
      </view>
      <view class="action text-grey">
        <text class="cuIcon-warnfill text-red text-xxl"></text> <text class="text-sm margin-left-sm">翻译错误</text>
      </view>
    </view>
    <view class="date">13:23</view>
  </view>
</view>
<view class="cu-bar foot input {{InputBottom!=0?'cur':''}}" style="bottom:{{InputBottom}}px">
  <view class="action">
    <text class="cuIcon-sound text-grey"></text>
  </view>
  <input class="solid-bottom" bindfocus="InputFocus" bindblur="InputBlur" adjust-position="{{false}}" focus="{{false}}" maxlength="300" cursor-spacing="10"></input>
  <view class="action">
    <text class="cuIcon-emojifill text-grey"></text>
  </view>
  <button class="cu-btn bg-green shadow">发送</button>
</view>
```

<br>


