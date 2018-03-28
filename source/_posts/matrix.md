---
title: matrix
tags: 
- 编程
- JS
- Interview
categories: 
- 学习
date:  2018-3-28
grammar_cjkRuby: true
---

### 矩阵

> 写一个函数，输入数字 N,返会一个 N\*N 的矩阵(环序)。

<!--more-->

#### 例如

```javascript
// matrix(2)
//      [[1, 2],
//       [3, 4]]
// matrix(3)
//      [[1, 2, 3],
//       [8, 9, 4],
//       [7, 6, 5]]
```

#### 代码

```javascript
function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    //顶列开头到结尾
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;
    //最右列
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // 底部行
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start 列
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}
```

#### 测试

```javascript
const matrix = require('./index');

test('matrix 函数已定义', () => {
  expect(typeof matrix).toEqual('function');
});

test('matrix produces a 2x2 array', () => {
  const m = matrix(2);
  expect(m.length).toEqual(2);
  expect(m[0]).toEqual([1, 2]);
  expect(m[1]).toEqual([4, 3]);
});

test('matrix produces a 3x3 array', () => {
  const m = matrix(3);
  expect(m.length).toEqual(3);
  expect(m[0]).toEqual([1, 2, 3]);
  expect(m[1]).toEqual([8, 9, 4]);
  expect(m[2]).toEqual([7, 6, 5]);
});

test('matrix produces a 4x4 array', () => {
  const m = matrix(4);
  expect(m.length).toEqual(4);
  expect(m[0]).toEqual([1, 2, 3, 4]);
  expect(m[1]).toEqual([12, 13, 14, 5]);
  expect(m[2]).toEqual([11, 16, 15, 6]);
  expect(m[3]).toEqual([10, 9, 8, 7]);
});
```
