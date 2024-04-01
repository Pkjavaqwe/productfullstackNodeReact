import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:7000/api/product'



export const saveProduct = (todo) => axios.post(BASE_REST_API_URL, todo)

export const getProduct = (id) => axios.get(BASE_REST_API_URL+'/'+id);

export const updateProduct = (id,todo) => axios.put(BASE_REST_API_URL+'/'+id,todo)

export const deleteProduct = (id)=>axios.delete(BASE_REST_API_URL+'/'+id)


