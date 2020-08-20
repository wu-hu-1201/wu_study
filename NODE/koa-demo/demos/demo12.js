const Koa = require('koa')
const app = new Koa()
const path = require('path')
const server = require('koa-static')
// const main = ctx => {
//     ctx.response.body = path.join(__dirname)
// }

const main = server(path.join(__dirname))

app.use(main)
app.listen(3000)