let arr = [[1, 2, 2], [3, 4, 5, 5],[6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10]

// 拍平 去重
function flatten(arr) {
    return arr.reduce(function(acc, val) {
        return acc.concat(Array.isArray(val) ? flatten(val) : val)
    }, [])
}

flatten(arr)