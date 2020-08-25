import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Hi from '@/components/Hi.vue'
import Hi1 from '@/components/Hi1.vue'
import Hi2 from '@/components/Hi2.vue'



Vue.use(Router)

export default new Router({  // 配置路由
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello  // 引入组件
    },
    {
        path: '/hi',
        name: 'Hi',
        component: Hi,
        children: [
            {
                path: 'hi1',
                name: 'Hi1',
                component: Hi1,
            },
            {
                path: 'hi2',
                name: 'Hi2',
                component: Hi2,
            }
        ]
    }
  ]
})