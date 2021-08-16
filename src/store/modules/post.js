import Repository from '../../repositories/RepositoryFactory';

const PostRepository = Repository.get('posts');

// STATE
const state = {
    posts: [],
    post: {},
    isLoading: false,
    paginate: {
        start: 0,
        limit: 5,
        current: 1,
        last_page: 0,
        totalPage: 0,
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
    },

    getPaginate: state => {
        return state.paginate;
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
    },

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


    async fetchPaginatedPosts({ state, commit }) {
        commit('SET_IS_LOADING', true);
        
        try {
            console.log(state.paginate)
            const { data } = await PostRepository.getPostPaginated(state.paginate);
            const totalData = await PostRepository.get();
            state.posts = data;
            commit('SET_IS_LOADING', false);

            console.log(data)

            const paginate = {
                start: state.paginate.start,
                limit: state.paginate.limit,
                current: state.paginate.current,
                last_page: Math.ceil(totalData.data.length / state.paginate.limit),
                totalPage: totalData.data.length
            }

            commit('SET_PAGINATE', paginate);

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

    updatePagination({ commit, dispatch }, payload) {

        let paginate = {
            start: state.paginate.start,
            limit: state.paginate.limit,
            current: state.paginate.current,
            last_page: Math.ceil(state.paginate.totalPage / state.paginate.limit),
            totalPage: state.paginate.totalPage,
        }

        if(payload === '+') {
            paginate = {
                start: state.paginate.start + state.paginate.limit,
                limit: state.paginate.limit,
                current: state.paginate.current + 1,
                last_page: Math.ceil(state.paginate.totalPage / state.paginate.limit),
                totalPage: state.paginate.totalPage,
            }
        } else {
            paginate = {
                start: state.paginate.start - state.paginate.limit,
                limit: state.paginate.limit,
                current: state.paginate.current - 1,
                last_page: Math.ceil(state.paginate.totalPage / state.paginate.limit),
                totalPage: state.paginate.totalPage,
            }
        }

        commit('SET_PAGINATE', paginate);
        dispatch('fetchPaginatedPosts');
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}