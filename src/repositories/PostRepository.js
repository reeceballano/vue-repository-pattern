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
    },

    update(payload) {
        return Client.put(`${resource}/${payload.id}`, payload);
    },

    delete(id) {
        return Client.delete(`${resource}/${id}`);
    }
}