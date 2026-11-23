'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
];

// components/Header.tsx
export default function Header() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition'>
          Curio &amp; Cart
        </Link>

        {/* Desktop menu — hidden on small screens */}
        <nav className='hidden md:flex items-center gap-6 text-sm font-medium text-slate-600'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className='hover:text-slate-900 transition-colors'>
              {label}
            </Link>
          ))}
        </nav>

        {/**Cart icon + live item count badge */}
        <div className='flex items-center gap-4'>
          <Link
            href='/cart'
            aria-label={`Shopping cart with ${totalItems} items`}
            className='relative inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
              />
            </svg>
            <span className='hidden sm:inline'>Cart</span>
            {totalItems > 0 && (
              <span className='inline-flex min-w-5 items-center justify-center rounded-full bg-slate-900 px-1.5 py-0.5 text-xs font-bold text-white'>
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger — visible only below md */}
          <button
            type='button'
            aria-label='Toggle menu'
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className='md:hidden text-slate-600 hover:text-slate-900'>
            <svg
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d={
                  open
                    ? 'M6 18 18 6M6 6l12 12'
                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className='md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-3 text-sm font-medium text-slate-600'>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)} // close after tapping a link
              className='py-1.5 hover:text-slate-900 transition-colors'>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
