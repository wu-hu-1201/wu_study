// let obj = {
//     name: '吴',
//     age: 20,
//     sex: 'man'
// }
// obj.height = '180cm'   //---->添加数据
// const m = new Map()
// console.log(m)   //--->Map {}
//  m.set(obj,'content')
// console.log(m)  //---->Map { { name: '吴', age: 20, sex: 'man' } => 'content' }

// console.log(m.get(obj))   //---->content
// console.log(m.has(obj))   //--->查找是否存在某个元素
// m.delete(obj)    //--->删除数据
// console.log(m.has(obj))

// const map = new Map([
//     ['name', '吴'],
//     ['age', '20']
// ])
// console.log(map)  //-->Map { 'name' =>(:) '吴', 'age' =>(:) '20' }
// console.log(map.size)
// console.log(map.has('name'))  //-->是否存在该元素
// console.log(map.get('name'))  //-->拿到该元素的值

// const items = [
//     ['name', '吴'],
//     ['age', '20']
// ]
// const map = new Map()
// items.forEach(([key,value]) => {
//     console.log(key,value)  
// })  //--->name 吴  age 20
// items.forEach(([key,value]) => {
//     map.set(key,value)  
// })


// const set = new Set([
//     ['foo', 1],
//     ['bar', 2]
// ])
// console.log(set)  //--->Set { [ 'foo', 1 ], [ 'bar', 2 ] }

// const m1 = new Map(set)
// console.log(m1)  //--->Map { 'foo' => 1, 'bar' => 2 }


//const m = new Map()
// const K1 = ['a']
// const k2 = ['a']
// m.set(K1, 111).set(k2, 222)
// console.log(m)  //-->Map { [ 'a' ] => 111, [ 'a' ] => 222 }
// k1,k2值相同，在Map中也 被认为是两个键

// const map = new Map()
// map.set(0, 123)
// console.log(map)  //--->Map { 0 => 123 }
//map.set(-0, 123)  //0, -0 默认就是一个键
//map.set(+0, 123)

// const map = new Map()
// map.set(true, 1)
// map.set('true', 2)
// console.log(map.get('true'))  //-->2
// console.log(map.get(true))  //-->1

// map.set(undefined, 3)
// map.set(null,4)
// console.log(map)  //-->Map { undefined => 3, null => 4 }

// map.set(NaN, 5)   //NaN 默认就是一个键
// map.set(NaN, 6)
// console.log(map)  //--->Map { NaN => 6 }



const map = new Map([
    ['foo', 'no'],
    ['bar', 'yes']
])
//key() 返回键名的遍历器
//values() 返回键值得遍历器
//entries() 返回成员的遍历器
for(let key of map.keys()) {
    // console.log(key)   //--->foo  bar
}
for(let key of map.values()) {
    // console.log(key)   //--->no  yes
}
for(let key of map.entries()) {
    //console.log(key)   //--->[ 'foo', 'no' ] [ 'bar', 'yes' ]
}
map.forEach((e) =>{
    //console.log(e)  //--->no  yes
})
// let k = [...map.keys()]
// console.log(k)  //--->[ 'foo', 'bar' ]

let k = [...map.keys()]
let val = [...map.values()]
let m2 = [...map.entries()]  //let m2 = [...map]
console.log(m2) //--->[ [ 'foo', 'no' ], [ 'bar', 'yes' ] ]

