<!--
 * @Descripttion: 
 * @version: V1.0
 * @Author: Xiaokang Lei
 * @email: lxk201808@163.com
 * @Date: 2022-11-29 18:21:55
 * @LastEditors: Xiaokang Lei
 * @LastEditTime: 2022-12-06 22:45:34
-->

<div class="minipre" style="width:18%; height:86%; float:right; position:fixed; right:3%;top: 4%;z-index: 99;">
    <iframe src="./h5/index.html#/pages/index/basics/text/text" width="100%" height="80%" style="border-radius:15px; box-shadow:0 0 50px 0px rgb(30 0 60 / 15%);"></iframe>
</div>

# 文字Text

***代码位置：`/pages/index/basics/text/text.wxml`***

## 颜色

- 颜色值与background中的参数一致

```css
.text-red {color: var(--red);}
.text-orange {color: var(--orange);}
.text-yellow {color: var(--yellow);}
.text-olive {color: var(--olive);}
.text-green {color: var(--green);}
.text-cyan {color: var(--cyan);}
.text-blue {color: var(--blue);}
.text-purple {color: var(--purple);}
.text-mauve {color: var(--mauve);}
.text-pink {color: var(--pink);}
.text-brown {color: var(--brown);}
.text-grey {color: var(--grey);}
.text-gray {color: var(--gray);}
.text-black {color: var(--black);}
.text-white {color: var(--white);}
```

## 大小

<!-- <div align=center>
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwKroF.png">
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwKyi4.png">
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwK6JJ.png">
</div> -->

```css
.text-xs {font-size: 20rpx;}
.text-sm {font-size: 24rpx;}
.text-df {font-size: 28rpx;}
.text-lg {font-size: 32rpx;}
.text-xl {font-size: 36rpx;}
.text-xxl {font-size: 44rpx;}
.text-sl {font-size: 80rpx;}
.text-xsl {font-size: 120rpx;}
```

<!-- ## 其他样式 -->

<!-- <div align=center>
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwKcW9.png">
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwKgzR.png">
    <img width="25%" src="https://s1.ax1x.com/2022/11/30/zwKRQ1.png">
</div> -->

## 阴影

```css
.text-shadow[class*="-red"] {
  text-shadow: var(--ShadowSize) var(--redShadow);
}
.text-shadow[class*="-orange"] {
  text-shadow: var(--ShadowSize) var(--orangeShadow);
}
.text-shadow[class*="-yellow"] {
  text-shadow: var(--ShadowSize) var(--yellowShadow);
}
.text-shadow[class*="-olive"] {
  text-shadow: var(--ShadowSize) var(--oliveShadow);
}
.text-shadow[class*="-green"] {
  text-shadow: var(--ShadowSize) var(--greenShadow);
}
.text-shadow[class*="-cyan"] {
  text-shadow: var(--ShadowSize) var(--cyanShadow);
}
.text-shadow[class*="-blue"] {
  text-shadow: var(--ShadowSize) var(--blueShadow);
}
.text-shadow[class*="-purple"] {
  text-shadow: var(--ShadowSize) var(--purpleShadow);
}
.text-shadow[class*="-mauve"] {
  text-shadow: var(--ShadowSize) var(--mauveShadow);
}
.text-shadow[class*="-pink"] {
  text-shadow: var(--ShadowSize) var(--pinkShadow);
}
.text-shadow[class*="-brown"] {
  text-shadow: var(--ShadowSize) var(--brownShadow);
}
.text-shadow[class*="-grey"] {
  text-shadow: var(--ShadowSize) var(--greyShadow);
}
.text-shadow[class*="-gray"] {
  text-shadow: var(--ShadowSize) var(--grayShadow);
}
.text-shadow[class*="-black"] {
  text-shadow: var(--ShadowSize) var(--blackShadow);
}
```

## 截断

样式

```css
.text-cut {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

示例

```html
<view class="padding bg-white">
  <view class="text-cut padding bg-blue light radius" style="width:220px">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
</view>
```

## 对齐

样式

```css
.text-center {
  text-align: center;
}
.text-content {
  line-height: 1.6;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
```

示例

```html
<view class="padding bg-white">
  <view class="text-left padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
  <view class="text-center padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
  <view class="text-right padding">我于杀戮之中绽放 ,亦如黎明中的花朵</view>
</view>
```

## 特殊文字

示例

```html
<view class="padding text-center">
  <view class="padding-lr bg-white radius-df">
    <view class="solid-bottom padding">
      <text class="text-price">80.00</text>
    </view>
    <view class="padding">价格文本，利用伪元素添加"¥"符号</view>
  </view>
  <view class="padding-lr bg-white margin-top radius-df">
    <view class="solid-bottom padding">
      <text class="text-Abc">color Ui</text>
    </view>
    <view class="padding">英文单词首字母大写</view>
  </view>
  <view class="padding-lr bg-white margin-top radius-df">
    <view class="solid-bottom padding">
      <text class="text-ABC">color Ui</text>
    </view>
    <view class="padding">全部字母大写</view>
  </view>
  <view class="padding-lr bg-white margin-top radius-df">
    <view class="solid-bottom padding">
      <text class="text-abc">color Ui</text>
    </view>
    <view class="padding">全部字母小写</view>
  </view>
</view>
```
