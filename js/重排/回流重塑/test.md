# 题目


```js
DomA.style.width = DomA.offsetWidth + 1 + 'px'
DomB.style.width = DomA.offsetWidth + 1 + 'px'
DomC.style.width = DomA.offsetWidth + 1 + 'px'
```
会触发几次回流 ?



```js
DomA.style.width = 1px;
DomB.style.width = 1px;
DomC.style.width = 1px;
```

又会触发几次回流呢 ?



```js
let el = document.getElementById('app');
el.style.width = (el.offsetWidth+1) + 'px';
el.style.width = 1 + 'px'
```
引发几次回流?几次重绘?