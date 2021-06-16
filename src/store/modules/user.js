import Repository from "../../repositories/RepositoryFactory";

const UserRepository = Repository.get('users');

// STATE
const state = {
    users: [],
    user: {},
}

// GETTERS
const getters = {
    getUsers: state => {
        return state.users;
    },

    getUser: state => {
        return state.user;
    }
}

// MUTATIONS
const mutations = {
    SET_USERS(state, users) {
        state.users = users;
    },

    SET_USER(state, user) {
        state.user = user;
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
    },

    async fetchUser({ commit }, id) {
        try {
            const { data } = await UserRepository.getUser(id);
            console.log(data)
            commit('SET_USER', data);
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

