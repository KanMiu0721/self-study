## HTML相关概念
HTML 全称为 HyperText Markup Language，译为超文本标记语言。

HTML 不是一种编程语言，是一种描述性的标记语言。

作用：HTML是负责描述文档语义的语言。
### 标记语言
HTML 不是一种编程语言，是一种描述性的标记语言。这主要有两层含义：

（1）标记语言是一套标记标签。比如：标签< a>表示超链接、标签<  img>表示图片、标签< h1>表示一级标题等等，它们都是属于 HTML 标签。
> 正常<>中是没有空格的

说的通俗一点就是：网页是由网页元素组成的，这些元素是由 HTML 标签描述出来，然后通过浏览器解析，就可以显示给用户看了。

（2）编程语言是有编译过程的，而标记语言没有编译过程，HTML标签是直接由浏览器解析执行。

---

### XHTML
XHTML介绍： XHTML：Extensible Hypertext Markup Language，可扩展超文本标注语言。 XHTML的主要目的是为了取代HTML，也可以理解为HTML的升级版。 HTML的标记书写很不规范，会造成其它的设备(ipad、手机、电视等)无法正常显示。 XHTML与HTML4.0的标记基本上一样。 XHTML是严格的、纯净的HTML

---

### HTML专有名词
- 网页 ：由各种标记组成的一个页面就叫网页。 
- 主页(首页) : 一个网站的起始页面或者导航页面。
- 标记： 比如`<p>`称为开始标记 ，`</p>`称为结束标记，也叫标签。每个标签都规定好了特殊的含义。
- 元素：比如`<p>`内容`</p>`称为元素.
- 属性：给每一个标签所做的辅助信息。
- XHTML：符合XML语法标准的HTML。
- DHTML：dynamic，动态的。javascript + css + html合起来的页面就是一个 DHTML。
- HTTP：超文本传输协议。用来规定客户端浏览器和服务端交互时数据的一个格式。SMTP：邮件传输协议，FTP：文件传输协议。

---

## HTML结构详解
HTML标签通常是成对出现的（双边标记），比如 < div> 和 < /div>；也有少部分单标签（单边标记），如：< br />、< hr />和< img src="images/1.jpg" />等。
> 正常<>中是没有第一个空格的

属性与标记之间、各属性之间需要以空格隔开。属性值以双引号括起来

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>

</body>
</html>


```

### html骨架标签分类
- `<html>``</html>`	HTML标签	页面中最大的标签，我们成为根标签
- `<head>``</head>`	文档的头部	注意在head标签中我们必须要设置的标签是title
- `<title>``</title>`	文档的标题	让页面拥有一个属于自己的网页标题
- `<body>``</body>`	文档的主体	元素包含文档的所有内容，页面内容 基本都是放到body里面的

### 1. 文档声明头(DTD)
任何一个标准的HTML页面，第一行一定是一个以`<!DOCTYPE ……>`开头的语句。这一行，就是文档声明头，即 DocType Declaration，简称DTD。
DTD可告知浏览器文档使用哪种 HTML 或 XHTML 规范。

#### 三种规范:
**strict**：
表示“严格的”，这种模式里面的要求更为严格。这种严格体现在哪里？有一些标签不能使用。 比如，u标签，就是给一个本文加下划线，但是这和HTML的本质有冲突，因为HTML最好是只负责语义，不要负责样式，而u这个下划线是样式。所以，在strict中是不能使用u标签的。

那怎么给文本增加下划线呢？今后将使用css属性来解决。

XHTML1.0更为严格，因为这个体系本身规定比如标签必须是小写字母、必须严格闭合标签、必须使用引号引起属性等等。

**Transitional**：
表示“普通的”，这种模式就是没有一些别的规范。

**Frameset**：
表示“框架”，在框架的页面使用。

### 2. 根元素`<html>`和页面语言lang
`<html>`元素包裹整个页面的所有内容
```
<html lang="en">
```
这段代码用于指定页面的语言类型
最常见的语言类型有两种：
- en：定义页面语言为英语。
- zh-CN：定义页面语言为中文。

### 3. 头标签head
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<meta name="Author" content="">
    <meta name="Keywords" content="厉害很厉害" />
    <meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
    <title>Document</title>
</head>
<body>

</body>
</html> 
```
- 网页的head标签里面，表示的是页面的配置，有什么配置？

- 答：字符集、关键词、页面描述、页面标题、IE适配、视口、iPhone小图标等等。

#### 头标签内部的常见标签:
- `<title>`：指定整个网页的标题，在浏览器最上方显示。
- `<base>`：为页面上的所有链接规定默认地址或默认目标。
- `<meta>`：提供有关页面的基本信息
- `<body>`：用于定义HTML文档所要显示的内容，也称为主体标签。我们所写的代码必须放在此标签內。
- `<link>`：定义文档与外部资源的关系

#### meta标签:
meta表示“元”。“元”配置，就是表示基本的配置项目。

常见的几种 meta 标签如下：

*（1）字符集 charset：*

