import Client from './Clients/AxiosClient';

const resource = '/posts';

export default {
    get() {
        return Client.get(`${resource}`);
    },

    getPost(id) {
        return Client.get(`${resource}/${id}`);
    },

    create(payload) {
        return Client.post(`${resource}`, payload);
    }
}