// app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-300`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}