## Web标准

**1、Web标准包括三个方面：**

- 结构标准（HTML）：用于对网页元素进行整理和分类。
- 表现标准（CSS）：用于设置网页元素的版式、颜色、大小等外观样式。
- 行为标准（JS）：用于定义网页的交互和行为。
  根据上面的Web标准，可以将 Web前端分为三层，如下。
  **2、Web前端分三层：**
- HTML（HyperText Markup Language）：超文本标记语言。从语义的角度描述页面的结构。相当于人的身体组织结构。
- CSS（Cascading Style Sheets）：层叠样式表。从审美的角度美化页面的样式。相当于人的衣服和打扮。
- JavaScript（简称JS）：从交互的角度描述页面的行为，实现业务逻辑和页面控制。相当于人的动作，让人有生命力。

---

## 浏览器的组成

### 1.渲染引擎（浏览器内核）

- 渲染引擎是浏览器兼容性问题出现的根本原因。
- 浏览器所采用的「渲染引擎」也称之为「浏览器内核」，用于解析 HTML和CSS、布局、渲染等工作。渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。        

### 2.JS引擎
- 别称JS解释器。用来解析和执行网页中的Javascript代码

### 七大部分
1. User Interface（UI界面）：包括地址栏、前进/后退按钮、书签菜单等。也就是浏览器主窗口之外的其他部分。
2. Browser engine （浏览器引擎）：用来查询和操作渲染引擎。是UI界面和渲染引擎之间的桥梁。
3. Rendering engine（渲染引擎）：用于解析HTML和CSS，并将解析后的内容显示在浏览器上。
4. Networking （网络模块）：用于发送网络请求。
5. JavaScript Interpreter（JavaScript解析器）：用于解析和执行 JavaScript 代码。
6. UI Backend（UI后端）：用于绘制组合框、弹窗等窗口小组件。它会调用操作系统的UI方法。
7. Data Persistence（数据存储模块）：比如数据存储 cookie、HTML5中的localStorage、sessionStorage。