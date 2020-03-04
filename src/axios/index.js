import axios from 'axios';
import baseURL from './config';

function axiosWithAuth() {
    return axios.create({
        baseURL,
        headers: {
            Authorization: `Token ${localStorage.getItem('key')}`
        }
    });
}

export default axiosWithAuth;