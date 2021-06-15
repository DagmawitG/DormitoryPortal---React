import axios from 'axios';
const token = localStorage.getItem('REACT_TOKEN_AUTH') || '';
const baseUrl = 'http://127.0.0.1:5000';
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
});

export default instance;