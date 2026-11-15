import Link from 'next/link';

// components/Header.tsx
export default function Header() {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md'>
      {/**My logo+nav+hamburger will be placed here*/}
      <div className='mx-auto flex h-16 max-w-7xl items-center justify-between px-6'>
        <Link
          href='/'
          className='text-xl font-bold tracking-tight text-slate-900 hover:opacity-90 transition'>
          Curio & Cart
        </Link>
      </div>
    </header>
  );
}
