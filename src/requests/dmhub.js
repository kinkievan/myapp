import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_DMHUB_URL,
});

// http request interceptors
instance.interceptors.request.use(config => {

  return config;
});

// http response interceptors

export default instance;
