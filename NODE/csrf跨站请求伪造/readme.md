# 登录
cookie  保存用户信息，后续一段都不用在登录了
api.juejin.cn

另外一个 黑客域名下面 请求api.juejin.cn
1. xhr fetch 跨域不能伪造这个请求
2. GET: script img link POST: from 就能伪造出来

api.juejin.cn/delete/01  验证用户（后端无法拿到 cookie）