# cssSkills
> 这里放一些常见而且实用的css技巧代码片段
## 前言
> 生活需要总结，需要不断地发现自己的缺陷然后找到好的方法，改之。古人说好记性不如烂笔头，人终归是会遗忘一些事情的，哪怕它曾经深深地印在你的脑海，久久挥之不去，经过时间的洗涤，一切都会回到最初的那个时刻，还记得你上次写的令自己引以为豪的css样式吗？  😄，也许你记得，但模糊了不是？？？所以还是乖乖地拿起你的电脑，愉快地一点点敲下来，记录一遍吧！ 这篇文章会记录自己时常用到的css片段，使用这些css可以帮助我们解决许多实际问题。

[源码地址](https://github.com/qianlongo/cssSkills)
[预览地址](http://sandbox.runjs.cn/show/rrtvorhl)

<!--more-->

## 1、清除浮动
> 浮动给我们的代码带来的麻烦，想必不需要多说，我们会用很多方式来避免这种麻烦，其中我觉得最方便也是兼容性最好的一种是....

```
// 清除浮动
.clearfix{
  zoom: 1;
}
.clearfix:after{
  display: block;
  content: '';
  clear: both;
}

```

## 2、垂直水平居中
> 在css的世界里水平居中比垂直居中来的简单一些，经过了多年的演化，依然没有好的方式来让元素垂直居中(各种方式各有优缺点，但都不能达到兼容性好，破坏力小的目标)，以下是几种常见的实现方式

`绝对定位方式且已知宽高`

```
position: absolute;
top: 50%;
left: 50%;
margin-top: -3em;
margin-left: -7em;
width: 14em;
height: 6em;
```
`绝对定位 ＋ 未知宽高 ＋ translate`

```
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
//需要补充浏览器前缀
```
`flex 轻松搞定水平垂直居中( 未知宽高)`

```
display: flex;
align-items: center;
justify-content: center;

```

## 3、 文本末尾添加省略号
> 当文本的内容超出容器的宽度的时候，我们希望在其默认添加省略号以达到提示用户内容省略显示的效果。

`宽度固定，适合单行显示...`

```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;

```

`宽度不固定，适合多行以及移动端显示`

```
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;

```
## 4、制造文本的模糊效果
> 当我们希望给文本制造一种模糊效果感觉的时候，可以这样做

```
color: transparent;
text-shadow:0 0 2px rgba(0,0,0,.5);

```

## 5、动画实现简洁loading效果
> 我们来实现一个非常简洁的loading效果

```
.loading:after{
  display: inline-block;
  overflow: hidden;
  vertical-align: bottom;
  content: '\2026';
  -webkit-animation: ellipsis 2s infinite;
}

// 动画部分
@-webkit-keyframes ellipsis{
  from{
    width: 2px;
  }
  to{
    width: 15px;
  }
}

```

## 6、自定义文本选中样式
> 默认情况下，我们在网页上选中文字的时候，会给选中的部分一个深蓝色背景颜色(可以自己拿起鼠标试试)，如果我们想自己定制被选中的部分的样式呢？

```
// 注意只能修改这两个属性 字体颜色 选中背景颜色

element::selection{
  color: green;
  background-color: pink;
}
element::-moz-selection{
  color: green;
  background-color: pink;
}

```

## 7、顶角贴纸效果
> 有时候我们会有这样的需求，在一个列表展示页面，有一些列表项是新添加的、或者热度比较高的，就会要求在其上面添加一个贴纸效果的小条就像hexo默认博客的fork me on github那个效果一样，如下图。
![贴纸效果](/2016-4/20/1.png)

**接下来我们开始一步步完成最左边的这个效果**

`html`

```
<div class="wrap">
  <div class="ribbon">
    <a href="#">Fork me on GitHub</a>
  </div>
</div>
```

`css`

```
/* 外层容器几本设置  */
.wrap{
  width: 160px;
  height:160px;
  overflow:hidden;
  position: relative;
  background-color: #f3f3f3;
}

.ribbon{
  background-color: #a00;
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  /* shadom */
  -webkit-box-shadow: 0 0 10px #888;
  -moz-box-shadow: 0 0 10px #888;
  box-shadow: 0 0 10px #888;
  /* rotate */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  /* position */
  left: -50px;
  top: 40px;
}

.ribbon a{
  border: 1px solid #faa;
  color: #fff;
  display: block;
  font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin: 1px 0;
  padding: 10px 50px;
  text-align: center;
  text-decoration: none;
  /* shadow */
  text-shadow: 0 0 5px #444;
}

```

## 8、input占位符
> 当我们给部分input类型的设置placeholder属性的时候，有的时候需要修改其默认的样式。

```
input::-webkit-input-placeholder{
  color: green;
  background-color: #F9F7F7;
  font-size: 14px;
}
input::-moz-input-placeholder{
  color: green;
  background-color: #F9F7F7;
  font-size: 14px;
}
input::-ms-input-placeholder{
  color: green;
  background-color: #F9F7F7;
  font-size: 14px;
}

```
## 9、移动端可点击元素去处默认边框
>在移动端浏览器上，当你点击一个链接或者通过Javascript定义的可点击元素的时候，会出现蓝色边框，说实话，这是很恶心的，怎么去掉呢?

```
-webkit-tap-highlight-color: rgba(255,255,255,0);

```

## 10、首字下沉
> 要实现类似word中首字下沉的效果可以使用以下代码

```
element:first-letter{
  float:left;
  color:green;
  font-size:30px;
}
```
## 11、小三角
> 在很多地方我们可以用得上小三角，接下来我们画一下四个方向的三角形


```
.triangle{
  /* 基础样式 */
  border:solid 10px transparent;
}
/*下*/
.triangle.bottom{
 border-top-color: green;
}
/*上*/
.triangle.top{
 border-bottom-color: green;
}
/*左*/
.triangle.top{
 border-right-color: green;
}
/*右*/
.triangle.top{
 border-left-color: green;
}

```
**可以看出画一个小三角非常简单，只要两行样式就可以搞定，对于方向只要想着画哪个方向则设置反方向的样式属性就可以**

## 12、鼠标手型
> 一般情况下，我们希望在以下元素身上添加鼠标手型

* a
* submit
* input[type="iamge"]
* input[type="button"]
* button
* label
* select

```
a[href],input[type='submit'], input[type='image'],input[type='button'], label[for], select, button {
  cursor: pointer;
}

```

## 13、屏蔽Webkit移动浏览器中元素高亮效果
>在访问移动网站时，你会发现，在选中的元素周围会出现一些灰色的框框，使用以下代码屏蔽这种样式

```
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
```
