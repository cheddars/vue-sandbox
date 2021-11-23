<template>
  <div>
    <div class="table-wrapper">
      <b-table ref="angel-table" striped hover :sticky-header="fixHeight"
        @scroll.native="scrolled"
        :items='listItems'
        :fields="fields">
        <template #custom-foot v-if="!hasMoreItems()">
          <b-tr>
            <b-th :colspan="fields.length">no more items...</b-th>
          </b-tr>
        </template>
      </b-table>
      <b-overlay :show="isBusy" no-wrap opacity="0.5"></b-overlay>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CoinAngelTable',
  props: ['fields', 'items', 'fixHeight', 'fetchFunc'], 
  data() {
      return {
        isBusy: false,
        limit: 50,
        totalCount: -1,
        listItems: []
      }
    },
  methods: {
    hasMoreItems () {
      return this.totalCount < 0 || (this.items.length < this.totalCount)
    },
    scrolled (event) {
      const t = event.target
      if (t.scrollTop + t.clientHeight >= t.scrollHeight) {
        if (!this.isBusy && this.hasMoreItems()) {
          this.fetchItems()
        }
      }
    },
    async fetchItems () {
      this.isBusy = true
      const { total, data } = await this.fetchFunc(this.limit, this.items.length)
      this.totalCount = total
      this.listItems = this.listItems.concat(data)
      this.isBusy = false
    }
  },
  mounted () {
    this.listItems = this.items
  },
}
</script>

<style scoped>

</style>