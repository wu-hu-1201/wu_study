<template>
  <div id="app">
    <Com />
  </div>
</template>

<script>
import Com from './Com.vue'
export default {
    components: {
        Com
    },
    beforeCreate() {
      // 在node里面输出
      // 因为在服务器端调用了
      console.log(111)
    },
    mounted() {
      // 在node端没有 $mount() 所以不会被调用
      console.log(222)
    }
}
</script>

<style>

</style>