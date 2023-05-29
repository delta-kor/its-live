import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Int,
} from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Artist } from './artist.model';
import { Video } from '../video/video.model';

@Resolver((of) => Artist)
export class ArtistResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @ResolveField()
  async videos(@Parent() artist: Artist) {
    const videos = await this.prismaService.artist
      .findUnique({
        where: { uuid: artist.uuid },
      })
      .videos();
    return videos;
  }

  @Query(() => Artist)
  async artistByUuid(@Args('uuid') uuid: string) {
    const artist = await this.prismaService.artist.findUnique({
      where: { uuid },
    });
    return artist;
  }

  @Query(() => [Video])
  async videosByArtistUuid(
    @Args('uuid') uuid: string,
    @Args('count', { type: () => Int, defaultValue: 2 }) count: number,
    @Args('videoUuid', { nullable: true }) videoUuid?: string,
  ) {
    if (count < 1 || count > 30)
      throw new Error('Count must be between 1 and 30');

    const videos = await this.prismaService.artist
      .findUnique({
        where: { uuid },
      })
      .videos({
        take: count,
      });

    return videos.filter((video) => video.uuid !== videoUuid);
  }
}
