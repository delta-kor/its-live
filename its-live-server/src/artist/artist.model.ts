import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

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

  @Field()
  name: string;

  @Field(() => ArtistType)
  type: ArtistType;
}
