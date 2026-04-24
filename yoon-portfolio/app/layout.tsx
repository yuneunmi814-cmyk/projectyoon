import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://projectyoon.com'),
  title: {
    default: 'yoon · Product Builder',
    template: '%s · yoon',
  },
  description:
    '문제를 정의하고, 설계하고, 직접 만들어 검증합니다. 교육 현장의 운영 경험을 기반으로 프로덕트를 만드는 빌더.',
  openGraph: {
    title: 'yoon · Product Builder',
    description: '문제를 정의하고, 설계하고, 직접 만들어 검증합니다.',
    url: 'https://projectyoon.com',
    siteName: 'yoon',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yoon · Product Builder',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white font-sans text-ink-800 antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
