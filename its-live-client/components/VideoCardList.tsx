'use client';

import { GetNewVideos } from '@/graphql/queries';
import { GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';
import { useRef, useState } from 'react';
import VideoCard from './VideoCard';

interface Props {
  cursor: string;
  children: React.ReactNode;
}

export default function VideoCardList({ cursor, children }: Props) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const cursorRef = useRef<string>(cursor);
  const ended = useRef<boolean>(false);

  const handleLoadMore = async () => {
    if (ended.current) return;

    const { videos: newVideos } = await GraphQL.request<GetNewVideosResponse>(
      GetNewVideos,
      {
        cursor: cursorRef.current,
        count: 12,
      }
    );

    if (newVideos.length === 0) {
      ended.current = true;
      return;
    }

    cursorRef.current = newVideos[newVideos.length - 1].uuid;
    setVideos([...videos, ...newVideos]);
  };

  return (
    <div className={'flex flex-col items-center gap-6 pb-4'}>
      <div
        className={
          'px-6 flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {children}
        {videos.map((video) => (
          <VideoCard key={video.uuid} video={video} />
        ))}
      </div>
      <div
        className={
          'inline-block bg-primary-l3 text-md font-bold text-primary-c px-3 py-2 rounded-md select-none cursor-pointer transform-gpu'
        }
        onClick={handleLoadMore}
      >
        더 불러오기
      </div>
    </div>
  );
}
