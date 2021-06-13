import Client from './Clients/AxiosClient';

const resource = '/posts';

export default {
    getPaginate(paginate) {
        const { start } = paginate;
        return Client.get(`${resource}?_start=${start}&_limit=10`);
    },

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