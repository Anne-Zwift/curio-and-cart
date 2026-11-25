import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasDiscount =
    product.discountedPrice !== undefined &&
    product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice!) / product.price) * 100,
      )
    : 0;

  const displayPrice = product.discountedPrice ?? product.price;

  return (
    <Link
      href={`/products/${product.id}`}
      className='group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:shadow-md'>
      <div className='relative aspect-square w-full bg-slate-100'>
        <Image
          src={product.image.url}
          alt={product.image.alt || product.title}
          fill
          sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
        {hasDiscount && (
          <span className='absolute top-3 right-3 rounded-full bg-rose-600 px-2.5 py-1 text-xs font-bold text-white'>
            -{discountPercentage}%
          </span>
        )}
      </div>
      <div className='flex flex-1 flex-col justify-between p-4'>
        <div>
          <h2 className='text-lg font-semibold text-slate-900 group-hover:underline'>
            {product.title}
          </h2>
          <p className='mt-1 text-sm text-amber-700 font-bold'>
            ⭐ {product.rating} / 5
          </p>
        </div>
        <div className='mt-4 flex flex-col items-baseline gap-2'>
          <span className='text-lg font-bold text-slate-900'>
            NOK {displayPrice.toFixed(2)},-
          </span>
          {hasDiscount ? (
            <span className='text-sm text-slate-600 line-through'>
              NOK {product.price.toFixed(2)},-
            </span>
          ) : (
            <span className='text-sm invisible' aria-hidden='true'>
              Placeholder
            </span>
          )}
        </div>
        <span className='mt-4 inline-block w-full rounded-md bg-slate-900 px-4 py-2 text-center text-sm font-medium text-white transition group-hover:bg-slate-700'>
          View Product and Read Reviews
        </span>
      </div>
    </Link>
  );
}
