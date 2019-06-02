import axios from 'axios';
import * as API from './index';

export function getWishes() {
    return axios.get(API.WISHES);
}

export function postWish(payload = {}) {
    return axios.post(API.WISHES, payload);
}