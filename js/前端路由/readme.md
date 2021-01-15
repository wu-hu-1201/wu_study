# 前端路由

1. 如何改变url却不引起页面的刷新？
2. 如何知道url变化了？


hash
通过 hashchange 事件监听 url 的变化


改变url的方式：
- 通过浏览器前进后退来改变url
- 通过a便签改变url
- 通过window.location 改变url
以上这几种情况改变url 都会触发 hashchange 事件



history
提供了 pushState 和 replaceState 两个方法，这两个方法改变url的path部分
不会引起页面刷新

通过 popstate 事件监听   url 变化

- 通过历览器前进后退来改变url
- 通过pushState/replaceState或者a标签改变url回触发popstate事件