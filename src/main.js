import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AV from 'leancloud-storage'

Vue.use(VueAxios, axios)
Vue.use(ElementUI, {
    size: 'small',
    zIndex: 3000
});

Vue.config.productionTip = false

Vue.prototype.$av = AV;
Vue.prototype.$av.init({
    appId: "sFWcozKAtiRpkdECDuPhvDXF-9Nh9j0Va",
    appKey: "LRd0bSgJfRjNPeM2FVQfJAvG",
    serverURL: "https://sfwcozka.lc-cn-e1-shared.com"
});

router.beforeEach((to, from, next) => {
    const currentUser = Vue.prototype.$av.User.current();

    if (!currentUser && to.path !== '/login') {
        next('/login');
    } else {
        if (to.path == '/login' && currentUser) {
            next('/index');
        }
        next();
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
