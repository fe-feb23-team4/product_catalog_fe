import axios from 'axios';
import { Phone } from '../types/Phone';
import { ProductResponse } from '../types/Response';
import { PhoneProduct } from '../types/PhoneProduct';

const API_URL = 'https://product-catalog-be-s8k7.onrender.com';

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

export const getAllPhoneDetails = () => {
  return axios.get<Phone[]>(`${API_URL}/phones`);
};

export const getPhonesNew = () => {
  return axios.get<Phone[]>(`${API_URL}/products/new`);
};

export const getPhonesDiscount = () => {
  return axios.get<Phone[]>(`${API_URL}/products/discount`);
};

export const getPhonesRecommended = (phoneId: string) => {
  return axios.get<Phone[]>(`${API_URL}/products?id=${phoneId}/recommended`);
};

export const getPhoneById = (phoneId: string) => {
  return axios.get<PhoneProduct>(`${API_URL}/phones/${phoneId}`);
};
