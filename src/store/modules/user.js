import Repository from "../../repositories/RepositoryFactory";

const UserRepository = Repository.get('users');

// STATE
const state = {
    users: [],
}

// GETTERS
const getters = {

}

// MUTATIONS
const mutations = {
    SET_USERS(state, users) {
        state.users = users;
    }
}

// ACTIONS
const actions = {
    async fetchUsers({ commit }) {
        try {
            const { data } = await UserRepository.get();
            commit('SET_USERS', data);
        } catch(error) {
            console.log(error);
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

