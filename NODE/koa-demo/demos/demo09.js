// 引入依赖 commonJS
const Koa = require('koa')

const app = new Koa() //定义一个新的koa实例


const one = (ctx, next) => {
    console.log('<<one')
    next()
    console.log('one>>')
}

const two = (ctx, next) => {
    console.log('<<two')
    next()
    console.log('two>>')
}

const three = (ctx, next) => {
    console.log('<<three')
    next()
    console.log('three>>')
}



app.use(one)
app.use(two)
app.use(three)
// 在端口3000监听
app.listen(3000)
