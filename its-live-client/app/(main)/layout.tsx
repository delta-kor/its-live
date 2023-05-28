import Header from '@/components/Header';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className={'max-w-6xl mx-auto pt-[88px]'}>{children}</div>
    </>
  );
}
