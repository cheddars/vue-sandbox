<template>
    <div class="table-wrapper">
        <div class="scroll-wrap">
    <table
        class="table table-hover table-striped">
        <!-- <colgroup>
            <col width="10%">
            <col width="30%">
            <col width="10%">
            <col width="20%">
            <col width="10%">
            <col width="10%">
            <col width="10%">
        </colgroup> -->
        <thead>
            <tr>
                <th>Id</th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회수</th>
                <th>조회수</th>
                <th>조회수</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user of users" v-bind:key="user.DR_ID">
                <td>{{user.DR_ID}}</td>
                <td>{{user.DR_TITLE}}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="5">
            <infinite-loading @infinite="infiniteHandler" 
                infinite-scroll-distance="2"
                spinner="waveDots" >No Result...</infinite-loading>
                </td>
            </tr>
        </tfoot>
    </table>
        </div>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';

export default {
    name: "InfiniteLoadingTable",
    components: {
        InfiniteLoading
    },
    data : () => {
        return {
            limit: 0,
            users: [
                {DR_ID: 0, DR_TITLE: "title0"},
                {DR_ID: 11, DR_TITLE: "title11"},
                {DR_ID: 12, DR_TITLE: "title12"},
                {DR_ID: 13, DR_TITLE: "title13"},
                {DR_ID: 14, DR_TITLE: "title14"},
                {DR_ID: 15, DR_TITLE: "title15"},
            ]
        }
    },
    methods: {
        infiniteHandler($state){
            console.log(this);
            try{
                console.log($state);
                console.log("call handler");
                console.log(this.users);
                const newitems = [{DR_ID: 21, DR_TITLE: "title21"},
                    {DR_ID: 22, DR_TITLE: "title22"},
                    {DR_ID: 23, DR_TITLE: "title23"},
                    {DR_ID: 24, DR_TITLE: "title24"},
                    {DR_ID: 25, DR_TITLE: "title25"}
                ];

                for(const i of newitems){
                    this.users.push(i);
                }
                $state.complete();
                console.log(this.users);
            }catch(error){
                console.error(error);
            }
        }
    },
    created: () => {
        console.log("call created");
    }
}
</script>

<style scoped>
.table-wrapper{
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 80vh;
}

.scroll-wrap {
    width: 95%;
    height: 100%;
    overflow: auto;
}

table {
    margin: 0 30px;
    border-collapse: collapse;
}

th {
    position: sticky; top: 0; z-index: 1;
    background-color: white;
}
th, td { }
</style>