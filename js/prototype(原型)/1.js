
// Person.prototype  --就是原型
// Person.prototype ={}  函数被定义出来就天生具备的

Person.prototype.name = 'jj'
function Person() {
    // this.name = 'wn'
}

Person1.prototype.say = 'giao'
function Person1() {
    console.log('jj')
}



var person = new Person()
console.log(person.name)  // 从原型上继承来的

var person1 = new Person()
console.log(person1.name)

person1.say()