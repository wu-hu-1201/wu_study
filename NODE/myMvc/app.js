// const app = new (require('koa'))()
// const { initRouter } = require('./lm-loader')  // const router = require('router')

// app.use(initRouter().routes())  // app.use(router.routes())


// app.listen(3000)


const lm = require('./lm')
const app = new lm()
app.start(3000)