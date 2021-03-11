// 函数声明
function ab(): void {}

// 方法参数
function ba(name: string, age?: number): string {
  return `${age || "年龄不详的"}的${name}`;
}

// 剩余参数
function getSum(x: number, y: number, ...z: number[]): number {
  let sum: number = x + y;
  z.map((item, index) => {
    sum += item;
  });
  return sum;
}
console.log(getSum(1, 2, 3, 4, 5)); // 15

// 函数重载
// 被重载的函数，是没有函数体的，可以根据参数的类型走其中一个方法并判断参数
// 函数的重载与返回值类型无关
// 函数重载的作用：是一种参数校验功能，在进行函数调用时，会对参数进行检查，
//    只有传人的参数类型、顺序、个数和重载的函数的参数相同时，才能调用成功，否则报错
// 例子：
// 不同的数据类型
// function res(name: string): void{}
// function res(age: number): void {}
function res(info: any): any {
  if (typeof info === "string") {
    console.log(`我的名字是：${info}`);
  } else if (typeof info === "number") {
    console.log(`我的年龄是：${info}`);
  }
}
res("wn"); // 我的名字是：wn
res(18); // 我的年龄是：18

// 不同的参数
// function merge(name: string): void{}
// function merge(name: string, age?: number): void{}
function merge(name: string, age?: number): any {
  if (age) {
    console.log(`${age}岁的$${name}`);
  } else {
    console.log(`${name}年龄未知`);
  }
}
merge("wn", 18); // 18岁的wn
merge("wn"); // wn年龄未知

// this和箭头函数
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function () {
    return function () {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
// createCardPicker是个函数，并且它又返回了一个函数
// 返回的函数里的this被设置成了window而不是deck对象;严格模式下指向undefinen而非window
// 为了解决这个问题，我们可以在函数被返回时就绑好正确的this：箭头函数能保存函数创建时的 this值，而不是调用时的值
/*return () => {
  let pickedCard = Math.floor(Math.random() * 52);
  let pickedSuit = Math.floor(pickedCard / 13);
  return {suit: this.suits[pickedSuit], card: pickedCard % 13};
}
*/
