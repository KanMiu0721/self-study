# 向文档添加CSS
一共有三种常见的 CSS 应用到 HTML 文档的方法——外部样式表、内部样式表和内联样式

## 外部样式表
外部样式表包含一个带有.css扩展名的独立文件中的CSS。这是将 CSS 带入文档的最常见且最有用的方法。可以将一个CSS文件链接到多个网页，并用相同的CSS样式表进行样式化

在HTML文档同一个文件夹里创建一个文件，并保存为styles.css

要将styles.css链接到index.html，请在HTML文档`<head>`内添加以下一行：
```
<link rel="stylesheet" href="styles.css" />
```
这个`<link>`元素告诉浏览器有一个样式表（使用rel属性），以及该样式表的位置作为href属性的值

### 在不同位置定位样式表
在上面的例子中，CSS 文件和 HTML 文档在同一个文件夹里，但可以把它放在别处，并像 HTML 图片一样调整路径
```
<!-- In a subdirectory called styles in the current directory -->
<link rel="stylesheet" href="styles/style.css" />

<!-- In a subdirectory called general, which is in a subdirectory called styles, in the current directory -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Go back one directory level, then in a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css" />
```
## 内部样式表
内部样式表包含在`<style>`元素中，这些元素置于HTML的 `<head>`中

在某些情况下，内部样式表是有用的。例如，使用一个内容管理系统，无法修改外部CSS文件

## 内联风格
内联样式是影响单个 HTML 元素的 CSS 声明，该元素包含在 style 属性内
```
<span style="color: purple; font-weight: bold">span element</span>
```
如果可能的话，尽量避免以这种方式使用 CSS

# 使用常用选择器

## 选择HTML元素
元素选择器（也称为类型选择器）:一个直接匹配HTML元素名称的选择器
```
p {
  color: green;
}
```

可以通过逗号分隔多个选择器来同时针对它们
```
p,
li {
  color: green;
}
```

## 添加类
如果要选择部分元素而不更改其他元素，可以在 HTML 元素中添加一个class，并在 CSS 中针对该类
```
HTML

Copy
<ul>
  <li>Item one</li>
  <li class="special">Item two</li>
  <li>Item <em>three</em></li>
</ul>

CSS

.special {
  color: orange;
  font-weight: bold;
}
```
## 根据文档中的位置来样式
有时候会希望某样东西根据文档中的位置看起来不同

文档中，有两个`<em>`元素——一个在段落内，另一个在列表项内。要只选择嵌套在`<li>`元素中的`<em>`，可以使用一个称为后代组合器的选择器，它以两个其他选择器之间的**空格**形式出现。
```
li em {
  color: rebeccapurple;
}
```

还可以尝试在HTML中同一层级的标题后面，给段落做样式。为此，在选择器之间放置一个+（结果是对后面那个元素进行修饰）
```
h1 + p {
  font-size: 200%;
}
```

## 基于状态的样式
最后一种造型类型是能够根据物品的状态进行造型

为链接做样式时，需要针对`<a>`（锚点）元素。根据未访问、访问、悬停、键盘聚焦，或点击（激活）过程中，该状态不同。

可以用 CSS 来针对这些不同的状态——下面的 CSS 将未访问链接样式为粉色，访问链接为绿色
```
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```
可以在用户鼠标悬停时改变链接的外观，例如移除下划线
```
a:hover {
  text-decoration: none;
}
```

## 组合选择器和组合器的结合
可以将多个选择器和组合器组合在一起
```
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span {
}

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p {
}
```
也可以将多种类型组合在一起
```
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

# 函数
虽然大多数值是相对简单的关键词或数值，但也有一些值以函数的形式存在

## The calc()函数
它可以在CSS中进行简单的数学运算
```
HTML:

<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>

CSS:

.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

## Transform函数
还有着transform属性的各种值，如rotate()
```
HTML:

<div class="box"></div>

CSS:

.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

# @rules
CSS @rules（发音为“at-rules”）提供 CSS 应如何表现的指令。你很可能会遇到的一个常见@rule是@media，用于创建媒体查询

类似c++中的if等条件判断
```
body {
  background-color: pink;
}

@media (width >= 30em) {
  body {
    background-color: blue;
  }
}
```

# 简写属性
一些属性如font、background、padding、border和margin被称为简写属性。这是因为简写属性会在一行中设置多个值

比如，这行代码：
```
padding: 10px 15px 15px 5px;
```
等价于以下四行代码：
```
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

```
background: red url("bg-graphic.png") 10px 10px repeat-x fixed;
```
等价于
```
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

# CSS注释
CSS评论以/*开头，以*/结尾；
有了这种注释功能，在代码编辑器中搜索注释就成了高效找到代码段落的一种方式

# CSS 中的空白空间:
正如浏览器会忽略HTML中的额外空白，浏览器也会忽略CSS内部的额外空白

但是请注意，一些空白变化可能导致错误。属性名称绝不包含空白，而期望多个值之间有空白的属性值如果移除该空间，则无效