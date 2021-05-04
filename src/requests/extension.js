import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_LINE_API_URL,
});

// http request interceptors
instance.interceptors.request.use(config => {
  config.headers["Access-Control-Allow-Origin"] = '*';
  config.headers["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept";
  return config;
});

// http response interceptors

export default instance;
