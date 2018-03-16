---
title: acm基础--POJ No.1003 Hangover
tags: 
- 编程
- 日志
- acm poj
categories: 
- 学习
grammar_cjkRuby: true
---

## 关于运算符号的思考（acm热身）
### POJ No.1003 Hangover
> input：
> 1.00
> 3.71
> output：
> 3 card(s)
> 61 card(s)


<!--more-->

```cpp c
#include<stdio.h>
main()
{
    int n;
    float a,b;
    while(scanf("%f",&b)==1)
    {
    	if(b==0.0)break;
    	a=0.0;
    	for(n=1;a<b;++n) a+=1.0/(float)(n+1);
    	printf("%d" card(s) \n",n-1);
    }
}
```


#### 逗号运算符号

>***while(scanf("%f",&b)==1)***
> compare to 
> ***while(scanf("%f",&b),b)***
> 结束条件等价于***b!=0***即使b的值为0.000001f,0.00001
> f!=0为真，也不会结束循环。所以写法(*，b）非常重要

#### 强制类型转换

> 直接用(float)转换为int类型，简单点就写成
> ***for(n=1;al；)***

#### 减少变量

> 省略int类型将n写入main（），但是有的编译器并不能通过。所以为了简单清晰，还是不要用的好。

#### 尽量多用for循环
**直接缩成一行**
```
 其中包含n省略在main
 main(n)
 {
 float b;
 for(;scanf("%f",&b),b;printf("%d card(s)\n",n-1))
 	for(n=1;b>0;)b-=1./++n;
 } 
```
