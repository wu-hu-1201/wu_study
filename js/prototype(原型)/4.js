
// Person.prototype.name = 'wn'
// function Person() {
//     // var this = {
//     //     __proto__: Person.prototype
//     // }
// }

// var person = new Person()
// console.log(person)

// var obj = {
//     name: 'won'
// }

// console.log(person.__proto__) //{ name: 'wn' }

// person.__proto__ = obj
// console.log(person.__proto__)


Person.prototype.name = 'wn'
function Person() {
    // var this = {
    //     __proto__: Person.prototype
    // }
}
var person = new Person()

Person.prototype = {  // 把原型重新赋值
    name: 'pi' 
}

console.log(person.name)