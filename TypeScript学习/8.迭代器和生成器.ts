// 可迭代性
// 当一个对象实现了Symbol.iterator属性时，我们认为它是可迭代的。
// 一些内置的类型如 Array，Map，Set，String，Int32Array，Uint32Array等都已经实现了各自的Symbol.iterator。
// 对象上的 Symbol.iterator函数负责返回供迭代的值。

// for ... of ...
// for..of会遍历可迭代的对象，调用对象上的Symbol.iterator方法
let someArray = [1, "string", false];
for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}

// for..of.. 与 for..in..
// for..of和for..in均可迭代一个列表；但是用于迭代的值却不同
// for..in迭代的是对象的 键 的列表，而for..of则迭代对象的键对应的值
let arrList = [4, 5, 6];
for (let i in arrList) {
  console.log(i); // 0 1 2
}
for (let i of arrList) {
  console.log(i); // 4 5 6
}

// for..in可以操作任何对象；它提供了查看对象属性的一种方法。 但是 for..of关注于迭代对象的值。

// 内置对象Map和Set已经实现了Symbol.iterator方法，让我们可以访问它们保存的值。
let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
  console.log(pet); // "species"
}

for (let pet of pets) {
  console.log(pet); // "Cat", "Dog", "Hamster"
}
