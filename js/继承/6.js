function SuperType(name) {
    this.name = name
    this.colors = ['red', 'green', 'blue']
}
SuperType.prototype.sayName = function() {
    console.log(this.name)
}

function SubType(name, age) {
    SuperType.call(this, name)
    this.age = age
}

//  原型链继承构造函数继承

// SubType.prototype = new SuperType()
SubType.prototype = Object.create(SuperType.prototype)
SubType.prototype.constructor = SuperType
SubType.prototype.sayAge = function() {
    console.log(this.age)
}

let instance1 = new SubType('yl', 20)
instance1.colors.push('pink')
console.log(instance1.colors);
instance1.sayAge()
instance1.sayName()
