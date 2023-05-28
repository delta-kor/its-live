'use client';

import Icons from './Icons';

export default function Header() {
  return (
    <div
      className={
        'fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-lg z-10'
      }
    >
      <div className={'flex justify-between items-center px-6 py-3'}>
        <Icons.Logo className={'w-16 h-16 fill-primary-c'} />
        <Icons.Search className={'w-5 h-5 fill-primary-c'} />
      </div>
    </div>
  );
}
