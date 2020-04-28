<template>
    <div>
        <el-table border size="mini" :data="tableData" height="400">
            <el-table-column prop="id" label="id" width="100"></el-table-column>
            <el-table-column prop="created_at" label="created_at" width="180"></el-table-column>
            <el-table-column prop="mobile" label="mobile" width="180"></el-table-column>
            <el-table-column prop="contact" label="contact" width="180"></el-table-column>
            <el-table-column prop="name" label="name"></el-table-column>


        </el-table>

        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"></el-pagination>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                total: 0,
                query: {
                    pageNum: 1
                },
                tableData: []
            }
        },

        created() {
            // console.log(process.env.VUE_APP_API)
            this.getData()
        },

        methods: {
            getData() {
                var url = process.env.VUE_APP_API
                this.$http.get(url + 'oilman', {
                    params: this.query
                }).then(res => {
                    console.log(res.data)
                    this.tableData = res.data.data
                    this.total = res.data.total
                })
            },
            handleCurrentChange(val) {
                console.log(val)
                this.query.pageNum = val;
                this.getData()
            }
        }
    }
</script>
<style>

</style>
