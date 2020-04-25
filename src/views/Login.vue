<template>
    <el-form :model="param" ref="loginForm">
        <el-form-item required prop="username">
            <el-input v-model="param.username">
                <template slot="prepend">账户</template>
            </el-input>
        </el-form-item>

        <el-form-item required prop="password">
            <el-input v-model="param.password" show-password>
                <template slot="prepend">密码</template>
            </el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm">login</el-button>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                param: {
                    username: '',
                    password: '',
                },
            };
        },
        methods: {
            submitForm() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.$message.success('登录成功');
                        localStorage.setItem('ms_username', this.param.username);
                        // this.$router.push('/');
                    } else {
                        this.$message.error('请输入账号和密码');
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
<style>
    .el-form {
        width: 250px;
        text-align: center;
        margin: 0 auto;
        top: 30%;
        position: relative;
    }

    .el-button {
        width: 250px;
    }
</style>
