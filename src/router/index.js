import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'no-sidebar' }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { layout: 'default-layout' }
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: () => import(/* webpackChunkName: "post" */ '../views/Post.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0,0);
    }
})

export default router
