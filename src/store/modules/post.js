import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    posts: [],
}

// GETTERS
const getters = {
    getPosts: state => {
        return state.posts;
    }
}

// MUTATIONS
const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    }
}

// ACTIONS
const actions = {
    async fetchPost({ commit }) {
        // const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // commit('SET_POSTS', res.data);

        try {
            const { data } = await PostRepository.get();
            commit('SET_POSTS', data);

        } catch(error) {
            console.log(error);
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