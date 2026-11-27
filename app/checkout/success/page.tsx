import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order Confirmed | Curio & Cart',
};

export default function CheckoutSuccessPage() {
  return (
    <section className='mx-auto my-12 max-w-lg rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm'>
      <div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700'>
        <svg
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          aria-hidden='true'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 12.75 6 6 9-13.5'
          />
        </svg>
      </div>

      <h1 className='mt-4 text-3xl font-bold text-slate-900'>
        Order Confirmed
      </h1>
      <p className='mt-3 text-slate-600'>
        <strong>Curio &amp; Cart thank you!</strong>
        <br /> Your order has been received.
      </p>
      <Link
        href='/products'
        className='mt-6 inline-block rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:text-slate-800'>
        Continue Shopping
      </Link>
    </section>
  );
}
