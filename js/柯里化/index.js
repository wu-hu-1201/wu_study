function sum(a, b, c) {
    console.log(a + b + c)
}

function curry(fn, len = fn.length) {
    return _curry()
}
function _curry(fn, len, ...args) {
    return function(...params) {
        let _args = [...args, ...params]
        if (_args.length >= len) {
            return fn.apply(this, _args)
        } else {
            return _curry.call(this, fn, len, ...args)
        }
    }
}

let _sum = curry(sum)

let A = _SUM(1)
let B = A(2)
B(3)  // 6


function fn(a, b, c, d, e) {
    console.log(a, b, c, d, e)
}
let _fn = curry(fn)

_fn(1, 2, 3, 4, 5)  // 1, 2, 3, 4, 5



// 降低函数的通用性，提高函数的适用性
function checkByRegExp(regExp, string) {
    return regExp.test(string)
}

checkByRegExp(/^1\d{10}$/, '13437044230')
checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/, '652501825@qq.com')



let list = [
    {
        name: 'yl'
    },
    {
        name: 'hf'
    }
]
let names = list.map(function(item) {
    return item.name
})
// 柯里化
let prop = curry(function(key, obj) {
    return obj[key]
})
let names = list.map(prop('name'))