import axios from 'axios';

export const API_BASE_URL = "http://food-explorer-backend-3dbs.onrender.com"

export const api = axios.create({
  baseURL: API_BASE_URL
})