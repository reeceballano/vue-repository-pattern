// STATE
const state = {
    isLogged: false,
}

// GETTERS
const getters = {
    getIsLogged: state => {
        return state.isLogged;
    }
}

// MUTATIONS
const mutations = {
    SET_IS_LOGGED(state, isLogged) {
        state.isLogged = isLogged;
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