import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';

@Module({
  controllers: [SongsController]
})
export class SongsModule {}
