'use client';

import { GetNewVideos } from '@/graphql/queries';
import { GetNewVideosResponse } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';
import { useEffect, useRef, useState } from 'react';
import VideoCard from './VideoCard';
import session from '@/utils/session';

interface Props {
  cursor: string;
  children: React.ReactNode;
}

interface Session {
  videos: IVideo[];
  cursor: string;
}

export default function VideoCardList({ cursor, children }: Props) {
  const sessionData = session.get<Session>('video_card_list');

  const [videos, setVideos] = useState<IVideo[]>(sessionData.videos || []);
  const cursorRef = useRef<string>(sessionData.cursor || cursor);
  const observerRef = useRef<HTMLDivElement>(null);
  const loading = useRef<boolean>(false);
  const ended = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [observerRef, videos]);

  const handleLoadMore = async () => {
    if (ended.current || loading.current) return;

    loading.current = true;

    const { videos: newVideos } = await GraphQL.request<GetNewVideosResponse>(
      GetNewVideos,
      {
        cursor: cursorRef.current,
        count: 12,
      }
    );

    loading.current = false;

    if (newVideos.length === 0) {
      ended.current = true;
      return;
    }

    cursorRef.current = newVideos[newVideos.length - 1].uuid;
    const appendedVideos = [...videos, ...newVideos];
    setVideos(appendedVideos);

    session.set<Session>('video_card_list', {
      videos: appendedVideos,
      cursor: cursorRef.current,
    });
  };

  return (
    <div className={'flex flex-col items-center gap-6 pb-4'}>
      <div
        className={
          'px-6 flex flex-col gap-6 w-full sm:grid sm:grid-cols-2 lg:grid-cols-3'
        }
      >
        {children}
        {videos.map((video) => (
          <VideoCard key={video.uuid} video={video} />
        ))}
      </div>
      <div ref={observerRef} />
    </div>
  );
}
