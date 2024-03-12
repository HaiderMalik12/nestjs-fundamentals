import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Processor('audio-queue')
export class AudioProcessor {
  constructor(private eventEmitter: EventEmitter2) {}
  private logger = new Logger(AudioProcessor.name);

  @Process('convert')
  handleConvert(job: Job) {
    this.logger.debug('start converting wav file to mp3');
    this.logger.debug(job.data);
    this.logger.debug('file converted successfully');
    this.eventEmitter.emit('audio.converted', job.data);
  }
}
