import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from './playlist.entity';
import { Song } from 'src/songs/song.entity';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/users/user.entity';
import { CreatePlayListDto } from './dto/create-playlist.dto';

@Injectable()
export class PlayListsService {
  constructor(
    @InjectRepository(Playlist)
    private playListRepo: Repository<Playlist>,

    @InjectRepository(Song)
    private songsRepo: Repository<Song>,

    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(playListDTO: CreatePlayListDto): Promise<Playlist> {
    const playList = new Playlist();
    playList.name = playListDTO.name;

    // songs will be the array of ids that we are getting from the DTO object
    const songs = await this.songsRepo.findByIds(playListDTO.songs);
    // set the relation for the songs with playlist entity
    playList.songs = songs;

    // A user will be the id of the user we are getting from the request
    // when we implemented the user authentication this id will become the loggedIn user id
    const user = await this.userRepo.findOneBy({ id: playListDTO.user });
    playList.user = user;

    return this.playListRepo.save(playList);
  }
}
