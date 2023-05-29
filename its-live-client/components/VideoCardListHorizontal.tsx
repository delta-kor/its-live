import VideoCardHorizontal from './VideoCardHorizontal';

interface Props {
  videos: IVideo[];
}

export default function VideoCardListHorizontal({ videos }: Props) {
  return (
    <div className={'flex flex-col gap-3 px-6'}>
      {videos.map((video) => (
        <VideoCardHorizontal video={video} />
      ))}
    </div>
  );
}
