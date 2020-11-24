var data = {
    name: 'yl',
    age: 18
}

observe(data)
let name = data.name  // get value
data.name = 'jl'  // set value

function observe(obj) {
    if (!obj || typeof obj !== 'object') {
        return
    }
    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}
function defineReactive(obj, key, val) {
    if (typeof val === 'object' && val !== null) {
        observe(val)
    }
    Object.defineProperty(obj, key, {
        get() {
            return val
        },
        set() {
            val = newVal
        }
    })
}