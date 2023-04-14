import axios from 'axios';

const axiosInstance = axios.create({
  responseType: 'json',
  responseEncoding: 'utf-8',
});

export { axiosInstance };
