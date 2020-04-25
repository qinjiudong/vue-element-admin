<template>
    <el-menu router>
        <el-menu-item v-for="item in menu" :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                menu: []
            }
        },
        created() {
            this.$http.get('menu.json').then(res => {
                this.menu = res.data
            }).catch(err => {
                console.log(err)
            })
        }
    }
</script>
