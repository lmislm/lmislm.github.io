master 为hexo 页面样式仓库
hexoKey 为hexo备份分支

+ 注意本地做了些修改提交到hexoKey分支：
`git push origin master:hexoKey`

>   如果仓库没有 hexoKey则会创建
+ 切换分支
`git checkout hexoKey`

+ 换机操作
	+ 下载hexoKey分支
	+ npm install hexo-deployer-git hexo
	+ npm install

	+ hexo clean 
	+ hexo g -d 