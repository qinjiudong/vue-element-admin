<template>
    <div>
        <el-form :inline="true" :model="query" class="demo-form-inline" ref="queryForm">
            <el-form-item label="mobile" prop="mobile">
                <el-input v-model="query.mobile"></el-input>
            </el-form-item>
            <el-form-item label="fleet_name" prop="fleet_name">
                <el-input v-model="query.fleet_name"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button @click="resetForm">重置</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table border size="mini" :data="tableData" height="450">
            <el-table-column prop="id" label="id" width="100"></el-table-column>
            <el-table-column prop="created_at" label="created_at" width="180"></el-table-column>
            <el-table-column prop="mobile" label="mobile" width="180"></el-table-column>
            <el-table-column prop="contact" label="contact" width="180"></el-table-column>
            <el-table-column prop="is_yinliu" label="is_yinliu" width="100"></el-table-column>
            <el-table-column prop="fleet_name" label="fleet_name"></el-table-column>
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
                    pageNum: 1,
                    mobile: '',
                    fleet_name: ''
                },
                tableData: []
            }
        },

        created() {
            this.getData()
        },

        methods: {
            resetForm() {
                this.$refs.queryForm.resetFields();
            },
            getData() {
                var url = process.env.VUE_APP_API
                var path = this.$route.path
                this.$http.get(url + path, {
                    params: this.query
                }).then(res => {
                    this.tableData = res.data.data
                    this.total = res.data.total
                })
            },
            handleCurrentChange(val) {
                this.query.pageNum = val;
                this.getData()
            },
            onSubmit() {
                this.query.pageNum = 1;
                this.getData()
            }
        }
    }
</script>
<style>

</style>
