const Koa = require('koa')
const KoaView = require('koa-views')
const router = require('koa-router')()
const app = new Koa()
const path = require('path')
const viewPath = path.join(__dirname, './views')

app.use(KoaView(viewPath, {
    extension: 'ejs'   // ejs 约等于 vue template
}))

router.get('/', async(ctx) => {
    let xss = `
        <h2>xss</h2>
        <img onerror="alert(123);", src="xxx" />
    `
    // html css js 如果不想让它们当作可执行代码执行，就转义它们
    // html 转义（https://dev.w3.org/html5/html-author/charref）
    // js 转义：\x unicode码点16进制表现形式
    // cookie: http only
    // csp: 内容安全策略
    function toString(html) {
        return html.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    }
    let js = `";alert('css by js');"`
    function toString1(js) {
        let t = ''
        let code = '\\x' + "\"".charCodeAt(0).toString(16)
        return js.replace(/"/g, code)
    }
    await ctx.render('xss', {
        xssCode: toString(xss),
        js: toString1(js)
    })
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(8080, () => {
    console.log(8080)
})