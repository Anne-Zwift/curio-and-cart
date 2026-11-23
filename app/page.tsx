import ProductSearch from '@/components/ProductSearch';
import { getProducts } from '@/lib/api';

export default async function Home() {
  const products = await getProducts();

  return (
    <section className='flex flex-col items-center justify-center py-24 text-center'>
      <h1 className='text-5xl font-bold tracking-tight text-slate-900'>
        Curio &amp; Cart
      </h1>
      <p className='mt-4 max-w-xl text-lg text-slate-600'>
        An online shop for curiosities - various odds and ends and little
        treasures.
      </p>
      <p className='pt-12 pb-4 font-bold'>Search products by name or tag.</p>
      <ProductSearch products={products} />
    </section>
  );
}
