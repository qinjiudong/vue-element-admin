<template>
    <el-container>
        <el-header>
            <el-avatar icon="el-icon-user-solid"></el-avatar>{{username}}
            <el-button @click="logout" icon="el-icon-switch-button" circle class="logout1"></el-button>
        </el-header>
        <el-container>
            <el-aside width="">
                <v-menu></v-menu>
            </el-aside>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
<script>
    import vMenu from '../components/Menu.vue';
    export default {
        components: {
            vMenu
        },

        data() {
            return {
                username: '',
            }
        },

        created() {
            const currentUser = this.Bmob.User.current();
            this.username = currentUser.username
        },

        methods: {
            logout() {
                this.Bmob.User.logout();
                this.$router.push('/login');
            }
        }
    }
</script>
<style>
    .el-header {
        background-color: cadetblue;
    }

    .el-avatar {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        margin-right: 5px;
    }

    .el-container {
        height: 100%;
    }

    .logout1 {
        position: relative;
        float: right;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
