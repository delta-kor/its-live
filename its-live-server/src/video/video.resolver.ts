import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
  Int,
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

  @Query(() => [Video])
  async newVideos(
    @Args('count', { type: () => Int, defaultValue: 12 }) count: number,
    @Args('cursor', { nullable: true }) cursor?: string,
  ) {
    if (count < 1 || count > 30)
      throw new Error('Count must be between 1 and 30');

    if (cursor) {
      return this.prismaService.video.findMany({
        orderBy: {
          date: 'desc',
        },
        cursor: {
          uuid: cursor,
        },
        skip: 1,
        take: count,
      });
    }

    return this.prismaService.video.findMany({
      orderBy: {
        date: 'desc',
      },
      take: count,
    });
  }

  @Query(() => [Video])
  recommendedVideos(
    @Args('count', { type: () => Int, defaultValue: 5 }) count: number,
    @Args('videoUuid', { nullable: true }) videoUuid?: string,
  ) {
    if (count < 1 || count > 30)
      throw new Error('Count must be between 1 and 30');

    return this.prismaService.video.aggregateRaw({
      pipeline: [
        { $match: { uuid: { $ne: videoUuid } } },
        { $sample: { size: count } },
      ],
    });
  }

  @Query(() => [Video])
  async videosByArtistUuid(
    @Args('uuid') uuid: string,
    @Args('count', { type: () => Int, defaultValue: 2 }) count: number,
    @Args('videoUuid', { nullable: true }) videoUuid?: string,
  ) {
    if (count < 1 || count > 30)
      throw new Error('Count must be between 1 and 30');

    const videos = await this.prismaService.video.findMany({
      where: {
        artist: {
          uuid,
        },
        uuid: { not: videoUuid },
      },
      orderBy: {
        date: 'desc',
      },
      take: count,
    });

    return videos.filter((video) => video.uuid !== videoUuid);
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
