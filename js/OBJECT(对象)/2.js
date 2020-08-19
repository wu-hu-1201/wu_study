// 构造函数
function Student(name, age, sex) {
    // 当var了一个new之后这里会发生：
    // var this = {
        // name: '',
        // age: 
    // }
    this.name = name
    this.age = age 
    this.sex = sex
    this.grade = 2017
    // return this  // new 了之后会隐式的增加了一个return
    return {xxx:'xxx'} //-->{ xxx: 'xxx' }
}

var student = new Student('wn', 22, 'boy')
console.log(student)

function Person() {
    var name = 'wn'
}
var person = new Person()
// console.log(person)