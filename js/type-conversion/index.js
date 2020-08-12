//  String  Boolean  Number  Undefined  Null Object

//var a = 1
//var b = new Number(1)

//原始值转布尔
// console.log(Boolean())
// console.log(Boolean(false))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(0))
// console.log(Boolean(+0))
// console.log(Boolean(-0))
// console.log(Boolean(""))
// console.log(Boolean(NaN))
// //  ----> false

// console.log(Boolean(true))
// console.log(Boolean(1))
// console.log(Boolean(-1))
// console.log(Boolean("123"))
//  ----> true



// console.log(Number())    //0
// console.log(Number(undefined))  //NaN
// console.log(Number(null))  //0
// console.log(Number(false))  //0
// console.log(Number(true))  //1
// console.log(Number('123'))  //123
// console.log(Number('-123'))  //-123
// console.log(Number('000123'))  //123
// console.log(Number('-000123'))  //-123
// console.log(Number('0X11'))  //17
// console.log(Number(''))  //0
// console.log(Number('123 123'))  //NaN
// console.log(Number('wn'))   //NaN
// console.log(Number('100a'))  //NaN
// console.log(parseInt('3 abc')) //3
// console.log(parseInt('3.14 abc'))//3
// console.log(parseInt('-12.34'))  //-12
// console.log(parseInt('.1'))  //NaN
// console.log(parseInt('1'))  //1


// 原始值转字符串
// var a = 'aaa'
// var b = new String('bbb')
// console.log(String())  //''
// console.log(String(undefined))  //undefined
// console.log(String(null))  //null
// console.log(String(false))  //false
// console.log(String(true))  //true
// console.log(String(0))  //0
// console.log(String(-0))  //0
// console.log(String(NaN))  //NaN
// console.log(String(1))  //1


//  原始值转对象
//  原始值通过调用 String() Number() 或者 Boolean() 构造函数，转换为他们
// var a = 'aaa'
// console.log(typeof a)  //string
// var b = new Number(a)
// console.log(typeof b)  //object


//  对象转布尔值
// console.log(typeof new Boolean(false))  //object


//  对象转字符串和数字
//  toString    valueOf

var a = {
    b: 1
}
// console.log(Object.prototype.toString.call(a))
// a.toString === Object.prototype.toString.call(a)
console.log(a.toString())  //[object Object]
console.log([].toString())  //''
console.log([1, 2, 3].toString())  //1, 2, 3
console.log([0].toString())   //0
console.log((function(){var a =1}).toString())  //function(){var a =1}
console.log(new Date().toString)

