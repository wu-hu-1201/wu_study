// 布尔值
let isDone: Boolean = false;

// Number  => 所有数字都是浮点数，类型是number,支持10 2 16 8 进制
let num: Number = 2;
let nums: Number = 0b1010;

// 字符串
let str: string = "name";

// 数组
let arr: number[] = [1, 2, 3];
let arrs: Array<number> = [1, 2, 3, 4];
let newArr = [1, 2] as Array<any>;

// 元组Tuple
//  => 允许表示一个已知元素数量和类型的数组
let x: [string, number];
x = ["str", 10]; // ok
// x = [10, '10']  => 要对应 string 和 number
// x = ['str', false]  =>  只能分配设定的类型
// 当访问一个越界的元素，会使用联合类型替代
x[0] = "world"; // ok
// x[3] = 'str'  // OK, 字符串可以赋值给(string | number)类型
// console.log(x[5].toString) => ok  string和number都有toString
// x[1] = true => error! 布尔不是(string | number) 类型

// 枚举
//  =>  使用枚举类型可以为一组数值赋予友好的名字
enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.green;
// 默认从0开始编号，也可手动指定成员的数值
enum Color {
  white = 1,
  black,
}
let d: Color = Color.black;
// 全部采用手动赋值
enum Color {
  perple = 4,
  pink = 5,
  yellow,
}
let e: Color.pink;
// 由枚举的值得到它的名字
let colorName: string = Color[6];
console.log(colorName); // => yellow

// Any
//  => 不清楚变量的指定类型，或这些值来自于动态内容(用户输入，第三方仓库)，让它们直接通过编译检查则使用Any
let notSure: any = 4;
notSure = "str";
notSure = false;
// 在编译时可选择地包含或移除类型检查
// 其他用法
let Arr: any[] = [1, "str", false];
let Arrs = [] as Array<any>;

// void
// 只能赋值 undefined  null
let vo: void = undefined || null;

// null undefined
// => 默认情况下它两为所有类型的子类型
// 当指定 strictNullChecks标记，则只能赋给它们本身和void

// never
// => 永不存在值的类型
// never是任何类型的子类型，可赋值给任何类型，但是任何类型都不能赋值给never,除它本身
// 返回never的函数必须存在无法达到的终点
function nullResult(): never {
  while (true) {}
}
// 推断的返回值的类型为never
function fail() {
  return "something failed";
}

// Object
// => 表示出所有基本类型外的类型
// 更好的表示 Object.create这样的API
declare function create(o: Object | null): void;
create({ a: "a" }); // OK
create(null); // OK
create(undefined); // error
create(2); // error  => 基本数据类型则为eror

let val = "this is a val";
// let len: number = (<string>val).length
let len: number = (val as string).length; // jsx中 只有as 有效