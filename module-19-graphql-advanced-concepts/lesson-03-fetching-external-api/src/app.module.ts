import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongsModule } from './songs/songs.module';
import { AlbumModule } from './album/album.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoModule } from './todo/todo.module';
import * as mongoose from 'mongoose';
import { TodoService } from './todo/todo.service';

mongoose.set('debug', true);

const dataSources = () => ({
  todoAPI: new TodoService(),
});

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
      context: async () => ({
        dataSources,
      }),
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
    SongsModule,
    AlbumModule,
    ProductModule,
    UserModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
