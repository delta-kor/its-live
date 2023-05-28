import Video from '@/components/Video';
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
    <div>
      <Video video={video} />
      <div className={'px-6 flex flex-col'}></div>
    </div>
  );
}
