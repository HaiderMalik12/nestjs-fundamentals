import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { PostsModule } from './posts/posts.module';
import { createUsersLoader } from './users/users.loader';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    PostsModule,
    GraphQLModule.forRootAsync({
      imports: [UsersModule],
      useFactory: (usersService: UsersService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: () => ({
          randomValue: Math.random(),
          usersLoader: createUsersLoader(usersService),
        }),
      }),
      inject: [UsersService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
