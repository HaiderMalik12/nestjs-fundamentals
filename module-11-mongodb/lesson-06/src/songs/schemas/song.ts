import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Album } from 'src/albums/schemas/album.schema';

export type SongDocument = HydratedDocument<Song>; //1.

@Schema() //2.
export class Song {
  @Prop({
    // 3.
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  releasedDate: Date;

  @Prop({
    required: true,
  })
  duration: string;

  @Prop()
  lyrics: string;

  // song.schema.ts
  @Prop({
    type: Types.ObjectId,
    ref: Album.name,
  })
  album: Album;
}

export const SongSchema = SchemaFactory.createForClass(Song);
