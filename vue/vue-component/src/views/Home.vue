<template>
  <div class="home">
    <p>{{title}}</p>
    <User :userName="name" @titleChange="updateTitle"></User>
  </div>
</template>

<script>
// @ is an alias to /src

import User from '@/components/User'
export default {
  name: 'Home',
  data() {
    return {
      name: '牛哥',
      title: ''
    }
  },
  components: {
    User
  },
  methods: {
    updateTitle(title) {
      console.log('已接受来自子组件数据')
      console.log(title)
      this.title = title
    }
  }
}
</script>
