import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { SiteHeader } from '@/components/layout/SiteHeader';

export const metadata: Metadata = {
  title: 'Siddharth Mourya | Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Node.js, and modern product engineering.',
  metadataBase: new URL('https://siddharthmourya.dev'),
  openGraph: {
    title: 'Siddharth Mourya | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Node.js, and modern product engineering.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Mourya | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, Next.js, TypeScript, Node.js, and modern product engineering.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
