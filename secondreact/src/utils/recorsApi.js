import axios from 'axios';
export const api = process.env.REACT_APP_RECORDS_API_URL || "http://localhost:8888";

export const getAll = () =>
    axios.get(`${api}/records`);

export const create = (param) =>
    axios.post(`${api}/records`, param);

export const update = (id,param) =>
    axios.put(`${api}/records/${id}`, param);

export const remove = (id) =>
    axios.delete(`${api}/records/${id}`);