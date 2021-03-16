// 模块
// 内部模块成为命名空间，外部模块简称为模块，模块在起自身的作用域里执行，而不是在全局作用域。
// 定义在一个模块里的变量、函数、类等在模块外是不可见的，除非你明确的使用export形式导出它们。
// 对应的，如果想使用其他模块导出的变量、函数、类等，需要导入它们，可以使用import。

// modules/db.ts
function dataGet(): any[] {
    console.log("获取数据");
    return [
      {
        userName: "张三",
      },
      {
        userName: "李四",
      },
    ];
  }
  // 一个模块可以使用多次
  // export { dataGet }; // 导出
  // 一个模块只能使用一次
  // export default getData;
  
  // 引用
  // import { getData as getDbData } from './modules/db';
  // import getDbData from './modules/db';
  // getDbData();
  
  // 为了支持CommonJS和AMD的exports, TypeScript提供了export =语法。
  // export = 语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
  // 若使用export =导出一个模块，则必须使用TypeScript的特定语法 import module = require("module")来导入此模块。
  // ZipCodeValidator.ts
  class ZipCodeValidator {
    // ...
  }
  // export = ZipCodeValidator;  // 导出
  
  // 引用
  // import zip = require("./ZipCodeValidator");
  
  // 命名空间（内部模块）
  // 在代码量较大的情况下，为了避免各种变量命名冲突，可将相似功能的函数、类、接口等放置到命名空间内。TypeScript的命名空间可以将代码包裹起来，只对外部暴露需要在外部访问的对象。
  // 命名空间和模块的区别:
  // 命名空间: 内部模块，主要用于组织代码，避免命名冲突
  // 模块: ts外部模块的简称，侧重代码的复用，一个模块里可能会有多个命名空间
  // modules/Animal.ts
  export namespace Aa {
    interface Annia {
      name: string;
      say(): void;
    }
  
    export class DogAa implements Annia {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
      say() {
        console.log(`名字是${this.name}`);
      }
    }
  }
  
  export namespace Bb {
    interface Bbname {
      age: number;
      talk(): void;
    }
  
    export class DogBb implements Bbname {
      age: number;
      constructor(age: number) {
        this.age = age;
      }
      talk() {
        console.log(`年龄是${this.age}`);
      }
    }
  }
  // 引入
  /* 
    import {Aa, Bb} from 'modules/Animal.ts'
    const little = new Aa('wn')
    little.say() // 名字是wn
  */
  
  // 声明合并
  // 合并接口
  interface type1 {
    height: number;
    width: number;
  }
  interface type1 {
    length: number;
  }
  let typeAll: type1 = { height: 10, width: 20, length: 30 };
  
  // 当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
  interface Clone {
    clone(animal: type1): type1;
  }
  interface Clone {
    clone(animal: typeVal): typeVal;
  }
  interface Clone {
    clone(animal: newIn): newIn;
    clone(animal: newInters): newInters;
  }
  // 合并   => 后来的接口重载出现在靠前位置
  interface Clone {
    clone(animal: newIn): newIn;
    clone(animal: newInters): newInters;
    clone(animal: typeVal): typeVal;
    clone(animal: type1): type1;
  }
  
  // 当出现特殊的函数签名时,如果签名里有一个参数的类型是 单一的字符串字面量（比如，不是字符串字面量的联合类型），
  // 那么它将会被提升到重载列表的最顶端
  interface Document {
    createElement(tagName: any): Element;
  }
  interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
  }
  interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
  }
  // 合并  => 按照后来的靠前，但函数签名的最前
  interface Document {
    createElement(tagName: "canvas"): HTMLCanvasElement;
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
    createElement(tagName: string): HTMLElement;
    createElement(tagName: any): Element;
  }
  