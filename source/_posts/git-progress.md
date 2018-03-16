---
title: Git 仓库合并（实例）
tags: 
- git
- 编程
categories: 
- 学习
grammar_cjkRuby: true
---

最近想着整理一下github 上一些零散的代码到同一个库中，问题是如何合并两个仓库并且保留每个文件的提交记录？如果只是两个目录并为一个，不需保留每个库的提交的记录，你只要在本地A仓库中clone B再提交就行，而本文所做的就是实践这个过程，参考的博客在文末。

<!--more-->
####  目的 
+ 合并两个库/提交记录

#### 准备
+ 本地环境Windows os ,所有均在命令git bash中操作
+ 远程仓库 A,如图左，远程仓库B,如图右。

|     |     |
| --- | --- |
|   ![enter description here][1]     |  ![enter description here][2]    |

#### 实践
+ clone 到本地
`git clone https://github.com/lmislm/Code_Repository.git`
+ [添加远程仓库][3]
  - ` cd Code_Repository/ `
 
  - `git remote add -f CSS_Ex git://github.com/lmislm/CSS_Ex.git`
     - 添加一个新的远程仓库，指定一个简单的名字，以便将来引用，运行 `git remote add [shortname] [url]：`
  + `git merge --strategy ours --no-commit CSS_Ex/master`
	  + 可能报错`fatal: refusing to merge unrelated histories`忽略就行。
	  +   [**ours**][4] 选项强制冲突由‘our’版本自动解决，即：来自其他分支树不会影响到我们这边映射到合并的结果。
	  +  > 即忽略冲突只保留**Code_Repository**文件树并且把 **CSS_Ex**的历史记录合并进来。

  +  `git remote -v`
	  +  此命令将全部列出远程仓库。检查一下是否存在
  +  `git read-tree --prefix=css/ -u CSS_Ex/master`
	  +  `--prefix=css/`：这里Code_Repository/目录下有css/子目录
	  +  > --prefix 用于指定文件树读取后保存的路径，相对于当前路径并且一定要追加 /
	   --no-commit 的原因，[该选项会在合并解析完成后中断，停留在最后的提交步骤之前。][5]
	   
	+ `git read-tree --prefix=css/ -u  CSS_Ex/master`
		+  > -u 是说在读取后更新 index，使得 working tree 与 index 保持同步
	
	+  `git commit -m "finish,迁移CSS_Ex到了Code_Repository/css/下"`
	+  `git add .`
	+  `git commit -m "迁移完成"`
	+  `git push -u origin master`

#### 结果

|     |  
| --- | 
|  ![enter description here][6]   |  

#### 后记

+ 在操作完成之后确实实现了合并到同一个仓库，但是**并没有预期的结果**，没有完美的合并提交记录。多次操作之后，将一些零散的东西合并到了同一个仓库。但是原来的仓库还是存在的。如果将原来零散的仓库删除。可以看到结果中，`a year ago`，历史提交记录确实存在，但是其他`flex_Ex`显示的却是在进行这个合并操作时提交的时间。

#### 参考
 [如何用 Git 合并两个库（合并历史记录，解决冲突／改写路径）][7]
 [Merging Git Repositories and Preserving History][8]
 [ Git 基础 - 远程仓库的使用][9]
 [MERGE STRATEGIES​ - ours][10]
 [git read-tree][11]


  [1]: https://i.imgur.com/NWbZygn.png
  [2]: https://i.imgur.com/FidxLZc.png
  [3]: https://git-scm.com/book/zh/v1/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8
  [4]: https://git-scm.com/docs/merge-strategies#merge-strategies-ours
  [5]: https://segmentfault.com/a/1190000000678808
  [6]: https://i.imgur.com/QNW1boS.png
  [7]: https://segmentfault.com/a/1190000000678808
  [8]: https://mlichtenberg.wordpress.com/2015/08/28/merging-git-repositories-and-preserving-history/
  [9]: https://git-scm.com/book/zh/v1/Git-%E5%9F%BA%E7%A1%80-%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93%E7%9A%84%E4%BD%BF%E7%94%A8
  [10]: https://git-scm.com/docs/merge-strategies#merge-strategies-ours
  [11]: https://git-scm.com/docs/git-read-tree