import { Product } from './types';

const API_BASE_URL = process.env.API_BASE_URL;

export async function getProducts(): Promise<Product[]> {
  'use cache';

  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is missing in .env.local');
  }
  const res = await fetch(API_BASE_URL);

  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);

  const json = await res.json();
  return json.data;
}

export async function getProductById(id: string): Promise<Product | null> {
  'use cache';

  if (!API_BASE_URL) {
    throw new Error('API_BASE_URL is missing in .env.local');
  }

  const res = await fetch(`${API_BASE_URL}/${id}`);

  if (res.status === 404 || res.status === 400) {
    return null;
  }

  if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

  const json = await res.json();
  return json.data;
}
