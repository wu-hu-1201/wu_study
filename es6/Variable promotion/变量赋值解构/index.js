// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(bar)   //--->2

// let [, , third] = ['a', 'b', 'c']
// console.log(third)    //--->c

// let[x, y] = [1, 2, 3]
// console.log(x, y)      //--->1 2

// let[head, ...tail] = [1, 2, 3, 4]
// console.log(head, tail)//--->1 [ 2, 3, 4 ]

// let [a, b, ...c] = ['hello']
// console.log(a, b, c)

 //let [foo] = 1 //false  NaN undefined null {}
 //console.log(foo)  //--->报错，该定义只能时数组

//let [foo = true] = []  //--->true
//let [x, y = 'aaa'] = ['a', undefined]  //undefined 解构出来默认赋值时时不成功的
//let[x, y = 'aaa'] = ['a', null]//--->a null
//console.log(x, y) 

// let [x =1, y = x] = [2, 3]

// let {foo, bar} = {q: 'aaa', w: 'bbb'}  //--->undefined undefined
// let obj = {
//     name: '罗',
//     age: '18'
// }
// let {name, age} = obj
// console.log(name, age)  //--->罗 18


// let {foo, baz} = {foo: 'aaa', bar: 'bbb'}
// //foo 时匹配模式，bzz才是变量
// console.log(baz)


// let obj = {
//     name : '吴',
//     desc: {
//         alone: false,
//         age: 20,
//         sanwei: [50, 100, 120]
//     }
// }
// let {name,desc:{alone, age}, desc:{sanwei: [x, y, z]}} =obj
// console.log(name, alone, age, x, y, z)

// let {x = 3} = {x: null}
// console.log(x)    //--->null


// let x 
// ({x} = {x: 1})
// console.log(x)   //--->1

// let [a,b,c,d,e] = 'hello'
// console.log(a,b,c,d,e)   //--->h e l l o

// let [a,b,c,d,e] = 'hello'
// let {length: len} ='hello'
// console.log(len)   //(长度)  --->5


//数值和布尔值的解构赋值
// let {toString: s} = 123
// console.log(s === Number.prototype.toString) //---->true
let {toString: s} = true
console.log(s === Boolean.prototype.toString)

  