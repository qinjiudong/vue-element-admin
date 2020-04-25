<template>
    <el-container>
        <el-header>
            <el-avatar icon="el-icon-user-solid"></el-avatar>
            {{username}}

             <el-button icon="el-icon-switch-button" circle></el-button>
        </el-header>
        <el-container>
            <el-aside width="200px">
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
        data() {
            return {
                username: 'null',
            }
        },
        components: {
            vMenu
        }
    }
</script>
<style>
    .el-header {
        background-color: #42B983;

    }

    .el-avatar {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }


    .el-aside {
        background-color: lightgrey;
    }

    .el-main {
        background-color: bisque;
    }

    .el-container {
        height: 100%;
    }
    .el-button{
        position: relative;
        float: right;
        top: 50%;
        transform: translateY(-50%);
    }
</style>
