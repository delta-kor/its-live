import { Metadata } from 'next';
import './globals.css';
import { Nanum_Gothic } from 'next/font/google';
import Header from '@/components/Header';

const font = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "It's LIVE",
  description: "It's LIVE",
  viewport: {
    width: 'device-width',
    height: 'device-height',
    maximumScale: 1,
    minimumScale: 1,
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={font.className}>
        <Header />
        <div className={'max-w-6xl mx-auto pt-24'}>{children}</div>
      </body>
    </html>
  );
}
