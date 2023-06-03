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
        name
      }
    }
  }
`;
export type GetVideoByUuidResponse = { video: IVideo };

export const GetVideosByArtistUuid = gql`
  query GetVideosByArtistUuid($uuid: String!, $count: Int, $videoUuid: String) {
    videos: videosByArtistUuid(
      uuid: $uuid
      count: $count
      videoUuid: $videoUuid
    ) {
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

export const GetRecommendedVideos = gql`
  query GetRecommendedVideos($count: Int!, $videoUuid: String) {
    videos: recommendedVideos(count: $count, videoUuid: $videoUuid) {
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
export type GetRecommendedVideosResponse = { videos: IVideo[] };

export const GetArtistByUuid = gql`
  query GetArtistByUuid($uuid: String!) {
    artist: artistByUuid(uuid: $uuid) {
      uuid
      name
      color
      videos {
        uuid
        youtube
        title
        description
      }
    }
  }
`;
export type GetArtistByUuidResponse = { artist: IArtist };
