<template>
  <div id="app">
      <infinite-loading-table/>
  </div>
</template>

<script>
import InfiniteLoadingTable from './components/InfiniteLoadingTable.vue';

export default {
  name: 'App',
  components: {
    InfiniteLoadingTable
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
