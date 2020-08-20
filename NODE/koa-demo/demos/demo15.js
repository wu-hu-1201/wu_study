const Koa = require('koa')
const app = new Koa()

const main = ctx => {
    ctx.response.status = 404
    ctx.response.body = '页面找不到'
}




app.use(main)
app.listen(3000)