```
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

字符集用meta标签中的charset定义，charset就是character set（即“字符集”），即网页的编码方式。

字符集(Character set)是多个字符的集合。计算机要准确的处理各种字符集文字，需要进行字符编码，以便计算机能够识别和存储各种文字。

上面这行代码非常关键， 是必须要写的代码，否则可能导致乱码。比如你保存的时候，meta写的和声明的不匹配，那么浏览器就是乱码。

*（2）视口 viewport：*
```
<meta name="viewport" content="width=device-width">
```
width=device-width ：表示视口宽度等于屏幕宽度。

*（3）定义“关键词”：*

举例如下：
```
<meta name="Keywords" content="网易,邮箱,游戏,新闻,体育,娱乐,女性,亚运,论坛,短信" />
```
这些关键词，就是告诉搜索引擎，这个网页是干嘛的，能够提高搜索命中率。让别人能够找到你，搜索到你。

*（4）定义“页面描述”：*
```
<meta name="Description" content="网易是中国领先的互联网技术公司，为用户提供免费邮箱、游戏、搜索引擎服务，开设新闻、娱乐、体育等30多个内容频道，及博客、视频、论坛等互动交流，网聚人的力量。" />
```

meta除了可以设置字符集，还可以设置关键字和页面描述。

只要设置Description页面描述，那么百度搜索结果，就能够显示这些语句，这个技术叫做SEO（search engine optimization，搜索引擎优化）。

*(5)特殊标签:*
```
<meta http-equiv="refresh" content="3;http://www.baidu.com">
```
上面这个标签的意思是说，3秒之后，自动跳转到百度页面。

#### title标签：
用于设置网页标题：

	<title>网页的标题</title>
title标签也是有助于SEO搜索引擎优化的。

#### base标签
    <base href="/">

base 标签用于指定基础的路径。指定之后，所有的 a 链接都是以这个路径为基准。

### 4. <body>标签
< body>标签的属性有：

- bgcolor：设置整个网页的背景颜色。
- background：设置整个网页的背景图片。
- text：设置网页中的文本颜色。
- leftmargin：网页的左边距。IE浏览器默认是8个像素。
- topmargin：网页的上边距。
- rightmargin：网页的右边距。
- bottommargin：网页的下边距。

```
<body link="red" alink="blue" vlink="green">
     <a href="#">点我</a>
     <br>
     哈哈
```

上方代码中，当我们对点我点我这几个字使用超链时
- link属性表示默认显示的颜色
- alink属性表示鼠标点击但是还没有松开时的颜色
- vlink属性表示点击完成之后显示的颜色。

>⭐**以上的设置颜色方法已经过时，应该使用CSS，这里只是作为了解**

### 中文使用的字符集：
1. 第一种：UTF-8。UTF-8是国际通用字库，里面涵盖了所有地球上所有人类的语言文字，比如阿拉伯文、汉语、鸟语……

2. 第二种：GBK（对GB2312进行了扩展）。gb2312 是国标，是中国的字库，里面仅涵盖了汉字和一些常用外文，比如日文片假名，和常见的符号。

#### 重点：避免乱码

我们用meta标签声明的当前这个html文档的字库，一定要和保存的文件编码类型一样，否则乱码（重点）。

#### 比较：

- UTF-8：字多，有各种国家的语言，但是保存尺寸大，文件臃肿
- gb2312：字少，只用中文和少数外语和符号，但是尺寸小，文件小巧
## HTML的规范
- HTML不区分大小写，但HTML的标签名、类名、标签属性、大部分属性值建议**统一用小写**。
- HTML页面的后缀名是html或者htm(有一些系统不支持后缀名长度超过3个字符，比如dos系统)
###   1.编写XHTML的规范
- （1）所有标记元素都要正确的嵌套，不能交叉嵌套。正确写法举例：< h1>< font>< /font>< /h1>
- （2）所有的标记都必须小写。

- （3）所有的标签都必须闭合。

- 双标签：< span>< /span>

- 单标签：< br> 建议写成 < br /> < hr> 建议转成 < hr />，还有< img src=“URL” />

- （4）所有的属性值必须加引号。< font  color="red">< /font>

- （5）所有的属性必须有值。< hr noshade="noshade">、< input  type="radio" checked="checked" />

- （6）XHTML文档开头必须要有DTD文档类型定义。
### 2、HTML的基本语法特性
- （1）HTML对换行不敏感，对tab不敏感：
- 
    HTML只在乎标签的嵌套结构，嵌套的关系。谁嵌套了谁，谁被谁嵌套了，和换行、tab无关。

    也就是说，HTML不是依靠缩进来表示嵌套的，而是看标签的嵌套关系。

- （2）空白折叠现象：

    HTML中所有的文字之间，如果有空格、换行、tab都将被折叠为一个空格显示。

- （3）标签要严格封闭
>HTML5 时代（现在）：HTML5 抛弃了这种死板的严格性，它规定单标签不需要自我闭合。所以现在写 < img>、< br>、< input> 才是最标准的现代写法

