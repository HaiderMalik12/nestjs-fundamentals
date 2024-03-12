import { Injectable } from '@nestjs/common';
import { Album, AlbumDocument } from './schemas/album.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Song } from 'src/songs/schemas/song';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<AlbumDocument>,
  ) {}
  async createAlbum(createAlbumDTO: CreateAlbumDTO): Promise<Album> {
    return this.albumModel.create(createAlbumDTO);
  }

  async findAlbums() {
    return this.albumModel.find().populate('songs', null, Song.name); //1
  }
}
