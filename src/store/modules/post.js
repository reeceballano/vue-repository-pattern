import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    posts: [],
    post: {},
    isLoading: false,
    paginate: {
        start: 5,
        limit: 5,
    },
    noData: false,
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
    },

    getNoData: state => {
        return state.noData;
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
    },
    
    SET_PAGINATE(state, paginate) {
        state.paginate = paginate;
    },

    SET_NO_DATA(state, noData) {
        state.noData = noData;
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

    async fetchPaginatedPosts({ state, commit, dispatch }) {
        commit('SET_IS_LOADING', true);
        
        try {
            const { data } = await PostRepository.getPostPaginated(state.paginate);
            
            state.posts.push(...data);
            dispatch('updatePaginate');
            commit('SET_IS_LOADING', false);

            if(!Array.isArray(data) || !data.length) {
                commit('SET_NO_DATA', true);
            }

        } catch(error) {
            console.log(error);
        }
    },

    async fetchPost({ commit }, id) {
        console.log(`fetching: ${id}`)
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
        try {
            const res = await PostRepository.update(payload);
            const post = state.posts.find(item => item.id === payload.id);
            
            if(post) {
                post.title = res.data.title;
            }
        } catch(error) {
            console.log(error);
        }
    },

    async deletePost({ state, commit }, id) {
        try {
            const res = await PostRepository.delete(id);
            const posts = state.posts;

            // FAKE DATA RESPONSE
            if(res.status === 200) {
                const newPosts = posts.filter(post => post.id !== id);
                commit('SET_POSTS', newPosts);
            }
        } catch(error) {
            console.log(error);
        }
    },

    async updatePaginate({ state, commit }) {
        const limit = await state.paginate.limit;
        const start = await state.paginate.start + limit;

        const paginate = {
            start,
            limit
        }

        await commit('SET_PAGINATE', paginate);
    }

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}