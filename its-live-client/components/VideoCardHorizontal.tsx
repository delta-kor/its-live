import { getThumbnail } from '@/utils/image';
import Logo from './Logo';
import Link from 'next/link';

interface Props {
  video: IVideo;
}

export default function VideoCardHorizontal({ video }: Props) {
  return (
    <Link href={`/video/${video.uuid}`}>
      <div className={'flex gap-3 items-center jelly'}>
        <img
          className={'h-16 flex-shrink-0 rounded-md aspect-video'}
          src={getThumbnail(video.youtube)}
        />
        <div className={'flex flex-col min-w-0 items-start gap-0.5'}>
          <Logo
            className={'max-h-[16px] max-w-[52px] flex-shrink-0'}
            uuid={video.artist.uuid}
            color={video.artist.color}
          />
          <div className={'flex flex-col w-full'}>
            <div className={'text-md font-bold truncate'}>{video.title}</div>
            <div className={'text-xs text-black-l2 truncate'}>
              {video.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
