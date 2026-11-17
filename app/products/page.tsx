import { getProducts } from '@/lib/api';

export default async function ProductsPage() {
  const product = await getProducts();
  return (
    <article>
      <h1 className='text-3xl font-bold tracking-tight'>
        Curio & Cart Products
      </h1>
      <p className='mt-3 text-slate-600'>Treasures await you!</p>
      <ul>
        {product.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </article>
  );
}
