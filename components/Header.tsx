'use client';

import { useState } from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' }

];

// components/Header.tsx
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md'>
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight text-slate-900 hover:opacity-70 transition'>
          Curio & Cart
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
