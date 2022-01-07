import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/styles.scss'
import Default from './layouts/Default.vue'
import NoSidebar from './layouts/NoSidebar.vue'
import LoginLayout from './layouts/Login.vue'

const app = createApp(App);

app
    .component('default-layout', Default)
    .component('no-sidebar', NoSidebar)
    .component('login-layout', LoginLayout)
    .use(store)
    .use(router)
    .mount('#app')
