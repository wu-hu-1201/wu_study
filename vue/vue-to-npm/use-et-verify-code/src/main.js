import Vue from 'vue'
import App from './App.vue'
import EtVerifyCode from 'wu-hu-verify-code'


Vue.use(EtVerifyCode)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
