import axios from 'axios';

const baseDomain = 'https://jsonplaceholder.typicode.com';
const baseURL = `${baseDomain}`;

export default axios.create({
    baseURL,
    headers: {
        // "Authorization": "Bearer xxxx" 
    }
})