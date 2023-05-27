import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [VideoResolver],
})
export class VideoModule {}
