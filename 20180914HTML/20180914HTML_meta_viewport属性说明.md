# HTML_meta_viewport属性说明
### 创建时间；20180914

## 什么是Viewport
手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，通常这个虚拟的“窗口”（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。
## Viewport 基础
一个常用的针对移动网页优化过的页面的 viewport meta 标签大致如下：

width：控制 viewport 的大小，可以指定的一个值，如果 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。  
height：和 width 相对应，指定高度。  
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。  
maximum-scale：允许用户缩放到的最大比例。  
minimum-scale：允许用户缩放到的最小比例。  
user-scalable：用户是否可以手动缩放  