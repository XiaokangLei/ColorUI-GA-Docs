<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:54:12
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:05:01
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/component/modal/modal" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 模态框Modal

***代码位置：`/pages/index/component/modal/modal.wxml`***

## 模态框样式

```html
<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 普通窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="Modal">Modal</button>
  </view>
</view>

<view class="cu-modal {{modalName=='Modal'?'show':''}}">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content">Modal标题</view>
      <view class="action" bindtap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      Modal 内容。
    </view>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 底部窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="bottomModal">Bottom</button>
  </view>
</view>

<view class="cu-modal bottom-modal {{modalName=='bottomModal'?'show':''}}">
  <view class="cu-dialog">
    <view class="cu-bar bg-white">
      <view class="action text-green">确定</view>
      <view class="action text-blue" bindtap="hideModal">取消</view>
    </view>
    <view class="padding-xl">
      Modal 内容。
    </view>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 对话窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="DialogModal1">Dialog</button>
    <button class="cu-btn bg-blue shadow margin-left" bindtap="showModal" data-target="DialogModal2">Dialog</button>
  </view>
</view>

<view class="cu-modal {{modalName=='DialogModal1'?'show':''}}">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content">Modal标题</view>
      <view class="action" bindtap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      Modal 内容。
    </view>
    <view class="cu-bar bg-white justify-end">
      <view class="action">
        <button class="cu-btn line-green text-green" bindtap="hideModal">取消</button>
        <button class="cu-btn bg-green margin-left" bindtap="hideModal">确定</button>

      </view>
    </view>
  </view>
</view>

<view class="cu-modal {{modalName=='DialogModal2'?'show':''}}">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content">Modal标题</view>
      <view class="action" bindtap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      Modal 内容。
    </view>
    <view class="cu-bar bg-white">
      <view class="action margin-0 flex-sub text-green " bindtap="hideModal">
        <text class="cuIcon-moneybag"></text>微信支付
      </view>
      <view class="action margin-0 flex-sub text-green solid-left" bindtap="hideModal">取消</view>
      <view class="action margin-0 flex-sub  solid-left" bindtap="hideModal">确定</view>
    </view>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 图片窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="Image">Image</button>
  </view>
</view>

<view class="cu-modal {{modalName=='Image'?'show':''}}">
  <view class="cu-dialog">
    <view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;">
      <view class="cu-bar justify-end text-white">
        <view class="action" bindtap="hideModal">
          <text class="cuIcon-close "></text>
        </view>
      </view>
    </view>
    <view class="cu-bar bg-white">
      <view class="action margin-0 flex-sub  solid-left" bindtap="hideModal">我知道了</view>
    </view>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 单选窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="RadioModal">Radio</button>
  </view>
</view>

<view class="cu-modal {{modalName=='RadioModal'?'show':''}}" bindtap="hideModal">
  <view class="cu-dialog" catchtap>
    <radio-group class="block">
      <view class="cu-list menu text-left">
        <view class="cu-item" wx:for="{{5}}" wx:key="item">
          <label class="flex justify-between align-center flex-sub">
            <view class="flex-sub">Item {{index +1}}</view>
            <radio class="round"></radio>
          </label>
        </view>
      </view>
    </radio-group>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 多选窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="ChooseModal">Choose</button>
  </view>
</view>

<view class="cu-modal bottom-modal {{modalName=='ChooseModal'?'show':''}}" bindtap="hideModal">
  <view class="cu-dialog" catchtap>
    <view class="cu-bar bg-white">
      <view class="action text-blue" bindtap="hideModal">取消</view>
      <view class="action text-green" bindtap="hideModal">确定</view>
    </view>
    <view class="grid col-3 padding-sm">
      <view wx:for="{{checkbox}}" class="padding-xs" wx:key="item">
        <button class="cu-btn orange lg block {{item.checked?'bg-orange':'line-orange'}}" bindtap="ChooseCheckbox" data-value="{{item.value}}"> {{item.name}}
          <view class="cu-tag sm round {{item.checked?'bg-white text-orange':'bg-orange'}}" wx:if="{{item.hot}}">HOT</view>
        </button>
      </view>
    </view>
  </view>
</view>

<view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-titles text-blue "></text> 侧边抽屉
  </view>
  <view class="action">
    <button class="cu-btn bg-green shadow" bindtap="showModal" data-target="DrawerModalL">Left</button>
    <button class="cu-btn bg-blue shadow margin-left" bindtap="showModal" data-target="DrawerModalR">Right</button>
  </view>
</view>

<view class="cu-modal drawer-modal justify-start {{modalName=='DrawerModalL'?'show':''}}" bindtap="hideModal">
  <view class="cu-dialog basis-lg" catchtap style="top:{{CustomBar}}px;height:calc(100vh - {{CustomBar}}px)">
    <view class="cu-list menu text-left">
      <view class="cu-item arrow" wx:for="{{5}}" wx:key="item">
        <view class="content">
          <view>Item {{index +1}}</view>
        </view>
      </view>
    </view>
  </view>
</view>

<view class="cu-modal drawer-modal justify-end {{modalName=='DrawerModalR'?'show':''}}" bindtap="hideModal">
  <view class="cu-dialog basis-lg" catchtap style="top:{{CustomBar}}px;height:calc(100vh - {{CustomBar}}px)">
    <view class="cu-list menu text-left">
      <view class="cu-item arrow" wx:for="{{5}}" wx:key="item">
        <view class="content">
          <view>Item {{index +1}}</view>
        </view>
      </view>
    </view>
  </view>
</view>
```

<br>


