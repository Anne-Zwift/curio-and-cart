export default function Loading() {
  // Define the Loading UI here
  return (
    <article aria-busy='true' className='mx-auto max-w-5xl px-4 py-8'>
      <span className='sr-only'>Loading product details...</span>
      {/**Back link */}
      <div className='h-4 w-32 animate-pulse rounded bg-slate-200' />
      {/**Matching column layout */}
      <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/**Left column*/}
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

        {/**Right column: Title, rating, price, description, tags & button*/}
        <div className='flex flex-col justify-between'>
          <div>
            <div className='h-8 w-3/4 animate-pulse rounded bg-slate-200' />
            <div className='mt-3 flex items-center gap-2'>
              <div className='h-4 w-4 animate-pulse rounded-full bg-amber-200/70' />
              <div className='h-4 w-28 animate-pulse rounded bg-slate-200' />
            </div>
            {/* price bars */}
            <div className='mt-6 flex items-baseline gap-3'>
              <div className='h-7 w-32 animate-pulse rounded bg-slate-300' />
              <div className='h-5 w-24 animate-pulse rounded bg-slate-100' />
            </div>
            {/* description lines*/}
            <div className='mt-6 space-y-2.5'>
              <div className='h-4 w-full animate-pulse rounded bg-slate-200' />
              <div className='h-4 w-5/6 animate-pulse rounded bg-slate-200' />
              <div className='h-4 w-2/3 animate-pulse rounded bg-slate-200' />
            </div>

            {/* tag */}
            <div className='mt-6 flex gap-2'>
              <div className='h-6 w-20 animate-pulse rounded-full bg-slate-100' />
              <div className='h-6 w-16 animate-pulse rounded-full bg-slate-100' />
            </div>
          </div>
          {/* add to cart */}
          <div className='mt-8 border-t border-slate-200 pt-6'>
            <div className='h-12 w-full animate-pulse rounded-lg bg-slate-200' />
          </div>
        </div>
      </div>
    </article>
  );
}
