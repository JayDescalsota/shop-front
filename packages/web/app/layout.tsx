import type { Metadata } from 'next';
import { Inter, Poppins, Open_Sans } from 'next/font/google';
import { Providers } from '@/lib/providers';
import '@autocare/ui/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AutoCare Pro',
  description: 'Enterprise auto ecosystem platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${openSans.variable}`}>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
