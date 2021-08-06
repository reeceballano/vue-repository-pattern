import Client from './Clients/AxiosClient';

const resource = '/comments';

export default {
    get() {
        return Client.get(`${resource}`);
    }
}