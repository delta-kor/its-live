import { Module } from '@nestjs/common';
import { ArtistResolver } from './artist.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ArtistResolver],
})
export class ArtistModule {}
