import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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

  lyrics: string;
}

export const SongSchema = SchemaFactory.createForClass(Song);
