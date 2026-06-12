import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sriranga Organics',
  description: 'Premium organic spices since 1947',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
