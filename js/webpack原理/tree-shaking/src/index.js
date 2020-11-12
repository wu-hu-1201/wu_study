import add from './add.js'
import min from './min.js'
// import {debounce} from [lodash]  此种情况下tree-shaking会失效，将整个lodash都打包
// import debounce from 'lodash/debounce'   // 这样写 缩小打包内容，只打包所要用到的debounce

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



