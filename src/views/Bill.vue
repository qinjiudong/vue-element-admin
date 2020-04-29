<template>
    <div>
        <el-table border size="mini" :data="tableData" height="450" show-summary>
            <el-table-column prop="createdAt" label="createdAt" width="150"></el-table-column>
            <el-table-column prop="updatedAt" label="updatedAt" width="150"></el-table-column>
            <el-table-column prop="name" label="name" width="100"></el-table-column>
            <el-table-column prop="num" label="num" width="100"></el-table-column>
            <el-table-column prop="objectId" label="objectId"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDetail(scope.$index, scope.row)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="form" label-width="50px">
                <el-form-item label="num">
                    <el-input v-model="form.num"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer">
                <el-button type="primary" @click="saveEdit">确定</el-button>
            </div>
        </el-dialog>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                tableData: [],
                dialogFormVisible: false,
                form: {},
            }
        },

        created() {
            this.getData();
        },

        methods: {
            handleDetail(index, row) {
                this.dialogFormVisible = true;
                this.form = JSON.parse(JSON.stringify(row))
            },

            saveEdit() {
                const query = this.Bmob.Query('Test');

                query.set('id', this.form.objectId)
                query.set('num', Number(this.form.num))
                query.save().then(res => {
                    console.log(res)
                }).catch(err => {
                    this.$message.error(err.error)
                })

                this.getData()
                this.dialogFormVisible = false;
            },

            getData() {
                const query = this.Bmob.Query("Test");
                query.find().then(res => {
                    this.tableData = res
                });
            }
        }
    }
</script>
