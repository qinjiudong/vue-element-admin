import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000
});

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
