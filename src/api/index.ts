import { API_URL } from '@env';
import axios from 'axios';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'Application/json',
    Accept: '*/*',
  },
});

export default instance;
