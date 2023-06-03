import Logo from './Logo';

interface Props {
  artist: IArtist;
}

export default function ArtistHeader({ artist }: Props) {
  return (
    <div className={'flex flex-col lg:items-center gap-2 lg:gap-4 px-6'}>
      <div
        className={
          'flex w-14 lg:w-20 h-14 lg:h-20 flex-shrink-0 rounded-full items-center justify-center '
        }
        style={{ background: artist.color }}
      >
        <Logo
          className={
            'max-w-[30px] lg:max-w-[48px] max-h-[30px] lg:max-h-[48px]'
          }
          uuid={artist.uuid}
          color={'#ffffff'}
        />
      </div>
      <div className={'text-xl lg:text-2xl font-bold'}>{artist.name}</div>
    </div>
  );
}
