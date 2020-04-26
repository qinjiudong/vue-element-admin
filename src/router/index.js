import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '*',
    redirect: '/404',
}, {
    path: '/login',
    component: () => import('../views/Login.vue')
}, {
    path: '/',
    redirect: '/index',
    component: () => import('../views/Home.vue'),
    children: [{
        path: '/404',
        component: () => import('../views/404.vue')
    }, {
        path: '/index',
        component: () => import('../views/Index.vue')
    }, {
        path: '/table1',
        component: () => import('../views/Table1.vue')
    }, ]
}]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
