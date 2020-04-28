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
            <el-table-column prop="id" label="id" width="50"></el-table-column>
            <el-table-column prop="oilman_id" label="oid" width="50"></el-table-column>
            <el-table-column prop="site_name" label="site_name" width="180"></el-table-column>
            <el-table-column prop="oilman_name" label="oilman_name" width="180"></el-table-column>
            <el-table-column label="is_share" width="100">
                <template slot-scope="scope">
                    <span v-if="scope.row.is_share == 1">不共享</span>
                    <span v-if="scope.row.is_share == 2">共享</span>
                </template>
            </el-table-column>
            <el-table-column prop="service_charge" label="服务费" width="100"></el-table-column>
            <el-table-column prop="info_charge" label="信息费"></el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>

        </el-table>

        <el-dialog :title="qrtext1" :visible.sync="dialogVisible" width="40%">
            <div>{{qrtext}}</div>
            <vue-qr :text="qrtext"></vue-qr>
            <!-- <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span> -->
        </el-dialog>

        <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange"></el-pagination>
    </div>

</template>
<script>
    import VueQr from 'vue-qr';
    export default {
        components: {
            VueQr
        },
        data() {
            return {
                total: 0,
                dialogVisible: false,
                qrtext: '',
                qrtext1: '',
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
            handleDetail(index, row) {
                console.log(index, row)
                this.qrtext = 'http://wx.51cey.com/#/creatOrder/' + row.lbsid
                this.qrtext1 = row.site_name
                console.log(this.qrtext)
                this.dialogVisible = true
            },
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
