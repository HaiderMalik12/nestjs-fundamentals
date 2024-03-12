import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql';
import { SongService } from './song.service';
import { Query } from '@nestjs/graphql';
import { CreateSongInput, Song } from '../graphql';
import { UpdateSongDTO } from './dto/update-song-dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { GraphQLError } from 'graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class SongResolver {
  constructor(private songService: SongService) {}

  @Query('songs')
  async getSongs(): Promise<Song[]> {
    // return this.songService.getSongs();
    // throw new Error('Unable to fetch songs!');
    throw new GraphQLError('Unable to fetch the songs', {
      extensions: {
        code: 'INTERNAL_SERVER_ERROR',
      },
    });
  }

  @Query('song')
  async getSong(
    @Args('id')
    id: string,
  ): Promise<Song> {
    return this.songService.getSong(id);
  }

  @Mutation('createSong')
  async createSong(
    @Args('createSongInput')
    args: CreateSongInput,
  ): Promise<Song> {
    const newSong = this.songService.createSong(args);
    pubSub.publish('songCreated', { songCreated: newSong });
    return newSong;
  }
  @Mutation('updateSong')
  async updateSong(
    @Args('updateSongInput')
    args: UpdateSongDTO,
    @Args('id')
    id: string,
  ): Promise<UpdateResult> {
    return this.songService.updateSong(id, args);
  }

  @Mutation('deleteSong')
  async deleteSong(
    @Args('id')
    id: string,
  ): Promise<DeleteResult> {
    return this.songService.deleteSong(id);
  }

  @Subscription('songCreated')
  songCreated() {
    return pubSub.asyncIterator('songCreated'); //1
  }
}
