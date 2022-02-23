import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../views/Index"
import Slide from "../views/slide"
import Menu from '../views/menu.vue'
// import Details from "../views/Details"

Vue.use(VueRouter)

const routes = [
    // { path: "/", component: Index },
    { path: "/", component: Menu },
    { path: "/slide", component: Slide },
    // {path:"/details",component:Details},
    { //异步延迟加载
        path: '/details/:lid',
        component: () =>
            import ( /* webpackChunkName: "details" */ '../views/Details.vue'),
        props: true
    }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router