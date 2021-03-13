// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例

// 数字枚举
enum numVal {
    up = 1, // 不设定值时 默认为0开始
    down, // 2
    left, //3
    right, // 4
  }
  // 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型
  function getNums(name: string, message: numVal): any {
    return `${message}岁的${name}`;
  }
  getNums("wn", numVal.right); // 4岁的wn
  // numVal为数字枚举，message的类型为number, 通过属性获取值 numVal.right 为 4
  // 数字枚举可以被混入到 计算过的和常量成员  如下：
  function toSum(a, b) {
    return a + b;
  }
  enum special {
    A = 1,
    B = toSum(1, 2),
  } // 正确写法
  // enum special {
  //     A = toSum(1, 2),
  //     B
  // }   // 错误写法   枚举成员必须具有初始化表达式。
  
  // 字符串枚举
  enum strVal {
    up = "up",
    down = "down",
    left = "left",
    right = "right",
  } // 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化
  
  // 异构枚举
  enum diffVal {
    yes = 1,
    no = "no",
  }
  
  // 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。
  
  // 联合枚举与枚举成员的类型
  enum typeVal {
    firstType,
    secondType,
  }
  interface newIn {
    kind: typeVal.firstType;
    val: string;
  }
  interface newInters {
    kind: typeVal.secondType;
    age: number;
  }
  let myVals: newInters = {
    // kind: typeVal.firstType // error
    kind: typeVal.secondType,
    age: 20,
  };
  
  // 反向映射    数字枚举成员具有反向映射
  enum returnName {
    A,
  }
  let reVal = returnName.A; // 通过枚举的名字拿到值
  let ofreturnName = returnName[reVal]; // "A" // 通过值反向拿到枚举名称
  
  // const 枚举
  // 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问，我们可以使用 const枚举。
  // 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。
  // 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。
  const enum normal {
    up,
    down,
    left,
    right,
  }
  let normalArr = [normal.up, normal.down, normal.left, normal.right]; // [0, 1, 2, 3]
  
  // 外部枚举
  // 外部枚举用来描述已经存在的枚举类型的形状。
  declare enum out {
    A = 1,
    B,
    C = 2,
  } // B的值被当做需要经过计算后才有的值
  // 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。
  // 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
  