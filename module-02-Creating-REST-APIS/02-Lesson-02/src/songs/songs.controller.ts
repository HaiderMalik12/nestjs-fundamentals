import { Controller, Get, Put, Delete, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'create a new song endpoint';
  }
  @Get()
  findAll() {
    return 'find all songs endpoint';
  }
  @Get(':id')
  findOne() {
    return 'fetch song on the based on id';
  }

  @Put(':id')
  update() {
    return 'update song on the based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song on the based on id';
  }
}
