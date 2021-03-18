// 参数装饰器声明在一个参数声明之前（紧靠着参数声明）。
// 参数装饰器应用于类构造函数或方法声明。
// 参数装饰器不能用在声明文件（.d.ts），重载或其它外部上下文（比如 declare的类）里。
// 参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
// 1. 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
// 2. 成员的名字。
// 3. 参数在函数参数列表中的索引。
class Greeter {
    greeting: string;
  
    constructor(message: string) {
      this.greeting = message;
    }
    // @ts-ignore
    @validate
    // @ts-ignore
    greet(@required name: string) {
      return "Hello " + name + ", " + this.greeting;
    }
  }
  import "reflect-metadata";
  
  const requiredMetadataKey = Symbol("required");
  
  function required(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    let existingRequiredParameters: number[] =
      // @ts-ignore
      Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    // @ts-ignore
    Reflect.defineMetadata(
      requiredMetadataKey,
      existingRequiredParameters,
      target,
      propertyKey
    );
  }
  
  function validate(
    target: any,
    propertyName: string,
    descriptor: TypedPropertyDescriptor<Function>
  ) {
    let method = descriptor.value;
    descriptor.value = function () {
      // @ts-ignore
      let requiredParameters: number[] = Reflect.getOwnMetadata(
        requiredMetadataKey,
        target,
        propertyName
      );
      if (requiredParameters) {
        for (let parameterIndex of requiredParameters) {
          if (
            parameterIndex >= arguments.length ||
            arguments[parameterIndex] === undefined
          ) {
            throw new Error("Missing required argument.");
          }
        }
      }
  
      return method.apply(this, arguments);
    };
  }
  // @required装饰器添加了元数据实体把参数标记为必需的。
  // @validate装饰器把greet方法包裹在一个函数里在调用原先的函数前验证函数参数。
  