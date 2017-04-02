---
title: Steps
tags: 
- 编程
- acm
- 
categories: 
- 工作

grammar_cjkRuby: true
---
## POj No.2590  Steps
### 题目
在数轴上的两点之间，按照下面规则移动。
* 每一步的步幅都要是自然数，同时必须与前一步幅相同或者是差1。
* 每一步和最后一步的步幅必须是1。
当给出两点位置的时候，请回答从第一个点移动到第二点需要的最小步数。 
<!--more-->
### 输入和输出
测试数据个数n、开始地点x以及终点y（0<=x<=y<2^31^),格式如下：
> n
> x~1~ y~1~
> x~2~ y~2~
> ...
> x~n~ y~n~

* 输入
> 3
> 45 48
> 45 49
> 45 50

* 输出
> 3
> 3
> 4

### 代码

``` cpp c
#include<stdio.h>
int main(){
	int step, i,len;
	
	for(step=0;step<20;++step){
		len=0;
		//求得一半为止的步数
		//		步数是奇数就加1
		int mid=step/2+step%2;
		
		//求出1+2+3+...到中间地点为止的合计
		for(i=1;i<=mid;++i) len+=i;
		
		//从中间地点开始计算...+3+2+1
		for(i=step/2;i>0;--i) len+=i;
		
		printf("%2d step(s)...%3d\n",step,len);
	} 
} 
```

### 解决思路
> 画图找规律



