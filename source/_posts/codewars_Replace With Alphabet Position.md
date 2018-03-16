---
title: codewars_Replace With Alphabet Position
tags: 
- 编程
- js
- codewars
categories: 
- 工作

grammar_cjkRuby: true
---
## 题目

这是一道字符串操作的题。题目如下：
<!--more-->
> Welcome.
>  In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. 
>  As an example:

## 例子

``` javascript?linenums
alphabet_position("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
```


## 分析
首先肯定利用方法`charCodeAt`来处理字符，其次得转化下大小写，因为每个字符都是空格隔开，那么肯定用到`split`等来“切割”。思路大概就是我代码里头描述的，但是看最佳答案的时候，有相对另外的思路，大概意思差不多但是把处理的顺序调一下，会有意想不到的作用，也是佩服那些大牛们啊，具体怎么调整才可以→_→最优，聪明的你，可以想一想啊 :) 留个悬念。


## 解题

``` javascript?linenums
function alphabetPosition(text) {
    return text.replace(/[^a-zA-Z]+/g,'').toUpperCase().split('').map(
        function (eachStr) {
            return eachStr.charCodeAt()-64;
        }).join(' ');
}
console.log(alphabetPosition('The testT'))
```
* 那么我看到目前为止最机智中票数最高的代码下面这个，可惜这些对我来说还是很晦涩啊。但是我想大概思路是差不多的。另外看到很多用for循环的，感觉太麻烦，虽然代码容易读，但是我想对于一个想学习JS的人来说，尽量用方法应该是好的。

``` javascript?linenums
 let alphabetPosition = (text) => text
	 .toUpperCase()
	 .replace(/[^A-Z]/g, '')
	 .split('')
	 .map(ch => ch.charCodeAt(0) - 64).join(' ');

```

## 实际运用

看到js字符串转换为数字基本就用转换函数的比较多，
> js 字符串转换成数字  
> 常用的几种方法转换函数、强制类型转换、利用js变量弱类型转换。
>
- 转换函数
`parseInt("1234blue"); // returns 1234`
- 强制类型转换
`Boolean("hi"); //true – non-empty string`
- js变量弱类型转换
`var str = '012.345 ';var x = str - 0;x = x * 1;`

查资料发现，关于类型转换的还是比较多，但是我并没有感觉其中的区别和用的地方，可能是实际运用接触不多。但是关于字符和数字之间的转换在Nodejs中也是有体现。因此，觉得codewars的题目质量还真的挺不错，至少对于我这种初学者来说。每一道题目后面可能都是作者精心挑选出来的。所以，加油吧。
## 参考
- JavaScript权威指南(第6版)(中文版)
- JavaScript语言精粹(修订版) 中文版
- MDN(Mozilla Developer Network)
- [js字符串转换成数字][1]


  [1]: http://www.bkjia.com/article/24233.html#top