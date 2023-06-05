import VideoCard from '@/components/VideoCard';
import { SearchVideos, SearchVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';
import { decode } from '@/utils/encode';

interface Props {
  searchParams: {
    q: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const q = decode(searchParams.q);
  const { videos } = await GraphQL.request<SearchVideosResponse>(SearchVideos, {
    query: q,
  });

  return (
    <div className={'flex flex-col gap-6 px-6 pb-4'}>
      <div className={'flex items-center gap-2'}>
        <div className={'text-xl'}>
          <span className={'font-bold mr-1'}>{q}</span>검색 결과
        </div>
        <div className={'text-xl font-bold text-primary-c'}>
          {videos.length}
        </div>
      </div>
      <div
        className={
          'flex flex-col gap-6 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {videos.map((video) => (
          <VideoCard video={video} />
        ))}
      </div>
    </div>
  );
}
