// 获取主入口文件
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

// 拿到模块内容
const getModuleInfo = (file) => {
    const body = fs.readFileSync(file, 'utf-8') 
    const ast = parser.parse(body, {
        sourceType: 'module'  // 表示要解析的是ES模块
    })
    const deps = {}
    traverse(ast, {
        ImportDeclaration({node}) {
            const dirname = path.dirname(file)  // 拿到index.js的绝对路径
            // 通过index.js的绝对路径读到模块的路径
            const abspath = './' + path.join(dirname, node.source.value)
            deps[node.source.value] = abspath
        }
    })
    // 先将AST转化为真实语法 ES6 >(降级) es5
    const { code } = babel.transformFromAst(ast, null, {
        presets: ['@babel/preset-env']
    })
    // console.log(body)
    // console.log(ast.program.body)
    // console.log(deps)
    const moduleInfo = {file, deps, code}
    // console.log(code)
    return moduleInfo
}

// 读取文件的地址
getModuleInfo('./src/index.js')

// 递归做依赖收集
const parseModules = (file) => {
    const enter = getModuleInfo(file)
    const temp = [enter]
    const depsGraps = []
    for (let i = 0; i < temp.length; i++) {
        const deps = temp[i].deps
        if (deps) {
            for (let key in deps) {
                if (deps.hasOwnProperty(key)) {
                    temp.push(getModuleInfo(deps[key]))
                }
            }
        }
    }
    

    // 优化一下
    temp.forEach(moduleInfo => {
        depsGraps[moduleInfo.file] = {
            deps: moduleInfo.deps,
            code: moduleInfo.code
        }
    })

    console.log(depsGraps)
    return depsGraps
}


// 打包
const bundle = (file) =>{
    const depsGraph = JSON.stringify(parseModules(file))
    return `(function (graph) {
        function require(file) {
            function absRequire(relPath) {
                return require(graph[file].deps[relPath])
            }
            var exports = {};
            (function (require,exports,code) {
                eval(code)
            })(absRequire,exports,graph[file].code)
            return exports
        }
        require('${file}')
    })(${depsGraph})`

}


const content = bundle('./src/index.js')
console.log(content)

// 从./src/index.js 一直递归下去做收集
// parseModules('./src/index.js')

// 写入dist目录
fs.mkdirSync('./dist')
fs.writeFileSync('./dist/bundle.js')