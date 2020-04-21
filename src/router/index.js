import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchForm from "../views/SearchForm"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Product Catalog',
        // route level code-splitting
        // this generates a separate chunk for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "ProductCatalog" */ '../views/ProductCatalog.vue'),
        meta: {title: 'Hawksearch / Vue Product Catalog'}
    },
    {
        path: '/search-form',
        name: 'SearchForm',
        component: SearchForm
    },
    {
        path: '/intro',
        name: 'Intro',
        // route level code-splitting
        // this generates a separate chunk for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "Intro" */ '../views/Intro.vue')
    },
    {
        path: '/my-product-list',
        name: 'My Product List',
        // route level code-splitting
        // this generates a separate chunk for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "MyProductList" */ '../views/MyProductList.vue')
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
