import { createStore } from 'vuex'
import post from './modules/post';
import user from './modules/user';
import comment from './modules/comment';
import loading from './modules/loading';
import siteSetting from './modules/siteSetting';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        post,
        user,
        comment,
        loading,
        siteSetting
    }
})
