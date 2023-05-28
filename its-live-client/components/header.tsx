'use client';

import Link from 'next/link';
import Icons from './Icons';

export default function Header() {
  return (
    <div
      className={
        'fixed top-0 left-0 right-0 w-full bg-white bg-opacity-80 backdrop-blur-lg z-10'
      }
    >
      <div
        className={
          'flex max-w-6xl mx-auto justify-between items-center px-6 py-3'
        }
      >
        <Link href="/">
          <Icons.Logo className={'w-16 h-16 fill-primary-c'} />
        </Link>

        <Icons.Search className={'w-5 h-5 fill-primary-c'} />
      </div>
    </div>
  );
}
