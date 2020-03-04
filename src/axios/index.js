import axios from 'axios';

const baseURL = 'https://lambda-mud-test.herokuapp.com/';

function axiosWithAuth() {
    return axios.create({
        baseURL,
        headers: {
            Authorization: `Token ${localStorage.getItem('key')}`
        }
    });
}

export default axiosWithAuth;