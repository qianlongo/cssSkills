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
.clearfox{
  zoom: 1;
}
.clearfox:after{
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
