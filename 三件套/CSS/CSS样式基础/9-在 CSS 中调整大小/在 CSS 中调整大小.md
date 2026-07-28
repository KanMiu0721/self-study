# 原始尺寸，或固有尺寸
在受 CSS 设置影响之前，HTML 元素有其原始的尺寸。一个直观的例子就是图像。一幅图像的长和宽由这个图像文件自身确定。这个尺寸就是固有尺寸。

如果你把图片放置在网页中的时候没有在 `<img>` 标签或 CSS 中设置其尺寸，那么将使用其固有尺寸显示
```
html:

<img
  alt="star"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />

css:

img {
  border: 5px solid darkblue;
}
```
一个空的 `<div>`是没有尺寸的。如果在HTML文件中添加一个空 `<div>`并给予其边框，会在页面上看到一条线。这是边框被压缩后的效果——它内部没有内容

在下面的例子中，边框宽度扩展到整个容器宽度，因为它是块级元素，而块级元素的行为就是这样的。它没有高度，或者说高度为 0，因为内部没有内容。
```
html:

<div class="box"></div>

css:

.box {
  border: 5px solid darkblue;
}
```

# 设置具体的尺寸:
可以给设计中的元素指定具体大小。当给元素指定尺寸（然后其内容需要适合该尺寸）时，其被称为外部尺寸

以上面例子中的` <div>` 举例——可以给它一个具体的 width 和 height 值，然后不论放什么内容进去它都是该尺寸

正如有关溢出的内容中所发现的，如果内容的数量超出了元素可容纳的空间，则设置的高度会导致内容溢出;由于存在溢出问题，在网络上使用长度或百分比固定元素的高度需要非常小心

## 使用百分比:
当使用百分比时，需要清楚，它是什么东西的百分比。对于一个处于另外一个容器当中的盒子，如果给予了子盒子一个百分比作为宽度，那么它指的是父容器宽度的百分比

### 把百分比作为内外边距:
如果把 margins 和 padding 设置为百分比的话，你会注意到一些奇怪的表现

```
html:

<div class="box">I have margin and padding set to 10% on all sides.</div>

css

body {
  font: 1.2em sans-serif;
}
.box {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

使用**百分比作为元素外边距（margin）或填充（padding**）的单位时，值是以包含块的**内联尺寸**进行计算的，也就是元素的水平宽度

在示例中，所有的外边距或填充都是宽度的 10%。请记住一个事实，当使用百分比作为元素外边距或填充的单位时，将得到一个相同尺寸的外边距或填充

## min- 和 max- 尺寸:

除了让万物都有一个确定的大小以外，可以让 CSS 给定一个元素的最大或最小尺寸

如果有一个包含了变化容量的内容的盒子，而且总是想让它至少有个确定的高度，应该给它设置一个 **min-height **属性。盒子就会一直保持大于这个最小高度，但是如果有比这个盒子在最小高度状态下所能容纳的更多内容，那么盒子就会变大

在以下的示例中，可以看到两个盒子，两个都有 150 像素的确定高度，左边的盒子有 150 像素高，右边的盒子有需要更多空间才能装下的内容，所以它变得比 150 像素高
```
<div class="wrapper">
  <div class="box"></div>
  <div class="box">
    These boxes both have a min-height set, this box has content in it which
    will need more space than the assigned height, and so it grows from the
    minimum.
  </div>
</div>
```
```
body {
  font: 1.2em sans-serif;
}
.wrapper {
  display: flex;
  align-items: flex-start;
}

.wrapper > * {
  margin: 20px;
}

.box {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```
这在避免溢出的同时并处理变化容量的内容的时候是很有用的

**max-width**的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大

作为示例，如果设定一个图像的属性为 width: 100%，而且它的原始宽度小于容器，图像会被强制拉伸以变大，看起来像素更加明显。如果它的原始宽度大于容器，它则会溢出。两种情形都不是想要看到的

如果使用了 max-width: 100%，那么图像可以变得比原始尺寸更小，但是不会大于原始尺寸的 100%

在下面的示例里，使用了两次相同的图片。第一次使用，属性值已设为 width: 100%，位于比图片大的容器里，因此图片拉伸到了与容器相同的宽度；第二次的属性值则设为 max-width: 100%，因此它并没有拉伸到充满容器；第三个盒子再一次包含了相同的图片，同时设定了 max-width: 100% 属性，这时能看到它是怎样缩小来和盒子大小相适应的
```
html:
<div class="wrapper">
  <div class="box">
    <img
      alt="star"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-box">
    <img
      alt="star"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```
.box {
  width: 200px;
}
.mini-box {
  width: 50px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

## 视口单位:
视口，即在浏览器中看到的部分页面，也是有尺寸的。在 CSS 中，有与视口尺寸相关的度量单位，即意为视口宽度的 vw 单位，以及意为视口高度的 vh 单位。使用这些单位，可以把一些东西做得随用户的视口改变大小

1vh 等于视口高度的 1%，1vw 则为视口宽度的 1%。可以用这些单位约束盒子的大小，还有文字的大小。在下面的示例里，有一个大小被设为 20vh 和 20vw 的盒子。这个盒子里面有一个字母 A，其 font-size 属性被设成了 10vh。
```
html

<div class="box">A</div>


css

body {
  font-family: sans-serif;
}

.box {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```
