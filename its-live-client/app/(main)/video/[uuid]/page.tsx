import VideoCardListHorizontal from '@/components/VideoCardListHorizontal';
import Video from '@/components/Video';
import VideoInfo from '@/components/VideoInfo';
import {
  GetRecommendedVideos,
  GetRecommendedVideosResponse,
  GetVideoByUuid,
  GetVideoByUuidResponse,
  GetVideosByArtistUuid,
  GetVideosByArtistUuidResponse,
} from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';
import Logo from '@/components/Logo';
import Link from 'next/link';

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

  const [{ videos: artistVideos }, { videos: recommendedVideos }] =
    await Promise.all([
      GraphQL.request<GetVideosByArtistUuidResponse>(GetVideosByArtistUuid, {
        uuid: video.artist.uuid,
        count: 2,
        videoUuid: video.uuid,
      }),
      GraphQL.request<GetRecommendedVideosResponse>(GetRecommendedVideos, {
        count: 5,
        uuid,
        videoUuid: video.uuid,
      }),
    ]);

  return (
    <div className={'flex flex-col gap-4 pb-6'}>
      <Video video={video} />
      <VideoInfo video={video} />
      <div className={'flex flex-col gap-4 lg:grid lg:grid-cols-2'}>
        {!!artistVideos.length && (
          <div className={'flex flex-col gap-2 lg:order-2'}>
            <div className={'flex px-6 justify-between'}>
              <Logo
                uuid={video.artist.uuid}
                color={video.artist.color}
                className={'max-h-[24px] max-w-[58px] flex-shrink-0'}
              />
              <Link href={`/artist/${video.artist.uuid}`}>
                <div
                  className={
                    'text-sm font-bold text-primary-c hover:text-primary-l1 cursor-pointer select-none transition-colors duration-100'
                  }
                >
                  전체보기
                </div>
              </Link>
            </div>
            <VideoCardListHorizontal videos={artistVideos} />
          </div>
        )}
        <div className={'flex flex-col gap-2 lg:order-1'}>
          <div className={'flex px-6 justify-between'}>
            <div className={'text-md font-bold select-none'}>추천 동영상</div>
          </div>
          <VideoCardListHorizontal videos={recommendedVideos} />
        </div>
      </div>
    </div>
  );
}
