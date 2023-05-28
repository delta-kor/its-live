import Icons from './Icons';

export default function Header() {
  return (
    <div className={'flex justify-between items-center px-6 py-3'}>
      <Icons.Logo className={'w-16 h-16 fill-primary-c'} />
      <Icons.Search className={'w-5 h-5 fill-primary-c'} />
    </div>
  );
}
