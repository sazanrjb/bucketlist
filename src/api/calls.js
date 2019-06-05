import axios from 'axios';
import * as API from './index';

export function getWishes() {
    return axios.get(API.WISHES);
}

export function postWish(payload = {}) {
    return axios.post(API.WISHES, payload);
}

export function deleteWish(wishId) {
    return axios.delete(`${API.WISHES}/${wishId}`);
}

export function putWish(wishId, payload = {}) {
    return axios.put(`${API.WISHES}/${wishId}`, payload);
}