let array = [1, 2, 1, '1']

function unique(array) {
    let  res = []
    for (let i =0; i < array.length; i++) { 
        let current = array[i]
        if (res.indexOf(current) === -1) {  //判断该元素在res数组中是否存在,不存在则加入数组中
            res.push(current)
        }
    }
    return res
}
console.log(unique(array))