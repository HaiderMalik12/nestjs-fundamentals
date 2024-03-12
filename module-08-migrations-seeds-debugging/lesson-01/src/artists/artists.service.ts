import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Artist } from './artist.entity';

@Injectable()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist)
    private artistRepo: Repository<Artist>,
  ) {}

  findArtist(userId: number): Promise<Artist> {
    return this.artistRepo.findOneBy({ user: { id: userId } });
  }
}
