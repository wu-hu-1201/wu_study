//函数中的作用域   气泡模型
function foo(a) {
    var b = 2

    function bar() {

    }

    var c =3
}
foo(1)
console.log(a, b, c)

//foo的作用域具备a, b, c, bar 这些标识符
//foo 外部是访问不到这些标识符的