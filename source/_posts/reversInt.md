---
title: reversint
tags: 
- 编程
- JS
- Interview
categories: 
- 学习
date: 2018-03-19
grammar_cjkRuby: true
---

### 整数反转(reversint)

### 问题

> 给你一个带符号的整数，返回这些数值的倒序

> //例如

> // reverseint(1243) === 3421

<!--more-->

> // reverseint(123) === 321

> // reverseint(-12) === -21

> // reverseint(-10) === -1

### 方法二

```javascript
function reverseint(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(reversed) * Math.sign(n);
}
```

### 方法一

```javascript
function reverseint(n) {
  return (n =
    Math.abs(n)
      .toString()
      .split('')
      .reverse()
      .join('') * Math.sign(n));
}
```
