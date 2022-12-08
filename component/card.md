<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:48:03
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-08 16:38:22
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/component/card/card" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 卡片Card

***代码位置：`/pages/index/component/card/card.wxml`***

## 案例类卡片

- 适合新闻、文章、博客等带有图片的内容封面，包括卡片类和非卡片类样式

```html
<view class="cu-card case {{isCard?'no-card':'margin'}}">
  <view class="cu-item shadow">
    <view class="image">
      <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="widthFix"></image>
      <view class="cu-tag bg-blue">史诗</view>
      <view class="cu-bar bg-shadeBottom">
        <text class="text-cut">我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。</text>
      </view>
    </view>
    <view class="cu-list menu-avatar">
      <view class="cu-item">
        <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
        <view class="content flex-sub">
          <view class="text-grey">正义天使 凯尔</view>
          <view class="text-gray text-sm flex justify-between">
            十天前
            <view class="text-gray text-sm">
              <text class="cuIcon-attentionfill margin-lr-xs"></text> 10
              <text class="cuIcon-appreciatefill margin-lr-xs"></text> 20
              <text class="cuIcon-messagefill margin-lr-xs"></text> 30
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
```

## 动态类卡片

- 增加显示概要和评论

```html
<view class="cu-card article {{isCard?'no-card':'margin'}}">
  <view class="cu-item shadow">
    <view class="title">
      <view class="text-cut">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</view>
    </view>
    <view class="content">
      <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
      <view class="desc">
        <view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</view>
        <view>
          <view class="cu-tag bg-red light sm round">正义天使</view>
          <view class="cu-tag bg-green light sm round">史诗</view>
        </view>
      </view>
    </view>
  </view>
</view>
```