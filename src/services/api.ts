import axios from 'axios';
import {BASE_URL} from '../utils/configEnv';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
