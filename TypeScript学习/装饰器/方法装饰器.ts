// 方法装饰器声明在一个方法的声明之前（紧靠着方法声明）。
//  它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
// 方法装饰器不能用在声明文件( .d.ts)，重载或者任何外部上下文（比如declare的类）中。
// 方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
// 1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2.成员的名字。
// 3.成员的属性描述符。

class Idear {
    idea: string;
    constructor(idea: string) {
      this.idea = idea;
    }
    @enumerable(false)
    // @ts-ignore
    getIdea() {
      return `${this.idea}你好`;
    }
  }
  function enumerable(value: boolean) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      descriptor.configurable = value;
    };
  }
  // 当装饰器 @enumerable(false)被调用时，它会修改属性描述符的enumerable属性。
  