import { Body, Controller, Get, Post } from '@nestjs/common';
import { Album } from './schemas/album.schema';
import { AlbumService } from './album.service';
import { CreateAlbumDTO } from './dto/create-album-dto';

@Controller('albums')
export class AlbumController {
  constructor(private albumService: AlbumService) {}
  @Post()
  create(
    @Body()
    createAlbumDTO: CreateAlbumDTO,
  ): Promise<Album> {
    return this.albumService.createAlbum(createAlbumDTO);
  }

  @Get()
  find(): Promise<Album[]> {
    return this.albumService.findAlbums();
  }
}
