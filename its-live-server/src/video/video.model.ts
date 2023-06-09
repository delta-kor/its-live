import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Artist } from '../artist/artist.model';

@ObjectType()
export class Video {
  @Field()
  uuid: string;

  @Field()
  youtube: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  date: Date;

  @Field(() => Int)
  start: number;

  @Field(() => Artist)
  artist: Artist;
}
