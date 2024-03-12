import { Body, Controller, Post } from '@nestjs/common';
import { Playlist } from './playlist.entity';
import { CreatePlayListDto } from './dto/create-playlist.dto';
import { PlayListsService } from './playlists.service';

@Controller('playlists')
export class PlayListsController {
  constructor(private playListService: PlayListsService) {}
  @Post()
  create(
    @Body()
    playlistDTO: CreatePlayListDto,
  ): Promise<Playlist> {
    return this.playListService.create(playlistDTO);
  }
}
