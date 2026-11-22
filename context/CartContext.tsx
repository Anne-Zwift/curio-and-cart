'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { CartContextType, CartItem, Product } from '@/lib/types';

const CART_STORAGE_KEY = 'curio-and-cart-items';

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  //Load saved cart items after mount without synchronous setState in effect
  useEffect(() => {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      queueMicrotask(() => {
        try {
          setItems(JSON.parse(saved));
        } catch (error) {
          console.error('Failed to parse cart from localStorage:', error);
        }
      });
    }
  }, []);

  //Helper that updates both React state and localStorage together
  const updateCart = (updater: (prev: CartItem[]) => CartItem[]) => {
    setItems((prev) => {
      const next = updater(prev); // 1. Calculate the new cart array from the previous array
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(next)); // 2. Save that exact new array to browser storage
      return next; // 3. Hand that exact new array back to React's setItems
    });
  };

  const addToCart = (product: Product) => {
    updateCart((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.product.id === product.id,
      );
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    updateCart((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId),
    );
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    updateCart((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => {
    updateCart(() => []);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = items.reduce((sum, item) => {
    const effectivePrice = item.product.discountedPrice ?? item.product.price;
    return sum + effectivePrice * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
