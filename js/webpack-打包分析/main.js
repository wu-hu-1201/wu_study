(function(modules) {
    // modules['./index.js']()
    let installModules = {}
    function webpack_require(id) {
        if (installModules[id]) {
            return installModules[id]
        }
        let module = {
            exports: {}
        }
        let exports = module.exports
        installModules[id] = exports
        // module.exports === exports 指向了一个对象
        modules[id](module, exports, webpack_require)
        // module.exports.add = xxx  他人把add方法加到{}
        return exports
    }
    webpack_require('./index.js')
})(
    {
        './index.js': function(module, exports, require) { // key为文件地址  value为文件内容
            // index.js里的内容
            // 引入math.js内容 
            // 能引入什么东西 就由 require返回值决定
            const { add } = require('./math.js')
            // require('./math.js')会去调用math.js
            console.log(add(4, 5))
        },
        './math.js': function(module, exports, require) {
            // module, exports 对象
            // math.js里的内容
            const aa = require('./index.js')
            module.exports.add = (a, b) => a + b
            // 对象.add有个add方法
        }
    }
)