import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductCatalog from "../views/ProductCatalog"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'ProductCatalog',
        component: ProductCatalog,
        meta: {title: 'Hawksearch / Vue Product Catalog'}
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
