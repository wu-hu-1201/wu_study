<template>
  <div class="methods">
      methods
      <p>{{count}}</p>
      <button @click="add">add</button>
      <!-- <button @click="add($event)">add</button> -->  
      <!-- 要传参必须加$event -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add(e) {
            this.count++
            console.log(e)
        }
    }
}
</script>

<style>

</style>