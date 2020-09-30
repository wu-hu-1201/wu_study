<template>
  <div class="home">
      <p>首页</p>
      <HomeChild />
  </div>
</template>

<script>
import HomeChild from '@/components/HomeChild.vue'
export default {
    components: {
        HomeChild
    }
}
</script>

<style>

</style>