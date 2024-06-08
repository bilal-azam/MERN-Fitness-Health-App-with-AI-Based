import axios from 'axios';

const API_URL = '/api';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
export const logout = () => axios.post(`${API_URL}/logout`);