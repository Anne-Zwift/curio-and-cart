'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function CartView() {
  const router = useRouter();
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice } =
    useCart();

  const [removedTitle, setRemovedTitle] = useState<string | null>(null);

  useEffect(() => {
    if (!removedTitle) return;
    {
      const timer = setTimeout(() => {
        setRemovedTitle(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [removedTitle]);

  const handleRemovedItem = (productId: string, productTitle: string) => {
    removeFromCart(productId);
    setRemovedTitle(productTitle);
  };

  const handleDecreaseQuantity = (
    productId: string,
    productTitle: string,
    currentQuantity: number,
  ) => {
    if (currentQuantity <= 1) {
      handleRemovedItem(productId, productTitle);
      return;
    }
    updateQuantity(productId, currentQuantity - 1);
  };

  const handleCheckout = () => {
    clearCart();
    router.push('/checkout/success');
  };

  const removalToast = removedTitle && (
    <div
      role='status'
      aria-live='polite'
      className='fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-lg bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-lg'>
      <span className='flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white'>
        ✕
      </span>
      <span>
        Removed <strong>{removedTitle} from your cart.</strong>
      </span>
      <button
        type='button'
        onClick={() => setRemovedTitle(null)}
        aria-label='Dismiss notification'
        className='ml-2 cursor-pointer text-xs text-slate-300 hover:text-white'>
        Dismiss
      </button>
    </div>
  );

  if (items.length === 0) {
    return (
      <>
        <section className='mx-auto max-w-4xl px-4 py-12 text-center'>
          <h1 className='text-3xl font-bold text-slate-900'>
            Your Shopping Cart
          </h1>
          <p className='mt-4 text-slate-600'>Your Shopping Cart is Empty.</p>
          <Link
            href='/products'
            className='mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700'>
            Browse Products
          </Link>
        </section>
        {removalToast}
      </>
    );
  }

  return (
    <>
      <section className='mx-auto max-w-4xl px-4 py-8'>
        <h1 className='text-3xl font-bold text-slate-900'>
          Your Shopping Cart
        </h1>

        {/**Cart Item List */}
        <ul className='mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white'>
          {items.map(({ product, quantity }) => {
            const unitPrice = product.discountedPrice ?? product.price;
            const lineTotal = unitPrice * quantity;

            return (
              <li
                key={product.id}
                className='flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between'>
                {/* Product Image & Title */}
                <div className='flex items-center gap-4'>
                  <div className='relative h-20 w-20 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100'>
                    <Image
                      src={product.image.url}
                      alt={product.image.alt || product.title}
                      fill
                      sizes='80px'
                      className='object-cover'
                    />
                  </div>
                  <div>
                    <Link
                      href={`/products/${product.id}`}
                      className='font-semibold text-slate-900 hover:underline'>
                      {product.title}
                    </Link>
                    <p className='mt-1 text-sm text-slate-600'>
                      NOK {unitPrice.toFixed(2)},-
                    </p>
                  </div>
                </div>

                {/**Quantity, line subtotal, remove */}
                <div className='flex items-center justify-between gap-4 sm:justify-end'>
                  <div className='flex items-center rounded-lg border border-slate-300'>
                    <button
                      type='button'
                      aria-label={`Decrease quantity of ${product.title}`}
                      onClick={() =>
                        handleDecreaseQuantity(
                          product.id,
                          product.title,
                          quantity,
                        )
                      }
                      className='cursor-pointer px-3 py-1 text-sm font-bold text-slate-600 hover:bg-slate-100'>
                      -
                    </button>
                    <span className='px-3 py-1 text-sm font-semibold text-slate-900'>
                      {quantity}
                    </span>
                    <button
                      type='button'
                      aria-label={`Increase quantity of ${product.title}`}
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className='cursor-pointer px-3 py-1 text-sm font-bold text-slate-600 hover:bg-slate-100'>
                      +
                    </button>
                  </div>

                  <span className='min-w-28 text-right text-sm font-bold text-slate-900'>
                    NOK {lineTotal.toFixed(2)},-
                  </span>

                  <button
                    type='button'
                    onClick={() => handleRemovedItem(product.id, product.title)}
                    className='cursor-pointer text-sm font-medium text-rose-600 hover:text-rose-800'>
                    Remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        {/**Total cost and Checkout*/}
        <div className='mt-6 flex flex-col items-end gap-4 rounded-lg border border-slate-200 bg-white p-6'>
          <div className='flex w-full items-baseline justify-between sm:w-72'>
            <span className='text-base font-medium text-slate-600'>Total</span>
            <span className='text-2xl font-bold text-slate-900'>
              NOK {totalPrice.toFixed(2)},-
            </span>
          </div>

          <button
            type='button'
            onClick={handleCheckout}
            className='w-full cursor-pointer rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-72'>
            Checkout
          </button>
        </div>
      </section>
      {removalToast}
    </>
  );
}
