// 交换变量的值
let x = 1,
  y = ((2)[(x, y)] = [y, x]);

// 从函数返回多个值   => 从函数返回值取值方便
function a() {
  return [1, 2, 3];
}
let [a, b, c] = a(); // a=1,b=2,c=3
function b() {
  return {
    a: 1,
    b: 2,
  };
}
let { x, y } = b(); // x=1,y=2

// 函数参数的定义
// 解构赋值可以方便地将一组参数与变量名对应起来。
function test([a, b, c]) {
  // ...
}
test([1, 2, 3]);
function text({ x, y, z }) {
  // ...
}
text({ x: 1, y: 2, z: 3 });

// 提取 JSON 数据
let jsonData = {
  name: "wn",
  age: 20,
  height: 170,
};
let { name, age, height } = jsonData; // name='wn'...

// 函数参数的默认值

// 遍历 Map 结构
let map = new Map();
map.set("name", "wn");
map.set("age", 20);
for (let [key, value] of map) {
  console.log(`${key}是${value}`); // name是wn  age是20
}
// 只想获取键名或键值
for (let [key] of map) {
}
for (let [, value] of map) {
}

// 输入模块的指定方法
const { SourceMapConsumer, SourceNode } = require("source-map");
