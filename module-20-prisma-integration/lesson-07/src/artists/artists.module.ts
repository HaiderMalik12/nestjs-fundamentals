import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsController } from './artists.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ArtistsController],
  providers: [ArtistsService, PrismaService],
})
export class ArtistsModule {}
