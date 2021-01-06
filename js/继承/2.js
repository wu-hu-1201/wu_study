function Person() {}   // prototype    new Function()
var p1 = new Person()

console.log(p1.constructor)  // [Function: Person]
Person.prototype = {
    name: '小'
}

var p2 = new Person()
console.log(p2.constructor);  // [Function: Object]
