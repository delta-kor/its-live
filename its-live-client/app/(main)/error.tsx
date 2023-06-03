'use client';

interface Props {
  error: Error;
}

export default function Error({ error }: Props) {
  return (
    <div className={'flex flex-col gap-1 px-6 w-full'}>
      <div className={'text-2xl font-bold'}>오류가 발생했습니다.</div>
      <div className={'text-lg'}>잠시 후 다시 시도해주세요.</div>
      <div className={'text-sm text-black-l3 w-full break-words'}>
        {error.message}
      </div>
    </div>
  );
}
