---
title: holygrail（圣杯布局）
tags: 
- 编程
- css
categories: 
- 工作

grammar_cjkRuby: true
---
## 圣杯布局([holygrail][1])
### 起源
> 三列。两列固定在两边，中间是一个** 流体 **
> 圣杯布局的原理是? 简述实现圣杯布局的步骤。
> 双飞翼布局和圣杯布局有什么异同
> 负margin的用法

<!--more-->
### 例子
 *  一个简单的仿照例子实现圣杯布局


 * 步骤
  
#### 1. 建立框架
	 

``` html?linenums
<body>
<!--第一步 建立框架-->
<div id="header"><h1>#header</h1></div>

<div id="container">
    <h1>#container</h1>
</div>

<div id="footer"><h1>#footer</h1></div>
</body>
```

#### 2. 加column 

 * float 让其在line。再清除footer 让它在最下面。添加背景颜色和边界便于观察。中间栏要放在前面以优先渲染。
	 
	 
``` html?linenums
    <style>
   #container {
            padding-left: 200px;
            padding-right:150px;
        }
        #container .column {
            float: left;
        }
        #center {
            width:100%;
        }
        #left {
            width:200px;
        }
        #right {
            width: 150px;
        }
        #footer {
            clear: both;
        }
    </style>
```

``` html?linenums
<div id="container">
    <h1>#container</h1>
    <div id="center" class="column"><h1>this is center</h1></div>
    <div id="left" class="column"><h1>this is left</h1></div>
    <div id="right" class="column"><h1>this is right</h1></div>
</div>
```
* 效果图2.1
![step2][2]

#### 3.  将左栏拉到相应位置
* 要让左栏和中间在一条直线上，先对左栏进行操作,分两步。margin-left:-100%跑到左上角（覆盖主栏目），再设置position:relative,right:200px或者left:-200px（不覆盖主栏目）
  * 第一步
 
``` css?linenums
#left {
	width:200px;
	margin-left: -100%; 
	background-color: #555555;
}
```


* 效果图3.1
	![step3][3]
	* 第二步 
	用相对定位将左栏推开，加上相对定位标志之后，记得给左栏一个`right:200px`将左栏相对右边200px,往左推200px。
	

``` css?linenums
#left {
		width:200px;
		margin-left: -100%;
		right:200px;
		background-color: #555555;
	}
```

* 效果图3.2
	![step3_2][4]
.  
#### 4.将右栏加入line
注意： 原作者这里用的是`margin-right:-150px`，在演示时并不能起效果。

``` css?linenums
#right {
	width: 150px
	margin-right: -100%;
	background-color: #8cacea;
}
```
* 效果图4.1
![step4_1][5]
再处理一些小细节,固定的右边栏多出的字，撑开了
* 效果图4.2
![step4_2][6]
#### 5.结果
![result][7]

### 总结实现步骤

 #### 1. div 框架搭建出来，

 * div- >container，header，footer

 #### 2. 加column，
 
* 设置`float:left`，
* 设置`center宽度100%`
* `清除footer浮动`
 
 #### 3. 将左栏添到center左边，
 * `margin-left:-100%`到左上（覆盖主栏目），
 * 再设置`position:relative`,`right:200px`或者`left:-200px`（不覆盖主栏目）
 #### 4. 将右栏添右
 * `margin-right: -100%; `

### 圣杯布局和双飞翼布局异同

 1. 两种布局方式都是把主列放在文档流最前面，使主列优先加载
 2. 两者在实现上的相同点在于都让三列浮动，然后通过负外边距形成三列布局；
 3. 两种布局方式的不同在于如何处理中间主列的位置：圣杯布局是利用父容器的左右内边距定位；双飞翼布局是把主列嵌套在div后利用主列的左右外边距定位。

### 浮动元素上的负margin

> 给一个浮动元素加上相反方向的负margin，则会使行间距为0且内容重叠。
* bug 修复
	* 当浮动元素使用负margin时，在一些旧的浏览器中可能会出现问题。用`position:float`,能解决很多问题。
* 具体可以参考 [负margin用法权威指南][8]
### flex实现的“标准”圣杯布局
[MDN][9]
* 效果图
![step][10]
### 其他
* 圣杯布局基本就是
              （适：自适应，左：左栏，右：右栏）
	* 左适右
	* 左右适
	* 左适、右适
	* 等等
* 圣杯布局还有很多的实现方法
	*  纯浮动实现
	*  flex实现
可以参考，[圣杯布局小结][11]，觉得这位作者对圣杯布局总结的挺好，各种小例子。其他的也可以搜一下。我这里主要是介绍下圣杯布局。

* 圣杯布局类似
	* [ 双飞翼布局][12]
	  1. left和right覆盖了center的左右两边的内容。
	  2. center的外部再加一个div标签来包裹中间区块，
	  3. 宽度为100%。然后再设置main的左右外边距，使它回到对应的位置。


## 参考
[In Search of the Holy Grail][13] by Matthew Levine
[关于「圣杯布局」][14] by DotHide
[圣杯布局小结][15] by 流云诸葛   
[圣杯布局和双飞翼布局][16] by betterwlf
[CSS之圣杯布局和双飞翼布局][17] by 宋菲
[负margin用法权威指南][18] by Airen的博客


  [1]: https://alistapart.com/article/holygrail
  [2]: https://ooo.0o0.ooo/2017/03/25/58d5d72feabca.png
  [3]: https://ooo.0o0.ooo/2017/03/25/58d5d8169eeaa.png
  [4]: https://ooo.0o0.ooo/2017/03/25/58d5dae8bdfa3.png
  [5]: https://ooo.0o0.ooo/2017/03/25/58d5de6bddba3.png
  [6]: https://ooo.0o0.ooo/2017/03/25/58d5e21d68c4d.png
  [7]: https://ooo.0o0.ooo/2017/03/25/58d5e4038a31c.gif
  [8]: http://www.w3cplus.com/css/the-definitive-guide-to-using-negative-margins.html
  [9]: https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes
  [10]: https://ooo.0o0.ooo/2017/03/25/58d5fa60c22ea.png
  [11]: http://web.jobbole.com/84993/
  [12]: http://www.imooc.com/wenda/detail/254035
  [13]: https://alistapart.com/article/holygrail
  [14]: https://segmentfault.com/a/1190000004524159
  [15]: http://web.jobbole.com/84993/
  [16]: http://www.jianshu.com/p/1a981df93770
  [17]: http://blog.leanote.com/post/727600729@qq.com/CSS%E4%B9%8B%E5%9C%A3%E6%9D%AF%E5%B8%83%E5%B1%80%E5%92%8C%E5%8F%8C%E9%A3%9E%E7%BF%BC%E5%B8%83%E5%B1%80
  [18]: http://www.w3cplus.com/css/the-definitive-guide-to-using-negative-margins.html