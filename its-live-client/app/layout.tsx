import { Metadata } from 'next';
import './globals.css';
import { Nanum_Gothic } from 'next/font/google';

const font = Nanum_Gothic({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "It's LIVE",
  description: 'MORE than LIVE, MORE than KPOP | 잇츠라이브',
  openGraph: {
    title: "It's LIVE",
    description: 'MORE than LIVE, MORE than KPOP | 잇츠라이브',
  },
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
      <body className={font.className}>{children}</body>
    </html>
  );
}
