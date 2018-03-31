---
title: markdown-trick
tags:
* xx
categories:
* xx
date: 2018-03-31-20
---

## vscode snippets

### Ex: markdown snippets

> 以设置 markdown 代码片段为例

<!--more-->

#### [开启设置][1]

> 文件 > 首选项 > 设置

```json
"[markdown]":  {
    "editor.quickSuggestions": true
  }
```

#### [设置模板][2]

> 文件 > 首选项 > 用户代码片段 > markdown.json

```json
{
  "markdown write template": {
    "prefix": "mdrt",
    "body": [
      "--- $1",
      "title: $TM_FILENAME_BASE",
      "tags:",
      "* xx",
      "categories:",
      "* xx",
      "date: $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE-$CURRENT_HOUR",
      "--- ",
      " \n ",

      "<!--more--> $2"
    ],
    "description": "Create template for markdown write"
  }
}
```

#### 输出

```json
---
title: md-kill
tags:
* xx
categories:
* xx
date: 2018-03-31-20
---

<!--more-->
```

#### 参考

[Markdown Snippet Prefix Does Not Trigger Snippet #28048][1]
[Creating your own snippets][2]

[1]: https://github.com/Microsoft/vscode/issues/28048
[2]: https://code.visualstudio.com/docs/editor/userdefinedsnippets
