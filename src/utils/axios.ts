import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://mock-server/',
  responseType: 'json',
  responseEncoding: 'utf-8',
});

export { axiosInstance };
