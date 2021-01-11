// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let i in obj) {  // for  of 拿不到
//     console.log(i);   // ---> a b c
// }

// const arr = ['a', 'b', 'c']  // --> [1:'a', 2:'b', 3:'c']
// // for (let i in arr) {
// //     console.log(i)   //  ---> 0 1 2
// // }
// for (let i of arr) {
//     console.log(i)  // --> a b c
// }


// const arr = ['a', 'b']
// arr.name = 'wn'
// // for (let i in arr) {
// //     console.log(i)  //--> 0 1 name
// // }
// const obj =  {
//     a: 1,
//     b: 2
// }
// Object.prototype.c = 3
// for (let i in obj) {
//     console.log(i)  //--> a b c
// }

// const arr = ['a', 'b']
// Array.prototype.c = 'c'
// for (let i in arr) {
//     console.log(i)  //--> 0 1 c
// }

// **区别**
//  for...in
//  循环返回的都是数据结构的键值名
//  遍历数组返回的是数组的下标
//  不仅可以遍历数字键名，还会遍历原型上的值和手动添加的其他键
//  特别情况下，遍历的顺序不会按照对象的顺序进行

//  for...of
//  不能遍历对象
//  返回的是数组的元素


// Symbol.iterator  迭代器
// 数组  // Map  // Set  // String  // arguments 对象   // Nodelist 对象 
// let str = 'abcde'
// for (let i of str) {
//     console.log(i);  //-->abcde
// }



//  对象中的常规属性和排序属性
function Foo() {
    this[100] = 'test-100'
    this[1] = 'test-1'
    this['b'] = 'bar-B'
    this[50] = 'test-50'
    this[9] = 'test-9'
    this[8] = 'test-8'
    this[3] = 'test-3'
    this[5] = 'test-5'
    this['A'] = 'bar-A'
    this['C'] = 'bar-C'
}
let bar = new Foo()
for (let key in bar) {
    console.log(`index:${key} value:${bar[key]}`)
}


// 对象中的数字属性会被有限遍历，且按顺序遍历

// ECMAScript  规范中定义了数字属性应该按照索引值的大小升序排列，字符串属性根据创建时的顺序排列