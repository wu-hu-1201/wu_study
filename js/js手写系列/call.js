Function.prototype.myCall = function (context) {
    if (typeof this === 'function') {
        throw TypeError('not function')
    }

    context = context || window

    context.fn = this
    let arg = [...arguments].slice(0)
    let result = context.fn(...arg)
    delete context.fn
    return result
}