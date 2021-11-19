<template>
    <div class="table-wrapper">
        <div class="scroll-wrap">
            <table class="table table-hover table-striped">
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
                        <th v-for="field of fields" v-bind:key="field.key">{{field.label}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of items" v-bind:key="item.key">
                        <td v-for="field of fields" v-bind:key="field.key">
                            <p v-if="field.renderer != null" v-html="renderer(item[field.key])" />
                            <p v-if="field.renderer === null">{{item[field.key]}}r</p>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td :colspan="fields.length">
                            <infinite-loading @infinite="handleInfinite" 
                                infinite-scroll-distance="2"
                                spinner="waveDots" >No Data</infinite-loading>
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
    props: ["fields", "items", "handleInfinite"],
    data : () => {
        return {
            limit: 0
        }
    },
    methods: {
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
</style>