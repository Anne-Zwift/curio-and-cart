import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { CartProvider } from '@/context/CartContext';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home | Curio & Cart',
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
          <div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
