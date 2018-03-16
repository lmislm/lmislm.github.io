### 文章备份

+ master 为hexo 页面样式仓库,hexoKey 为hexo**备份**分支

>   如果仓库没有 hexoKey则会创建
+ 切换分支
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

> title: 标签1

> date: 2017-08-18 15:41:18

> tags: 标签1

> keywords:
    - Hexo
    - 加密   

description: 文章访问密码：password
password: password

#### hexo 写作提交
+ 将`.md` 文件存入`source/_posts/`
+ 在主目录`lmislm.github.io`下，
	+ $ `hexo g -d`     
		+ 也可以在这之前`hexo clean`
#### hexo 备份
+  在主目录`lmislm.github.io`下，
	+  `git add .`
	+  `git commit -m "提交备份"`
		- 或者是` git commit -am "提交"`
	+  `git push -u origin master:hexoKey`
		+  提交到分支hexoKey
	+  额外：
		+  `git checkout hexoKey` 切换分支
		+  `git pull`  updata 分支数据

#### next主题更新 

+ 方法二
`git remote add upstream git://github.com/iissnan/hexo-theme-next.git`

<!-- 然后按照这里 -->
https://blog.booml.cn/2018/03/05/git-progress/#more


> ` cd ~/theme/next`
` git stash ` 
` git pull ` 