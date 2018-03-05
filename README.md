### 文章备份

+ master 为hexo 页面样式仓库,hexoKey 为hexo**备份**分支

+ 注意本地做了些修改提交到hexoKey分支：
`git push origin master:hexoKey`

>   如果仓库没有 hexoKey则会创建
+ 切换分支
`git checkout hexoKey`

+ 换机操作
	+ 下载hexoKey分支
	` npm install hexo-deployer-git hexo`
	`npm install`
	`hexo clean` 
	 `hexo g -d `
	 
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
	+  git checkout hexoKey 
		+  切换到hexoKey分支，配置备份分支
	+  git pull
		+  更新本地分支

 