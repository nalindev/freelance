import axios from 'axios';
import { hostname } from '../data';

const api = axios.create({
  baseURL: hostname,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("Authorization")
      config.headers.Authorization = token;
    if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const makeRequest = async (method, url, data) => {
  try {
    const response = await api({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    console.error('API request failed:', error.response.data);
    if(error.response.data.detail==="Given token not valid for any token type")
    {
      localStorage.removeItem("Authorization")
      window.location.reload()
    }
    throw error;
  }
};

export { api, makeRequest };
