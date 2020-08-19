

// Person.prototype.lastName = 'fu'
// function Person(name) {
//     this.name = name
// }

// var person = new Person('long')

// console.log(person.lastName)
// person.lastName = 'yu'
// console.log(person.lastName)
// Person.prototype.lastName = 'yu'
// console.log(person.lastName)


// 删除
// delete Person.prototype.lastName
// console.log(person.lastName)


function Car() {

}
function Bus() {

}
Car.prototype = {
    constructor: Bus
}

var car = new Car()
// console.log(car.constructor)  //-->[Function: Car] / function Car() {}
// console.log(Car.prototype)
// constructor 为了让Car() 构造出的所有的对象都能找到它自己的构造器
console.log(car.constructor)  //-->[Function: Bus]
