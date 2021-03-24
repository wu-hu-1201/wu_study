// 类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
// 类装饰器不能用在声明文件中( .d.ts)，也不能用在任何外部上下文中（比如declare的类）。
// 类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
// 如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

@sealed
// @ts-ignore  // 例子未启用 experimentalDecorators ，用这个忽略报错
class Greeting {
  gree: string;
  constructor(gree: string) {
    this.gree = gree;
  }
  greeing() {
    return "这是" + this.gree;
  }
}
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
// 当@sealed被执行的时候，它将密封此类的构造函数和原型。
