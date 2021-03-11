// 例子
class Person {
    // 私有变量
    private name: string;
    // 构造函数
    constructor(name: string) {
      this.name = name;
    }
    getName(): string {
      return this.name;
    }
    setName(name: string): void {
      this.name = name;
    }
  }
  // 使用 new构造了 Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个 Greeter类型的新对象，并执行构造函数初始化它
  const per = new Person("wn");
  console.log(per.getName()); // wn
  per.setName("jl");
  
  // 继承
  // 例子一：简单的继承
  class Animal {
    move(age: number = 0): void {
      console.log(`现在的年龄是${age}`);
    }
  }
  class Dog extends Animal {
    walk(): void {
      console.log("可爱的dog");
    }
  }
  // Dog继承了 Animal的功能，因此我们可以创建一个 Dog的实例，它能够 walk() 和 move()
  const dog = new Dog();
  dog.walk();
  dog.move(5);
  // 例子二
  class Son extends Person {
    public static age: number = 18;
    public school: string;
    constructor(name: string, school: string) {
      super(name);
      this.school = school;
    }
    static run(name: string): string {
      return `${name}在跑步，他的年龄是${this.age}`;
    }
  }
  // Son继承了Person的功能，创建一个 Son的实例，能够 setName() 和 getName()
  const son = new Son("wn", "xx大学");
  son.setName("yl");
  son.getName();
  console.log(Son.run("hb")); // hb在跑步，他的年龄是18
  console.log(Son.age); // 18
  // public 在当前类、子类和类以外都可以访问
  // protected 在当前类、子类内部都可以访问，类外部无法访问
  // private 在当前类内部可以访问，子类和类外部无法访问
  // 属性不加修饰符，默认都是 public
  
  // 例子三： 多态
  abstract class Cat {
    // 私有属性   不能在声明它的类的外部访问，在Cat 外去 访问 name会报错
    private name: string;
    constructor(name: string) {
      this.name = name;
    }
    // 抽象成员：方法
    abstract eat(): any;
    // 抽象成员：属性
    protected abstract age: number;
    sleep(): string {
      return `${this.name}在睡觉`;
    }
  }
  class Mouse extends Cat {
    age: number = 20;
    constructor(name: string) {
      super(name);
    }
    // 非抽象类: Cat 不会自动实现继承自: Animal类的抽象方法: eat, 必须手动定义父类中的抽象方法，着就是多态
    eat(): string {
      return "在吃鱼";
    }
    sleeping(): string {
      return "在睡觉";
    }
  }
  const mouse = new Mouse("Tom");
  mouse.sleep();
  mouse.eat;
  // 抽象类无法 实例化
  // 非抽象类继承父类时，不会自动实现 来自父类的抽象成员，必须手动定义 父类中的成员，否则会报错
  // 抽象成员包含 属性 和 方法
  