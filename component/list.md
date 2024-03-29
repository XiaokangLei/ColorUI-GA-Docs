<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:46:25
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:04:56
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/component/list/list" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 列表List

***示例代码：`/pages/index/component/list/list.wxml`***

## 宫格列表

- `gridCol`设置列数，`gridBorder`设置是否有边框

```html
<view class="cu-list grid col-{{gridCol}} {{gridBorder?'':'no-border'}}">
  <view class="cu-item" wx:for="{{iconList}}" wx:key="item" wx:if="{{index<gridCol*2}}">
    <view class="cuIcon-{{item.icon}} text-{{item.color}}">
      <view class="cu-tag badge" wx:if="{{item.badge!=0}}">
        <block wx:if="{{item.badge!=1}}">{{item.badge>99?"99+":item.badge}}</block>
      </view>
    </view>
    <text>{{item.name}}</text>
  </view>
</view>
```

## 菜单列表

- `sm-border`设置短边框、`card-menu`设置卡片类型

```html
<view class="cu-list menu {{menuBorder?'sm-border':''}} {{menuCard?'card-menu margin-top':''}}">
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <text class="cuIcon-circlefill text-grey"></text>
      <text class="text-grey">图标 + 标题</text>
    </view>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <image src="/images/logo.png" class="png" mode="aspectFit"></image>
      <text class="text-grey">图片 + 标题</text>
    </view>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <button class="cu-btn content" open-type="contact">
      <text class="cuIcon-btn text-olive"></text>
      <text class="text-grey">Open-type 按钮</text>
    </button>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
      <text class="cuIcon-discoverfill text-orange"></text>
      <text class="text-grey">Navigator 跳转</text>
    </navigator>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <text class="cuIcon-emojiflashfill text-pink"></text>
      <text class="text-grey">头像组</text>
    </view>
    <view class="action">
      <view class="cu-avatar-group">
        <view class="cu-avatar round sm" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
        <view class="cu-avatar round sm" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
        <view class="cu-avatar round sm" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
        <view class="cu-avatar round sm" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
      </view>
      <text class="text-grey text-sm">4 人</text>
    </view>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <text class="cuIcon-btn text-green"></text>
      <text class="text-grey">按钮</text>
    </view>
    <view class="action">
      <button class="cu-btn round bg-green shadow">
        <text class="cuIcon-upload"></text> 上传</button>
    </view>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <text class="cuIcon-tagfill text-red"></text>
      <text class="text-grey">标签</text>
    </view>
    <view class="action">
      <view class="cu-tag round bg-orange light">音乐</view>
      <view class="cu-tag round bg-olive light">电影</view>
      <view class="cu-tag round bg-blue light">旅行</view>
    </view>
  </view>
  <view class="cu-item {{menuArrow?'arrow':''}}">
    <view class="content">
      <text class="cuIcon-warn text-green"></text>
      <text class="text-grey">文本</text>
    </view>
    <view class="action">
      <text class="text-grey text-sm">小目标还没有实现！</text>
    </view>
  </view>
  <view class="cu-item">
    <view class="content padding-tb-sm">
      <view>
        <text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 多行Item
      </view>
      <view class="text-gray text-sm">
        <text class="cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！
      </view>
    </view>
    <view class="action">
      <switch class="switch-sex sm" bindchange="switchSex"></switch>
    </view>
  </view>
</view>
```

## 消息列表

```html
<view class="cu-list menu-avatar">
  <view class="cu-item">
    <view class="cu-avatar round lg" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
    <view class="content">
      <view class="text-grey">凯尔</view>
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
    <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
      <view class="cu-tag badge">99+</view>
    </view>
    <view class="content">
      <view class="text-grey">
        <text class="text-cut">瓦洛兰之盾-塔里克</text>
        <view class="cu-tag round bg-orange sm">战士</view>
      </view>
      <view class="text-gray text-sm flex">
        <text class="text-cut">塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。</text>
      </view>
    </view>
    <view class="action">
      <view class="text-grey text-xs">22:20</view>
      <view class="cuIcon-notice_forbid_fill text-gray"></view>
    </view>
  </view>
  <view class="cu-item ">
    <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
    <view class="content">
      <view class="text-pink">
        <text class="text-cut">莫甘娜</text>
      </view>
      <view class="text-gray text-sm flex">
        <text class="text-cut">凯尔，你被自己的光芒变的盲目！</text>
      </view>
    </view>
    <view class="action">
      <view class="text-grey text-xs">22:20</view>
      <view class="cu-tag round bg-red sm">5</view>
    </view>
  </view>
  <view class="cu-item grayscale">
    <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
    <view class="content">
      <view>
        <text class="text-cut">伊泽瑞尔</text>
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
    <view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
      <view class="cu-tag badge"></view>
    </view>
    <view class="content">
      <view>
        <text class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</text>
        <view class="cu-tag round bg-orange sm">6人</view>
      </view>
      <view class="text-gray text-sm flex">
        <text class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</text>
      </view>
    </view>
    <view class="action">
      <view class="text-grey text-xs">22:20</view>
      <view class="cuIcon-notice_forbid_fill text-gray"></view>
    </view>
  </view>
</view>
```

## 列表左滑

- 左滑设置事件

```html
<view class="cu-list menu-avatar">
  <view class="cu-item {{modalName=='move-box-'+ index?'move-cur':''}}" wx:for="{{4}}" wx:key="item" bindtouchstart="ListTouchStart" bindtouchmove="ListTouchMove" bindtouchend="ListTouchEnd" data-target="move-box-{{index}}">
    <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100{{index+1}}.jpg);"></view>
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
    <view class="move">
      <view class="bg-grey">置顶</view>
      <view class="bg-red">删除</view>
    </view>
  </view>
</view>
```

<br>


