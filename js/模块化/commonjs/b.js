const mod = require('./a')

console.log(mod.c, mod.obj)      // 3


// let a = 3  b = a  
// let a = {}  b = a  指向相同 对象发生变化 则 b 也发生变化
mod.inc()
// 1.导入的值就是 把导出的值 赋值（拷贝）一份过来
// 2.如果一个模块被require了两次，他会把上一次的结果缓存起来
console.log(mod.c, mod.obj)    // 3