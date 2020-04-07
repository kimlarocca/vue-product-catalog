import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/product-catalog',
    name: 'Product Catalog',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ProductCatalog" */ '../views/ProductCatalog.vue')
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

export default router
