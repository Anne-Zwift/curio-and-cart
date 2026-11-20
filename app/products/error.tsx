'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  retry,
}: {
  error: unknown;
  retry: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section
      role='alert'
      className='mx-auto my-12 max-w-lg rounded-lg border border-rose-200 bg-rose-50 p-6 text-center'>
      <h2 className='text-xl font-bold text-slate-900'>
        Something went wrong!
      </h2>
      <p className='mt-2 text-sm text-slate-600'>
        We could not load requested product data. Please try again or return to
        the catalog.
      </p>
      <div className='mt-6 flex flex-wrap justify-center gap-3'>
        <button
          type='button'
          onClick={
            // Attempt to recover by re-fetching and re-rendering the segment
            () => retry()
          }
          className='rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white cursor-pointer transition hover:bg-slate-700'>
          Try again
        </button>
        <Link
          href='/products'
          className='rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'>
          Back to Products
        </Link>
      </div>
    </section>
  );
}
