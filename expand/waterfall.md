<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-08 17:00:21
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:05:45
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/plugin/waterfall/waterfall" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 瀑布流Waterfall

***代码位置：`/pages/index/plugin/waterfall/waterfall.wxml`***

## 瀑布流

- 注意：需要js计算图片高度

```html
<view class="container-waterfall bg-white">
  <view class="left">
    <view class="flow">
      <view class="cu-card case no-card" wx:for="{{leftData}}" wx:key="item">
        <view class="cu-item">
          <view class="image">
            <image src="{{item.image}}" mode="widthFix"></image>
          </view>
        </view>
      </view>
    </view>
  </view>

  <view class="right">
    <view class="flow">
      <view class="cu-card case no-card" wx:for="{{rightData}}" wx:key="item">
        <view class="cu-item shadow">
          <view class="image">
            <image src="{{item.image}}" mode="widthFix"></image>
          </view>
        </view>
      </view>
    </view>
  </view>
</view>
```

<br>

本文总阅读量：<span id="busuanzi_value_page_pv"></span> 次
