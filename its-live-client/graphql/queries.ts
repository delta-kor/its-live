import { gql } from 'graphql-request';

export const GetNewVideos = gql`
  query GetNewVideos($count: Int) {
    videos: newVideos(count: $count) {
      uuid
      youtube
      title
      description
    }
  }
`;

export type GetNewVideosResponse = { videos: IVideo[] };
