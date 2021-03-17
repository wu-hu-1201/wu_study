// 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
// 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
// 类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。

// in 关键字
interface OneType {
    name: string;
    message: string[];
  }
  interface TwoType {
    name: string;
    info: string[];
  }
  type InType = OneType | TwoType;
  function typeTest(mess: InType) {
    console.log("名字是:" + mess.name);
    if ("message" in mess) {
      console.log("message:" + mess.message);
    }
    if ("info" in mess) {
      console.log("info:" + mess.info);
    }
  }
  
  // typeof 关键字
  function TypeOfVal(value: string, padding: string | number) {
    if (typeof padding === "number") {
      return Array(padding + 1).join("") + value;
    }
    if (typeof padding === "string") {
      return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
  }
  // typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，
  // "typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。
  // 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
  
  // instanceof 关键字
  interface Instan {
    getInstan(): string;
  }
  class FirstIns implements Instan {
    constructor(private value: number) {}
    getInstan() {
      return Array(this.value + 1).join("");
    }
  }
  class SecondIns implements Instan {
    constructor(private mess: string) {}
    getInstan() {
      return this.mess;
    }
  }
  let ins: Instan = new FirstIns(6);
  if (ins instanceof FirstIns) {
    // ins 的类型收窄为 'FirstIns'
    console.log("yes");
  }
  
  //  自定义类型保护的类型谓词
  function isNumber(value: any): value is number {
    return typeof value === "number";
  }
  function isString(value: any): value is string {
    return typeof value === "string";
  }
  