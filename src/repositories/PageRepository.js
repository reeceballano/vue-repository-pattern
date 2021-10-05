import Client from './Clients/AxiosClient';

const resource = '/pages';

export default  {
    get() {
        return Client.get(`${resource}`);
    }
}