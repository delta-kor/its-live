import { gql } from 'graphql-request';

export const GetNewVideos = gql`
  query GetNewVideos($count: Int!, $cursor: String) {
    videos: newVideos(count: $count, cursor: $cursor) {
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

export const GetVideosByArtistUuid = gql`
  query GetVideosByArtistUuid($uuid: String!, $count: Int) {
    videos: videosByArtistUuid(uuid: $uuid, count: $count) {
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
export type GetVideosByArtistUuidResponse = { videos: IVideo[] };
