import Repository from "../../repositories/RepositoryFactory";

const PageRepository = Repository.get('pages');

// STATE
const state = {
    pages: [],
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_PAGES(state, pages) {
        state.pages = pages;
    }
}

// ACTIONS
const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
