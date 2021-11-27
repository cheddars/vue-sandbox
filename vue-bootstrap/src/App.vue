<template>
  <div id="app">
    <draggable-list-practice></draggable-list-practice>
  </div>
</template>

<script>
// import InfiniteTablePractice from './view/InfiniteTablePractice.vue'
import DraggableListPractice from './view/DraggableListPractice.vue'

export default {
  name: 'App',
  components: {
   // InfiniteTablePractice, 
    DraggableListPractice
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
