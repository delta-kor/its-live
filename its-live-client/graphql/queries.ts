import { gql } from 'graphql-request';

export const GetNewVideos = gql`
  query GetNewVideos($count: Int!) {
    videos: newVideos(count: $count) {
      uuid
      youtube
      title
      description
      artist {
        uuid
        color
      }
    }
  }
`;
export type GetNewVideosResponse = { videos: IVideo[] };

export const GetVideoByUuid = gql`
  query GetVideoByUuid($uuid: String!) {
    video: videoByUuid(uuid: $uuid) {
      uuid
      youtube
      title
      description
      artist {
        uuid
        color
      }
    }
  }
`;
export type GetVideoByUuidResponse = { video: IVideo };
