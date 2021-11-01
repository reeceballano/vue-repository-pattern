import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: { layout: 'no-sidebar', header: 'full' }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { layout: 'default-layout', header: 'half' }
    },
    {
        path: '/users',
        name: 'Users',
        component: () =>
            import ( /* webpackChunkName: "users" */ '../views/Users.vue')
    },
    {
        path: '/user/:uid',
        name: 'User',
        component: User
    },
    {
        path: '/post/:id',
        name: 'Post',
        component: () =>
            import ( /* webpackChunkName: "post" */ '../views/Post.vue')
    },
    {
        path: '/suspense',
        name: 'Suspense',
        component: () =>
            import ( /* webpackChunkName: "suspense" */ '../views/Suspense.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

export default router