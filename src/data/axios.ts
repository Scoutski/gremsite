import axios, { AxiosInstance } from 'axios';

let axiosClient: null | AxiosInstance = null;

if (!axiosClient) {
  axiosClient = axios.create({
    baseURL: 'https://xivapi.com',
  });
}

export default axiosClient as AxiosInstance;