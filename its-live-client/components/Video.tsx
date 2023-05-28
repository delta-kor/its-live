'use client';

import Youtube from 'react-youtube';

interface Props {
  video: IVideo;
}

export default function Video({ video }: Props) {
  return (
    <div className={'w-full aspect-video bg-black-c'}>
      <Youtube
        videoId={video.youtube}
        className={'w-full aspect-video'}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: { autoplay: 1, color: 'white' },
        }}
      />
    </div>
  );
}
