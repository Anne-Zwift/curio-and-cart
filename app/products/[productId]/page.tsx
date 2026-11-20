import ProductDetails from '@/components/ProductDetails';
import { getProductById } from '@/lib/api';
import Link from 'next/link';

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  const product = await getProductById(productId);

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
