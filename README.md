### 文章备份

* master 为 hexo 页面样式仓库,hexoKey 为 hexo**备份**分支

> 如果仓库没有 hexoKey 则会创建

* 切换分支
  `git checkout hexoKey`

## 换机操作

> git clone https://github.com/lmislm/lmislm.github.io.git

> git pull origin hexoKey ----allow-unrelated-histories

> npm install hexo-deployer-git hexo
> npm install
> hexo clean
> hexo g

#### merge

> git add .
> git commit -m "finish"

### 文章写作

> layout: layout

> title: 标签 1

> date: 2017-08-18 15:41:18

> tags: 标签 1

> top: true # 置顶 sticky: 10 即可置顶，且显示图标，根据 Sticky 的大小来决定置顶顺序。

> keywords:

    - Hexo
    - 加密

description: 文章访问密码：password
password: password

#### 小书匠模板

```html
---
title: reversint
tags:
- xx
categories:
- xx
date:  <% print((new Date()).getFullYear().toString()+ '-'+ ((new Date()).getMonth() + 1).toString() + '-'+ (new Date()).getDate().toString()); %>
grammar_cjkRuby: true
---


<!--more-->
```

#### hexo 写作提交

* 将`.md` 文件存入`source/_posts/`
* 在主目录`lmislm.github.io`下， + $ `hexo g -d`
  * 也可以在这之前`hexo clean`

#### hexo 备份

* 在主目录`lmislm.github.io`下， + `git add .` + `git commit -m "提交备份"` - 或者是`git commit -am "提交"` + `git push -u origin master:hexoKey` + 提交到分支 hexoKey + 额外： + `git checkout hexoKey` 切换分支 + `git pull` updata 分支数据

#### next 主题更新

* 方法二
  `git remote add upstream git://github.com/iissnan/hexo-theme-next.git`

<!-- 然后按照这里 -->

https://blog.booml.cn/2018/03/05/git-progress/#more

> `cd ~/theme/next`
 > `git stash`
 > `git pull`

#### 主题配置

> \_config.yml 下的 post_meta：true 即可显示更新时间\\\手动添加更新时间 ：updated: 2018-03-19 10:35:18
