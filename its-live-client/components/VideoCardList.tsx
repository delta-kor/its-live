'use client';

interface Props {
  children: React.ReactNode;
}

export default function VideoCardList({ children }: Props) {
  return (
    <div
      className={
        'px-6 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3'
      }
    >
      {children}
    </div>
  );
}
