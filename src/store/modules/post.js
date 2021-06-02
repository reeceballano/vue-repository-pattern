import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    posts: [],
    post: {},
}

// GETTERS
const getters = {
    getPosts: state => {
        return state.posts;
    },

    getPost: state => {
        return state.post;
    }
}

// MUTATIONS
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },

    SET_POST(state, post) {
        state.post = post;
    }
}

// ACTIONS
const actions = {
    async fetchPosts({ commit }) {
        try {
            const paginate = {
                start: 0,
                limit: 3
            }
            const { data } = await PostRepository.get(paginate);
            commit('SET_POSTS', data);

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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}