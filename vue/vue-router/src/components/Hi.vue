<template>
  <div class="hello">
      <h1>{{msg}}</h1>
      <router-link :to="{name: 'Hi1', params:{name: 'ly'}}">hi一</router-link>
      <span style="display:inline-block; width:50px"></span>
      <router-link to="/hi/hi2">hi二</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'Hi',
    data() {
        return {
            msg: 'Hi, I am wn'
        }
    }
}
</script>

<style>

</style>