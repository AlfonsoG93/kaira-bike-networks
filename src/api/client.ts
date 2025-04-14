import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.citybik.es/v2',
  timeout: 10000, // evita cuelgues si la API tarda
});
