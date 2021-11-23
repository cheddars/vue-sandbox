<template>
  <div>
    <div class="container">
      <coin-angel-table
        :fields="fields"
        :items="items"
        fixHeight='200px'
        :fetchFunc='fetchItems'
      />
    </div>
  </div>
</template>

<script>
import CoinAngelTable from '../components/CoinAngelTable.vue'

export default {
  name: "VueBootsTable",
  components: { 
    CoinAngelTable  
  },
  data() {
      return {
        fields: [
          { key: 'age', title: 'age', sortable: true },
          { key: 'first_name', title: 'First Name' },
          { key: 'last_name', title: 'Last Name' }
        ],
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
  methods: {
    async fetchItems (offset, limit) {
      console.log("fetch item", limit, offset)

      const i = [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      return { total: 30, data: i }
    },
  },
}
</script>

<style scoped>
.container {
  width: 800px
}
</style>