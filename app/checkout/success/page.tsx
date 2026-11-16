import Link from 'next/link';

export default async function CheckoutSuccessPage() {
  return (
    <div className='mx-auto max-w-2xl'>
      <h1 className='text-3xl font-bold text-slate-900'>Order Confirmed</h1>
      <p className='mt-3 text-slate-600'>Thank you for your purchase. Orderconfirmation will be delivered later...</p>
      <Link
        href='/products'
        className='text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors'>
        ← Back to Products
      </Link>
    </div>
  );
}
