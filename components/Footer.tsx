import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white/80 backdrop-blur-md'>
      <div className='relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='absolute inset-e-4 top-4 sm:inset-e-6 sm:top-6 lg:inset-e-8 lg:top-8'>
          <a
            className='inline-block rounded-full bg-slate-400 p-2 text-white shadow-sm transition hover:bg-rose-100 hover:text-black sm:p-3 lg:p-4'
            href='#top'>
            <span className='sr-only'>Back to top</span>

            <svg
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              className='size-5'
              viewBox='0 0 20 20'
              fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                clipRule='evenodd'
              />
            </svg>
          </a>
        </div>

        <div className='lg:flex lg:items-end lg:justify-between'>
          <div>
            <div className='flex justify-center lg:justify-start'>
              <Link
                href='/'
                className='text-xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition'>
                Curio &amp; Cart
              </Link>
            </div>

            <p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-slate-600 lg:text-left'>
              An online shop for curiosities - various odds and ends and little
              treasures.
            </p>
          </div>

          <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12'>
            <li>
              <Link
                className='text-slate-700 transition hover:text-slate-700/75'
                href='/'>
                {' '}
                Home{' '}
              </Link>
            </li>

            <li>
              <Link
                className='text-slate-700 transition hover:text-slate-700/75'
                href='/contact'>
                {' '}
                Contact{' '}
              </Link>
            </li>

            <li>
              <Link
                className='text-slate-700 transition hover:text-slate-700/75'
                href='/products'>
                {' '}
                Products{' '}
              </Link>
            </li>
          </ul>
        </div>

        <p className='mt-10 text-center text-sm text-slate-600 lg:text-right'>
          Copyright &copy; 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
