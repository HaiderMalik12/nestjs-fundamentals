import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { AudioConvertedEvent } from './events/audio-converted-event';

@Injectable()
export class AudioConvertedListener {
  @OnEvent('audio.converted')
  handleAudioConvertedEvent(event: AudioConvertedEvent) {
    console.log(event);
    console.log(
      'Notification has sent to user that file is converted successfully',
    );
  }
}
