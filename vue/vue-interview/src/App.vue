<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">
    <keep-alive>
       <HelloWorld msg="Welcome to Your Vue.js App"/>
    </keep-alive>-->
    <HelloWorld :msg='msg' :toFatherdata='getDataFrom'/>
    <input type="text" :value.sync="value">
    <span>{{value}}</span>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      msg: 'hello world',
      value:'123',
      user: {
        name: 'jl',
        age: 20,
        sex: 'man'
      },
      pet: {
        type: 'cat',
        name: 'xh',
        age: 3,
        sex: 'girl'
      }
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getDataFrom(args) {
      console.log(args)
    }
  },
  activated() {  // 命中缓存

  },
  deactivated() {
    
  },
  updated() {
    console.log('数据发生变化')
  },
  beforeCreate() {
    console.log('app beforeCreate')
  },
  created() {
    console.log('app created')
  },
  beforeMount() {
    console.log('app beforeMount')
  },
  mounted() {
    console.log('app mounted')
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
