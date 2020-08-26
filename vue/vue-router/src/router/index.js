import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
// import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'
import Error from '@/components/Error.vue'
// import { component } from 'vue/types/umd'


Vue.use(Router)

export default new Router({  // 配置路由
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello  // 引入组件
    },
    {
      path: '*',
      component: Error   //  错误页面显示

    },
    {
        path: '/hi',
        name: 'Hi',
        component: Hi,
        children: [
            {
                path: 'hi1',
                name: 'Hi1',
                redirect: '/'
            },
            {
                path: 'hi2',
                name: 'Hi2',
                component: Hi2,
                alias: 'wn'
            }
        ]
    },
    {
      path: '/abc',
      name: 'abc',
      component: Error,
      beforeEnter: (to, from, next) => {  // 在进入这个函数之前
        console.log('我进入了404页面')
        console.log(to)
        console.log(from)
        next()
      }
    }
  ]
})