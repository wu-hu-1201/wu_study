function test() {

}

//函数也是对象， 也能拥有属性
// test.name   test.prototype
// test.[[scope]] // 隐式属性， 不可能被拿出来用


function a() {
    function b() {
        var b = 222
    }
    var a = 111
    b()
    console.log(a)
}
var glob = 100
a()


// b执行完了  b的AO就要销毁

// 紧接着a也说，我也执行完了，我的AO也要销毁了  因为a的AO包含了b函数，当a的AO销毁时b函数直接失效




