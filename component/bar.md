<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:43:07
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 16:54:47
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/component/bar/bar" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 🪧操作条Bar

***示例代码：`/pages/index/component/bar/bar.wxml`***[GitHub链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/component/bar/bar.wxml)

## 顶部操作条

- 页面顶部样式

```html
<view class="cu-bar bg-white">
  <view class="action">
    <text class="cuIcon-back text-gray"></text> 返回
  </view>
  <view class="content text-bold">
    操作条
  </view>
</view>
<view class="cu-bar bg-white">
  <view class="action">
    <text class="cuIcon-homefill text-gray"></text> 首页
  </view>
  <view class="content text-bold">
    鲜亮的高饱和色彩，专注视觉的小程序组件库
  </view>
  <view class="action">
    <text class="cuIcon-cardboardfill text-grey"></text>
    <text class="cuIcon-recordfill text-red"></text>
  </view>
</view>
<view class="cu-bar bg-blue">
  <view class="action">
    <text class="cuIcon-close"></text> 关闭
  </view>
  <view class="content text-bold">
    海蓝
  </view>
</view>
<view class="cu-bar bg-blue light search">
  <view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
  <view class="content">
    ColorUI-GA
  </view>
  <view class="action">
    <text class="cuIcon-more"></text>
  </view>
</view>
```

## 搜索操作条

- 带有搜索的顶部操作条

```html
<view class="cu-bar search bg-white">
  <view class="search-form round">
    <text class="cuIcon-search"></text>
    <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow-blur round">搜索</button>
  </view>
</view>
<view class="cu-bar search bg-white">
  <view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
  <view class="search-form round">
    <text class="cuIcon-search"></text>
    <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
  </view>
  <view class="action">
    <text>广州</text>
    <text class="cuIcon-triangledownfill"></text>
  </view>
</view>
<view class="cu-bar bg-red search">
  <view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
  <view class="search-form radius">
    <text class="cuIcon-search"></text>
    <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
  </view>
  <view class="action">
    <text>广州</text>
    <text class="cuIcon-triangledownfill"></text>
  </view>
</view>
<view class="cu-bar bg-cyan search">
  <view class="search-form radius">
    <text class="cuIcon-search"></text>
    <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
  </view>
  <view class="action">
    <text class="cuIcon-close"></text>
    <text>取消</text>
  </view>
</view>
```

## 底部操作条

- 底部分类栏操作条

```html
<view class="cu-bar tabbar bg-white">
  <view class="action">
    <view class="cuIcon-cu-image">
      <image src="/images/tabbar/basics_cur.png"></image>
    </view>
    <view class="text-blue">主页</view>
  </view>
  <view class="action">
    <view class="cuIcon-cu-image">
      <image src="/images/tabbar/component.png"></image>
      <view class="cu-tag badge">99</view>
    </view>
    <view class="text-gray">设计</view>
  </view>
  <view class="action">
    <view class="cuIcon-cu-image">
      <image src="/images/tabbar/about.png"></image>
      <view class="cu-tag badge"></view>
    </view>
    <view class="text-gray">关于</view>
  </view>
</view>
<view class="cu-bar tabbar margin-bottom-xl bg-black">
  <view class="action text-orange">
    <view class="cuIcon-homefill"></view> 首页
  </view>
  <view class="action text-gray">
    <view class="cuIcon-similar"></view> 分类
  </view>
  <view class="action text-gray">
    <view class="cuIcon-recharge"></view>
    积分
  </view>
  <view class="action text-gray">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="action text-gray">
    <view class="cuIcon-my">
      <view class="cu-tag badge"></view>
    </view>
    我的
  </view>
</view>
<view class="cu-bar tabbar margin-bottom-xl bg-white">
  <view class="action text-green">
    <view class="cuIcon-homefill"></view> 首页
  </view>
  <view class="action text-gray">
    <view class="cuIcon-similar"></view> 分类
  </view>
  <view class="action text-gray add-action">
    <button class="cu-btn cuIcon-add bg-green shadow"></button>
    发布
  </view>
  <view class="action text-gray">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="action text-gray">
    <view class="cuIcon-my">
      <view class="cu-tag badge"></view>
    </view>
    我的
  </view>
</view>
<view class="cu-bar tabbar bg-black">
  <view class="action text-green">
    <view class="cuIcon-homefill"></view> 首页
  </view>
  <view class="action text-gray">
    <view class="cuIcon-similar"></view> 分类
  </view>
  <view class="action text-gray add-action">
    <button class="cu-btn cuIcon-add bg-green shadow"></button>
    发布
  </view>
  <view class="action text-gray">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="action text-gray">
    <view class="cuIcon-my">
      <view class="cu-tag badge"></view>
    </view>
    我的
  </view>
</view>
<view class="cu-bar bg-white tabbar border shop">
  <button class="action" open-type="contact">
    <view class="cuIcon-service text-green">
      <view class="cu-tag badge"></view>
    </view>
    Service
  </button>
  <view class="action text-orange">
    <view class="cuIcon-favorfill"></view> Collection
  </view>
  <view class="action">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="bg-red submit">Buy Now</view>
</view>
<view class="cu-bar bg-white tabbar border shop">
  <button class="action" open-type="contact">
    <view class="cuIcon-service text-green">
      <view class="cu-tag badge"></view>
    </view>
    Service
  </button>
  <view class="action">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="bg-orange submit">Add to cart</view>
  <view class="bg-red submit">Buy Now</view>
</view>
<view class="cu-bar bg-white tabbar border shop">
  <button class="action" open-type="contact">
    <view class="cuIcon-service text-green">
      <view class="cu-tag badge"></view>
    </view>
    Service
  </button>
  <view class="action">
    <view class=" cuIcon-shop"></view> Shop
  </view>
  <view class="action">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="btn-group">
    <button class="cu-btn bg-red round shadow-blur">Buy Now</button>
  </view>
</view>
<view class="cu-bar bg-white tabbar border shop">
  <button class="action" open-type="contact">
    <view class="cuIcon-service text-green">
      <view class="cu-tag badge"></view>
    </view> Service
  </button>
  <view class="action">
    <view class="cuIcon-cart">
      <view class="cu-tag badge">99</view>
    </view>
    Cart
  </view>
  <view class="btn-group">
    <button class="cu-btn bg-orange round shadow-blur">Add to cart</button>
    <button class="cu-btn bg-red round shadow-blur">Buy Now</button>
  </view>
</view>
```

## 输入操作条

- 带有输入框的操作条

```html
<view class="cu-bar input">
  <view class="action">
    <text class="cuIcon-sound text-grey"></text>
  </view>
  <input class="solid-bottom" focus="{{false}}" maxlength="300" cursor-spacing="10"></input>
  <view class="action">
    <text class="cuIcon-emojifill text-grey"></text>
  </view>
  <button class="cu-btn bg-green shadow-blur">发送</button>
</view>
<view class="cu-bar input">
  <view class="cu-avatar round" style="background-image:url(https://image.meiye.art/pic_1631425956676ZyU1WXnJ_9MN64Xbeq0Ev);"></view>
  <view class="action">
    <text class="cuIcon-roundaddfill text-grey"></text>
  </view>
  <input class="solid-bottom" maxlength="300" cursor-spacing="10"></input>
  <view class="action">
    <text class="cuIcon-emojifill text-grey"></text>
  </view>
  <button class="cu-btn bg-green shadow-blur">发送</button>
</view>
```
