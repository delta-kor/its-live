import VideoCard from '@/components/VideoCard';
import VideoCardList from '@/components/VideoCardList';
import { GetNewVideos, GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

export default async function IndexPage() {
  const { videos } = await GraphQL.request<GetNewVideosResponse>(GetNewVideos, {
    count: 12,
  });

  return (
    <VideoCardList>
      {videos.map((video) => (
        <VideoCard key={video.uuid} video={video} />
      ))}
    </VideoCardList>
  );
}
