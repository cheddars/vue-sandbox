<template>
  <div id="app">
    <infinite-table></infinite-table>
  </div>
</template>

<script>
import InfiniteTable from './components/InfiniteTable.vue'

export default {
  name: 'App',
  components: {
    InfiniteTable
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
