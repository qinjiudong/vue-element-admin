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
                var Bmob = this.Bmob;
                var username = this.param.username;
                var password = this.param.password;

                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        Bmob.User.login(username, password).then(res => {
                            console.log(res);
                            this.$router.push('/index');
                        }).catch(err => {
                            this.$message.error(err.error)
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
