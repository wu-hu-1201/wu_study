// 引入依赖 commonJS
const Koa = require('koa')

// 创建一个Koa对象表示web app本身
const app = new Koa() //定义一个新的koa实例

const main = ctx => {
    ctx.response.body = "Hello World"
}
app.use(main)

// 在端口3000监听
app.listen(3000, () => {
    console.log('项目启动ing')
})
