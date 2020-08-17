//  set 类似于数组，但是不一样的地方是set这种数据结构内部的成员是唯一值

// const s = new Object()  //类数组    set {}
// const arr = new Array()
// console.log(s)
// let arr = [2, 3, 4, 1, 3, 2, 5]
// for(let i = 0;i < arr.length;i++) {
//     console.log(arr[i])
// }    ---->2 3 4 1 3 2 5
// for(let item of arr) {
//     console.log(item)
//     item.name = 'xxx'
// }

// arr.forEach((x) =>{
//     // console.log(x)     //---->2 3 4 1 3 2 5
//     s.add[x]
// })    
// console.log(s)    //---->[2, 3, 4, 1, 5]

// const set = new Set([1, 2, 3, 4, 4, 5, 5])
// //console.log(set.length)   //----->undefined
// console.log(set.size)     //---->5(数组长度)

// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size)   //---->报错

// 数组去重
// let arr = [2, 3, 4, 1, 3, 2, 5]
// console.log([...new Set(arr)])    //--->[2, 3, 4, 1, 5]

//字符串去重
// console.log([...new Set('abcdab')])  //--->['a', 'b', 'c', 'd']


// const set = new Set()
// set.add(5)
// set.add('5')
// console.log(set)  //--->{5, '5'}

// const set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(a)
// console.log(set)   //-->Set {NaN}

// const set = new Set()
// set.add({})
// set.add({})
// console.log(set)   //--->Set { {}, {} }

// const set = new Set()
// set.add({name: '吴'})
// set.add({name: '吴'})
// console.log(set)   //--->Set { { name: '吴' }, { name: '吴' } }

//let arr = [2, 3, 4, 1, 3, 2, 5]
//console.log(arr.pop())  删除尾部元素并打出 -->5
//console.log(arr.shift())删除头部元素并打出 -->2
//console.log(arr.splice(3,1))   删除第三个元素后的1个元素 --->1
// arr.splice(3,1)
// console.log(arr)  //--->[2, 3, 4, 3, 2, 5]
// console.log(arr.slice(3,5))   //-->前开后闭 删除第4和第5个元素

// const set = new Set()
//  set.add(1).add(2).add(3)
// // set.delete(2)
// // console.log(set)
// console.log(set.has(3))  -->判断是否存在'3'这个元素

// let arr = [2, 3, 4, 1, 3, 2, 5]
// //console.log(arr.indexOf(4))
// console.log(arr.includes(4))  //-->是否有4这个元素

// const set = new Set()
// set.add(1).add(2).add(3)
// //set.delete(2)
// set.clear()
// console.log(set)  //--->Set {}    删除数组所有元素

// Array.from(['a', 'b', 'c']).forEach(e => {
//     console.log(e)
// });     //----> Set {} a b c

// const set = new Set([1, 2, 3, 4])
// const array =Array.from(set)
// array.forEach(e => {
//     console.log(e)
// })    //----> 1 2 3 4

//数组去重
// function dedupe(array) {
//     return Array.from(new Set(array))
// }
// console.log(dedupe([1, 2, 2, 3, 3]))   //--->[1, 2, 3]


//set遍历
// let set = new Set(['red', 'green', 'blue'])
// for (let item of set) {
//     console.log(item)
// }   //--->red green blue

let set = new Set(['red', 'green', 'blue'])
//keys()是set结构中返回键名的遍历器
//values()是set结构中返回值的遍历器
//entries()是set结构中返回键值对的遍历器
// for (let item of set.keys()) {
//     console.log(item)
// }  //--->red green blue
// for (let item of set.values()) {
//     console.log(item)
// } 
for (let item of set.entries()) {
    console.log(item)
}
