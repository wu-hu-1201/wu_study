// 对值所具有的结构进行类型检查
// 编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
// 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
interface typeStyle {
  name?: string;
  age?: number;
}
function Fn(config: typeStyle): { name: string; length: number } {
  let newType = { name: "aa", length: 2 };
  if (config.name) {
    newType.name = config.name;
  }
  if (config.age) {
    newType.length = config.age * newType.length;
  }
  return newType;
}
Fn({ name: "ww" });
// 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误

// 只读属性readonly,赋值后不能改变
interface Point {
  readonly x: number;
  readonly y: number;
}

// 类型断言重写 as
let ar: number[] = [1, 2, 3];
let ro: ReadonlyArray<number> = ar;
ar = ro as number[];

// 函数类型接口 => 对函数传入的参数类型，以及返回值类型进行约束，可批量进行约束
interface keyMap {
  (name: string, age: number): string;
}
let keyBack: keyMap = function (name: string, age: number): string {
  return `${name}${age}了`;
};
console.log(keyBack("wn", 18)); // wn18了
// 接口只对传入的参数的类型和参数的个数进行约束，不对参数名称进行约束

// 可索引的类型 有个 索引签名
interface arrType {
  [index: number]: string;
} // 当用 number去索引myType时会得到string类型的返回值。
let arrss: arrType = ["123", "1", "21"];

interface objType {
  [index: string]: string;
}
let obj: objType = { name: "wn" };

// 类类型接口
interface Start {
  name: string;
  drink(): void;
}
class Starts implements Start {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  drink(): void {}
}

// 接口继承（接口可以继承接口）
interface Ani {
  forEat(): void;
}
interface Ca extends Ani {
  forRun(): void;
}
class AniEat {
  forDring() {
    console.log("来一口");
  }
}
class CatEat extends AniEat implements Ca {
  constructor() {
    super();
  }
  forEat(): void {}
  forRun(): void {}
}
const cst = new CatEat();
cst.forDring(); // 来一口
// 类接口会对类的 属性 和 方法进行约束，类似非抽象类继承类时必须实现某些方法和属性，
// 但对于属性和方法的类型约束更加严格。除了方法 void类型 可被 重新定义外，其他属性或方法的类型定义需要和接口保持一致。
