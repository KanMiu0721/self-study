## 基本内置终端命令：
- 调整目录（文件夹）结构：cd
- 创建目录：mkdir
- 创建文件（并修改其元数据）：touch
- 复制文件或目录：cp
- 移动文件或目录：mv
- 删除文件或目录：rm
- 在特定URL下载文件：curl
- 在较大的文本体中搜索文本片段：grep
- 逐页查看文件目录： ，lesscat
- 作和转换文本流（例如将HTML文件中所有s实例改为：， ，`<div><article>`awktrsed

### 命令行导航 cd：

- ``cd ..``要回到上一个目录

#### 相对路径/绝对路径：
-  没有前斜杠 = 相对路径

    cd Desktop/project/src

```
含义：“从我现在站的地方出发”。

假设你现在在 /Users/your-name (用户主目录)。电脑会想：“好，我现在在 your-name 里，我要找 Desktop 文件夹... 找到了！然后找 project... 找到了！”
```
- 有前斜杠 = 绝对路径

    cd /Users/your-name/Desktop/project/src

```
只要看到开头的 /，电脑就会忽略你当前的位置，直接跳到硬盘的最顶层（根目录 /）。
然后按顺序找：Users -> your-name -> Desktop ...
```

### 目录目录列表
作用：列出你当前所在目录的内容

### 引入命令选项
大多数终端命令都有选项——这些是你在命令末尾添加的修饰符，使命令的行为略有不同。这些字母通常由命令名称后面的空格、破折号和一个或多个字母组成。

### 创建、复制、移动、删除:
- mkdir—— 这会在你当前所在的目录中创建一个新目录，命令名称后面是你提供的名字。例如，将创建一个名为 的新目录。mkdir my-awesome-websitemy-awesome-website
- rmdir—— 移除命名目录，但仅当该目录为空时。例如，会移除我们上面创建的目录。如果你想删除一个不空的目录（同时移除它包含的所有内容），也可以用替代（见下文），但这很危险。确保目录里没有你以后可能需要的东西，否则它会永远消失。rmdir my-awesome-websiterm -r
- touch——在当前目录内创建一个新的空文件。例如，创建一个新的空文件，称为 。touch mdn-example.mdmdn-example.md
mv—— 将文件从第一个指定的文件位置移动到第二个指定文件位置，例如（这些位置以文件路径形式写入）。该命令将当前目录中调用的文件移动到当前目录中调用的文件。技术上文件是被移动的，但从实际操作角度看，这个命令实际上是在重命名文件。mv mdn-example.md mdn-example.txtmdn-example.mdmdn-example.txt
- cp—— 在用法上类似于，在第一个指定位置创建文件副本，在第二个指定位置创建文件副本。例如，创建一个 的复制品 called （当然你可以选择别的名字）。mvcpcp mdn-example.txt mdn-example.txt.bakmdn-example.txtmdn-example.txt.bak
- rm—— 删除指定的文件。例如，删除一个名为 的单一文件。请注意，这种删除是永久的，无法通过你桌面用户界面上的回收站来撤销。rm mdn-example.txtmdn-example.txt