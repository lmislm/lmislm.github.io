---
title: undefined behavior in c
tags: 
- 编程
- c
categories: 
- 学习
date: 2017-01-06 21:41:18
grammar_cjkRuby: true
---

## undefined behavior（未定义行为）

* 思考一下下面这段代码的输出会是什么（答案在后面）？
* 这段代码运行过程是怎样？

<!--more-->

```c
#include <stdio.h>
#include <stdlib.h>

#define SQ(y) (y*y)  		//define 1
//#define SQ(y) ((y)*(y))   //define 2

int main() {
   int i = 1;
   while(i <= 5){
   	printf("%-2d",SQ(i++));
   }
  return 0;
}


----------


/*-只试了两种编译器
 *所用编译器：gcc
 *       用define  1 : 结果1  9  15
 *       用define 2 ：结果1  9  15
 *其他编辑器：
 *      用define  1 : 结果2  12  30
 *      用define  2: 结果1  9  15
 *      。。。。。
```

### 问题：为什么得到的结果不一样？

* 看上面的对比，是因为编辑器的原因导致的??
* 一开始某本书上的答案是 2 12 30 ，我很纳闷，开头第一个数居然是 2，于是一番折腾查阅了一下别人的看法。

### 我认为的原因是：undefined behavior

* 什么是：undefined behavior（未定义行为）呢？如下。
  > 在计算机程序设计中，未定义行为（英语：undefined behavior) 是指行为不可预测的计算机代码。这是一些编程语言的一个特点，最有名的是在 C 语言中。在这些语言中，为了简化标准，并给予实现一定的灵活性，标准特别地规定某些操作的结果是未定义的，这意味着程序员不能预测会发生什么事。....... 因此，这种未定义行为一般应被视为 bug。
  > ---来源：[中文维基百科][1]

### 还有哪些 undefined behavior（未定义行为）

> 偷懒：)。此处省略一些例子，因为 wiki 上都有一些典型例子。中文访问不了的话，英文在这，[点我][2]。

## 如何解释这段代码

* 输出 1 9 15
  ++ 其计算过程可能为：
  **第一次循环时**，i=1，i++=2，1 _ 2 = 2， 再 i++=3
  **第二次循环时**，i=3，i++=4，3 _ 4 = 12，再 i++=5
  **第三次循环时**，i=5，i++=5, 5 \* 6 = 30，再 i++=6
  //进入 i<=5 判断,值为假，退出循环

---

* 输出 2 12 30
  ++ 其计算过程可能为：
  **第一次循环时**，首先 i=1, 1 _ 1 = 1，i++=2，再 i++=3
  **第二次循环时**，首先 i=3, 3 _ 3 = 9，i++=4，再 i++=5
  **第三次循环时**，首先 i=5, 5 \* 5 = 25, i++=6，再 i++=7
  // i=7，所以退出循环。
  > 首先 i++是先运算，后加。对于 SQ(i++)来说，其实质是((i++)\*(i++))。在后加运算符是在整个运算完成之后，才进行加 1 操作的。

_多问和讨论总是有好处的，继续保持：）_
参考：
[1][c语言的代参宏定义，#define sq(y) ((y)*(y))....输出应该是2 12 30才对啊？？][3][2][int i=5 ；printf("%d",i++,++i)；为什么输出 6?][4]

[3][c语言中define的用法][5]
进阶（可不看）：
[关于宏定义的 ppt][6]

[1]: https://zh.wikipedia.org/wiki/%E6%9C%AA%E5%AE%9A%E4%B9%89%E8%A1%8C%E4%B8%BA
[2]: https://en.wikipedia.org/wiki/Undefined_behavior
[3]: https://zhidao.baidu.com/question/561702258825816084.html
[4]: https://www.zhihu.com/question/36940781/answer/69683475
[5]: http://www.cnblogs.com/yezhenhan/archive/2011/11/05/2236973.html
[6]: https://wenku.baidu.com/view/2bd97e6bdd36a32d737581b4.html
