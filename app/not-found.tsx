import Link from 'next/link';

export default function NotFound() {
  return (
    <section className='mx-auto my-16 max-w-lg rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm'>
      <p className='text-sm font-bold tracking-wider text-slate-500 uppercase'>
        404 Page Not Found
      </p>
      <h1 className='mt-2 text-3xl font-bold text-slate-900'>
        That Curio could not be found.
      </h1>
      <p className='mt-3 text-slate-600'>
        The page or product you are looking for may have been moved or no longer
        exists.
      </p>
      <div className='mt-6 flex flex-wrap justify-center gap-3'>
        <Link
          href='/products'
          className='rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800'>
          Browse Products
        </Link>
        <Link
          href='/'
          className='rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
