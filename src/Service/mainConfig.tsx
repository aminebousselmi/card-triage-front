import axios, { AxiosInstance } from 'axios';

// Config Axios instance with a base url
export const getApiConfig = (): AxiosInstance => axios.create({
  baseURL: 'http://localhost:3000'
});
