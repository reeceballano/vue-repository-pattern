// STATE
const state = {
    siteSettings: [],
    buttonSettings: {
        color: 'text-white',
        background: 'bg-indigo-400 hover:bg-indigo-200',
        borderRadius: 'rounded',
        icon: 'MenuAlt2Icon'
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
