import Link from 'next/link';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return (
    <div>
      <h1>Product details for: {productId}.</h1>
      <p>Show details for product ID: {productId}</p>
      <Link
        href='/products'
        className='text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors'>
        ← Back to Products
      </Link>
    </div>
  );
}
