import axios from 'axios';

const api = axios.create({
  baseURL: `https://11.ecmascript.pages.academy/cinemaddict`,
  headers: {'Authorization': 'Basic dXNlckBwDXNzd009yZAo='}
});

export default api;