import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import { GetNewVideos, GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

export default async function IndexPage() {
  const { videos } = await GraphQL.request<GetNewVideosResponse>(GetNewVideos, {
    count: 5,
  });

  return (
    <div className="flex flex-col">
      <Header />
      {videos.map((video) => (
        <VideoCard key={video.uuid} video={video} />
      ))}
    </div>
  );
}
