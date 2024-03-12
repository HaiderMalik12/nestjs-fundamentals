import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio-queue')
    private readonly audioQueue: Queue,
  ) {}

  /**
   * Let's imagine we would like to convert .wav file into .mp3
   */
  @Post('convert')
  async convert() {
    await this.audioQueue.add('convert', {
      file: 'sample.wav',
      id: 1,
    });
  }
}
