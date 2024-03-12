import { Module } from '@nestjs/common';

import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule],
  providers: [PostsService, PostsResolver, UsersService],
})
export class PostsModule {}
