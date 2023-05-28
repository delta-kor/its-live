import VideoCard from '@/components/VideoCard';
import VideoCardList from '@/components/VideoCardList';
import { GetNewVideos, GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';

export default async function IndexPage() {
  const { videos } = await GraphQL.request<GetNewVideosResponse>(GetNewVideos, {
    count: 12,
  });

  const cursor = videos.slice(-1)[0].uuid;

  return (
    <VideoCardList cursor={cursor}>
      {videos.map((video) => (
        <VideoCard key={video.uuid} video={video} />
      ))}
    </VideoCardList>
  );
}
