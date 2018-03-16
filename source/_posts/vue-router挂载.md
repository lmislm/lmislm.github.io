---
title: Vue 2.0 之 Vue-Router 路由挂载实例
tags: 
- 编程
- vue
categories: 
- 工作

grammar_cjkRuby: true
---
## 原因
* 在新出的vue 2.0中文档，挂载实例
<!--more-->
## 问题
* 在构建路由时，vue1.0 中应用map方法，而在2.0中取消了map方法，而快速的启用new router便可以建立。在vue1.0到vue2.0的迁移时，也带来了很多麻烦。
### 问题点

* **render: h => h(App)**
* 路由挂载的正确姿势
### 问题描述
* vue1.0中的实例很方便实现，而2.0中的实例模板并不是很好使用。
* [vue1.0中vue-router写法][1]、[vue2.0中vue-router写法][2]
### 问题解决
* vue2.0官网中：
	

``` javascript
// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 
Vue.use(VueRouter)
// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

```
* 实际案例写法

``` javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';

Vue.use(VueRouter);
//路由嵌套
const router = new VueRouter({
  routes: [{
    path: '/goods',
    component: goods
  }]
});

new Vue({
  router,
  render: h => h(App)
  //关键点，官网中没加，这个相当于ES6的写法
}).$mount('#app');
//默认去goods
router.push('goods');
```




  


  [1]: https://github.com/vuejs/vue-router/blob/1.0/docs/en/basic.md
  [2]: http://router.vuejs.org/zh-cn/essentials/getting-started.html