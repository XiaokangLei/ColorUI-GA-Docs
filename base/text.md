<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-29 18:21:55
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2023-01-13 09:55:00
-->

<div class="minipre" style="width:18%; min-width:275px; height:90%; float:right; position:fixed; right:2.5%;top:2%;z-index:99;">
    <iframe src="./h5/index.html#/pages/index/basics/text/text" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 📄文本Text

***示例代码：`/pages/index/basics/text/text.wxml`***[Github链接](https://github.com/XiaokangLei/ColorUI-GA/blob/master/pages/index/basics/text/text.wxml)

## 文本颜色

- 颜色值与background中的标准色参数一致，15种标准色，`red/orange/yellow/olive/green/cyan/blue/purple/mauve/pink/brown/grey/gray/black/white`

```html
<view class="text-red">红色文字</view>
```

## 文本大小

- 8种大小的文本，`xs/sm/df/lg/xl/xxl/sl/xsl`，对应大小`20/24/28/32/36/44/80/120`，单位`rpx`

```html
<view class="text-xl">xl大小的文字</view>
```

## 文本阴影

- 文本阴影随文字颜色变化，15种颜色的阴影

```html
<view class="text-red text-shadow">带红色阴影的红色字体</view>
```

## 文本截断

- 需要与`width`样式配合，固定宽度下才可以显示截断样式。目前包括单行截断和两行截断，使用略有差异，请注意查看。

```html
<view class="text-cut" style="width:480rpx">ColorUI GA 轻量、可靠、高颜值、开源的原始小程序组件库</view>
<view class="" style="width:480rpx">
  <text class="text-cut-2">ColorUi GA 轻量、可靠的小程序原生css组件库，每周更新UI模板库</text>
</view>
```

## 文本对齐

```html
<view class="text-left">谢谢你 在这世界的角落 发现了我</view>
<view class="text-center">谢谢你 在这世界的角落 发现了我</view>
<view class="text-right">谢谢你 在这世界的角落 发现了我</view>
```

## 特殊文字

- 价格样式：利用伪元素添加`¥`符号
- 字母转换：英文单词首字母大写、全部字母转为大写、全部字母转为小写

```html
<text class="text-price">80.00</text>
<text class="text-Abc">color Ui</text>
<text class="text-ABC">color Ui</text>
<text class="text-abc">color Ui</text>
```
