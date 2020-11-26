import add from './add.js'
import min from './min.js'
// import {debounce} from [lodash]  此种情况下tree-shaking会失效，将整个lodash都打包
// import debounce from 'lodash/debounce'   // 这样写 缩小打包内容，只打包所要用到的debounce

// 入口文件有很多依赖的模块,实际情况中，虽然依赖了某个模块，但其实只使用其中的某些功能。
// 通过 tree-shaking，将没有使用的模块摇掉，这样来达到删除无用代码的目的。(消除那些引用了但并没有被使用的模块)
// Tree-shaking 和传统的 DCE的方法又不太一样，传统的DCE 消灭不可能执行的代码，
// 而Tree-shaking 更关注消除没有用到的代码。
// 1. es-Module 在代码静态分析的时候，就能知道你引入了哪些模块
// 2. webpack production 会开启tree-shaking
// 3. 每个模块里面加入存在(副作用)，剔除它可在package.json中加  "sideEffects": false，
//    基本上只要不是 pollyFill(垫片)形式的副作用，就都能加上  "sideEffects": false，
//    垫片例子：const Promise = Promise || function Promise()  {自己实现}
// 4. 第三方模块(lodash/element-ui),谨防它们不是 es-module,否则tree-shaking会失效
//    babel-plugin-import会
//    将import { Button } from 'element-ui'
//    转化成 import Button from 'element-ui/Button'
console.log(add(4, 5))
// console.log(min(5, 4))



