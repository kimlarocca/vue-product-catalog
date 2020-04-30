import Vue from 'vue'
import VueRouter from 'vue-router'
import Catalog from "../views/Catalog"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Catalog',
        component: Catalog,
        meta: {title: 'Vue Search | Open Source UI Library'}
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
