import Client from './Clients/AxiosClient';

const resource = '/posts';

export default {
    get() {
        return Client.get(`${resource}`);
    },

    getPostPaginated(option) {
        const { start, limit } = option;
        return (Object.keys(option).length) === 0 ? Client.get(`${resource}`) : 
                Client.get(`${resource}?_start=${start}&_limit=${limit}`);
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