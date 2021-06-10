import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    posts: [],
    post: {},
    isLoading: false,
}

// GETTERS
const getters = {
    getPosts: state => {
        return state.posts;
    },

    getPost: state => {
        return state.post;
    },

    getIsLoading: state => {
        return state.isLoading;
    }
}

// MUTATIONS
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },

    SET_POST(state, post) {
        state.post = post;
    },

    SET_IS_LOADING(state, isLoading) {
        state.isLoading = isLoading;
    }
}

// ACTIONS
const actions = {
    async fetchPosts({ commit }) {
        commit('SET_IS_LOADING', true);

        try {
            const { data } = await PostRepository.get();
            commit('SET_POSTS', data);
            commit('SET_IS_LOADING', false);
        } catch(error) {
            console.log(error);
        }
    },

    async fetchPost({ commit }, id) {
        try {
            const { data } = await PostRepository.getPost(id);
            commit('SET_POST', data);
        } catch(error) {
            console.log(error)
        }
    },

    async createPost({ state }, payload) {
        try {
            const res = await PostRepository.create(payload);
            state.posts.push(res.data);
        } catch(error) {
            console.log(error);
        }
    },

    async updatePost({ state }, payload) {
        const res = await PostRepository.update(payload);
        const post = state.posts.find(item => item.id === payload.id);
        
        if(post) {
            post.title = res.data.title;
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}