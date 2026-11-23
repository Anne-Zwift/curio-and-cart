'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

export interface ProductSearchProps {
  products: Product[];
}

export default function ProductSearch({ products }: ProductSearchProps) {
  const [query, setQuery] = useState('');

  const trimmedQuery = query.trim().toLocaleLowerCase();

  const matchingProducts = trimmedQuery
    ? products.filter(
        (product) =>
          product.title.toLocaleLowerCase().includes(trimmedQuery) ||
          product.tags?.some((tag) =>
            tag.toLocaleLowerCase().includes(trimmedQuery),
          ),
      )
    : [];

  return (
    <div className='relative mx-auto w-full max-w-xl text-left'>
      <label htmlFor='product-search' className='sr-only'>
        Search products
      </label>
      <div className='relative'>
        <input
          id='product-search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Search products by name or tag...'
          className='w-full rounded-lg border border-slate-300 bg-white px-4 py-3 pr-14 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-slate-900 focus:outline-none'
        />
        {query && (
          <button
            type='button'
            onClick={() => setQuery('')}
            aria-label='Clear search'
            className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-sm font-semibold text-slate-500 hover:text-slate-900'>
            Clear
          </button>
        )}
      </div>
      {trimmedQuery.length > 0 && (
        <div
          role='region'
          aria-label='Search results'
          className='absolute z-40 mt-2 max-h-80 w-full overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-lg'>
          {matchingProducts.length > 0 ? (
            <ul className='divide-y divide-slate-100'>
              {matchingProducts.map((product) => {
                const displayPrice = product.discountedPrice ?? product.price;
                return (
                  <li key={product.id}>
                    <Link
                      href={`/products/${product.id}`}
                      onClick={() => setQuery('')}
                      className='flex items-center gap-3 p-3 transition hover:bg-slate-50'>
                      <div className='relative h-12 w-12 shrink-0 overflow-hidden rounded border border-slate-200 bg-slate-100'>
                        <Image
                          src={product.image.url}
                          alt={product.image.alt}
                          fill
                          sizes='48px'
                          className='object-cover'
                        />
                      </div>
                      <div className='min-w-0 flex-1'>
                        <p className='truncate text-sm font-semibold text-slate-900'>
                          {product.title}
                        </p>
                        <p className='text-sm font-medium text-slate-600'>
                          NOK {displayPrice.toFixed(2)},-
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className='p-4 text-center text-sm text-slate-500'>
              No products found matching &ldquo;{query}&ldquo;
            </p>
          )}
        </div>
      )}
    </div>
  );
}
