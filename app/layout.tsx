import type { Metadata } from 'next';
import { Courier_Prime } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-courier',
});

const moonbaseDelta = localFont({
  src: [
    { path: '../public/fonts/Moonbase Delta.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Moonbase Delta.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Moonbase Delta Italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/Moonbase Delta Italic.otf', weight: '400', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-moonbase',
});

export const metadata: Metadata = {
  title: 'Sriranga Organics',
  description: 'Premium organic spices and authentic blends since 1947.',
  keywords: ['organic spices', 'sambar mix', 'bisibelebath', 'puliyogare', 'rasam', 'indian spices'],
  openGraph: {
    title: 'Sriranga Organics',
    description: 'Premium organic spices and authentic blends since 1947.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${courierPrime.variable} ${moonbaseDelta.variable}`}>
      <body className={courierPrime.variable}>{children}</body>
    </html>
  );
}
