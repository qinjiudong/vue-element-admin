<template>
    <el-form :model="param" ref="loginForm" class="login-form1">
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
        <el-button style="width: 250px;" type="primary" @click="submitForm">login</el-button>
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
                        this.$av.User.logIn(this.param.username, this.param.password).then((user) => {
                            console.log(user)
                            this.$message.success('登录成功');
                            this.$router.push('/index');
                        }, (error) => {
                            this.$message.error(String(error));
                        });
                    } else {
                        console.log('error');
                        return false;
                    }
                });
            }
        }
    }
</script>
<style>
    .login-form1 {
        width: 250px;
        text-align: center;
        margin: 0 auto;
        top: 30%;
        position: relative;
    }
</style>
