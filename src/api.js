import axios from 'axios';

export const API_BASE_URL = "http://192.168.1.107:3333"

export const api = axios.create({
  baseURL: API_BASE_URL
})