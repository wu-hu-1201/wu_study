// Boolean 类型
let isDone: boolean = false
// isDone = 123

let count: number = 12

let nickName: string = 'jl'

let people: symbol = Symbol('pi')

const sym = Symbol()
let obj1 = {
    [sym]: 'jl'
}
console.log(obj1[sym])

// array
// let listA: number[] = [1, 2, 3]
let listA: Array<number> = [1, 2, 3]


// Enum(枚举)

// 数字枚举
enum Direction {
    EAST,
    SOUTH,
    WEST,
    NORTH
}
let dir: Direction = Direction.NORTH  // 3
console.log(dir)

// 字符串枚举
// enum Direction {
//     EAST,
//     SOUTH,
//     WEST,
//     NORTH
// }

// 异构枚举
enum Enum {
    A,
    B,
    C = 'c',
    D = 'd',
    E = 8,
    F 
}

// any
let noteSure: any = 666
noteSure = 'hello'

// unKnown
let valueA: unknown
valueA = true
valueA = 123
valueA = 'hello'

let value1: unknown = value
let value3: any = value


// tuple类型 元组
let tupleType: [string, boolean]
tupleType = ['yl', true]

// void 类型
function User(): void {
    console.log('hello world')
}

// null undefined
let u: undefined = undefined
let n: null = null

let num: number = u

