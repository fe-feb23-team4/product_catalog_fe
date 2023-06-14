import axios from 'axios';
import { Phone } from '../types/Phone';

const API_URL = 'https://product-catalog-be-s8k7.onrender.com';

export const getPhones = () => {
  return axios.get<Phone[]>(`${API_URL}/phones`);
};
