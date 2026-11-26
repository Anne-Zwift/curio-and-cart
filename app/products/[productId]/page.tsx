import ProductDetails from '@/components/ProductDetails';
import { getProductById } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className='font-mono'>
        <Link
          href='/products'
          className='text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors'>
          ← Back to Products
        </Link>
      </div>
      <ProductDetails product={product} />
    </div>
  );
}
