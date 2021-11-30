// STATE
const state = {
    siteSettings: [],
    buttonSettings: {
        color: 'text-white',
        background: 'blue',
        borderRadius: 'rounded'
    },
    inputSettings: [],  
}

// GETTERS
const getters = {
    getButtonSetting: state => {
        return state.buttonSettings;
    },
}

// MUTATIONS
const mutations = {

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
