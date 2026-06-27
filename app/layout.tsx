import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { QueryClientContainer } from '@/components/providers/QueryClientProvider';

export const metadata: Metadata = {
  title: 'Siddharth Mourya | Frontend Developer Portfolio',
  description:
    'A human, light-themed frontend portfolio for Siddharth Mourya — React, Next.js, TypeScript, product UI, realtime apps, and component systems.',
  metadataBase: new URL('https://siddharthmourya.dev'),
  openGraph: {
    title: 'Siddharth Mourya | Frontend Developer Portfolio',
    description:
      'Frontend developer portfolio focused on polished interfaces, product thinking, React, Next.js, TypeScript, and full-stack delivery.',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siddharth Mourya | Frontend Developer Portfolio',
    description:
      'Frontend developer portfolio focused on polished interfaces, product thinking, React, Next.js, TypeScript, and full-stack delivery.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QueryClientContainer>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <SiteHeader />
            {children}
          </ThemeProvider>
        </QueryClientContainer>
      </body>
    </html>
  );
}
