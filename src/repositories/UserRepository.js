import Client from './Clients/AxiosClient';

const resource = '/users';

export default {
    get() {
        return Client.get(`${resource}`);
    },

    getUser(id) {
        return Client.get(`${resource}/${id}`);
    },
}