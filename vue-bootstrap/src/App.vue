<template>
  <div id="app">
    <vue-table-practice />
  </div>
</template>

<script>
// import InfiniteTablePractice from './view/InfiniteTablePractice.vue'
import VueTablePractice from './view/VueTablePractice.vue'

export default {
  name: 'App',
  components: {
   // InfiniteTablePractice, 
    VueTablePractice
  },
  data : () => {
    return {
    }
  },
  methods: {
  }
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
