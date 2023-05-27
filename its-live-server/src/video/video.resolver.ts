import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Video } from './video.model';
import { PrismaService } from '../prisma/prisma.service';

@Resolver((of) => Video)
export class VideoResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @ResolveField()
  async artist(@Parent() video: Video) {
    const artist = await this.prismaService.video
      .findUnique({
        where: { uuid: video.uuid },
      })
      .artist();
    return artist;
  }

  @Query(() => Video)
  videoByUuid(@Args('uuid') uuid: string) {
    return this.prismaService.video.findUnique({
      where: {
        uuid,
      },
    });
  }
}
