import { GetVideoByUuidResponse, GetVideoByUuid } from '@/graphql/queries';
import { GraphQL } from '@/lib/graphql';
import { getThumbnail } from '@/utils/image';
import { Metadata } from 'next';

export default function VideoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

interface Props {
  params: {
    uuid: string;
  };
}

export async function generateMetadata({
  params: { uuid },
}: Props): Promise<Metadata> {
  const { video } = await GraphQL.request<GetVideoByUuidResponse>(
    GetVideoByUuid,
    { uuid }
  );

  return {
    title: `${video.title} - ${video.artist.name} | It's LIVE`,
    description: video.description,
    openGraph: {
      title: `${video.title} - ${video.artist.name} | It's LIVE`,
      description: video.description,
      images: [
        {
          url: getThumbnail(video.youtube),
          width: 1280,
          height: 720,
        },
      ],
    },
  };
}
