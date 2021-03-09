// var
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
      return a;
    }
  }
  f(); // returns 2
  // 先访问自身内部有无a变量，没有则往前向上找，没找到就是undefined
  // 多次声明同一变量不会报错
  for (var i = 0; i < 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100 * i);
  } // 5 5 5 5 5
  // setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。 for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出 10！
  // 改为立即执行函数 或将 var 改成 let 可 0 1 2 3 4    function(i) {}(i)
  
  // let
  // 词法作用域或块作用域
  // 不能在被声明之前读或写 => 暂时性死区
  // TS在一个拥有块作用域变量被声明前能获取它,但是不能在变量声明前去调用那个函数
  function foo() {
    return a;
  }
  foo(); // 不能在'a'被声明前调用'foo',运行时应该抛出错误
  let a = 2;
  // 不能在一个作用域重复声明
  // 块级作用域变量需要在明显不同的块里声明
  function F(val, x) {
    if (val) {
      let x = 100;
      return x;
    }
    return x;
  }
  F(true, 10); // 100
  F(false, 10); // 10
  // 屏蔽
  let valArr = [1, 2, 3, 4, 5],
    sum = 0;
  for (let i = 0; i < 6; i++) {
    var first = valArr[i];
    for (let i = 0; i < 4; i++) {
      sum += first[i];
    }
  }
  
  // const
  // 赋值后不可重新赋值， 但是const变量内部状态是可修改的，Ts允许将对象成员设置为只读
  
  // 解构
  let tArr = [];
  let nArr = [1, ...tArr];
  
  let tObj = { x: "a", y: "b", z: "" };
  // let {aa, bb, cc}: {aa: string, bb: string, cc: string} = tObj
  // let {fi, ...other} = tObj
  // ?:  表示不是必须
  
  function J({ name = "sa", age = 20 }: { name: string; age?: number }): void {}
  J({ name: "gg" });
  
  // 展开符   和解构一样...