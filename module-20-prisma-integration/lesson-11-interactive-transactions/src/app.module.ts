import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { ArtistsModule } from './artists/artists.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ApplicationsModule } from './applications/applications.module';
import { PrismaService } from './prisma.service';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [
    SongsModule,
    ArtistsModule,
    UsersModule,
    PostsModule,
    ApplicationsModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
