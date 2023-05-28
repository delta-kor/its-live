import { Metadata } from 'next';
import './globals.css';
import { Nanum_Gothic } from 'next/font/google';

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
        <div className={'max-w-6xl mx-auto'}>{children}</div>
      </body>
    </html>
  );
}
