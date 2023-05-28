import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { GetNewVideos, GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

export default async function IndexPage() {
  const { videos } = await GraphQL.request<GetNewVideosResponse>(GetNewVideos, {
    count: 12,
  });

  return (
    <div className={'flex flex-col'}>
      <Header />
      <div
        className={
          'px-6 pt-24 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {videos.map((video) => (
          <VideoCard key={video.uuid} video={video} />
        ))}
      </div>
    </div>
  );
}
