import axios from 'axios';
import { BASE_URL } from '../settings';

export {getUsers, changeStatus};

function getUsers() {
    return axios.get(BASE_URL + '/users')
    .then(response => response.data)
    .catch(function (error) {
        return error;
    });
}

function changeStatus(userStatus) {
    return axios.post(BASE_URL + '/users', {
        Status: userStatus.Status,
        id: userStatus.id
    })
    .then(response => response.data)
    .catch(function (error) {
        return error;
    });
}