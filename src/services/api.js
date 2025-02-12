import axios from 'axios';

// export const API_BASE_URL = "https://food-explorer-backend-3dbs.onrender.com"
export const API_BASE_URL = "http://localhost:3333"

export const api = axios.create({
  baseURL: API_BASE_URL
})