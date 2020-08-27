<template>
  <div class="about">
  <User :userName="name" @babyChange="updateBaby"></User>
  <Animal :babyName="babyName"></Animal>
  </div>
</template>

<script>
import User from '@/components/User'
import Animal from '@/components/Animal'
export default {
  data() {
    return {
      name: '蜗牛',
      babyName: undefined
    }
  },
  components: {
    User,
    Animal
  },
  methods: {
    updateBaby(e) {
      console.log(e)
      this.babyName = e
    }
  }
}
</script>

<style>
  .about{
    color: red;
  }
</style>



