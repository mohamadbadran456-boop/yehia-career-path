import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Yehia's Job Search App",
  description: "Assignment 1 - Routing System",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ padding: '1rem', background: '#f4f4f4', display: 'flex', gap: '1.5rem', borderBottom: '1px solid #ddd' }}>
          <Link href="/">Home</Link>
          <Link href="/plan">Plan</Link>
          <Link href="/opportunities">Opportunities</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        <main style={{ padding: '2rem' }}>
          {children}
        </main>
      </body>
    </html>
  );
}