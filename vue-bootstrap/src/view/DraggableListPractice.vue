<template>
  <draggable-list 
    :items="items"
    :itemChangeCallback="callback"></draggable-list>  
</template>

<script>
import DraggableList from '../components/DraggableList.vue'

export default {
  name: 'DraggableListPractice',
  components: { DraggableList },
  data () {
    return {
      items: [
        { name: 'Fist Item' },
        { name: 'Second Item' },
        { name: 'Third Item' },
        { name: 'Fourth Item' }
      ]
    }
  },
  methods : {
    itemChangeCallback (items) {
      console.log(items)
    }
  }
}
</script>

<style scoped>

</style>