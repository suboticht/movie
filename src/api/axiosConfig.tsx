import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://phimapi.com/'
});

export default axiosInstance;
