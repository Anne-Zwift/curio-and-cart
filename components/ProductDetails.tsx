'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useCart } from '@/context/CartContext';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [added, setAdded] = useState(false);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const hasDiscount =
    product.discountedPrice !== undefined &&
    product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice!) / product.price) * 100,
      )
    : 0;

  const displayPrice = product.discountedPrice ?? product.price;

  return (
    <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
      {/**Image */}
      <div className='relative aspect-square w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100'>
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          fill
          sizes='(max-width: 768) 100vw, 50vw'
          className='object-cover'
        />
        {hasDiscount && (
          <span className='absolute top-3 right-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white'>
            -{discountPercentage}%
          </span>
        )}
      </div>
      {/**Product Details*/}
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h1 className='text-3lg font-bold tracking-tight text-slate-900'>
            {product.title}
          </h1>
          <p className='mt-2 text-sm text-amber-700 font-bold'>
            ⭐ {product.rating} / 5
          </p>
          <div className='mt-6 flex items-baseline gap-3'>
            <span className='text-2xl font-bold text-slate-900'>
              NOK {displayPrice.toFixed(2)},-
            </span>
            {hasDiscount ? (
              <span className='text-base text-slate-600 line-through'>
                NOK {product.price.toFixed(2)},-
              </span>
            ) : (
              <span className='text-sm invisible' aria-hidden='true'>
                Placeholder
              </span>
            )}
          </div>
          <p className='mt-6 leading-relaxed text-slate-600'>
            {product.description}
          </p>
          {product.tags && product.tags.length > 0 && (
            <div className='mt-6 flex flex-wrap gap-2'>
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className='rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600'>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className='mt-8 border-t border-slate-200 pt-6'>
          <button
            type='button'
            onClick={handleAddToCart}
            className={`w-full cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold text-white ${added ? 'bg-emerald-700' : 'bg-slate-900 hover:bg-slate-700'}`}>
            {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
      {/**Review*/}
      <section className='mt-12 border-t border-slate-200 pt-8'>
        <h2 className='text-xl font-bold text-slate-900'>Customer Reviews</h2>
        {product.review && product.review.length > 0 ? (
          <ul className='mt-4 space-y-4'>
            {product.review.map((review) => (
              <li
                key={review.id}
                className='rounded-lg border border-slate-200 bg-white p-4'>
                <div className='flex items-center justify-between'>
                  <span className='font-semibold text-slate-900'>
                    {review.username}
                  </span>
                  <span className='text-sm font-bold text-amber-700'>
                    ⭐ {review.rating} / 5
                  </span>
                </div>
                <p className='mt-2 text-sm text-slate-500'>
                  {review.description}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className='mt-3 text-sm text-slate-500'>
            No reviews yet for this product.
          </p>
        )}
      </section>
    </div>
  );
}
