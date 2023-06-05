'use client';

import Link from 'next/link';
import Icons from './Icons';
import { MouseEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
import { encode } from '@/utils/encode';

export default function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  const handleSearchClick: MouseEventHandler = () => {
    setIsSearchOpen(!isSearchOpen);
    setQuery('');
  };

  const handleSubmit = () => {
    if (query.trim() === '') return;
    router.push(`/search?q=${encode(query)}`);
  };

  return (
    <div
      className={
        'fixed top-0 left-0 right-0 w-full bg-white bg-opacity-80 backdrop-blur-lg z-10'
      }
    >
      <div
        className={
          'flex max-w-6xl mx-auto h-[88px] justify-between items-center px-6 py-3'
        }
      >
        {!isSearchOpen ? (
          <Link href="/">
            <Icons.Logo className={'w-16 h-16 fill-primary-c'} />
          </Link>
        ) : (
          <input
            type={'text'}
            className={
              'w-full h-full text-xl md:text-2xl outline-none bg-transparent'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSubmit();
            }}
            autoComplete={'off'}
            autoCapitalize={'off'}
            autoCorrect={'off'}
            spellCheck={'false'}
            placeholder={'검색어를 입력하세요'}
            autoFocus
          />
        )}

        <Icons.Search
          className={'w-5 h-5 fill-primary-c cursor-pointer select-none'}
          onClick={handleSearchClick}
        />
      </div>
    </div>
  );
}
