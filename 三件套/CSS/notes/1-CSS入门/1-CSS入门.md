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