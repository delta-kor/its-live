interface Props {
  video: IVideo;
}

export default function VideoCard({ video }: Props) {
  return (
    <div className={'flex flex-col'}>
      <div className={'text-lg'}>{video.title}</div>
      <div className={'text-base'}>{video.description}</div>
    </div>
  );
}
