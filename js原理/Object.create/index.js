// Object.create

let a = { b: 1}

let c = create(a)

function create(obj) {
    if (typeof obj !== 'object') {  // 判断是否为对象
        throw TypeError
    }
    // function Ctor() {}
    // Ctor.prototype = obj
    // let o =new Ctor()
    // return o
    return {
        __proto__: Object
    }
}