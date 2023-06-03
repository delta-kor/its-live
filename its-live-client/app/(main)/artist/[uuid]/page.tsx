import ArtistHeader from '@/components/ArtistHeader';
import VideoCard from '@/components/VideoCard';
import { GetArtistByUuid, GetArtistByUuidResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

interface Props {
  params: {
    uuid: string;
  };
}

export default async function ArtistPage({ params: { uuid } }: Props) {
  const { artist } = await GraphQL.request<GetArtistByUuidResponse>(
    GetArtistByUuid,
    { uuid }
  );

  return (
    <div className={'flex flex-col gap-6 pt-4'}>
      <ArtistHeader artist={artist} />
      <div className={'flex flex-col items-center gap-6 pb-4'}>
        <div
          className={
            'px-6 flex flex-col gap-6 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3'
          }
        >
          {artist.videos
            .map((video) => ({ ...video, artist }))
            .map((video) => (
              <VideoCard key={video.uuid} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
}
