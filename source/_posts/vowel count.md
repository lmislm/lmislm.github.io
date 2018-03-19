---
title: Vowel Counts
tags: 
- 编程
- js
- codewars
categories: 
- 工作
date: 2017-04-02 21:41:18
grammar_cjkRuby: true
---

统计字符串中的特定字符的数量。主要是方法的优化:

<!--more-->

## 1. 题目

> Description:

> Return the number (count) of vowels in the given string.

> We will consider a, e, i, o, and u as vowels for this Kata.

## 2. 例子

* 测试数据

```javascript?linenums
//Example test:
describe("Case 1", function(){
    it ("should be defined", function(){
        Test.assertEquals(getCount("abracadabra"), 5)
    });
});
```

## 3. 分析

* 第一眼就想到是可以从头依次查找的。能想到用 c，java 等都是利用 for 循环来处理。
* 其次，JS 中想到的是字符串匹配，利用正则表达式对特定字符串遍历。然后输出匹配字符的 length。 \* 利用字符串的原型方法`String.prototype.match()`,语法`str.match(regxp)`
* 后面再总结一下，**string 类方法 match(regex)** **和 RegExp 类方法 exec(string)**

## 4. 解题

### 4.1 最优化：

```javascript?linenums
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}
```

### 4.2 “多语言”解

非常的直白啊，感觉都没有一点艺术。。

```javascript?linenums
function getCount(str) {
    var vowelsCount = 0;
        var a = ['a','e','i','o','u'];
        for(var i=0; i<str.length; i++){
            for(var j=0;j<a.length; j++){
                if(a[j]===str[i]){
                    vowelsCount ++;
                }
            }
        }
    return vowelsCount;
}
```

### 4.3 优化

用`indexof`来减少 for 循环。

```javascript?linenums
function getCount(str) {
    var vowelCount = 0;
    var a = ['a','e','i','o','u'];
    for(var i=0;i<str.length; i++){
        if((a.indexOf(str[i]))!==-1){
            vowelCount ++;
        }
    }
    return vowelCount;
}
```

## 总结

### match（regexp）和 exec()

* 关于这两个的讨论，感觉说破天也没有 MDN 上说得好啊。:>
