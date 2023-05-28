import Video from '@/components/Video';
import VideoInfo from '@/components/VideoInfo';
import { GetVideoByUuid, GetVideoByUuidResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

interface Props {
  params: {
    uuid: string;
  };
}

export default async function VideoPage({ params: { uuid } }: Props) {
  const { video } = await GraphQL.request<GetVideoByUuidResponse>(
    GetVideoByUuid,
    { uuid }
  );

  return (
    <div className={'flex flex-col gap-4'}>
      <Video video={video} />
      <VideoInfo video={video} />
    </div>
  );
}
