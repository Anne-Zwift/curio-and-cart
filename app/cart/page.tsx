import type { Metadata } from 'next';
import CartView from '@/components/CartView';

export const metadata: Metadata = {
  title: 'Shopping Cart | Curio & Cart',
  description: 'Review your selected items and proceed to checkout.',
};

export default function CartPage() {
  return (
    <div className='mx-auto max-w-2xl'>
      <CartView />
    </div>
  );
}
