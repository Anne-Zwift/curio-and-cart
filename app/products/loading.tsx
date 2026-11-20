export default function Loading() {
  // Define the Loading UI here
  return (
    <article aria-busy='true'>
      <span className='sr-only'>Loading products...</span>
      <ul className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <li
            key={index}
            className='flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm'>
            {/**Image*/}
            <div className='relative flex aspect-square w-full bg-slate-100 animate-pulse items-center justify-center'>
              <svg
                className='h-10 w-10 text-slate-300'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                />
              </svg>
              <span className='absolute top-3 right-3 h-6 w-12 rounded-full bg-slate-200' />
            </div>
            {/**Text & Price*/}
            <div className='flex flex-1 flex-col justify-between p-4'>
              <div>
                <div className='h-5 w-4/5 animate-pulse rounded bg-slate-200' />
                {/* Star + rating bar */}
                <div className='mt-2.5 flex items-center gap-1.5'>
                  <div className='h-4 w-4 animate-pulse rounded-full bg-amber-200/70' />
                  <div className='h-3.5 w-14 animate-pulse rounded bg-slate-200' />
                </div>
              </div>
              {/* Stacked price bars */}
              <div className='mt-4 flex flex-col gap-2'>
                <div className='h-5 w-28 animate-pulse rounded bg-slate-300' />
                <div className='h-3.5 w-20 animate-pulse rounded bg-slate-100' />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
}
