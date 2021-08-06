import Repository from "../../repositories/RepositoryFactory";

const CommentRepository = Repository.get('comments');

// STATE
const state = {
    comments: [],
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_COMMENTS(state, comments) {
        state.comments = comments;
    }
}

// ACTIONS
const actions = {
    async fetchComments({commit}) {
        try {
            const comments = await CommentRepository.get();
            commit('SET_COMMENTS', comments);
        } catch(error) {
            console.log(error);
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}