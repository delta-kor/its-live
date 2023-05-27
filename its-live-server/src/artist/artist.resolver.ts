import { Resolver, Query, Args } from '@nestjs/graphql';
import { PrismaService } from 'src/prisma/prisma.service';
import { Artist } from './artist.model';

@Resolver()
export class ArtistResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => Artist)
  async artistById(@Args('uuid') uuid: string) {
    return this.prismaService.artist.findUnique({
      where: { uuid },
    });
  }
}
