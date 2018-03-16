---
title: codewars-count_digits
tags: 
- 编程
- 
categories: 
- 工作

grammar_cjkRuby: true
---

## 题目
> Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. 
<!--more-->
> Count the numbers of digits d used in the writing of all the k* *2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

## 例子
* n = 10, d = 1,
	 the k * k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 We are using the digit 1 in 1, 16, 81, 100. 
* The total count is then 4.
     nb_dig(25, 1): 
   the numbers of interest are 1, 4, 9, 10, 11, 12, 13, 14, 19, 21
   which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441 so there are 11 digits `1` for the squares of numbers between 0 and 25.

## 分析
* 给出`n`和`d`，求0到n中间的平方，再求这些平方的平方，问所得的这些数中包含多少个数字`d`。
大概就是先算出这些数字的平方，然后挨个分解求出其中的值。
## 解题
```javascript?linenums
function nbDig(n,d) {
    var s = '';
    for(var i=0;i<=n;i++){
        s += Math.pow(i,2);
    }
    return s.split(d).length-1
}
```

## 牢骚篇
今天，进了个群，挺多厉害的人，还私聊了一个有很多offer的同学。顿时觉得，自己就是渣渣啊，一点信心都没有。还是得加油吧，要学的东西还很多啊。
![累啊][1]


  [1]: https://ooo.0o0.ooo/2017/03/20/58cfd648e6d0a.jpg