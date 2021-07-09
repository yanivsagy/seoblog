import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { isAuth, handleResponse } from './auth';

export const userPublicProfile = (username) => {
    return fetch(`${ API }/user/${ username }`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const getProfile = (token) => {
    return fetch(`${ API }/user/profile`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${ token }`
        }
    })
    .then(response => {
        handleResponse(response);
        return response.json();
    })
    .catch(err => console.log(err));
};

export const update = (user, token) => {
    return fetch(`${ API }/user/update`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${ token }`
        },
        body: user
    })
    .then(response => {
        handleResponse(response);
        return response.json();
    })
    .catch(err => console.log(err));
};