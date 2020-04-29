import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Bmob from "hydrogen-js-sdk"

Vue.use(VueAxios, axios)
Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000
});

Vue.config.productionTip = false

Bmob.initialize("568a05fbd67ab82c", "141096");
Vue.prototype.Bmob = Bmob

router.beforeEach((to, from, next) => {
    const currentUser = Bmob.User.current();
    if (!currentUser && to.path !== '/login') {
        next('/login');
    } else {
        if (currentUser && to.path == '/login') {
            next('/index');
        }
        next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
