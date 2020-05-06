<template>
    <div>
        <van-nav-bar title="查看" />
        <van-cell-group>
            <van-cell v-for="(item,index) in data" :key="index" :title="item.name" :value="item.val" @click="test(index)" />
        </van-cell-group>

        <van-popup v-model="show" round>
            <van-form @submit="onSubmit">
                <van-field v-model="form.name" name="name" label="name" />
                <van-field v-model="form.val" name="val" label="val" />

                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit">提交</van-button>
                </div>
            </van-form>
        </van-popup>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                key1: '',
                index: -1,
                form: {
                    name: '',
                    val: '',
                },
                data: [{
                        "name": "111",
                        "val": "111"
                    },
                    {
                        "name": "222",
                        "val": "222"
                    },
                    {
                        "name": "333",
                        "val": "333"
                    },{
                        "name": "444",
                        "val": "444"
                    },
                ]
            }
        },
        created() {
            var list = localStorage.getItem("key1");

            if (!list) {
                localStorage.setItem("key1", JSON.stringify(this.data));

            } else {
                this.data = JSON.parse(list)
            }
        },
        methods: {
            test(index) {
                this.form = JSON.parse(JSON.stringify(this.data[index]))
                this.show = true
                this.index = index
            },
            onSubmit() {
                this.data[this.index] = this.form
                localStorage.setItem("key1", JSON.stringify(this.data));
                this.show = false
            }
        }

    }
</script>
