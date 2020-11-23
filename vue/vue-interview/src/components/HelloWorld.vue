<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="toFatherdata">click</button>
    <Hello1></Hello1>
  </div>
</template>

<script>
import Hello1 from './Hello1.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Hello1
  },
  methods: {
    toFatherdata() {
      this.$emit('toFatherdata', '传值')
    }
  },
  beforeCreate() {
    console.log('son beforeCreate')
  },
  created() {
    console.log('son created')
  },
  beforeMount() {
    console.log('son beforeMount')
  },
  mounted() {
    console.log('son mounted')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
