function SuperType() {
    this.colors = ['red', 'green', 'blue']
}

function SubType() {
    SuperType.call(this)
}

let instance = new SubType()
instance.colors.push('pink')
console.log(instance.colors)    //  ['red', 'green', 'blue', 'pink']


let instance2 = new SubType()
console.log(instance2.colors) 