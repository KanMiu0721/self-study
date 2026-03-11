## 文件处理（new）
### 文件路径：
即相对路径（Relative Path）

简单来说，这就像是在给浏览器指路。浏览器现在停在你的 index.html 门口，你需要告诉它怎么走才能找到图片。

1. 场景一：图片在“楼下”（子文件夹）
这是最常见的结构。你的 index.html 旁边有一个叫 images 的文件夹，图片就在里面。

目录结构：
```
项目文件夹/
├── index.html
└── images/
    └── firefox-icon.png
```
你的位置：index.html

指路逻辑：先进 images 文件夹，再找 firefox-icon.png。

    写法：<img src="images/firefox-icon.png">

2. 场景二：图片在“隔壁”（同级目录）

图片和 HTML 文件并排躺在同一个文件夹里。

目录结构：
```
项目文件夹/
├── index.html
└── my-image.jpg
```
指路逻辑：直接喊名字。

    写法：<img src="my-image.jpg">

1. 场景三：图片在“楼上”（父级目录）
这个最难理解，也就是你看到的 ../

目录结构：
```
项目根目录/
├── my-image.jpg
└── v1/
    └── index.html
```
你的位置：v1 文件夹里的 index.html。

指路逻辑：先跳出当前的 v1 文件夹（回到上一级），然后在那里找图片。

符号含义：.. 代表“返回上一层”，/ 是分隔符。

    写法：<img src="../my-image.jpg">