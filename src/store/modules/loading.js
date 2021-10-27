// STATE
const state = {
    size: 4,
    animation: 'spin',
    icon: 'Cog',
    text: 'Loading...'
}

// GETTERS
const getters = {
    getIcon: state => {
        return state.icon
    },

    getAnimation: state => {
        return state.animation;
    },

    getLoadingText: state => {
        return  state.text;
    }
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
    },

    SET_TEXT(state, text) {
        state.text = text;
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
    },

    setText({ commit }, payload) {
        commit('SET_TEXT', payload);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}