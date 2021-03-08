// 归并排序
function merge(arr1, arr2) {
    let arr = []
    while (arr1.length && arr2.length) {
        while (arr1[0] <= arr2[0]) {
            // 将更大的那个数弹出
            arr.push(arr1.shift())
        }
        while (arr2[0] <= arr1[0]) {
            // 将更大的那个数弹出
            arr.push(arr2.shift())
        }
    }
    // 当有一个数组被排完了，跳出循环，合并两个数组并解构
    //(此时一个数组为空，也就是直接将还有剩下的那个数组直接 push到新的数组)
    arr.push(...arr1.concat(arr2))
    return arr
}
console.log(merge([-1, -2, 9], [-3, 0, 2, 3,]))

// 递归
function merSort(arr) {
    if (arr.length <=1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    let leftPart = merSort(left)
    let rightPart = merSort(right)
    return merge(leftPart, rightPart)
}
console.log(merSort([-1, -3, 0, -9, -2]))