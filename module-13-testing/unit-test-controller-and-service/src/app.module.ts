import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongModule } from './song/song.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://postgres:root@localhost:5432/test-dev',
      synchronize: true,
      entities: [__dirname + '/**/*.entity.{ts,js}'],
    }),
    SongModule,
  ],
})
export class AppModule {}
