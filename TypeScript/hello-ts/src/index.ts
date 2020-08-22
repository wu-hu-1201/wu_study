// function greeter(person: string) {
//     return "hello" + person
// }
// // greeter(1)
// const user = "wn"




// 类型
// let isLoading = false   //--->let isLoading: boolean = false
// isLoading = 123

// let num = 6  //-->let num: number = 6
// num = 8

//let book = 'typeScript'  //let book: string = 'typeScript'

// 空值
// function warnUser() {  //-->function warnUser(): void {}
//     return 1
// }


// const a: void = undefined

// let aa: undefined = 1   错误
// let aa: undefined = undefined


// let sym1 = Symbol('key1')
// let  sym2 = Symbol('key1')


//BigInt
// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2

const max = BigInt(Number.MAX_SAFE_INTEGER)
const max1 = max + 1n
const max2 = max + 2n
console.log(max1, max2)