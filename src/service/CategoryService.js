import axios from 'axios'

const BASE_REST_API_URL = 'http://localhost:7000/api/category';




export const getAllCategories = () => axios.get(BASE_REST_API_URL);

export const saveCategory = (category) => axios.post(BASE_REST_API_URL, category)

export const getCategory = (id) => axios.get(BASE_REST_API_URL+'/'+id);

export const updateCategory = (id,todo) => axios.put(BASE_REST_API_URL+'/'+id,todo)

export const deleteCategory = (id)=>axios.delete(BASE_REST_API_URL+'/'+id)
