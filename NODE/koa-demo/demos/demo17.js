const Koa = require('koa')
const app = new Koa()


const main = ctx => {
    ctx.throw(500)
}



// 监听error,可以在控制台看见server error
app.on('error', (error, ctx) => {
    console.error('server error', error)  // 只要报错就在error监听得到
})


app.use(main)
app.listen(3000)