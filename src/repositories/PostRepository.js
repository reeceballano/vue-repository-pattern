import Client from './Clients/AxiosClient';

const resource = '/posts';

export default {
    get(paginate) {
        const { start, limit } = paginate;
        (Object.keys(paginate).length === 0) ? console.log('empty') :  console.log('not empty');
        return (Object.keys(paginate)) ? Client.get(`${resource}?_start=${start}&_limit=${limit}`) : 
                Client.get(`${resource}`);
    },

    getPost(id) {
        return Client.get(`${resource}/${id}`);
    }
}