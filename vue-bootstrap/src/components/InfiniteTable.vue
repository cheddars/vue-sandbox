<template>
  <div class="infini-table">
    <table v-scroll="handleScroll">
      <thead>
      <tr>
        <th v-for="(field, idx) in fields" v-bind:key="idx">{{ field }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, idx) in items" v-bind:key="idx">
        <td v-for="(field, f_idx) in fields" v-bind:key="f_idx">{{item[field]}}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr v-if="isLoading">
        <td :colspan="fields.length">
          <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
        </td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'

export default {
    name: "InfiniteTable",
    data: () => {
        return {
                  isLoading : true,
      fields : ["test", "abc"],
      items: [
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
        {"test" : 1, "abc" : 10},
      ]
    }
  },
  methods: {
    setIsLoading(loading){
      this.isLoading = loading;
    },
    appendItems(){
      this.items.push(
        [{"test" : 2, "abc" : 100}]
      )
    },
    handleScroll(event) {
      console.log(event);
      this.isUserScrolling = (window.scrollY > 0);
      console.log('calling handleScroll');
      debounce()
    }
  }
}
</script>

<style>
.infini-table {
  width: 90%;
  height: 600px;
}

table {
  display: block;
  width: 100%;
  height: 300px;
  overflow: auto;
}
th { position: sticky; top: 0; z-index: 1; }
tfoot td { position: sticky; bottom:0; z-index: 1;}

/* Just common table stuff. Really. */
table  { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 16px; }
th     { background:#eee; }

</style>
