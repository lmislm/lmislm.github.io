---
title: 深度优先算法-部分和问题
tags: 
- 编程
- oj
categories: 
- 学习
grammar_cjkRuby: true
---
## 题目
### 给定整数a~1~,a~2~ ,...,a~n~，判断是否可以从中选出若干数，使他们的和恰好为k。

<!--more-->

限制条件
* 1≤ n ≤20
* -10^8^ ≤ a~i~ ≤ 10^8^
* -10^8^ ≤ k ≤ 10^8^
输入
* n=4
* a={1,2,4,7}
* k=13
输出
yes （13 = 2 + 4 + 7）

## 分析
### 利用最简单的递归，可以先画出深度优先的树

## 代码 

``` cpp c++
#include<iostream>
using namespace std;
const int MAXNUM = 20;
// 输入 
int arr[MAXNUM];
int n, k;

void input_data(int *n, int *k, int *arr)
{
    cout << "n = ";
    cin >> *n;
    cout << "a = {";
    for (int i = 0; i < *n; i++){
        cin >> arr[i];
        cin.get();
        cin.get();
    }
    cout << "k = ";
    cin >> *k;
}
 
 //已经从前n项得到了和sum，然后对于i项之后的分支 

bool dfs(int i, int sum)
{	
//	如果前n项都计算过了，则返回sum是否与k相等 
    if (i == n) return sum == k;
//    不加上a[i]的情况 
    if (dfs(i+1, sum)) return true;
//    加上a[i]的情况 
    if (dfs(i+1, sum+arr[i])) return true;
// 无论是否加上a[i],都不能凑成k就返回false 
    return false;
}
 
void solve()
{
    if (dfs(0, 0))
        cout << "Yes" << endl;
    else
        cout << "No" << endl;   
}
 
int main()
{
    input_data(&n, &k, arr);
 
    solve();
 
    return 0;
}
```




