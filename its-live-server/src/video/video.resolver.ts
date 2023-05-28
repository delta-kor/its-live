import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { Video } from './video.model';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { ManageGuard } from '../manage/manage.guard';

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

  @Mutation(() => Video)
  @UseGuards(ManageGuard)
  async createVideo(
    @Args('youtube') youtube: string,
    @Args('title') title: string,
    @Args('description') description: string,
    @Args('date') date: Date,
    @Args('artistUuid') artistUuid: string,
  ) {
    return this.prismaService.video.create({
      data: {
        youtube,
        title,
        description,
        date,
        artist: {
          connect: {
            uuid: artistUuid,
          },
        },
      },
    });
  }
}
