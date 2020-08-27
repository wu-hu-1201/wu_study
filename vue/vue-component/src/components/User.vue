<template>
  <div class="user">
     <p>{{userName}}</p>
     <button @click="handdle">按钮</button>
     <button @click="handdle1">养新的宠物</button>
  </div>
</template>

<script>
export default {
    props: ['userName'],
    data() {
        return {
            name: '蜗牛',
            title: '我是子组件里的title',
            babyName: '小黑'
        }
    },
    methods: {
        handdle() {
            console.log('ok')
            this.$emit('titleChange', this.title)
        },
        handdle1() {
            console.log('可以的')
            this.$emit('babyChange', this.babyName)
        }
        
    }
}
</script>

<style>

</style>