import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-bensystem-node.herokuapp.com'
})

export default api;