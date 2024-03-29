<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-12-02 17:48:54
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-09 17:04:48
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/component/form/form" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 表单Form

***示例代码：`/pages/index/component/form/form.wxml`***

## 表单样式

```html
<form>
  <view class="cu-form-group margin-top">
    <view class="title">邮件</view>
    <input placeholder="两字短标题"></input>
  </view>
  <view class="cu-form-group">
    <view class="title">输入框</view>
    <input placeholder="三字标题"></input>
  </view>
  <view class="cu-form-group">
    <view class="title">收货地址</view>
    <input placeholder="统一标题的宽度"></input>
  </view>
  <view class="cu-form-group">
    <view class="title">收货地址</view>
    <input placeholder="输入框带个图标"></input>
    <text class="cuIcon-locationfill text-orange"></text>
  </view>
  <view class="cu-form-group">
    <view class="title">验证码</view>
    <input placeholder="输入框带个按钮"></input>
    <button class="cu-btn bg-green shadow">验证码</button>
  </view>
  <view class="cu-form-group">
    <view class="title">手机号码</view>
    <input placeholder="输入框带标签"></input>
    <view class="cu-capsule radius">
      <view class="cu-tag bg-blue">
        +86
      </view>
      <view class="cu-tag line-blue">
        中国大陆
      </view>
    </view>
  </view>
  <view class="cu-form-group margin-top">
    <view class="title">普通选择</view>
    <picker bindchange="PickerChange" value="{{index}}" range="{{picker}}">
      <view class="picker">
        {{index?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
      </view>
    </picker>
  </view>
  <view class="cu-form-group">
    <view class="title">多列选择</view>
    <picker mode="multiSelector" bindchange="MultiChange" bindcolumnchange="MultiColumnChange" value="{{multiIndex}}" range="{{multiArray}}">
      <view class="picker">
        {{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
      </view>
    </picker>
  </view>
  <view class="cu-form-group">
    <view class="title">时间选择</view>
    <picker mode="time" value="{{time}}" start="09:01" end="21:01" bindchange="TimeChange">
      <view class="picker">
        {{time}}
      </view>
    </picker>
  </view>
  <view class="cu-form-group">
    <view class="title">日期选择</view>
    <picker mode="date" value="{{date}}" start="2015-09-01" end="2020-09-01" bindchange="DateChange">
      <view class="picker">
        {{date}}
      </view>
    </picker>
  </view>
  <view class="cu-form-group">
    <view class="title">地址选择</view>
    <picker mode="region" bindchange="RegionChange" value="{{region}}" custom-item="{{customItem}}">
      <view class="picker">
        {{region[0]}}，{{region[1]}}，{{region[2]}}
      </view>
    </picker>
  </view>
  <view class="cu-form-group margin-top">
    <view class="title">开关选择</view>
    <switch></switch>
  </view>
  <view class="cu-form-group">
    <view class="title">定义颜色</view>
    <switch class="red sm" checked></switch>
  </view>
  <view class="cu-form-group">
    <switch class="switch-sex" checked></switch>
    <view class="title">定义图标</view>
  </view>
  <view class="cu-form-group">
    <view class="title">方形开关</view>
    <switch class="orange radius sm" checked></switch>
  </view>
  <radio-group class="block">
    <view class="cu-form-group margin-top">
      <view class="title">单选操作(radio)</view>
      <radio checked></radio>
    </view>
    <view class="cu-form-group">
      <view class="title">定义样式</view>
      <radio class="radio"></radio>
    </view>
    <view class="cu-form-group">
      <view class="title">定义颜色</view>
      <view>
        <radio class="blue radio"></radio>
        <radio class="red margin-left-sm"></radio>
      </view>
    </view>
  </radio-group>
  <view class="cu-form-group margin-top">
    <view class="title">复选选操作(checkbox)</view>
    <checkbox></checkbox>
  </view>
  <view class="cu-form-group">
    <view class="title">定义形状</view>
    <checkbox class="round" checked></checkbox>
  </view>
  <view class="cu-form-group">
    <view class="title">定义颜色</view>
    <checkbox class="round blue" checked></checkbox>
  </view>
  <view class="cu-bar bg-white margin-top">
    <view class="action">
      图片上传
    </view>
    <view class="action">
      {{imgList.length}}/4
    </view>
  </view>
  <view class="cu-form-group">
    <view class="grid col-4 grid-square flex-sub">
      <view class="bg-img" wx:for="{{imgList}}" wx:key="item" bindtap="ViewImage" data-url="{{imgList[index]}}">
        <image src='{{imgList[index]}}' mode='aspectFill'></image>
        <view class="cu-tag bg-red" catchtap="DelImg" data-index="{{index}}">
          <text class="cuIcon-close"></text>
        </view>
      </view>
      <view class="solids" bindtap="ChooseImage" wx:if="{{imgList.length<4}}">
        <text class="cuIcon-cameraadd"></text>
      </view>
    </view>
  </view>
  <view class="cu-form-group margin-top">
    <view class="title">头像</view>
    <view class="cu-avatar radius bg-gray"></view>
  </view>
  <!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
  <view class="cu-form-group margin-top">
    <textarea maxlength="-1" disabled="{{modalName!=null}}" bindinput="textareaAInput" placeholder="多行文本输入框"></textarea>
  </view>
  <view class="cu-form-group align-start">
    <view class="title">文本框</view>
    <textarea maxlength="-1" disabled="{{modalName!=null}}" bindinput="textareaBInput" placeholder="多行文本输入框"></textarea>
  </view>
</form>
```

<br>


