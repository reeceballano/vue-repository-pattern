// STATE
const state = {
    size: 4,
    animation: 'spin',
    icon: 'Refresh'
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_SIZE(state, size) {
        state.size = size;
    },

    SET_ANIMATION(state, animation) {
        state.animation = animation;
    },

    SET_ICON(state, icon) {
        state.icon = icon;
    }
}

// ACTIONS
const actions = {
    setSize({ commit }, payload) {
        commit('SET_SIZE', payload);
    },

    setAnimation({ commit }, payload) {
        commit('SET_ANIMATION', payload);
    },

    setIcon({ commit }, payload) {
        commit('SET_ICON', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}