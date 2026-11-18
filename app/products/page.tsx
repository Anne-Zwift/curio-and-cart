import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <article>
      <h1 className='text-3xl font-bold tracking-tight'>
        Curio & Cart Products
      </h1>
      <p className='mt-3 text-slate-600'>Treasures await you!</p>
      <ul className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </article>
  );
}
