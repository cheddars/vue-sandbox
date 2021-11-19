<template>
  <div id="app">
      <infinite-loading-table 
        :fields="fields" 
        :items="items" 
        :handleInfinite="handleInfinite" />
  </div>
</template>

<script>
import InfiniteLoadingTable from './components/InfiniteLoadingTable.vue';

export default {
  name: 'App',
  components: {
    InfiniteLoadingTable
  },
  data : () => {
    return {
      fields : [
        { key: 'id', label: 'Subject ID', headerTitle : 'Subject', sortable: true },
        { key: 'name', label: 'File Names', sortable: true },  
        { key: 'start_x_axis', label: 'Onset Count', sortable: true },
        { key: 'prev', label: 'Label Start Time', sortable: true },
        { key: 'next', label: 'Label Complete Time', sortable: true },
        { key: 'parent_file', label: 'Inspect Status', sortable: false, renderer: greenRedRenderer }
      ],
      items: [
                {id:  0, name : "title0" , start_x_axis: "122124", prev : "1214"},
                {id: 11, name : "title11", start_x_axis: "122124", prev : "1214"},
                {id: 12, name : "title12", start_x_axis: "122124", prev : "1214"},
                {id: 13, name : "title13", start_x_axis: "122124", prev : "1214"},
                {id: 14, name : "title14", start_x_axis: "122124", prev : "1214"},
                {id: 15, name : "title15", start_x_axis: "122124", prev : "1214"},
            ]
    }
  },
  methods: {
    greenRedRenderer: (value) => {
      if(value > 2){
        return '<p style="">Green</p>'
      }else{
        return '<p style="">Red</p>'
      }
    },
    handleInfinite : function($state){
      console.log(this);
            try{
                console.log($state);
                console.log("call handler");
                console.log(this.items);
                const newitems = [{DR_ID: 21, DR_TITLE: "title21"},
                    {DR_ID: 22, DR_TITLE: "title22"},
                    {DR_ID: 23, DR_TITLE: "title23"},
                    {DR_ID: 24, DR_TITLE: "title24"},
                    {DR_ID: 25, DR_TITLE: "title25"}
                ];

                for(const i of newitems){
                    this.items.push(i);
                }
                $state.complete();
                console.log(this.items);
            }catch(error){
                console.error(error);
            }    
    }
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
