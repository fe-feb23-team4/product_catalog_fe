import axios from 'axios';
import { Phone } from '../types/Phone';

const API_URL = 'https://localhost:3000';

export const getPhones = (
  page?: string,
  perPage?: string,
  sortBy?: string,
  productType?: string,
) => {
  let baseUrl = `${API_URL}/products`;

  if (page) {
    baseUrl += `?page=${page}`;
  }

  if (perPage) {
    if (page) {
      baseUrl += `&perPage=${perPage}`;
    } else {
      baseUrl += `?perPage=${perPage}`;
    }
  }

  if (sortBy) {
    if (page || perPage) {
      baseUrl += `&sortBy=${sortBy}`;
    } else {
      baseUrl += `?sortBy=${sortBy}`;
    }
  }

  if (productType) {
    if (page || perPage || sortBy) {
      baseUrl += `&productType=${productType}`;
    } else {
      baseUrl += `?productType=${productType}`;
    }
  }

  return axios.get<Phone[]>(baseUrl);
};

export const getPhonesNew = () => {
  return axios.get<Phone[]>(`${API_URL}/products/new`);
};
