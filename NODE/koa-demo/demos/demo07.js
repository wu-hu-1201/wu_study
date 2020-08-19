const Koa = require('koa')
const app = new Koa()
const route = require('koa-router')

const main = ctx => {
    console.log(ctx.request)
    ctx.response.body = `${ctx.request.url} - ${ctx.request.method}-${Date.now()}`
}



app.use(main)
app.listen(3000)