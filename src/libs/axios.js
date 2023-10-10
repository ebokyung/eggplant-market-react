/* eslint-disable no-param-reassign */
// axios.js
import axios from 'axios';
import { API_URL } from '../configs/config';
import { storage } from '../utils/storage';

export const defaultAxios = axios.create({
  baseURL: API_URL,
});

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
}

defaultAxios.interceptors.request.use(authRequestInterceptor);

export const postImage = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

postImage.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    throw error;
  },
);
