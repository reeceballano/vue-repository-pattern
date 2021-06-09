import axios from 'axios';

const baseDomain = 'https://jsonplaceholder.typicode.com';
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        // "Authorization": "Bearer xxxx" 
    }
})