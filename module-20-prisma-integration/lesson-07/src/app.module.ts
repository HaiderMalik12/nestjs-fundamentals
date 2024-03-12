import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { ArtistsModule } from './artists/artists.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [SongsModule, ArtistsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
