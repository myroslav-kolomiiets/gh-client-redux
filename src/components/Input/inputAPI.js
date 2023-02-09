import axios from 'axios';

export function fetchData(query, page) {
    return axios.get(`https://api.github.com/search/repositories?q=${query}&per_page=20&page=${page}&client_id=671a00c1688c71213ecb`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        })
}
