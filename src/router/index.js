import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import store from '../store/';

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
            import ( /* webpackChunkName: "users" */ '../views/Users.vue'),
        meta: { requiresAuth: true }
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
    },
    {
        path: '/login',
        name: 'Login',
        component: () => 
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: { layout: 'login-layout', header: 'full' },
    },
    {
        path: '/register',
        name: 'Register',
        component: () => 
            import( /* webpackChunkName: "register" */ '../views/Register.vue'),
        meta: { layout: 'login-layout', header: 'full' }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    }
})

router.beforeEach((to, from, next) => {
    /**
        SET isLogged in VUEX STORE
    */
 
    const isLogged = store.getters['login/getIsLogged'];

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if(isLogged) { 
            next();
        } else {
            next({ path: '/login' });
        } 
    } else {
        next();
    }    
})

export default router