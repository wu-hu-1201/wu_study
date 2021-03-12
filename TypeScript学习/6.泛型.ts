// 泛型就是解决 类、接口、方法 的 复用性，以及对不特定数据类型的支持。
// 要求：传入的参数和返回的参数一致

// 函数的泛型
function getData<T>(value: T): T {
    return value;
  }
  const strD = getData<number>(123); // 123
  // T => 定义的值，传入的参数，返回的值得是同一类型
  
  // 类的泛型
  class MixVal<T> {
    public list: T[] = [];
    addMix(value: T): void {
      this.list.push(value);
    }
    getMix(): T {
      let mi = this.list[0];
      this.list.map((item, index) => {
        if (item < mi) {
          mi = item;
        }
      });
      return mi;
    }
  }
  // 实例化类，指定T的类型
  const mixV = new MixVal<number>();
  mixV.addMix(2);
  mixV.addMix(1);
  mixV.addMix(3);
  console.log(mixV.getMix()); // 1  number类型
  const mixV1 = new MixVal<string>();
  mixV1.addMix("2");
  mixV1.addMix("1");
  mixV1.addMix("3");
  console.log(mixV1.getMix()); // 1  string类型
  // 实例化类，并指定了类的T的类型，则其方法的传参和返回值都是该类型
  
  // 接口的泛型
  // 写法一
  interface myinter {
    <T>(value: T): T;
  }
  const myFun: myinter = function <T>(value: T): T {
    return value;
  };
  const funData = myFun(123); // funData => 123
  // 写法二
  interface newMyinter<T> {
    (value: T): T;
  }
  function newMyFun<T>(value: T): T {
    return value;
  }
  const newFunData: newMyinter<string> = newMyFun;
  console.log(newFunData("wn")); // wn
  // 接口的泛型只针对函数类型的接口
  
  // 类当做参数传入泛型类
  class User {
    username: string | undefined;
    constructor(params: { username: string | undefined }) {
      this.username = params.username;
    }
  }
  class Customer<T> {
    addCus(user: T): boolean {
      if (user) {
        console.log(user);
        return true;
      } else {
        return false;
      }
    }
    updateCus(user: T, id: number): boolean {
      if (id) {
        console.log(`${user}的id是${id}`);
        return true;
      } else {
        return false;
      }
    }
  }
  const user1 = new User({
    username: "wn",
  });
  let cus = new Customer<User>();
  cus.addCus(user1); // wn  true
  cus.updateCus(user1, 1); // wn的id是1  true
  // 类的参数名和类型都做了约束
  