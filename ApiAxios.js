import axios from "axios";

export const ApiAxios = axios.create({
    baseURL:'https://fakestoreapi.com',
    timeout:2000,
    
    
})

