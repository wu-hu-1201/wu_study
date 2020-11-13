let url = require('url')
let request = {
    get url() {  // ctx.request.url  就可以取值了
        return this.req.url
    },
    get path() {
        return url.parse(this.req.url).pathname
    },
    get query() {  // ctx.request.path
        return url.parse(this.req.url).query
    }
    
}


module.exports = request