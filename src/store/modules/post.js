import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    allPosts: [],
    posts: [],
    post: {},
    pagination: {
        start: 0,
        limit: 5,
    },
    endPost: false
}

// GETTERS
const getters = {
    getPosts: state => {
        return state.posts;
    },

    getPost: state => {
        return state.post;
    },

    getCurrentPage: state => {
        return state.pagination;
    },

    getEndPost: state => {
        return state.endPost;
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

    SET_PAGINATION(state, pagination) {
        state.pagination = pagination;
    },

    SET_END_POST(state, endPost) {
        state.endPost = endPost;
    }

}

// ACTIONS
const actions = {
    async fetchPosts({ commit, state }) {
        try {
            const { data } = await PostRepository.get(state.pagination);
            commit('SET_POSTS', data);
            
            if(Array.isArray(data) && !data.length) {
                commit('SET_END_POST', true);
            } else {
                commit('SET_END_POST', false);
            }
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

    paginatePost({ commit, state, dispatch }, payload) {

        switch(payload) {
            
            case 'prev': {
                const prev = { start: Number(state.pagination.start) - state.pagination.limit, limit: Number(state.pagination.limit) }
                commit('SET_PAGINATION', prev);
                dispatch('fetchPosts');
                break;
            }

            case 'next': {
                const next = { start: Number(state.pagination.start) + state.pagination.limit, limit: Number(state.pagination.limit) }

                commit('SET_PAGINATION', next);
                dispatch('fetchPosts');
                break; 
            }   
        }

        // commit('SET_PAGINATION', payload);
    },

    endPost({ commit }, payload) {
        commit('SET_END_POST', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}