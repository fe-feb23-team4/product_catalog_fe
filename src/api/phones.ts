/* eslint-disable no-console */
import axios from 'axios';
import { Phone } from '../types/Phone';
import { ProductResponse } from '../types/Response';

const API_URL = 'http://localhost:5000';

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

  return axios.get<ProductResponse>(baseUrl);
};

export const getPhonesNew = () => {
  return axios.get<Phone[]>(`${API_URL}/products/new`);
};
