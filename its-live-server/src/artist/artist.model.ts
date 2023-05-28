import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Video } from '../video/video.model';

export enum ArtistType {
  GROUP_FEMALE = 'GROUP_FEMALE',
  GROUP_MALE = 'GROUP_MALE',
  SOLO_FEMALE = 'SOLO_FEMALE',
  SOLO_MALE = 'SOLO_MALE',
}

registerEnumType(ArtistType, { name: 'ArtistType' });

@ObjectType()
export class Artist {
  @Field()
  uuid: string;

  @Field(() => ArtistType)
  type: ArtistType;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field(() => [Video])
  videos: Video[];
}
