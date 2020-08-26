<template>
  <div class="hi">
      <p>我是hi2界面</p><br/>
      <button @click="goBack">返回上一个界面</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    goBack () {
      // 编程式路由跳转
      this.$router.push({ path: '/abc', query: {name: 'wn'} })
      // this.$router.push({ path: 'abc', params: {name: 'wn'} })
    }
  }
}
</script>

<style>

</style>