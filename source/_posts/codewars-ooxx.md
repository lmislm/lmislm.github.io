---
title: codewars ooxx =>true
tags: 
- 编程
- js
categories: 
- 工作
- 

grammar_cjkRuby: true
---
### 前言
第二关 Yeah！目标6kyu，坚持升级~ ：）
* 这一关，考察几个基本方法的使用，虽然单独拿出来可能难度不大，但是真正运用在工作中的时候，这些方法可能如大海捞针，不熟练是一时半会儿想不出来的。
* 话不多说，呀呀呀，提枪上阵，
<!--more-->
### 题目描述
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contains any char.（0.0看不懂？往下戳）

### 例子

``` javascript?linenums
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
```
### 分析
题目大概意思就是： 在有限任意字符串中字符 `x` 和 `o` 存在且**数量相等**时 值为 `true`,否则当`x`和`o`不存在时，值为`flase`。
匹配的话，首先想到正则表达式来处理。
### 方法一
利用RegExp来匹配正则，然后再判断数量为空和数量是否相等。

``` javascript?linenums
function xo(str) {
    var numX = new RegExp(/x/gi);
    //g 全局搜索，i 忽略大小写
    var numO = new RegExp(/o/gi);
    if(numX.test(str)&&numO.test(str)){
        if(str.match(/x/gi).length == str.match(/o/gi).length){
            return true;
        }else{
            return false;
        }
    }else{
        return false;
    }
}
console.log(xo('xxoo'))
console.log(xo('glld'))
```
* 仔细一看，这种写法太麻烦。如何轻松取敌呢？

### 方法二
直接返回一个return，并在return中判断。
``` javascript?linenums
function xo(str) {
    var numX = str.match(/x/gi) || [];
    var numO = str.match(/x/gi) || [];

    return numO.length == numX.length;
}
```
#### 解析方法一方法二
* 什么鬼！这不同的方法有什么区别呢？？我来试着剖析下这两种方法究竟是何利器。来看看[MDN][1]是怎么说的？贴心的[MDN][2]还在[match][3]这一篇中对两者进行了比较。

> 1.[ RegExp][4] 构造函数创建了一个正则表达式对象，用于将文本与模式匹配。
> 2.当一个字符串与一个正则表达式匹配时， [match()][5]方法检索匹配项。
> 
##### 比较
> 如果正则表达式没有 g 标志，则 str.match() 会返回和 RegExp.exec() 相同的结果。而且返回的 Array 拥有一个额外的 input 属性，该属性包含被解析的原始字符串。另外，还拥有一个 index 属性，该属性表示匹配结果在原字符串中的索引（以0开始）。
##### 用法
> 如果你需要知道一个字符串是否匹配一个正则表达式 RegExp ，可使用 search() 。
如果你只是需要第一个匹配结果，你可能想要使用 RegExp.exec() 。
如果你想要获得捕获组，并且设置了全局标志，你需要用 RegExp.exec() 。

综上：大概就是这么吧~不用鸟我了，直接看文档吧~
### 方法三
方法三是在解答完之后查看他人的方法，大神们就是大神。对于各种用法如数家珍，信手拈来。

``` javascript?linenums
let x = str.match(/x/gi); 
let o = str.match(/o/gi);
return (x && x.length) === (o && o.length);
}
```

### 实际运用
* 这个`keyword`变量该如何转义呢？

``` javascript?linenums
function addHightLight(txt,keyword) {
    return txt.replace(/+keyword+/g,"<mark class=keyword>"+keyword+"</mark>");
}
```
答案是：

``` javascript?linenums

function addHightLight(txt,keyword) {
    txt = "咖啡" ;keyword = "机器";
    var va = new RegExp(keyword,"g");
    va = /\/咖啡\/g/{lastIndex:0}
    return txt.replace(va,"<mark class=keyword>"+keyword+"</mark>");
}

```
就到这里了~![image][6]


  [1]: https://developer.mozilla.org
  [2]: https://developer.mozilla.org
  [3]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
  [4]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Description
  [5]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match
  [6]: http://oapjp6spr.bkt.clouddn.com/196232.jpg