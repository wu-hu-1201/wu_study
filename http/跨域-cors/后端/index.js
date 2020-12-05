const Koa = require('koa');
const Router = require('@koa/router');

const app = new Koa();
const router = new Router();
// 协议 域名 端口
app.use(async(ctx) => {
    // 响应头
    ctx.set('Access-Control-Allow-Origin','http://127.0.0.1:8080');
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    ctx.set('Access-Control-Expose-Headers', 'X-baidu')
    // 非简单请求 发一个 请求方式 是options 的预检请求, preflight请求的结果能够被缓存多久
    ctx.set('Access-Control-Max-Age', 60 * 60)
    ctx.set('Access-Control-Allow-Credentials', true)
    // GET POST DEL ...
    ctx.set('Access-Control-Allow-Methods', '*')
    await next();
})
router.post('/', (ctx, next) => {
  // ctx.router available
  ctx.set('Content-Type', 'application/json')
  ctx.set('X-baidu', 'xxxx')
  console.log(ctx.cookies)
  ctx.body = {
      code: 0
  }
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(9090, () => {
    console.log('9090端口启动')
})