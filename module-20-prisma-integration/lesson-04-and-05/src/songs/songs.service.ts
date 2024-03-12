import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SongsService {
  constructor(private prisma: PrismaService) {}
  create(createSongDto: Prisma.SongCreateInput) {
    return this.prisma.song.create({
      data: createSongDto,
    });
  }

  findAll() {
    return this.prisma.song.findMany();
  }

  findOne(songWhereUniqueInput: Prisma.SongWhereUniqueInput) {
    return this.prisma.song.findUnique({ where: songWhereUniqueInput });
  }

  update(
    where: Prisma.SongWhereUniqueInput,
    updateSongDto: Prisma.SongUpdateInput,
  ) {
    return this.prisma.song.update({
      where,
      data: updateSongDto,
    });
  }

  remove(where: Prisma.SongWhereUniqueInput) {
    return this.prisma.song.delete({ where });
  }
}
