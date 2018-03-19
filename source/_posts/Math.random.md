---
title: Don't rely on luck.
tags: 
- 编程
- js
categories: 
- 工作
- codewars
date: 2017-03-30 21:41:18

grammar_cjkRuby: true
---

## 题目

在 codewars 上碰到一道奇怪的题目。猜随机数。难度 6kyu，题干比以往简单。这就让人捉急了。什么都看不出来。接下来看题

<!--more-->

> The test fixture I use for this kata is pre-populated.
> It will compare your guess to a random number generated in Ruby by:

> (Kernel::rand() \* 100 + 1).floor
> In Javascript/CoffeeScript by:

> Math.floor(Math.random() \* 100 + 1)
> In Python by:
> randint(1,100)
> You can pass by relying on luck or skill but try not to rely on luck.

> "The power to define the situation is the ultimate power." - Jerry Rubin

> Good luck!

## 例子

这里，题目给出的测试是：

> Example Test:
> `var lucky_number = Math.floor(Math.random() * 100 + 1);`
 > `Test.assertEquals(guess, lucky_number, "Sorry. Unlucky this time.");`

## 分析

看到题目的时候，- - 就这么点? 然后 0.0 ，睁大眼睛看，然后 = =，这什么鬼，+.+，直接`Math.random()`?, @.@ 那怎么相等呢。？.?
搜了下 9.9 ，发现只有[Ruby 的答案][1]。

* 再查了下随机数。
  _ 随机数分为 **伪随机数** 和** 真随机数 **
  _ 正常电脑各种语言中使用的都是** 伪随机数 **，是由可确定的*函数*，通过种子（常用时钟），产生伪随机数，这种数字理论上存在可预测性。 \* _函数_ :计算机产生随机数的方法有：`线性同余方法`(大部分采用,，即 Rand*Number = (Rand_Seed * X + Y) mod Z 那个 RandSeed 就是「种子」一般取时钟周期，也就是 GetTickCount()。），`平方取中法`，`M-sequence`，`梅森旋转算法`，还有`MT随机数算法`。
  \_ ps:这里不对 随机数的产生和随机数的计算理论做深究。具体可以看[这里][2]，各答案较完整讲了计算机产生的是伪随机数，还有产生** 真随机数 ** 的可行性。
* 那么 JavaScript 中的随机数是个什么样的存在？答案当然是伪随机数。= =
  _ JavaScript 中并没有类似上面底层语言提供的函数,根据 panxiwu 博客中的说法，c 和 Ruby 都有底层重置 seed 方法依据不同的方法来生成种子。而，JavaScript 应该是依靠引擎使用随机函数方法，所以在安全方面，不用 Math.random 最好，替代的可以使用`window.crypto.getRandomValues(array);` > [MDN：][3]Math.random() does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the window.crypto.getRandomValues() method.
  _ V8 引擎中实现 随机数：通过 Mathlmmul 来创造，并没有所谓的 seed 参数，所以只能重写。

```javascript?linenums
// ECMA 262 - 15.8.2.14 var rngstate;
// Initialized to a Uint32Array during genesis.
function MathRandom() {
var r0 = (MathImul(18030, rngstate[0] & 0xFFFF) + (rngstate[0] >>> 16)) | 0;        rngstate[0] = r0; var r1 = (MathImul(36969, rngstate[1] & 0xFFFF) + (rngstate[1] >>> 16)) | 0;
    rngstate[1] = r1; var x = ((r0 << 16) + (r1 & 0xFFFF)) | 0;
// Division by 0x100000000 through multiplication by reciprocal.
return (x < 0 ? (x + 0x100000000) : x) * 2.3283064365386962890625e-10; }
// Non-standard extension.
function MathImul(x, y) {
    return %NumberImul(TO_NUMBER_INLINE(x), TO_NUMBER_INLINE(y));
}
```

* > from [v8][4]

## 解题

```javascript?linenums
var guess = 10
Math.floor = function(num) {return guess;}
```

Accept!然后看到一堆不可描述的东西。lol

* 这个........

```javascript?linenums
var guess = 10;
lucky_number = 10;
```

* 还有这个

```javascript?linenums
Math.random=()=>":D"
Math.floor=x=>(x+'').replace(/N/g,'L').replace(/a/g,"0")
var guess = "L0L"
```

不少都是写死了 random 的值然后钻牛角尖的。。还有令人搞笑的，可以拿来当笑话集了，这题：

```javascript?linenums
var guess = "What a stupid kata.";

Math.floor = function() {
  return "What a stupid kata.";
}
```

还有这个，，厉害了。。。
![enter description here][5]

## 实际运用

> 比如我们在开发京东的 H5 活动页面的小游戏时，可能需要随机产生一些背景、随机掉落道具、小怪物；当用户中途退出(微信不小心右滑，一定有不少人被这个恶心到[当然现在已经优化])，当用户重新打开小游戏时，用户整体进度、积分我们可以很容易记录到本地或者存储到微信 ID 建立的存储机制中从而得以恢复，但是随机产生的场景、随机掉落道具、小怪物等并不是那么容易存储恢复，重新获取场景、小怪物那未免用户体验太差！！！把画布上的所有物件、怪物属性全部存储下来更是没有必要。此时我们就可以利用我们重写的 Math.random()(此时可不重写内置方法，可另起别名)。只要我们保存下来一个随机数 seed 值，利用 seed 值来恢复所有的场景就好了。
> from [潘信伍][6] ,谢谢大神啊

## 参考

[悟道集][7]
[JavaScript 中 Math.random 的种子设定方法][8]

[1]: http://tao.logdown.com/posts/207117-codewarsdont-rely-on-luck
[2]: https://www.zhihu.com/question/20423025
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[4]: https://github.com/v8/v8/blob/dae6dfe08ba9810abbe7eee81f7c58e999ae8525/src/math.js#L144
[5]: https://ooo.0o0.ooo/2017/03/30/58dd0d4db4e85.jpg '图像 14'
[6]: http://blog.panxinwu.com/
[7]: http://tao.logdown.com/posts/207117-codewarsdont-rely-on-luck
[8]: http://blog.panxinwu.com/2016/03/27/JavaScript%E4%B8%ADMathdotrandom%E7%9A%84%E7%A7%8D%E5%AD%90%E8%AE%BE%E5%AE%9A%E6%96%B9%E6%B3%95/
