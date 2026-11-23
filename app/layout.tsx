import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Curio & Cart',
  description: 'An online shop of curiosities - built with Next.js',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className='flex flex-col min-h-full bg-slate-50 text-slate-900 font-sans'>
        <CartProvider>
          {/**Header: logo+nav*/}
          <Header />
          {/**Main Content*/}
          <main className='flex-1 mx-auto w-full max-w-7xl px-6 py-12'>
            {children}
          </main>
          {/**Footer*/}
          <footer className='border-t border-slate-200 bg-white'>
            <div className='mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500'>
              <p>&copy; 2026 Curio & Cart</p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
