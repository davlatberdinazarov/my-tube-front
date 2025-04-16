import axios from "axios";

let token = localStorage.getItem('token')

export const BASE_URL = 'https://my-shop-api-n5vp.onrender.com';

export const $axios = axios.create({
    baseURL: `${BASE_URL}/api`,
})

export const $api = axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        "Authorization": `Bearer ${token}`
    }
})
 
export const categoryArr = ["sport", "comedy", "music", "other"];
