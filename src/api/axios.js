import axios from "axios";


export const customAxios = axios.create({
    baseURL:"https://erdmsapiauth.persolqa.com/cml/api/"
})