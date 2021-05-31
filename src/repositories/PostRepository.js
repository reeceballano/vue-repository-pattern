import Client from './Clients/AxiosClient';

const resource = '/posts';

export default {
    get() {
        return Client.get(`${resource}`);
    }
}