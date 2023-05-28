import Logo from './Logo';

interface Props {
  video: IVideo;
}

export default function VideoInfo({ video }: Props) {
  return (
    <div className={'flex px-6 gap-3 lg:gap-4 items-center'}>
      <div
        className={
          'flex w-10 lg:w-12 h-10 lg:h-12 rounded-full items-center justify-center'
        }
        style={{ background: video.artist.color }}
      >
        <Logo
          className={
            'max-w-[26px] lg:max-w-[32px] max-h-[26px] lg:max-h-[32px]'
          }
          uuid={video.artist.uuid}
          color={'#ffffff'}
        />
      </div>
      <div className={'flex flex-col lg:gap-0.5'}>
        <div className={'text-lg lg:text-2xl font-bold'}>{video.title}</div>
        <div className={'text-sm lg:text-lg text-black-l2'}>
          {video.description}
        </div>
      </div>
    </div>
  );
}
