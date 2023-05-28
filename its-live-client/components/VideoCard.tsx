import { getThumbnail } from '@/utils/image';

interface Props {
  video: IVideo;
}

export default function VideoCard({ video }: Props) {
  return (
    <div className={'flex flex-col gap-2 select-none cursor-pointer jelly'}>
      <img
        className={'w-full rounded-xl aspect-video'}
        src={getThumbnail(video.youtube)}
        alt={video.title}
      />
      <div className={'flex flex-col'}>
        <div className={'text-lg font-bold truncate'}>{video.title}</div>
        <div className={'text-sm text-black-l2 truncate'}>
          {video.description}
        </div>
      </div>
    </div>
  );
}
