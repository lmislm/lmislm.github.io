---
title: codewars - - accm
tags: 
- 编程
- JS
categories: 
- 工作
- 面试

grammar_cjkRuby: true
---
## 前言 
* 最近在找实习啊，希望暑假有份合适的工作来填充暑假。就刷codewars。
我比较懒所以更新的可能比较慢。。
<!--more-->
### 题目描述
	This time no story, no theory. The examples below show you how to write function accum:
### 示例
	

``` javascript?linenums
 accum("abcd"); // "A-Bb-Ccc-Dddd" 
 accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy" 
 accum("cwAt"); // "C-Ww-Aaa-Tttt"
```
### 分析
* 大概意思就是递增的方式来重复每个字符再用依次拼接在一块儿，
确定用`join()`来拼接，用map方法来迭代，再把首字母转为大写，其余为小写
具体方法如下

### 解一
* 参考方法而之后发现这个并没有完全利用js中语法的特性，感觉在js学习中不可取
``` javascript
function accm(s){
	 s = s.toUpperCase().split("");
	 
    for(var i=0,l=s.length; i<l; i++) {

        var tmp = s[i].toLowerCase();

        for(var j=0; j<i; j++){
            s[i] += tmp;
        }
    }
    return s.join("-");
}
```
### 解决二

``` json?linenums
function accm(s){
//分割。再map方法查询，再转换大小写
	return s.split('').map( (x,index) => x.toUpperCase() + Array(index+1).join(x.toLowerCase())).join('-');
}
```
### 解决三  
* 在方法一上，进行简化，但是没有方法二更简单

``` javascript?linenums
function accum(s){
    var letter = s.split('');
    var result = [];
    for(var i=0;i<letter.length;i++){
        result.push(letter[i].toUpperCase()+Array(i+1).join(letter[i].toLowerCase()));
    }
    return result.join('_');
}
//输出
accum('fds')
F_Dd_Sss

```


### 总结
在平时的学习中能多用到所学知识是最好的，如果混合方法写，不利于学习。
